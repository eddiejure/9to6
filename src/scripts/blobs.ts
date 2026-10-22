import * as THREE from 'three';
import vertexShader from './blob.vert.glsl?raw';
import fragmentShader from './blob.frag.glsl?raw';

type BlobInstance = {
	el: HTMLElement;
	renderer: THREE.WebGLRenderer;
	scene: THREE.Scene;
	camera: THREE.PerspectiveCamera;
	mesh: THREE.Mesh;
	uniforms: {
		uTime: { value: number };
		uDistort: { value: number };
		uHover: { value: number };
		uMouse: { value: THREE.Vector2 };
	};
	targetDistort: number;
	targetHover: number;
	targetMouse: THREE.Vector2;
	visible: boolean;
};

const blobs: BlobInstance[] = [];
let started = false;

function sizeOf(el: HTMLElement) {
	const canvas = el.querySelector<HTMLCanvasElement>('.blob-canvas') ?? el;
	const rect = canvas.getBoundingClientRect();
	return {
		w: Math.max(1, Math.round(rect.width)),
		h: Math.max(1, Math.round(rect.height)),
	};
}

function createBlob(el: HTMLElement): BlobInstance | null {
	const canvas = el.querySelector<HTMLCanvasElement>('.blob-canvas');
	if (!canvas) return null;

	const { w, h } = sizeOf(el);
	const renderer = new THREE.WebGLRenderer({
		canvas,
		alpha: true,
		antialias: true,
		powerPreference: 'low-power',
	});
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
	renderer.setSize(w, h, false);
	renderer.setClearColor(0x000000, 0);

	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(35, w / h, 0.1, 10);
	camera.position.z = 5.85;

	const uniforms = {
		uTime: { value: 0 },
		uDistort: { value: 0.08 },
		uHover: { value: 0 },
		uMouse: { value: new THREE.Vector2(0, 0) },
	};

	const mesh = new THREE.Mesh(
		new THREE.CircleGeometry(1, 192, -Math.PI / 2, Math.PI * 1.5),
		new THREE.ShaderMaterial({
			uniforms,
			vertexShader,
			fragmentShader,
			side: THREE.DoubleSide,
		}),
	);
	mesh.position.set(0.12, 0.1, 0);
	scene.add(mesh);

	return {
		el,
		renderer,
		scene,
		camera,
		mesh,
		uniforms,
		targetDistort: 0.08,
		targetHover: 0,
		targetMouse: new THREE.Vector2(0, 0),
		visible: true,
	};
}

function resize(blob: BlobInstance) {
	const { w, h } = sizeOf(blob.el);
	blob.camera.aspect = w / h;
	blob.camera.updateProjectionMatrix();
	blob.renderer.setSize(w, h, false);
}

function tick(time: number) {
	requestAnimationFrame(tick);
	const t = time * 0.001;

	for (const blob of blobs) {
		if (!blob.visible) continue;
		blob.uniforms.uTime.value = t;
		blob.uniforms.uDistort.value += (blob.targetDistort - blob.uniforms.uDistort.value) * 0.05;
		blob.uniforms.uHover.value += (blob.targetHover - blob.uniforms.uHover.value) * 0.05;
		blob.uniforms.uMouse.value.lerp(blob.targetMouse, 0.07);
		blob.renderer.render(blob.scene, blob.camera);
	}
}

export function initBlobs() {
	if (started || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
	started = true;

	document.querySelectorAll<HTMLElement>('[data-blob]').forEach((el) => {
		const blob = createBlob(el);
		if (!blob) return;
		blobs.push(blob);

		el.addEventListener('pointerenter', () => {
			blob.targetHover = 1;
			blob.targetDistort = 1;
		});
		el.addEventListener('pointermove', (event) => {
			const rect = el.getBoundingClientRect();
			const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
			const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
			blob.targetMouse.set(x, y);
			blob.targetHover = 1;
			blob.targetDistort = 1;
		});
		el.addEventListener('pointerleave', () => {
			blob.targetMouse.set(0, 0);
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
