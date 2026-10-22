import type { APIRoute } from 'astro';
import { canonicalUrl, sitemapEntries } from '../lib/urls';

export const GET: APIRoute = () => {
	const body = sitemapEntries()
		.map(
			(entry) => `  <url>
    <loc>${canonicalUrl(entry.path)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
  </url>`,
		)
		.join('\n');

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`,
		{
			headers: {
				'Content-Type': 'application/xml; charset=utf-8',
			},
		},
	);
};
