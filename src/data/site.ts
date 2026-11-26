export const site = {
	name: '9to6',
	url: 'https://9to6.de',
	phoneDisplay: '0175 404 5558',
	phoneIntl: '+491754045558',
	email: 'info@9to6.de',
	calUrl: 'https://cal.com/eddiejure/30min',
	calLink: 'eddiejure/30min',
	foundingYear: '2019',
	description:
		'9to6 ist eine Agentur für Webdesign und Webentwicklung aus Gelnhausen. Mit einem Netzwerk aus Designern, Textern und SEO-Spezialisten bauen wir schnelle Websites für Betriebe im Main-Kinzig-Kreis, in Frankfurt und im Rhein-Main-Gebiet.',
	slogan: 'Websites, die Kunden gewinnen.',
	positioning:
		'Design, Text und Entwicklung aus einer Hand. Wir bauen Websites, die schnell laden, klar verkaufen und Anfragen bringen.',
	team: 'Ein festes Netzwerk aus Designern, Textern und Spezialisten für SEO und KI-Suche, geführt von Gründer Eddie.',
	/** Straße nur für Impressum und Datenschutz (gesetzliche Pflicht). Nicht im Marketing oder Schema verwenden. */
	address: {
		street: 'Rhönstraße 95',
		zip: '63571',
		city: 'Gelnhausen',
		district: 'Main-Kinzig-Kreis',
		state: 'Hessen',
	},
	cities: ['Gelnhausen', 'Hanau', 'Offenbach am Main', 'Frankfurt am Main'],
	regions: ['Main-Kinzig-Kreis', 'Rhein-Main', 'Hessen'],
	person: {
		legal: 'Edvinas Jurevicius',
		public: 'Eddie J.',
		short: 'Eddie',
		role: 'Gründer und Projektleiter',
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
			{ href: '/webdesign-gelnhausen/', label: 'Webdesign Gelnhausen' },
		],
	},
	{ href: '/referenzen/', label: 'Referenzen' },
	{ href: '/preise/', label: 'Preise' },
	{ href: '/blog/', label: 'Blog' },
	{ href: '/kontakt/', label: 'Kontakt' },
] as const;

export const services = [
	{
		href: '/leistungen/webdesign/',
		title: 'Webdesign',
		teaser: 'Struktur, Texte und Gestaltung, die dein Angebot auf den Punkt bringen und Besucher zur Anfrage führen.',
		points: ['Seitenstruktur und Nutzerführung', 'Eigenständiges Design statt Vorlage', 'Auf Wunsch Logo, Visitenkarten und Banner'],
	},
	{
		href: '/leistungen/webentwicklung/',
		title: 'Webentwicklung',
		teaser: 'Schnelle, sichere Websites, die du selbst pflegen kannst und die bei Google technisch sauber dastehen.',
		points: ['Kurze Ladezeiten', 'Technische SEO und saubere Daten', 'Hosting und Wartung'],
	},
	{
		href: '/leistungen/#relaunch',
		title: 'Relaunch',
		teaser: 'Deine bestehende Seite modernisieren, ohne Rankings, Inhalte oder alte Links zu verlieren.',
		points: ['Inhalte übernehmen und schärfen', 'Weiterleitungen für alle alten URLs', 'Messbar schneller als vorher'],
	},
	{
		href: '/leistungen/#seo',
		title: 'SEO, Texte und KI-Sichtbarkeit',
		teaser: 'Texte, die Kunden überzeugen und von Google, ChatGPT und anderen KI-Assistenten verstanden und zitiert werden.',
		points: ['Suchbegriffe und Seitenplanung', 'SEO-Texte von spezialisierten Textern', 'Optimierung für KI-Suche (GEO)'],
	},
] as const;

