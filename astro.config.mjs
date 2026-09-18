// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// Cloudflare Pages: Adapter baut das Projekt so, dass es im Pages-Dashboard
// (oder via wrangler) deploybar ist. Das Kontaktformular geht an Web3Forms,
// nicht an eine eigene Cloudflare Worker-Logik.
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
