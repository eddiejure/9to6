import { posts } from '../data/blog';
import { cases, site } from '../data/site';

const origin = site.url.replace(/\/+$/, '');

export function normalizePath(path: string): string {
	const url = new URL(path, `${origin}/`);
	let pathname = url.pathname || '/';
	pathname = pathname.replace(/\/{2,}/g, '/');
	const last = pathname.split('/').filter(Boolean).pop() ?? '';
	const isFile = last.includes('.');
	if (!isFile && !pathname.endsWith('/')) pathname += '/';
	return pathname;
}

export function canonicalUrl(path = '/'): string {
	return `${origin}${normalizePath(path)}`;
}

export type SitemapEntry = {
	path: string;
	lastmod: string;
};

const contentUpdated = '2026-11-26';

export function sitemapEntries(): SitemapEntry[] {
	const staticPages: SitemapEntry[] = [
		{ path: '/', lastmod: contentUpdated },
		{ path: '/leistungen/', lastmod: contentUpdated },
		{ path: '/leistungen/webdesign/', lastmod: contentUpdated },
		{ path: '/leistungen/webentwicklung/', lastmod: contentUpdated },
		{ path: '/webdesign-gelnhausen/', lastmod: contentUpdated },
		{ path: '/preise/', lastmod: contentUpdated },
		{ path: '/referenzen/', lastmod: contentUpdated },
		...cases.map((item) => ({ path: `/referenzen/${item.slug}/`, lastmod: contentUpdated })),
		{ path: '/blog/', lastmod: contentUpdated },
		...posts.map((post) => ({ path: `/blog/${post.slug}/`, lastmod: post.dateModified })),
		{ path: '/kontakt/', lastmod: contentUpdated },
		{ path: '/impressum/', lastmod: contentUpdated },
		{ path: '/datenschutz/', lastmod: contentUpdated },
	];
	return staticPages;
}
