import { rm } from 'node:fs/promises';

// Der Cloudflare-Adapter schreibt eine Worker-Config in den Pages-Output.
// Pages liest sie nach dem Build und bricht ab, weil sie "assets" enthält.
await rm('dist/client/wrangler.json', { force: true });
await rm('.wrangler/deploy/config.json', { force: true });