/** Preise. Bewusst keine Standardpakete: üblicher Rahmen plus individuelle Kalkulation. */
export const pricing = {
	typicalRange: '3.000\u00a0–\u00a06.000\u00a0€',
	min: 3000,
	max: 6000,
	oneTime: {
		title: 'Einmalige Investition',
		text: 'Konzept, Texte, Design und Entwicklung als einmalige Investition – für ein Redesign oder eine neue Unternehmenswebsite. Große Projekte wie Shops, Plattformen oder mehrere Standorte kalkulieren wir individuell.',
	},
	monthly: {
		title: 'Monatliche Partnerschaft',
		text: 'Die Investition verteilt sich auf eine längere Laufzeit. Die Rate richtet sich nach Laufzeit und Umfang. Hosting, Wartung und ein festes Kontingent für Änderungen sind inklusive.',
	},
	factors: [
		'Umfang und Anzahl der Seiten',
		'Texte, Fotos und Inhalte',
		'Funktionen wie Buchung, Shop oder Kundenkonten',
		'Branding und Print, etwa Logo oder Visitenkarten',
		'Bei monatlicher Zahlung: Laufzeit und Kontingent',
	],
	contingentExamples: [
		'Neue Seiten, Texte oder Bilder auf der Website',
		'Visitenkarten, Flyer und Briefpapier anpassen',
		'Bau- und Werbebanner, Schilder, Fahrzeugbeschriftung',
		'Grafiken für Social Media und Anzeigen',
		'SEO-Texte und Optimierung für KI-Suche',
		'Kleine Funktionen wie Formulare oder Buchungen',
	],
} as const;

export type CaseStudy = {
	slug: string;
	name: string;
	kind: 'client' | 'product';
	url: string;
	urlLabel: string;
	place: string;
	industry: string;
	imageName: 'ref-oberlerchner' | 'ref-elixier' | 'ref-simdo' | 'ref-simtasy';
	/** Geräte-Mockup aus echten Screenshots (nur Kundenprojekte). */
	mockName?: 'mock-design' | 'mock-dev';
	image: string;
	imageAlt: string;
	teaser: string;
	summary: string;
	challenge: string;
	solution: string;
	outcome: string;
	deliverables: string[];
	seoTitle: string;
	seoDescription: string;
};

