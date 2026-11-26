/** Inline-Markup im Content: `[Text](/pfad/)` und `**fett**`. Restlicher Text wird escaped. */
export function renderInline(text: string): string {
	const escaped = text
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');
	return escaped
		.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
		.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label: string, href: string) => {
			const safeHref = href.replace(/"/g, '');
			const external = /^https?:\/\//.test(safeHref);
			return external
				? `<a href="${safeHref}" rel="noopener" target="_blank">${label}</a>`
				: `<a href="${safeHref}">${label}</a>`;
		});
}

/** Sichtbarer Text ohne Markup, für JSON-LD. */
export function plainText(text: string): string {
	return text.replace(/\[([^\]]+)\]\([^)\s]+\)/g, '$1').replace(/\*\*([^*]+)\*\*/g, '$1');
}
