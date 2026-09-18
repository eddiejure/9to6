export const site = {
	name: '9to6',
	url: 'https://9to6.de',
	phoneDisplay: '0175 404 5558',
	phoneHref: 'tel:+491754045558',
	email: 'info@9to6.de',
	address: {
		street: 'Rhönstraße 95',
		zip: '63571',
		city: 'Gelnhausen',
		region: 'Frankfurt / Rhein-Main',
	},
	person: {
		legal: 'Edvinas Jurevicius',
		public: 'Eddie J.',
		role: 'Webdesign und Webentwicklung',
	},
	social: {
		linkedin: 'https://www.linkedin.com/in/eddiejure',
	},
} as const;

export const nav = [
	{
		href: '/leistungen/',
		label: 'Leistungen',
		children: [
			{ href: '/leistungen/webdesign/', label: 'Webdesign' },
			{ href: '/leistungen/webentwicklung/', label: 'Webentwicklung' },
		],
	},
	{ href: '/referenzen/', label: 'Referenzen' },
	{ href: '/blog/', label: 'Blog' },
	{ href: '/kontakt/', label: 'Kontakt' },
] as const;

export const services = [
	{
		href: '/leistungen/webdesign/',
		title: 'Webdesign',
		teaser: 'Klar, eigenständig, auf Anfragen ausgelegt.',
	},
	{
		href: '/leistungen/webentwicklung/',
		title: 'Webentwicklung',
		teaser: 'Schnell, wartbar, gebaut für Conversion und Wachstum.',
	},
	{
		href: '/kontakt/',
		title: 'Relaunch',
		teaser: 'Alte Seiten ablösen, Inhalte retten, messbar mehr Anfragen.',
	},
] as const;

export type CaseStudy = {
	slug: string;
	name: string;
	url: string;
	urlLabel: string;
	place: string;
	stack: string;
	role: string;
	image: string;
	imageAlt: string;
	summary: string;
	points: string[];
	founder?: boolean;
};

export const cases: CaseStudy[] = [
	{
		slug: 'holzbau-oberlerchner',
		name: 'Holzbau Oberlerchner',
		url: 'https://oberlerchner.de',
		urlLabel: 'oberlerchner.de',
		place: 'Gelnhausen, Main-Kinzig-Kreis',
		stack: 'Lokale Sichtbarkeit, schnelle Ladezeit',
		role: 'Website für Zimmerei und Holzbau',
		image: '/images/ref-oberlerchner.png',
		imageAlt: 'Startseite von Holzbau Oberlerchner, Zimmerei in Gelnhausen',
		summary:
			'Auftritt für den Holzbaubetrieb in Gelnhausen: Dachbau, konstruktiver Holzbau, Terrassen und Carports. Klare Leistungsseiten, echte Projekte aus der Region, Kontakt ohne Umwege.',
		points: [
			'Lokales Handwerk sichtbar machen, ohne Show-Effekt',
			'Leistungen, Ablauf und Projekte so sortiert, dass Anfragen folgen',
			'Schnelle Seiten, die auf dem Smartphone auf der Baustelle lesbar bleiben',
		],
	},
	{
		slug: 'de-elixier',
		name: 'D&E Elixier',
		url: 'https://www.de-elixier.de',
		urlLabel: 'de-elixier.de',
		place: 'Frankfurt-Sachsenhausen',
		stack: 'Webdesign und Relaunch',
		role: 'Website für Kosmetikinstitut',
		image: '/images/ref-elixier.png',
		imageAlt: 'Startseite von D&E Elixier, Kosmetikinstitut in Frankfurt',
		summary:
			'Website für das Kosmetikinstitut in Frankfurt-Sachsenhausen. Behandlungen, Terminweg und Standort so erzählt, dass aus Interesse ein Besuch wird.',
		points: [
			'Ruhiges, pflegendes Design statt Stock-Look',
			'Leistungen und Buchung in wenigen Schritten erreichbar',
			'Lokal auffindbar für Gesichtsbehandlungen und Fußpflege in Frankfurt',
		],
	},
	{
		slug: 'sim-do',
		name: 'sim.do',
		url: 'https://sim.do',
		urlLabel: 'sim.do',
		place: 'International, aus Deutschland',
		stack: 'Produktmarke, Web und Conversion',
		role: 'eSIM für Reisen in 200+ Destinationen',
		image: '/images/ref-simdo.png',
		imageAlt: 'Startseite von sim.do mit eSIM-Datentarifen für Reisen',
		summary:
			'sim.do ist die eSIM-Marke von Edvinas Jurevicius (Gründer seit Oktober 2025). Günstige Datentarife, Sofortaktivierung, ohne Plastikkarte. Design, Web und Marke aus einer Hand.',
		points: [
			'Produktseite, die Tarife suchbar und kaufbar macht',
			'Klare Aktivierungsstrecke für Reisende',
			'Marke und Website zusammen gedacht, nicht nachträglich verkleidet',
		],
		founder: true,
	},
	{
		slug: 'simtasy',
		name: 'Simtasy',
		url: 'https://simtasy.com',
		urlLabel: 'simtasy.com',
		place: 'B2B, weltweit',
		stack: 'B2B-Produktplattform',
		role: 'Wholesale-Plattform für eSIM-Reseller',
		image: '/images/ref-simtasy.png',
		imageAlt: 'Startseite von Simtasy, B2B-Plattform für eSIM-Wholesale',
		summary:
			'B2B-Plattform für Reisebüros, Entwickler und eSIM-Marken: Katalog, Preise, Wallet, API und White-Label-Shops. Ein Produktauftritt, der Technik und Vertrieb gleichermaßen ernst nimmt.',
		points: [
			'Produktstory für Wholesale, API und White-Label',
			'Dashboard-Logik in der Kommunikation sichtbar, ohne das Interface zu kopieren',
			'Englischsprachiger B2B-Ton, technische Glaubwürdigkeit',
		],
		founder: true,
	},
];