export const cases: CaseStudy[] = [
	{
		slug: 'holzbau-oberlerchner',
		name: 'Holzbau Oberlerchner',
		kind: 'client',
		url: 'https://oberlerchner.de',
		urlLabel: 'oberlerchner.de',
		place: 'Gelnhausen',
		industry: 'Zimmerei und Holzbau',
		imageName: 'ref-oberlerchner',
		mockName: 'mock-dev',
		image: '/images/ref-oberlerchner-og.jpg',
		imageAlt: 'Startseite von Holzbau Oberlerchner, Zimmerei in Gelnhausen',
		teaser: 'Der erste Auftritt einer Zimmerei: Marke, Print und Website – und endlich Referenzen, die Kunden überzeugen.',
		summary:
			'Für die Zimmerei Oberlerchner in Gelnhausen haben wir den kompletten Auftritt von null an entwickelt und gelauncht: Logo, Visitenkarten, Baubanner, Bautafeln und die Website oberlerchner.de.',
		challenge:
			'Ein wachsender Holzbaubetrieb ohne Website und ohne einheitlichen Auftritt. Fragten Interessenten nach Referenzen, gab es nichts zu zeigen außer Fotos auf dem Handy. Neue Kunden kamen fast nur über Empfehlungen.',
		solution:
			'Wir haben zuerst die Marke gebaut und daraus alles Weitere abgeleitet: ein Logo, das auf Banner und Bildschirm funktioniert, Print in derselben Linie und eine Website, die Leistungen und Einzugsgebiet gleich im ersten Bildschirm zeigt. Die Seite ist für das Smartphone optimiert und für lokale Suchanfragen im Main-Kinzig-Kreis aufgebaut.',
		outcome:
			'Seit dem Launch kommen Aufträge über die Website. Zum ersten Mal kann der Betrieb seine Referenzen zeigen – sortiert nach Dachbau, Holzbau, Terrassen und Carports. Vom Bauzaun bis zur Website tritt die Zimmerei jetzt einheitlich auf.',
		deliverables: [
			'Markenkonzept und Logo',
			'Visitenkarten, Baubanner, Bautafeln',
			'Webdesign, Texte und Referenzbereich',
			'Entwicklung und lokale SEO',
		],
		seoTitle: 'Referenz: Website für Holzbau Oberlerchner, Gelnhausen | 9to6',
		seoDescription:
			'Kompletter Launch für die Zimmerei Oberlerchner in Gelnhausen: Logo, Print und erste Website. Heute kommen Aufträge über die Seite.',
	},
	{
		slug: 'de-elixier',
		name: 'D&E Elixier',
		kind: 'client',
		url: 'https://www.de-elixier.de',
		urlLabel: 'de-elixier.de',
		place: 'Frankfurt-Sachsenhausen',
		industry: 'Kosmetikinstitut',
		imageName: 'ref-elixier',
		mockName: 'mock-design',
		image: '/images/ref-elixier-og.jpg',
		imageAlt: 'Startseite von D&E Elixier, Kosmetikinstitut in Frankfurt-Sachsenhausen',
		teaser: 'Redesign für ein Kosmetikinstitut – ruhig, hochwertig und mit einem kurzen Weg zum Termin.',
		summary:
			'Für das Kosmetikinstitut D&E Elixier in Frankfurt-Sachsenhausen haben wir die bestehende Website im Rahmen eines Redesigns neu gestaltet und entwickelt.',
		challenge:
			'Die alte Seite wirkte austauschbar und passte nicht zur Atmosphäre des Instituts. Behandlungen waren schwer zu finden, der Weg zum Termin war zu lang.',
		solution:
			'Ein ruhiges, hochwertiges Design, das die Handschrift des Instituts trägt. Behandlungen wie Gesichtsbehandlungen und Fußpflege sind klar gegliedert, Standort und Buchung stehen auf jeder Seite griffbereit.',
		outcome:
			'Eine Website, die so wirkt wie das Institut selbst. Besucherinnen sehen auf einen Blick, was angeboten wird, und buchen ihren Termin in wenigen Schritten – am Handy genauso wie am Desktop.',
		deliverables: ['Redesign-Konzept', 'Webdesign und Texte', 'Entwicklung', 'Lokale SEO für Frankfurt'],
		seoTitle: 'Referenz: Webdesign für D&E Elixier, Frankfurt | 9to6',
		seoDescription:
			'Redesign für das Kosmetikinstitut D&E Elixier in Frankfurt-Sachsenhausen: hochwertiges Design, klare Behandlungen, kurzer Weg zum Termin.',
	},
	{
		slug: 'sim-do',
		name: 'sim.do',
		kind: 'product',
		url: 'https://sim.do',
		urlLabel: 'sim.do',
		place: 'Online, weltweit',
		industry: 'eSIM für Reisende',
		imageName: 'ref-simdo',
		image: '/images/ref-simdo-og.jpg',
		imageAlt: 'Startseite von sim.do mit eSIM-Datentarifen für Reisen',
		teaser: 'Unser eigenes Produkt: eSIM-Tarife für über 200 Reiseziele, vom Markenkonzept bis zum Checkout.',
		summary:
			'sim.do ist ein eigenes Produkt von 9to6-Gründer Edvinas Jurevicius, gestartet im Oktober 2025. Die Marke verkauft eSIM-Datentarife für Reisen in über 200 Destinationen.',
		challenge:
			'Ein neues Produkt in einem umkämpften Markt. Reisende sollen in Sekunden den passenden Tarif für ihr Ziel finden und die eSIM ohne Plastikkarte aktivieren.',
		solution:
			'Marke, Website und Kaufstrecke aus einer Hand: Zielsuche als Einstieg, übersichtliche Tarife, ein kurzer Checkout und eine Aktivierung, die ohne Anleitung funktioniert.',
		outcome:
			'Ein Produkt, das wir selbst betreiben. Jede Entscheidung über Struktur, Texte und Ladezeit sehen wir direkt im Umsatz – dieses Wissen fließt in jedes Kundenprojekt.',
		deliverables: ['Marke und Name', 'Produktdesign und Texte', 'Shop und Checkout', 'Betrieb und Weiterentwicklung'],
		seoTitle: 'sim.do: eigenes eSIM-Produkt von 9to6',
		seoDescription:
			'sim.do ist das eigene eSIM-Produkt von 9to6-Gründer Eddie: Marke, Website und Kaufstrecke für Reisende in über 200 Ländern.',
	},
	{
		slug: 'simtasy',
		name: 'Simtasy',
		kind: 'product',
		url: 'https://simtasy.com',
		urlLabel: 'simtasy.com',
		place: 'B2B, international',
		industry: 'eSIM-Wholesale-Plattform',
		imageName: 'ref-simtasy',
		image: '/images/ref-simtasy-og.jpg',
		imageAlt: 'Startseite von Simtasy, B2B-Plattform für eSIM-Wholesale',
		teaser: 'Unsere B2B-Plattform für eSIM-Reseller: Katalog, Wallet, API und White-Label-Shops.',
		summary:
			'Simtasy ist die B2B-Plattform von 9to6-Gründer Edvinas Jurevicius. Reisebüros, Entwickler und eSIM-Marken beziehen hier Tarife im Großhandel – per Dashboard, über die API oder als White-Label-Shop unter eigener Marke.',
		challenge:
			'Ein erklärungsbedürftiges B2B-Angebot für technische und kaufmännische Zielgruppen zugleich: Wholesale-Preise, API-Anbindung und White-Label müssen verständlich und vertrauenswürdig wirken.',
		solution:
			'Eine Plattform mit klarer Produktlogik: Katalog und Preise, Guthaben-Wallet, dokumentierte API und White-Label-Shops. Die Website erklärt jedes Modell in der Sprache der jeweiligen Zielgruppe.',
		outcome:
			'Eine Plattform, die wir selbst entwickeln und betreiben. Sie zeigt, dass 9to6 auch komplexe Produkte, Schnittstellen und Kundenkonten sauber umsetzt.',
		deliverables: ['Plattform-Konzept', 'Web-App und Dashboard', 'API und Dokumentation', 'White-Label-Shops'],
		seoTitle: 'Simtasy: eigene B2B-Plattform von 9to6',
		seoDescription:
			'Simtasy ist die eigene B2B-Plattform von 9to6-Gründer Eddie: eSIM-Wholesale mit Dashboard, API und White-Label-Shops.',
	},
];

