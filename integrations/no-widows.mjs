// Verhindert Hurenkinder: verbindet die letzten beiden Wörter von Textblöcken mit einem
// geschützten Leerzeichen, sofern beide zusammen kurz genug sind. Läuft nach dem Build
// über das fertige HTML, damit Inhalte im Quelltext unverändert lesbar bleiben.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const BLOCK = 'p|li|h1|h2|h3|h4|summary|dd|figcaption|blockquote';
const ELEMENT = new RegExp(
	`<(${BLOCK})(\\s[^>]*)?>((?:(?!<\\/?(?:${BLOCK}|div|ul|ol|section|article|script|style)\\b)[\\s\\S])*?)<\\/\\1>`,
	'g',
);
// Große Schrift verträgt weniger zusammengeklebte Zeichen, sonst läuft die Zeile über
const LIMITS = { h1: 12, h2: 14, h3: 18, dd: 0, li: 20, summary: 18, figcaption: 18 };
const DEFAULT_LIMIT = 24;
const HYPHEN_LIMIT = 18;

function glueLastWords(inner, tag) {
	const limit = LIMITS[tag] ?? DEFAULT_LIMIT;
	// Letztes Leerzeichen außerhalb von Tags finden
	let depth = 0;
	for (let i = inner.length - 1; i >= 0; i--) {
		const ch = inner[i];
		if (ch === '>') depth++;
		else if (ch === '<') depth--;
		else if (ch === ' ' && depth === 0) {
			const after = inner.slice(i + 1).replace(/<[^>]+>/g, '');
			const before = inner.slice(0, i).replace(/<[^>]+>/g, '').split(/\s/).pop() ?? '';
			if (!after.trim() || !before) return inner;
			if (after.length + before.length + 1 > limit) return inner;
			const tail = inner.slice(i + 1);
			// Bindestrich-Wörter brechen sonst trotzdem am Bindestrich um: als Einheit schützen
			if (after.includes('-') && !tail.includes('<') && !LIMITS[tag] && after.length + before.length + 1 <= HYPHEN_LIMIT) {
				const start = Math.max(inner.lastIndexOf(' ', i - 1), inner.lastIndexOf('>', i - 1)) + 1;
				const word = inner.slice(start, i);
				if (!word.includes('<')) return `${inner.slice(0, start)}<span class="nw">${word}&nbsp;${tail}</span>`;
			}
			return `${inner.slice(0, i)}&nbsp;${tail}`;
		}
	}
	return inner;
}

async function* htmlFiles(dir) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const path = join(dir, entry.name);
		if (entry.isDirectory()) yield* htmlFiles(path);
		else if (entry.name.endsWith('.html')) yield path;
	}
}

export default function noWidows() {
	return {
		name: 'no-widows',
		hooks: {
			'astro:build:done': async ({ dir, logger }) => {
				let count = 0;
				for await (const file of htmlFiles(fileURLToPath(dir))) {
					const html = await readFile(file, 'utf8');
					const bodyStart = html.indexOf('<body');
					if (bodyStart < 0) continue;
					const head = html.slice(0, bodyStart);
					const body = html.slice(bodyStart).replace(ELEMENT, (match, tag, attrs = '', inner) => {
						const glued = glueLastWords(inner, tag);
						return glued === inner ? match : `<${tag}${attrs}>${glued}</${tag}>`;
					});
					await writeFile(file, head + body);
					count++;
				}
				logger.info(`Textumbrüche in ${count} Seiten geschützt`);
			},
		},
	};
}