export const faqs = [
	{
		group: 'Allgemein',
		items: [
			{
				q: 'Mit welcher Art von Unternehmen arbeitet ihr zusammen?',
				a: 'Mit kleinen Betrieben ebenso wie mit Marken, die schon digital unterwegs sind. Entscheidend ist, dass die Website ein echtes Arbeitsmittel werden soll: Anfragen, Buchungen, Produktverkauf. Wir klären zuerst Ziel und Inhalt, dann bauen wir.',
			},
			{
				q: 'Welche Leistungen bietet 9to6 an?',
				a: 'Webdesign und Webentwicklung. Konzeption, Gestaltung, technische Umsetzung, Ladezeit, Formulare und die Pflege danach. Suchmaschinen und Kampagnen denken wir mit, aber der Kern ist eine Website, die Kunden bringt.',
			},
			{
				q: 'Wie funktioniert euer Preismodell?',
				a: 'Jedes Projekt ist anders, deshalb gibt es keine Standardpreisliste. Du bekommst ein Angebot mit Umfang, Meilensteinen und Zahlungsbedingungen, bevor wir starten. Für einen ersten Eindruck reicht ein Gespräch oder das Formular.',
			},
			{
				q: 'Welche Vorteile hat 9to6 gegenüber einer reinen Marketingagentur?',
				a: 'Wir bauen die Seite, die hinterher im Netz steht. Design, Code und Inhalt sitzen in einem Prozess. Kein Theme von der Stange, keine Kampagne auf einer langsamen Grundlage.',
			},
		],
	},
	{
		group: 'Webdesign',
		items: [
			{
				q: 'Woher weiß ich, ob ich für Webdesign von 9to6 geeignet bin?',
				a: 'Wenn du eine Website willst, die nach deinem Betrieb aussieht und die Leute zum Handeln bringt. Wir arbeiten mit dir an Struktur, Text und Erscheinungsbild, nicht an einem fertigen Baukasten.',
			},
			{
				q: 'Wie berechnet 9to6 Webdesign?',
				a: 'Nach Aufwand und Ziel. Vor dem Kick-off gibt es ein Angebot mit Designrahmen, Seitenumfang und Terminen. Änderungen nach Freigabe rechnen wir transparent nach.',
			},
			{
				q: 'Was macht euer Webdesign anders?',
				a: 'Die Seite ist der erste Eindruck. Wir klären zuerst, wen du überzeugen willst und was danach passieren soll. Typografie, Farbe und Raster folgen daraus, nicht aus einer Moodboard-Mode.',
			},
		],
	},
	{
		group: 'Webentwicklung',
		items: [
			{
				q: 'Welche Technik setzt ihr ein?',
				a: 'Moderne, schlanke Webtechnik, die im Hintergrund bleibt. Für dich zählt das Ergebnis: kurze Ladezeiten, saubere Formulare, Seiten, die in der Suche bestehen und Anfragen zustellen. Den Stack wählen wir nach Aufgabe, nicht nach Trend.',
			},
			{
				q: 'Baut ihr noch mit WordPress?',
				a: 'Nicht als Standard. Viele Relaunches kommen von WordPress. Ziel ist eine schlankere, wartbare Seite mit einem Editor-Workflow, der zu dir passt, und mit Tempo, das Kunden nicht vertreibt.',
			},
			{
				q: 'Übernehmt ihr Hosting?',
				a: 'Ja, typischerweise über Cloudflare Pages. Build, Preview, HTTPS und ein weltweites CDN gehören dazu. Zugänge und Kosten legen wir im Angebot fest.',
			},
		],
	},
];
