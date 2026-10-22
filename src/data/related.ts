export type RelatedLink = { href: string; label: string };

export const related = {
	leistungen: [
		{ href: '/leistungen/webdesign/', label: 'Webdesign: Erscheinungsbild, Texte, Nutzerführung' },
		{ href: '/leistungen/webentwicklung/', label: 'Webentwicklung: Tempo, Formulare, Launch' },
		{ href: '/referenzen/', label: 'Referenzen: Live-Websites aus Design und Entwicklung' },
		{ href: '/blog/', label: 'Blog: Conversion, Ladezeit, Anfragen' },
		{ href: '/kontakt/', label: '30-Minuten-Call: Angebot und Umfang klären' },
	],
	webdesign: [
		{ href: '/leistungen/webentwicklung/', label: 'Webentwicklung: damit das Design live und schnell ankommt' },
		{ href: '/referenzen/holzbau-oberlerchner/', label: 'Holzbau Oberlerchner: Marke, Print und Website' },
		{ href: '/referenzen/de-elixier/', label: 'D&E Elixier: Webdesign fürs Kosmetikinstitut' },
		{ href: '/blog/warum-deine-website-keine-kunden-bringt/', label: 'Artikel: Warum Websites keine Kunden bringen' },
		{ href: '/kontakt/', label: 'Webdesign im Erstgespräch klären' },
	],
	webentwicklung: [
		{ href: '/leistungen/webdesign/', label: 'Webdesign: Struktur und Sprache, bevor Code entsteht' },
		{ href: '/referenzen/sim-do/', label: 'sim.do: Produktseite mit klarer Kaufstrecke' },
		{ href: '/referenzen/simtasy/', label: 'Simtasy: B2B-Plattform, API und White-Label' },
		{ href: '/blog/core-web-vitals-und-google-ranking/', label: 'Artikel: Core Web Vitals und Google Ranking' },
		{ href: '/kontakt/', label: 'Webentwicklung im Erstgespräch klären' },
	],
	referenzen: [
		{ href: '/leistungen/webdesign/', label: 'Webdesign als Kern der sichtbaren Marke' },
		{ href: '/leistungen/webentwicklung/', label: 'Webentwicklung für Tempo und Anfragen' },
		{ href: '/blog/aus-besuchern-werden-anfragen/', label: 'Artikel: Aus Besuchern werden Anfragen' },
		{ href: '/kontakt/', label: 'Ähnliches Projekt besprechen' },
	],
	blog: [
		{ href: '/leistungen/', label: 'Leistungen: Design und Entwicklung im Überblick' },
		{ href: '/referenzen/', label: 'Referenzen, die du im Browser öffnen kannst' },
		{ href: '/kontakt/', label: 'Website prüfen lassen: 30-Minuten-Call' },
	],
	kontakt: [
		{ href: '/leistungen/webdesign/', label: 'Webdesign: für wen es sich lohnt' },
		{ href: '/leistungen/webentwicklung/', label: 'Webentwicklung: Technik, die unsichtbar trägt' },
		{ href: '/referenzen/', label: 'Referenzen vor dem Gespräch ansehen' },
		{ href: '/blog/', label: 'Blog: woran Anfragen scheitern' },
	],
} as const satisfies Record<string, RelatedLink[]>;

export const caseRelated: Record<string, RelatedLink[]> = {
	'holzbau-oberlerchner': [
		{ href: '/leistungen/webdesign/', label: 'Webdesign: Konzept, Logo, Auftritt aus einer Linie' },
		{ href: '/leistungen/webentwicklung/', label: 'Webentwicklung: lokale Auffindbarkeit und Tempo' },
		{ href: '/referenzen/de-elixier/', label: 'Nächstes Kundenprojekt: D&E Elixier' },
		{ href: '/blog/core-web-vitals-und-google-ranking/', label: 'Warum Ladezeit auf der Baustelle zählt' },
	],
	'de-elixier': [
		{ href: '/leistungen/webdesign/', label: 'Webdesign für Studios und Institute' },
		{ href: '/referenzen/holzbau-oberlerchner/', label: 'Kundenprojekt Holzbau Oberlerchner' },
		{ href: '/blog/aus-besuchern-werden-anfragen/', label: 'Wie aus Interesse ein Termin wird' },
		{ href: '/kontakt/', label: 'Relaunch fürs Studio besprechen' },
	],
	'sim-do': [
		{ href: '/leistungen/webentwicklung/', label: 'Webentwicklung für Produkt und Conversion' },
		{ href: '/leistungen/webdesign/', label: 'Webdesign, das Tarife suchbar macht' },
		{ href: '/referenzen/simtasy/', label: 'Schwesterprodukt Simtasy (B2B)' },
		{ href: '/blog/aus-besuchern-werden-anfragen/', label: 'Conversion: von der Tarifliste zum Kauf' },
	],
	simtasy: [
		{ href: '/leistungen/webentwicklung/', label: 'Webentwicklung für Plattformen und APIs' },
		{ href: '/referenzen/sim-do/', label: 'Gründerprojekt sim.do (B2C)' },
		{ href: '/blog/core-web-vitals-und-google-ranking/', label: 'Tempo bleibt Pflicht, auch im B2B' },
		{ href: '/kontakt/', label: 'Produktauftritt oder Plattform klären' },
	],
};

export const postRelated: Record<string, RelatedLink[]> = {
	'warum-deine-website-keine-kunden-bringt': [
		{ href: '/leistungen/webdesign/', label: 'Webdesign: Angebot und Handlung in der ersten Bildschirmhöhe' },
		{ href: '/leistungen/webentwicklung/', label: 'Webentwicklung: Tempo und Formulare, die ankommen' },
		{ href: '/blog/aus-besuchern-werden-anfragen/', label: 'Weiterlesen: Aus Besuchern werden Anfragen' },
		{ href: '/referenzen/', label: 'So sehen fertige Auftritte aus' },
	],
	'core-web-vitals-und-google-ranking': [
		{ href: '/leistungen/webentwicklung/', label: 'Webentwicklung mit Fokus auf Ladezeit' },
		{ href: '/referenzen/holzbau-oberlerchner/', label: 'Beispiel: schnelle lokale Website' },
		{ href: '/blog/warum-deine-website-keine-kunden-bringt/', label: 'Weiterlesen: Warum Websites keine Kunden bringen' },
		{ href: '/kontakt/', label: 'Ladezeit und Anfragen prüfen lassen' },
	],
	'aus-besuchern-werden-anfragen': [
		{ href: '/leistungen/webdesign/', label: 'Webdesign, das zur Handlung führt' },
		{ href: '/referenzen/', label: 'Referenzen mit klarem nächsten Schritt' },
		{ href: '/blog/core-web-vitals-und-google-ranking/', label: 'Weiterlesen: Core Web Vitals und Ranking' },
		{ href: '/kontakt/', label: 'Conversion-Strecke im Call durchgehen' },
	],
};
