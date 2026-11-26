import vertexShader from './blob.vert.glsl?raw';
import fragmentShader from './blob.frag.glsl?raw';

type BlobState = {
	el: HTMLElement;
	gl: WebGLRenderingContext;
	program: WebGLProgram;
	time: WebGLUniformLocation | null;
	distort: WebGLUniformLocation | null;
	hover: WebGLUniformLocation | null;
	mouse: WebGLUniformLocation | null;
	projection: WebGLUniformLocation | null;
	indexCount: number;
	uTime: number;
	uDistort: number;
	uHover: number;
	uMouseX: number;
	uMouseY: number;
	targetDistort: number;
	targetHover: number;
	targetMouseX: number;
	targetMouseY: number;
	visible: boolean;
};

const blobs: BlobState[] = [];
let started = false;

const model = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0.12, 0.1, 0, 1]);
const view = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -5.85, 1]);
const normal = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);

function perspective(aspect: number) {
	const f = 1 / Math.tan((35 * Math.PI) / 360);
	const near = 0.1;
	const far = 10;
	const nf = 1 / (near - far);
	return new Float32Array([
		f / aspect,
		0,
		0,
		0,
		0,
		f,
		0,
		0,
		0,
		0,
		(far + near) * nf,
		-1,
		0,
		0,
		2 * far * near * nf,
		0,
	]);
}

function circleGeometry() {
	const segments = 192;
	const thetaStart = -Math.PI / 2;
	const thetaLength = Math.PI * 1.5;
	const positions = [0, 0, 0];
	const normals = [0, 0, 1];
	for (let s = 0; s <= segments; s++) {
		const segment = thetaStart + (s / segments) * thetaLength;
		positions.push(Math.cos(segment), Math.sin(segment), 0);
		normals.push(0, 0, 1);
	}
	const indices: number[] = [];
	for (let i = 1; i <= segments; i++) indices.push(i, i + 1, 0);
	return {
		positions: new Float32Array(positions),
		normals: new Float32Array(normals),
		indices: new Uint16Array(indices),
	};
}

function compile(gl: WebGLRenderingContext, type: number, source: string) {
	const shader = gl.createShader(type);
	if (!shader) return null;
	gl.shaderSource(shader, source);
	gl.compileShader(shader);
	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		gl.deleteShader(shader);
		return null;
	}
	return shader;
}

function createBlob(el: HTMLElement): BlobState | null {
	const canvas = el.querySelector<HTMLCanvasElement>('.blob-canvas');
	if (!canvas) return null;
	const gl = canvas.getContext('webgl', { alpha: true, antialias: true, powerPreference: 'low-power' });
	if (!gl) return null;

	const vs = compile(gl, gl.VERTEX_SHADER, vertexShader);
	const fs = compile(gl, gl.FRAGMENT_SHADER, fragmentShader);
	if (!vs || !fs) return null;
	const program = gl.createProgram();
	if (!program) return null;
	gl.attachShader(program, vs);
	gl.attachShader(program, fs);
	gl.bindAttribLocation(program, 0, 'position');
	gl.bindAttribLocation(program, 1, 'normal');
	gl.linkProgram(program);
	if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;
	el.classList.add('is-ready');

	const geo = circleGeometry();
	const positionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, geo.positions, gl.STATIC_DRAW);
	gl.enableVertexAttribArray(0);
	gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);

	const normalBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, geo.normals, gl.STATIC_DRAW);
	gl.enableVertexAttribArray(1);
	gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 0, 0);

	const indexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, geo.indices, gl.STATIC_DRAW);

	gl.useProgram(program);
	gl.uniformMatrix4fv(gl.getUniformLocation(program, 'modelMatrix'), false, model);
	gl.uniformMatrix4fv(gl.getUniformLocation(program, 'viewMatrix'), false, view);
	gl.uniformMatrix3fv(gl.getUniformLocation(program, 'normalMatrix'), false, normal);
	gl.enable(gl.BLEND);
	gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

	return {
		el,
		gl,
		program,
		time: gl.getUniformLocation(program, 'uTime'),
		distort: gl.getUniformLocation(program, 'uDistort'),
		hover: gl.getUniformLocation(program, 'uHover'),
		mouse: gl.getUniformLocation(program, 'uMouse'),
		projection: gl.getUniformLocation(program, 'projectionMatrix'),
		indexCount: geo.indices.length,
		uTime: 0,
		uDistort: 0.08,
		uHover: 0,
		uMouseX: 0,
		uMouseY: 0,
		targetDistort: 0.08,
		targetHover: 0,
		targetMouseX: 0,
		targetMouseY: 0,
		visible: true,
	};
}

function resize(blob: BlobState) {
	const canvas = blob.el.querySelector<HTMLCanvasElement>('.blob-canvas');
	if (!canvas) return;
	const rect = canvas.getBoundingClientRect();
	const dpr = Math.min(window.devicePixelRatio || 1, 1.6);
	const w = Math.max(1, Math.round(rect.width * dpr));
	const h = Math.max(1, Math.round(rect.height * dpr));
	if (canvas.width !== w || canvas.height !== h) {
		canvas.width = w;
		canvas.height = h;
	}
	blob.gl.viewport(0, 0, w, h);
	blob.gl.useProgram(blob.program);
	blob.gl.uniformMatrix4fv(blob.projection, false, perspective(w / h));
}

function tick(time: number) {
	requestAnimationFrame(tick);
	const t = time * 0.001;
	for (const blob of blobs) {
		if (!blob.visible) continue;
		blob.uTime = t;
		blob.uDistort += (blob.targetDistort - blob.uDistort) * 0.05;
		blob.uHover += (blob.targetHover - blob.uHover) * 0.05;
		blob.uMouseX += (blob.targetMouseX - blob.uMouseX) * 0.07;
		blob.uMouseY += (blob.targetMouseY - blob.uMouseY) * 0.07;
		const gl = blob.gl;
		gl.useProgram(blob.program);
		gl.clearColor(0, 0, 0, 0);
		gl.clear(gl.COLOR_BUFFER_BIT);
		gl.uniform1f(blob.time, blob.uTime);
		gl.uniform1f(blob.distort, blob.uDistort);
		gl.uniform1f(blob.hover, blob.uHover);
		gl.uniform2f(blob.mouse, blob.uMouseX, blob.uMouseY);
		gl.drawElements(gl.TRIANGLES, blob.indexCount, gl.UNSIGNED_SHORT, 0);
	}
}

export function initBlobs() {
	if (started || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
	started = true;

	document.querySelectorAll<HTMLElement>('[data-blob]').forEach((el) => {
		const blob = createBlob(el);
		if (!blob) return;
		blobs.push(blob);
		resize(blob);

		el.addEventListener('pointerenter', () => {
			blob.targetHover = 1;
			blob.targetDistort = 1;
		});
		el.addEventListener('pointermove', (event) => {
			const rect = el.getBoundingClientRect();
			blob.targetMouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
			blob.targetMouseY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
			blob.targetHover = 1;
			blob.targetDistort = 1;
		});
		el.addEventListener('pointerleave', () => {
			blob.targetMouseX = 0;
			blob.targetMouseY = 0;
			blob.targetHover = 0;
			blob.targetDistort = 0.08;
		});

		const io = new IntersectionObserver(
			([entry]) => {
				blob.visible = entry.isIntersecting;
			},
			{ rootMargin: '80px' },
		);
		io.observe(el);
		const ro = new ResizeObserver(() => resize(blob));
		ro.observe(el);
	});

	if (blobs.length) requestAnimationFrame(tick);
}