export type Testimonial = {
	slug: string;
	quote: string;
	/** Name nach Freigabe durch den Kunden eintragen. Bis dahin steht die Rolle. */
	author: string;
	role: string;
	company: string;
	place: string;
	photo: 'client-hj' | 'client-dale';
};

/** Kundenstimmen. Wortlaut vor Veröffentlichung von den Kunden freigeben lassen. */
export const testimonials: Testimonial[] = [
	{
		slug: 'holzbau-oberlerchner',
		quote:
			'Vorher hatten wir im Internet gar nichts. Wenn ein Kunde nach Referenzen gefragt hat, musste ich Fotos auf dem Handy zeigen. Eddie hat uns vom Logo über das Baubanner bis zur Website alles aus einem Guss gebaut und immer kurz nachgefragt, bevor etwas rausging. Heute kommen Aufträge über die Website rein, und ich kann jedem Interessenten zeigen, was wir schon gebaut haben.',
		author: 'Hansjörg O.',
		role: 'Inhaber',
		company: 'Holzbau Oberlerchner',
		place: 'Gelnhausen',
		photo: 'client-hj',
	},
	{
		slug: 'de-elixier',
		quote:
			'Unsere alte Website hat einfach nicht zu uns gepasst. Nach dem Redesign fühlt sie sich an wie unser Institut: ruhig, hell und persönlich. Die Abstimmung war unkompliziert, Änderungswünsche wurden schnell umgesetzt, und wir hatten nie das Gefühl, nur ein Projekt von vielen zu sein. Viele Kundinnen buchen ihren Termin inzwischen direkt über die Seite.',
		author: 'Dale G.',
		role: 'Inhaberin',
		company: 'D&E Elixier',
		place: 'Frankfurt-Sachsenhausen',
		photo: 'client-dale',
	},
];

export const clientCases = cases.filter((item) => item.kind === 'client');
export const productCases = cases.filter((item) => item.kind === 'product');

export type Faq = { q: string; a: string };

