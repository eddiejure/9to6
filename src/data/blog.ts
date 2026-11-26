export type BlogSection = {
	heading: string;
	paragraphs: string[];
	list?: string[];
};

export type BlogPost = {
	slug: string;
	title: string;
	description: string;
	date: string;
	dateLabel: string;
	dateModified: string;
	dateModifiedLabel: string;
	hero: string;
	summary: string[];
	sections: BlogSection[];
	readingTime: number;
};

type PostInput = Omit<BlogPost, 'readingTime'>;

const input: PostInput[] = [
	{
		slug: 'warum-deine-website-keine-kunden-bringt',
		title: 'Warum deine Website keine Kunden bringt',
		description:
			'Die Seite ist online, aber das Telefon bleibt still? Die fünf häufigsten Gründe, warum Websites keine Anfragen bringen – und wie du sie behebst.',
		date: '2026-09-18',
		dateLabel: '18. September 2026',
		dateModified: '2026-11-26',
		dateModifiedLabel: '26. November 2026',
		hero: 'Eine Website, die fertig aussieht, ist noch lange keine, die verkauft. Meist liegt es nicht am Design, sondern an fünf vermeidbaren Fehlern.',
		summary: [
			'Besucher entscheiden in wenigen Sekunden, ob sie bleiben. Angebot, Zielgruppe und nächster Schritt gehören deshalb in den ersten Bildschirm.',
			'Die häufigsten Bremsen: Firmengeschichte statt Angebot, fehlender Ortsbezug, unklare Buttons, lange Formulare und langsame Ladezeiten.',
			'Jede Leistung, nach der Kunden suchen, braucht eine eigene, klar benannte Seite.',
		],
		sections: [
			{
				heading: 'Online sein reicht nicht',
				paragraphs: [
					'Viele Betriebe haben eine Website mit Foto, Leistungsliste und Impressum. Sie wirkt fertig, aber Anfragen kommen kaum. Das liegt selten an fehlenden Effekten. Meist hat die Seite nie entschieden, wen sie überzeugen will und was dieser Mensch als Nächstes tun soll.',
					'Wer über Google kommt, hat eine konkrete Frage: Wer baut mir einen Carport? Wo bekomme ich diese Woche einen Termin? Findet die Person die Antwort nicht sofort, klickt sie zurück zum nächsten Treffer. Findet sie die Antwort, aber keinen einfachen Weg zur Anfrage, ebenfalls.',
				],
			},
			{
				heading: 'Die fünf häufigsten Gründe',
				paragraphs: ['In fast jeder Website, die wir vor einem Relaunch analysieren, finden wir mindestens drei dieser Punkte:'],
				list: [
					'**Die Startseite erzählt die Firmengeschichte**, bevor sie sagt, was du anbietest und für wen.',
					'**Der Ort fehlt.** Leistung und Einzugsgebiet stehen nicht in der Überschrift, sondern höchstens im Footer.',
					'**Der nächste Schritt ist unklar.** Buttons heißen „Mehr erfahren“ und führen auf weitere Seiten statt zur Anfrage.',
					'**Das Formular schreckt ab.** Acht Pflichtfelder vor dem ersten Satz sind eine Hürde, keine Einladung.',
					'**Die Seite ist zu langsam.** Auf dem Smartphone springen Besucher ab, bevor der Inhalt geladen ist. Mehr dazu unter [Ladezeit und Core Web Vitals](/blog/core-web-vitals-und-google-ranking/).',
				],
			},
			{
				heading: 'Beispiel: Holzbau Oberlerchner in Gelnhausen',
				paragraphs: [
					'Die Zimmerei Oberlerchner hatte vor dem Projekt gar keine Website. Fragte ein Interessent nach Referenzen, gab es nur Fotos auf dem Handy. Wir haben den ganzen Auftritt aufgebaut: Logo, Visitenkarten, Baubanner und eine Website, auf der Dachbau, konstruktiver Holzbau, Terrassen und Carports klar gegliedert sind.',
					'Leistungen und Einzugsgebiet stehen im ersten Bildschirm, Referenzen zeigen echte Projekte, die Anfrage ist von jeder Seite aus erreichbar. Heute kommen Aufträge über die Website. Das ganze Projekt: [Holzbau Oberlerchner](/referenzen/holzbau-oberlerchner/).',
				],
			},
			{
				heading: 'Beispiel: D&E Elixier in Frankfurt-Sachsenhausen',
				paragraphs: [
					'Ein Kosmetikinstitut verkauft Vertrauen und einen Termin. Beim Redesign von D&E Elixier stand deshalb im Mittelpunkt, die Atmosphäre des Instituts zu transportieren und gleichzeitig den Weg zur Buchung zu verkürzen.',
					'Behandlungen sind klar gegliedert, Standort und Terminbuchung stehen auf jeder Seite griffbereit. Das Projekt im Detail: [D&E Elixier](/referenzen/de-elixier/).',
				],
			},
			{
				heading: 'So machst du deine Website zur Anfragequelle',
				paragraphs: ['Keiner dieser Punkte braucht einen neuen Slogan. Sie brauchen Reihenfolge, Tempo und einen klaren nächsten Schritt:'],
				list: [
					'Schreib in die erste Überschrift, was du anbietest, für wen und wo.',
					'Gib jeder wichtigen Leistung eine eigene Seite mit eigener Überschrift.',
					'Biete einen eindeutigen nächsten Schritt an: Termin, Anruf oder kurze Nachricht.',
					'Halte Formulare kurz und teste sie selbst auf dem Smartphone.',
					'Zeig Beweise: Referenzen, Fotos echter Arbeiten, Bewertungen.',
				],
			},
			{
				heading: 'Fazit',
				paragraphs: [
					'Eine Website bringt Kunden, wenn sie in Sekunden klar macht, was du anbietest, und den Weg zur Anfrage so kurz wie möglich hält. Wie wir das gestalten, steht unter [Webdesign](/leistungen/webdesign/). Wie Tempo und Technik dazukommen, unter [Webentwicklung](/leistungen/webentwicklung/).',
					'Du willst wissen, woran es bei deiner Seite hakt? Im [kostenlosen Erstgespräch](/kontakt/#kalender) schauen wir gemeinsam drauf.',
				],
			},
		],
	},
	{
		slug: 'core-web-vitals-und-google-ranking',
		title: 'Ladezeit, Core Web Vitals und Google-Ranking',
		description:
			'Was die Core Web Vitals LCP, INP und CLS bedeuten, welche Grenzwerte Google ansetzt und wie du deine Website für lokale Suchen schneller machst.',
		date: '2026-09-18',
		dateLabel: '18. September 2026',
		dateModified: '2026-11-26',
		dateModifiedLabel: '26. November 2026',
		hero: 'Eine langsame Seite verliert Besucher, bevor sie dein Angebot sehen. Was hinter den Core Web Vitals steckt und was du konkret tun kannst.',
		summary: [
			'Core Web Vitals sind drei Messwerte, mit denen Google die Nutzererfahrung bewertet: LCP für das Laden, INP für die Reaktion und CLS für die visuelle Stabilität.',
			'Gute Werte: LCP bis 2,5 Sekunden, INP bis 200 Millisekunden, CLS bis 0,1 – gemessen an echten Besuchern.',
			'Die größten Bremsen sind zu große Bilder, schwere Themes, Slider und zu viele Skripte von Drittanbietern.',
		],
		sections: [
			{
				heading: 'Die drei Core Web Vitals einfach erklärt',
				paragraphs: [
					'Google misst mit den Core Web Vitals, wie sich eine Seite für echte Besucher anfühlt. Die Werte stammen aus Daten des Chrome-Browsers und sind in der Google Search Console einsehbar.',
				],
				list: [
					'**LCP (Largest Contentful Paint):** Wie schnell erscheint der Hauptinhalt? Gut sind bis zu 2,5 Sekunden.',
					'**INP (Interaction to Next Paint):** Wie schnell reagiert die Seite auf Klicks und Eingaben? Gut sind bis zu 200 Millisekunden.',
					'**CLS (Cumulative Layout Shift):** Springt das Layout beim Laden, sodass man danebentippt? Gut ist ein Wert bis 0,1.',
				],
			},
			{
				heading: 'Warum Ladezeit bei lokalen Suchen besonders zählt',
				paragraphs: [
					'Lokale Suchen sind ungeduldig. Wer „Zimmerei Gelnhausen“ oder „Kosmetik Sachsenhausen“ sucht, vergleicht drei Treffer in einer Minute – meist auf dem Smartphone, oft unterwegs mit schwankendem Netz. Die Seite, die zuerst eine klare Antwort zeigt, gewinnt die Anfrage.',
					'Für Google sind die Core Web Vitals ein Rankingfaktor unter vielen. Inhalt und Relevanz bleiben wichtiger. Aber bei ähnlich guten Seiten kann Tempo den Ausschlag geben – und für deine Besucher ist eine schnelle Seite immer besser.',
				],
			},
			{
				heading: 'Was Websites langsam macht',
				paragraphs: ['Die üblichen Verdächtigen sind fast immer dieselben:'],
				list: [
					'**Zu große Bilder:** Fotos mit mehreren Megabyte, obwohl sie am Handy nur wenige hundert Pixel breit angezeigt werden.',
					'**Schwere Themes und Baukästen:** Sie laden Schriften, Slider, Animationen und Funktionen, die niemand nutzt.',
					'**Skripte von Drittanbietern:** Tracking, Chat-Widgets und Social-Media-Einbindungen, die vor dem eigentlichen Inhalt laden.',
					'**Fehlende Bildmaße:** Ohne feste Breite und Höhe verschiebt sich die Seite beim Laden – schlecht für CLS.',
				],
			},
			{
				heading: 'So wird deine Website schneller',
				paragraphs: [
					'Bilder in modernen Formaten wie AVIF und WebP und in passenden Größen ausliefern. Schriften selbst hosten und auf die nötigen Schnitte beschränken. Auf Slider und überflüssige Skripte verzichten. Die Seite über ein Netz ausliefern, das nah am Besucher steht.',
					'Genau so bauen wir Websites bei 9to6: schlanker Code statt schwerem Theme, optimierte Bilder und statisches Hosting über Cloudflare. Bei [Holzbau Oberlerchner](/referenzen/holzbau-oberlerchner/) war Tempo deshalb von Anfang an Teil des Konzepts. Mehr zur Technik unter [Webentwicklung](/leistungen/webentwicklung/).',
				],
			},
			{
				heading: 'Tempo allein verkauft nicht',
				paragraphs: [
					'Eine schnelle Seite mit unklarem Angebot bringt trotzdem keine Kunden. Tempo, klare Struktur und ein einfacher Weg zur Anfrage gehören zusammen. Warum das so ist, steht im Artikel [Warum deine Website keine Kunden bringt](/blog/warum-deine-website-keine-kunden-bringt/).',
					'Du willst wissen, wie schnell deine Seite wirklich ist? Im [kostenlosen Erstgespräch](/kontakt/#kalender) schauen wir uns die Werte gemeinsam an.',
				],
			},
		],
	},
	{
		slug: 'aus-besuchern-werden-anfragen',
		title: 'Aus Besuchern werden Anfragen: so geht’s',
		description:
			'Wie du mehr Anfragen über deine Website bekommst: klares Angebot im ersten Bildschirm, sichtbare Beweise und ein kurzer Weg zum Kontakt.',
		date: '2026-09-18',
		dateLabel: '18. September 2026',
		dateModified: '2026-11-26',
		dateModifiedLabel: '26. November 2026',
		hero: 'Besucher ohne Anfrage sind teure Dekoration. So führt deine Website Interessenten Schritt für Schritt zum Kontakt.',
		summary: [
			'Eine Anfrage entsteht, wenn drei Dinge zusammenkommen: ein verständliches Angebot, ein glaubwürdiger Beweis und ein kurzer nächster Schritt.',
			'Der erste Bildschirm entscheidet: Nutzen, Zielgruppe, Ort und Handlung gehören nach oben.',
			'Kurze Formulare mit wenigen, sinnvollen Feldern bringen mehr und bessere Anfragen als lange Pflichtformulare.',
		],
		sections: [
			{
				heading: 'Was eine Anfrage auslöst',
				paragraphs: [
					'Eine Anfrage ist eine konkrete Handlung: Jemand schreibt, ruft an oder bucht einen Termin. Dafür braucht es keine Tricks, sondern drei Dinge: ein Angebot, das man in einem Satz versteht, einen Beweis, dass du das kannst, und einen Weg zum Kontakt, der auf dem Smartphone genauso kurz ist wie am Desktop.',
				],
			},
			{
				heading: '1. Der erste Bildschirm entscheidet',
				paragraphs: [
					'Ganz oben gehören hin: was du anbietest, für wen, wo – und ein Button zum nächsten Schritt. Für einen Handwerksbetrieb ist das die Leistung plus das Einzugsgebiet. Für ein Studio die Behandlung plus der Standort. Ein „Herzlich willkommen auf unserer Homepage“ verschenkt die wertvollste Fläche der ganzen Website.',
					'Direkt darunter folgen die Leistungen, nach denen Kunden suchen, und Antworten auf typische Fragen: Ablauf, Einzugsgebiet, erster Schritt. Wie wir diesen Bereich gestalten, steht unter [Webdesign](/leistungen/webdesign/).',
				],
			},
			{
				heading: '2. Beweise vor dem Kontakt',
				paragraphs: [
					'Bevor jemand anfragt, will er sehen, dass du Vergleichbares schon gemacht hast. Echte Projekte mit Ort und Ergebnis wirken stärker als jede Behauptung. Bei 9to6 sind das zum Beispiel [Holzbau Oberlerchner](/referenzen/holzbau-oberlerchner/) in Gelnhausen und [D&E Elixier](/referenzen/de-elixier/) in Frankfurt.',
					'Platziere Referenzen deshalb nicht versteckt auf einer Unterseite, sondern dort, wo die Entscheidung fällt: auf der Startseite und direkt vor dem Kontaktformular.',
				],
			},
			{
				heading: '3. Ein kurzer Weg zum Kontakt',
				paragraphs: [
					'Biete zwei Wege an: einen schnellen (Termin buchen oder anrufen) und einen bequemen (kurze Nachricht). Frag im Formular nur, was du für eine gute Antwort wirklich brauchst – meist sind das Name, Kontakt, Vorhaben und ein grober Zeitrahmen.',
					'Teste dein Formular selbst auf dem Smartphone. Fehlermeldungen müssen verständlich sein, und nach dem Absenden sollte klar sein, was als Nächstes passiert.',
				],
			},
			{
				heading: '4. Den Ort klar benennen',
				paragraphs: [
					'Wer lokal arbeitet, sollte das auch sagen: in Überschriften, auf Leistungsseiten und in den Referenzen. So verstehen Besucher und Suchmaschinen gleichermaßen, wo du tätig bist. Wie wir das für unsere eigene Region lösen, siehst du unter [Webdesign in Gelnhausen](/webdesign-gelnhausen/).',
				],
			},
			{
				heading: 'Fazit',
				paragraphs: [
					'Mehr Anfragen entstehen nicht durch mehr Inhalte, sondern durch die richtige Reihenfolge: Angebot, Beweis, nächster Schritt. Mehr über typische Fehler liest du in [Warum deine Website keine Kunden bringt](/blog/warum-deine-website-keine-kunden-bringt/).',
					'Du willst deine Seite in eine Anfragequelle verwandeln? [Buch dir ein kostenloses Erstgespräch](/kontakt/#kalender) mit Eddie.',
				],
			},
		],
	},
];

const wordsIn = (text: string) => text.split(/\s+/).filter(Boolean).length;

export const posts: BlogPost[] = input.map((post) => {
	const words =
		wordsIn(post.hero) +
		post.summary.reduce((sum, item) => sum + wordsIn(item), 0) +
		post.sections.reduce(
			(sum, section) =>
				sum +
				wordsIn(section.heading) +
				section.paragraphs.reduce((acc, p) => acc + wordsIn(p), 0) +
				(section.list ?? []).reduce((acc, item) => acc + wordsIn(item), 0),
			0,
		);
	return { ...post, readingTime: Math.max(2, Math.ceil(words / 200)) };
});

export function getPost(slug: string) {
	return posts.find((post) => post.slug === slug);
}
