// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// Cloudflare Pages: Adapter baut das Projekt so, dass es im Pages-Dashboard
// (oder via wrangler) deploybar ist. Termine laufen über Cal.com, nicht über
// eine eigene Worker-Logik.
export default defineConfig({
	site: 'https://9to6.de',
	trailingSlash: 'always',
	output: 'static',
	adapter: cloudflare({
		imageService: 'compile',
		prerenderEnvironment: 'node',
	}),
	compressHTML: true,
	devToolbar: { enabled: false },
	server: {
		host: true,
		port: 4347,
	},
	vite: {
		server: {
			host: true,
		},
	},
});