/** Startseite: Fragen zur Agentur. Jede Frage steht nur auf einer Seite (keine doppelten FAQ-Inhalte). */
export const homeFaqs: Faq[] = [
	{
		q: 'Was macht 9to6?',
		a: '9to6 ist eine Agentur für Webdesign und Webentwicklung aus Gelnhausen. Wir konzipieren, texten, gestalten und programmieren Websites für kleine und mittlere Unternehmen – vom ersten Gespräch bis zum Launch und darüber hinaus. Gründer und fester Ansprechpartner ist Edvinas „Eddie“ Jurevicius, der mit einem Netzwerk aus spezialisierten Designern, Textern und SEO-Experten arbeitet.',
	},
	{
		q: 'Für welche Unternehmen arbeitet 9to6?',
		a: 'Für Handwerksbetriebe, Studios, Praxen, Dienstleister und Produktmarken, die mit ihrer Website neue Kunden gewinnen wollen. Beispiele sind die Zimmerei [Holzbau Oberlerchner](/referenzen/holzbau-oberlerchner/) in Gelnhausen und das Kosmetikinstitut [D&E Elixier](/referenzen/de-elixier/) in Frankfurt.',
	},
	{
		q: 'In welcher Region ist 9to6 tätig?',
		a: '9to6 kommt aus Gelnhausen im Main-Kinzig-Kreis. Wir betreuen Kunden in der ganzen Region, besonders in Gelnhausen, Hanau, Offenbach und Frankfurt am Main, und arbeiten auch deutschlandweit. Gespräche laufen per Video oder bei dir vor Ort. Mehr dazu unter [Webdesign Gelnhausen](/webdesign-gelnhausen/).',
	},
	{
		q: 'Was kostet eine Website bei 9to6?',
		a: 'Projekte starten üblicherweise bei 3.000 bis 6.000 Euro. Große Vorhaben wie Shops oder Plattformen kalkulieren wir individuell, nach oben offen. Alternativ verteilst du die Investition auf monatliche Raten, deren Höhe sich nach der Laufzeit richtet – inklusive Hosting, Wartung und einem festen Kontingent für Änderungen. Wichtiger als der Preis ist, was die Website einbringt: Wie sich das rechnet, zeigt unser [ROI-Rechner](/preise/#rechner).',
	},
	{
		q: 'Was unterscheidet 9to6 von anderen Agenturen?',
		a: 'Du hast einen festen Ansprechpartner und dahinter ein eingespieltes Team aus Designern, Textern und SEO-Spezialisten – ohne Account-Manager und ohne Agentur-Overhead. Design, Text und Entwicklung arbeiten in einem Prozess, deshalb geht zwischen Entwurf und fertiger Seite nichts verloren. Und weil wir mit [sim.do](/referenzen/sim-do/) und [Simtasy](/referenzen/simtasy/) eigene Produkte betreiben, wissen wir aus erster Hand, was eine Website verkaufen muss.',
	},
];

/** Kontaktseite: Fragen zum Ablauf der Zusammenarbeit. */
export const contactFaqs: Faq[] = [
	{
		q: 'Was kostet das Erstgespräch?',
		a: 'Nichts. Das Erstgespräch dauert 30 Minuten, ist unverbindlich und läuft per Video. Wir sprechen über dein Vorhaben, deine aktuelle Website und den sinnvollsten nächsten Schritt.',
	},
	{
		q: 'Wie bereite ich mich auf das Gespräch vor?',
		a: 'Gar nicht aufwendig. Hilfreich sind die Adresse deiner aktuellen Website (falls vorhanden), ein, zwei Seiten, die dir gefallen, und eine grobe Vorstellung von Budget und Zeitrahmen.',
	},
	{
		q: 'Was passiert nach dem Gespräch?',
		a: 'Du bekommst ein schriftliches Angebot mit Leistungsumfang, Zeitplan und Preis. Erst wenn du zusagst, starten wir mit Konzept und Design.',
	},
	{
		q: 'Kann ich auch ohne Termin anfragen?',
		a: 'Natürlich. Schreib einfach über das Formular auf dieser Seite oder direkt an info@9to6.de. Du bekommst eine persönliche Antwort, kein automatisiertes Angebot.',
	},
];

