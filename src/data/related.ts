export type RelatedLink = { href: string; label: string };

export const related = {
	webdesign: [
		{ href: '/leistungen/webentwicklung/', label: 'Webentwicklung: schnelle, sichere Umsetzung' },
		{ href: '/webdesign-gelnhausen/', label: 'Webdesign in Gelnhausen und im Main-Kinzig-Kreis' },
		{ href: '/preise/', label: 'Preise und ROI-Rechner' },
		{ href: '/kontakt/', label: 'Kostenloses Erstgespräch buchen' },
	],
	webentwicklung: [
		{ href: '/leistungen/webdesign/', label: 'Webdesign: Struktur, Texte und Gestaltung' },
		{ href: '/leistungen/#relaunch', label: 'Relaunch ohne Ranking-Verlust' },
		{ href: '/blog/core-web-vitals-und-google-ranking/', label: 'Ratgeber: Ladezeit und Core Web Vitals' },
		{ href: '/preise/', label: 'Preise und ROI-Rechner' },
	],
} as const satisfies Record<string, RelatedLink[]>;

export const caseRelated: Record<string, RelatedLink[]> = {
	'holzbau-oberlerchner': [
		{ href: '/webdesign-gelnhausen/', label: 'Webdesign in Gelnhausen und im Main-Kinzig-Kreis' },
		{ href: '/leistungen/webdesign/', label: 'Webdesign: Marke und Website aus einer Linie' },
		{ href: '/blog/core-web-vitals-und-google-ranking/', label: 'Warum Ladezeit für lokale Betriebe zählt' },
	],
	'de-elixier': [
		{ href: '/leistungen/webdesign/', label: 'Webdesign für Studios, Praxen und Institute' },
		{ href: '/leistungen/#relaunch', label: 'Relaunch ohne Ranking-Verlust' },
		{ href: '/blog/aus-besuchern-werden-anfragen/', label: 'Wie aus Interesse ein Termin wird' },
	],
	'sim-do': [
		{ href: '/leistungen/webentwicklung/', label: 'Webentwicklung für Shops und Produkte' },
		{ href: '/referenzen/simtasy/', label: 'Schwesterprodukt Simtasy (B2B)' },
		{ href: '/blog/aus-besuchern-werden-anfragen/', label: 'Conversion: vom Besuch zum Kauf' },
	],
	simtasy: [
		{ href: '/leistungen/webentwicklung/', label: 'Webentwicklung für Plattformen und APIs' },
		{ href: '/referenzen/sim-do/', label: 'Schwesterprodukt sim.do (B2C)' },
		{ href: '/kontakt/', label: 'Plattform oder Web-App besprechen' },
	],
};

export const postRelated: Record<string, RelatedLink[]> = {
	'warum-deine-website-keine-kunden-bringt': [
		{ href: '/leistungen/webdesign/', label: 'Webdesign, das Besucher zu Kunden macht' },
		{ href: '/referenzen/', label: 'Referenzen: Websites, die live sind' },
		{ href: '/kontakt/', label: 'Deine Website im Erstgespräch prüfen lassen' },
	],
	'core-web-vitals-und-google-ranking': [
		{ href: '/leistungen/webentwicklung/', label: 'Webentwicklung mit Fokus auf Ladezeit' },
		{ href: '/leistungen/#relaunch', label: 'Relaunch: schneller, ohne Rankings zu verlieren' },
		{ href: '/kontakt/', label: 'Ladezeit im Erstgespräch prüfen lassen' },
	],
	'aus-besuchern-werden-anfragen': [
		{ href: '/leistungen/webdesign/', label: 'Webdesign, das zur Anfrage führt' },
		{ href: '/referenzen/', label: 'Referenzen mit klarem nächsten Schritt' },
		{ href: '/kontakt/', label: 'Kostenloses Erstgespräch buchen' },
	],
};
