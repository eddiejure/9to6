/** Inline-Links im Content: `[Text](/pfad/)`. Restlicher Text wird escaped. */
export function renderInline(text: string): string {
	const escaped = text
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');
	return escaped.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label: string, href: string) => {
		const safeHref = href.replace(/"/g, '');
		return `<a href="${safeHref}">${label}</a>`;
	});
}

/** Sichtbarer Text ohne Markdown-Klammern, für JSON-LD-FAQ. */
export function plainText(text: string): string {
	return text.replace(/\[([^\]]+)\]\([^)\s]+\)/g, '$1');
}