export const serviceFaqs = {
	hub: [
		{
			q: 'Kann ich meine Website in monatlichen Raten bezahlen?',
			a: 'Ja. Statt einer Einmalzahlung kannst du die Investition auf monatliche Raten verteilen; die Höhe richtet sich nach der Laufzeit. Hosting, Wartung und ein festes monatliches Kontingent für Änderungen sind dann inklusive – etwa für neue Inhalte, Visitenkarten oder Banner. Laufzeit und Kontingent stehen im Vertrag. Mehr unter [Preise](/preise/).',
		},
		{
			q: 'Ist 9to6 eine Full-Service-Agentur?',
			a: 'Für deine Website: ja. Konzept, Texte, Design, Entwicklung, Hosting und Betreuung kommen aus einer Hand. Unser Schwerpunkt liegt auf [Webdesign](/leistungen/webdesign/) und [Webentwicklung](/leistungen/webentwicklung/). Social Media und Anzeigenkampagnen sind nicht unser Schwerpunkt.',
		},
		{
			q: 'Wie lange dauert ein Website-Projekt?',
			a: 'Das hängt vor allem vom Umfang und davon ab, wie schnell Inhalte und Freigaben vorliegen. Den Zeitplan legen wir im Angebot verbindlich fest, mit klaren Meilensteinen für Konzept, Design, Entwicklung und Launch.',
		},
		{
			q: 'Kann ich nur Design oder nur Entwicklung beauftragen?',
			a: 'Ja. Wenn bereits ein Design steht, setzen wir es um – oder wir gestalten, und dein Team entwickelt. Meist ist beides aus einer Hand schneller und günstiger, weil keine Übergabe dazwischen liegt.',
		},
		{
			q: 'Verliere ich bei einem Relaunch meine Google-Rankings?',
			a: 'Nicht, wenn der Umzug sauber geplant ist. Wir übernehmen relevante Inhalte, leiten jede alte URL per 301-Weiterleitung auf die passende neue Seite um und prüfen nach dem Launch in der Google Search Console, ob alles korrekt indexiert wird.',
		},
	],
	webdesign: [
		{
			q: 'Was ist im Webdesign enthalten?',
			a: 'Seitenstruktur, Nutzerführung, Texte, Gestaltung aller Seiten für Smartphone und Desktop sowie ein kleines Designsystem aus Farben, Schriften und Bausteinen. Umgesetzt wird das Design in der [Webentwicklung](/leistungen/webentwicklung/). Auf Wunsch gestalten wir auch Logo und Print, wie bei [Holzbau Oberlerchner](/referenzen/holzbau-oberlerchner/).',
		},
		{
			q: 'Schreibt 9to6 auch die Texte?',
			a: 'Ja. Gute Texte sind der wichtigste Teil des Webdesigns. Wir erarbeiten sie gemeinsam mit dir: Du lieferst das Fachwissen, wir machen daraus klare Überschriften und Texte, die Kunden verstehen und Suchmaschinen richtig einordnen.',
		},
		{
			q: 'Warum kein Baukasten oder fertiges Theme?',
			a: 'Ein Theme sieht schnell fertig aus, verkauft aber selten. Es bringt Ballast mit, der die Seite langsam macht, und zwingt dein Angebot in eine fremde Struktur. Wir gestalten vom Angebot aus. Warum das zählt, steht im Artikel [Warum deine Website keine Kunden bringt](/blog/warum-deine-website-keine-kunden-bringt/).',
		},
		{
			q: 'Wie viele Korrekturschleifen sind enthalten?',
			a: 'Wir arbeiten in kurzen Abstimmungen statt in einer großen Präsentation am Ende. Wie viele Runden enthalten sind, steht vorab im Angebot. So gibt es keine Überraschungen bei Zeit oder Kosten.',
		},
	],
	webentwicklung: [
		{
			q: 'Mit welcher Technik arbeitet 9to6?',
			a: 'Mit modernen, schlanken Web-Frameworks wie Astro und statischem Hosting über ein weltweites Netz (Cloudflare). Das Ergebnis sind sehr kurze Ladezeiten, hohe Sicherheit und kaum Wartungsaufwand. Die Technik wählen wir nach Aufgabe: Für Anwendungen mit Kundenkonten oder Schnittstellen setzen wir passende Frameworks und Datenbanken ein.',
		},
		{
			q: 'Baut 9to6 auch mit WordPress?',
			a: 'Nicht als Standard. Viele unserer Relaunches kommen von WordPress, weil die alte Seite zu langsam oder zu wartungsintensiv geworden ist. Wenn du Inhalte selbst pflegen willst, bekommst du ein einfaches Redaktionssystem, das zu deinem Alltag passt.',
		},
		{
			q: 'Kann ich die Website selbst bearbeiten?',
			a: 'Ja, wenn du das möchtest. Wir richten die Pflege so ein, wie sie für dich sinnvoll ist: über ein Redaktionssystem für regelmäßige Änderungen oder als Betreuung durch uns, wenn du dich lieber um dein Geschäft kümmerst.',
		},
		{
			q: 'Übernimmt 9to6 Hosting und Wartung?',
			a: 'Ja. Typischerweise hosten wir über Cloudflare Pages mit HTTPS und weltweiter Auslieferung. Die laufenden Kosten und Leistungen stehen transparent im Angebot. Auf Wunsch arbeiten wir auch mit deinem bestehenden Hosting.',
		},
	],
	gelnhausen: [
		{
			q: 'Ist 9to6 eine Agentur aus Gelnhausen?',
			a: 'Ja. 9to6 wurde 2019 in Gelnhausen gegründet. Von hier aus betreuen wir Unternehmen im gesamten Main-Kinzig-Kreis, in Hanau, Offenbach, Frankfurt und im Rhein-Main-Gebiet.',
		},
		{
			q: 'Kommt ihr auch persönlich vorbei?',
			a: 'Ja, wenn es dem Projekt hilft – etwa für Fotos, einen Workshop oder um den Betrieb kennenzulernen. Die meisten Abstimmungen laufen per Video, weil das für beide Seiten Zeit spart.',
		},
		{
			q: 'Wie werde ich bei Google in Gelnhausen und Umgebung gefunden?',
			a: 'Durch eine Website, die Leistung und Ort klar benennt, technisch sauber ist und schnell lädt – zusammen mit einem gepflegten Google-Unternehmensprofil. Wir bauen jede Seite so, dass Suchmaschinen und Menschen sofort verstehen, was du anbietest und wo.',
		},
	],
} as const;

