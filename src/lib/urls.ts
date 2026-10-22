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

export function sitemapEntries(): SitemapEntry[] {
	const lastmod = posts.reduce((latest, post) => (post.date > latest ? post.date : latest), '2026-09-18');
	const paths = [
		'/',
		'/leistungen/',
		'/leistungen/webdesign/',
		'/leistungen/webentwicklung/',
		'/referenzen/',
		...cases.map((item) => `/referenzen/${item.slug}/`),
		'/blog/',
		...posts.map((post) => `/blog/${post.slug}/`),
		'/kontakt/',
		'/impressum/',
		'/datenschutz/',
	];

	return paths.map((path) => {
		const post = posts.find((item) => path === `/blog/${item.slug}/`);
		return { path, lastmod: post?.date ?? lastmod };
	});
}
