varying vec3 vNormal;
varying vec3 vWorld;
varying vec2 vLocal;

void main() {
	vec3 n = normalize(vNormal);
	float light = max(dot(n, normalize(vec3(-0.35, 0.7, 0.6))), 0.0);
	vec2 uv = vec2(vLocal.x * 0.5 + 0.5, 0.5 - vLocal.y * 0.5);
	vec2 g0 = vec2(0.198, 0.095);
	vec2 g1 = vec2(0.905, 0.802);
	vec2 gd = g1 - g0;
	float t = clamp(dot(uv - g0, gd) / dot(gd, gd), 0.0, 1.0);
	vec3 ink = vec3(0.019607843, 0.0, 0.490196078);
	vec3 purple = vec3(0.588235294, 0.266666667, 0.823529412);
	vec3 color = mix(ink, purple, t);
	color *= 0.9 + light * 0.16;
	gl_FragColor = vec4(color, 1.0);
}