/** Kurzablauf für Startseite und Kontakt. */
export const briefSteps = [
	{
		title: 'Erstgespräch',
		text: '30 Minuten per Video mit Eddie, deinem festen Ansprechpartner. Wir klären Ziel, Umfang und ob wir zusammenpassen.',
	},
	{
		title: 'Angebot',
		text: 'Du bekommst ein schriftliches Angebot – als Einmalpreis oder in monatlichen Raten. Erst nach deiner Zusage geht es los.',
	},
	{
		title: 'Umsetzung',
		text: 'Design, Texte und Entwicklung von spezialisierten Köpfen, koordiniert aus einer Hand. Du siehst jeden Zwischenstand.',
	},
	{
		title: 'Launch',
		text: 'Die Seite geht live, alte Links werden umgeleitet. Danach optimieren wir anhand echter Anfragen.',
	},
] as const;

/** Ausführlicher Ablauf für die Leistungsseite. */
export const processSteps = [
	{
		title: 'Verstehen',
		text: 'Wen willst du gewinnen, was soll danach passieren, was ist schon da? Wir klären das Ziel, bevor wir gestalten.',
	},
	{
		title: 'Struktur',
		text: 'Seitenaufbau, Botschaften, Nutzerführung. Was Kunden suchen, steht vorn – der Rest ordnet sich dahinter ein.',
	},
	{
		title: 'Design',
		text: 'Typografie, Farben, Bildsprache und Bausteine. Eigenständig, ruhig und auf jedem Gerät klar.',
	},
	{
		title: 'Entwicklung',
		text: 'Schneller, sauberer Code, Formulare, die ankommen, und technische SEO von Anfang an.',
	},
	{
		title: 'Launch und Betreuung',
		text: 'Weiterleitungen, Hosting, Search Console. Nach dem Launch schärfen wir nach, wo es hakt.',
	},
] as const;
