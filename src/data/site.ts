export const site = {
	name: '9to6',
	url: 'https://9to6.de',
	phoneDisplay: '0175 404 5558',
	email: 'info@9to6.de',
	calUrl: 'https://cal.com/eddiejure/30min',
	calLabel: '30 Minuten Termin buchen',
	description:
		'Webdesign und Webentwicklung aus Gelnhausen für den Main-Kinzig-Kreis, Frankfurt, Hanau und Offenbach.',
	tagline: 'Websites, die in Gelnhausen und Frankfurt Anfragen bringen.',
	positioning:
		'Full-Service für den Webauftritt: Konzept, Text, Design, Entwicklung, Launch und Hosting. Der Kern ist die Seite, die live steht und Anfragen bringt.',
	address: {
		street: 'Rhönstraße 95',
		zip: '63571',
		city: 'Gelnhausen',
		region: 'Gelnhausen, Main-Kinzig-Kreis, Frankfurt und Umgebung',
	},
	geo: {
		latitude: 50.1765139,
		longitude: 9.1461715,
	},
	areaServed: [
		'Gelnhausen',
		'Main-Kinzig-Kreis',
		'Hanau',
		'Offenbach',
		'Frankfurt am Main',
		'Rhein-Main',
		'Hessen',
		'Deutschland',
	],
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
		teaser: 'Struktur, Sprache und Erscheinungsbild, so dass Besucher bleiben und handeln.',
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
	kind: 'client' | 'product';
	url: string;
	urlLabel: string;
	place: string;
	stack: string;
	role: string;
	imageName: 'ref-oberlerchner' | 'ref-elixier' | 'ref-simdo' | 'ref-simtasy';
	image: string;
	imageAlt: string;
	summary: string;
	result: string;
	story: string[];
	points: string[];
	seoTitle: string;
	seoDescription: string;
	founder?: boolean;
};

export const cases: CaseStudy[] = [
	{
		slug: 'holzbau-oberlerchner',
		name: 'Holzbau Oberlerchner',
		kind: 'client',
		url: 'https://oberlerchner.de',
		urlLabel: 'oberlerchner.de',
		place: 'Gelnhausen, Main-Kinzig-Kreis',
		stack: 'Lokale Auffindbarkeit, schnelle Ladezeit',
		role: 'Konzept, Print und Website für Zimmerei und Holzbau',
		imageName: 'ref-oberlerchner',
		image: '/images/ref-oberlerchner-og.jpg',
		imageAlt: 'Startseite von Holzbau Oberlerchner, Zimmerei in Gelnhausen',
		summary:
			'Auftritt für den Holzbaubetrieb in Gelnhausen: Konzept, Logo, Visitenkarten, Baubanner, Tafeln und Website. Leistungen klar sortiert, auf dem Handy auf der Baustelle lesbar.',
		result:
			'Leistungen, Gebiet und Kontakt stehen auf einer schnellen Seite. Wer im Main-Kinzig-Kreis einen Holzbaubetrieb sucht, sieht das Angebot, bevor er weiterklickt.',
		story: [
			'Ausgangslage: Der Betrieb brauchte eine Linie, die auf der Baustelle und im Netz dieselbe ist. Visitenkarte, Banner und Website sollten zusammengehören. Dachbau, konstruktiver Holzbau, Terrassen und Carports mussten so sortiert sein, dass jemand aus Gelnhausen und dem Main-Kinzig-Kreis sie ohne Umweg findet.',
			'Live gegangen sind Konzept und Logo, Visitenkarten, Baubanner, Wellschaumstoff-Tafeln und die Website oberlerchner.de. Die Seite nennt Leistungen und Einzugsgebiet in der ersten Ansicht und bleibt auf dem Smartphone lesbar.',
			'Für den Betrieb heißt das: ein Auftritt, den man auf der Baustelle in der Hand hat und den die Suche in der Umgebung einer klaren Seite zuordnen kann. Zahlen aus fremden Konten veröffentlichen wir nicht. Sichtbar ist der live Auftritt.',
		],
		points: [
			'Konzept und Logo, auf der Baustelle und im Netz wiedererkennbar',
			'Visitenkarten, Baubanner und Tafeln aus derselben Linie',
			'Website für Gelnhausen und den Main-Kinzig-Kreis, schnell auf dem Handy',
		],
		seoTitle: 'Website für Holzbau in Gelnhausen | 9to6',
		seoDescription:
			'Website, Logo und Print für die Zimmerei Oberlerchner in Gelnhausen. Schnell auf dem Handy, klar für den Main-Kinzig-Kreis.',
	},
	{
		slug: 'de-elixier',
		name: 'D&E Elixier',
		kind: 'client',
		url: 'https://www.de-elixier.de',
		urlLabel: 'de-elixier.de',
		place: 'Frankfurt-Sachsenhausen',
		stack: 'Webdesign und Relaunch',
		role: 'Website für Kosmetikinstitut',
		imageName: 'ref-elixier',
		image: '/images/ref-elixier-og.jpg',
		imageAlt: 'Startseite von D&E Elixier, Kosmetikinstitut in Frankfurt-Sachsenhausen',
		summary:
			'Website für das Kosmetikinstitut in Frankfurt-Sachsenhausen. Behandlungen, Terminweg und Standort so erzählt, dass aus Interesse ein Besuch wird.',
		result:
			'Behandlungen und der Weg zum Termin sind in wenigen Schritten da. Der Auftritt wirkt nach dem Institut in Sachsenhausen, nicht nach einer Vorlage.',
		story: [
			'Ausgangslage: Das Kosmetikinstitut in Frankfurt-Sachsenhausen brauchte eine Website, die Behandlungen, Atmosphäre und den Weg zum Termin ruhig erklärt. Ein austauschbarer Look hätte dem Ort nicht entsprochen.',
			'Live ist der Relaunch von de-elixier.de. Leistungen, Standort und Buchungsweg sitzen vorn. Gesichtsbehandlungen und Fußpflege sind auffindbar für Menschen, die in Frankfurt und der näheren Umgebung suchen.',
			'Für das Institut heißt das: aus Interesse wird ein nachvollziehbarer nächster Schritt, auf dem Telefon genauso wie am Schreibtisch. Der Beweis ist die erreichbare Seite, kein versprochenes Prozent aus einer anderen Branche.',
		],
		points: [
			'Ruhiges Erscheinungsbild, das zum Institut passt',
			'Leistungen und Terminweg in wenigen Schritten',
			'Auffindbar für Behandlungen in Frankfurt-Sachsenhausen',
		],
		seoTitle: 'Webdesign für Kosmetik in Frankfurt | 9to6',
		seoDescription:
			'Website für D&E Elixier in Frankfurt-Sachsenhausen. Behandlungen und Terminweg klar, Erscheinungsbild passend zum Institut.',
	},
	{
		slug: 'sim-do',
		name: 'sim.do',
		kind: 'product',
		url: 'https://sim.do',
		urlLabel: 'sim.do',
		place: 'aus Deutschland',
		stack: 'Produktmarke, Web und Kaufweg',
		role: 'eSIM für Reisen in 200+ Destinationen',
		imageName: 'ref-simdo',
		image: '/images/ref-simdo-og.jpg',
		imageAlt: 'Startseite von sim.do mit eSIM-Datentarifen für Reisen',
		summary:
			'sim.do ist die eSIM-Marke von Edvinas Jurevicius, gestartet im Oktober 2025. Eigenes Produkt, kein Kundenauftrag. Tarife, Aktivierung und Marke aus einer Hand.',
		result:
			'Die Seite macht Tarife suchbar und die Aktivierung kurz. Sie ist ein Beleg für Produktbau, nicht für einen Auftrag aus Gelnhausen oder Frankfurt.',
		story: [
			'sim.do gehört Eddie. Es ist kein Kundenprojekt und taucht deshalb nicht in der Reihe der Aufträge auf. Die Marke verkauft eSIM-Datentarife für Reisen, mit Aktivierung ohne Plastikkarte.',
			'An der Seite sieht man, wie eine Produktstrecke suchbar und kaufbar wird: Tarife, Ziel und der nächste Schritt stehen vorn. Dieselbe Sorgfalt gilt für Kundenaufträge, der Beweis für Handwerk und Studios bleibt Oberlerchner und Elixier.',
		],
		points: [
			'Eigenes Produkt von Edvinas Jurevicius, seit Oktober 2025',
			'Tarife suchbar, Aktivierung in einer kurzen Strecke',
			'Marke und Website zusammen geplant',
		],
		seoTitle: 'sim.do, eigenes Produkt von 9to6',
		seoDescription:
			'Eigenes Produkt von Eddie, kein Kundenauftrag. eSIM-Seite mit suchbaren Tarifen und kurzer Aktivierung.',
		founder: true,
	},
	{
		slug: 'simtasy',
		name: 'Simtasy',
		kind: 'product',
		url: 'https://simtasy.com',
		urlLabel: 'simtasy.com',
		place: 'B2B, weltweit',
		stack: 'B2B-Produktplattform',
		role: 'Wholesale-Plattform für eSIM-Reseller',
		imageName: 'ref-simtasy',
		image: '/images/ref-simtasy-og.jpg',
		imageAlt: 'Startseite von Simtasy, B2B-Plattform für eSIM-Wholesale',
		summary:
			'Simtasy ist die eigene B2B-Plattform von Eddie für Reisebüros, Entwickler und eSIM-Marken. Kein Kundenauftrag. Katalog, Wallet, API und White-Label.',
		result:
			'Die Seite erklärt Wholesale, API und White-Label in einem technischen Ton. Sie zeigt Produktbau, nicht eine Kundenreferenz aus der Region.',
		story: [
			'Simtasy ist das B2B-Gegenstück zu sim.do und ebenfalls ein eigenes Produkt. Katalog, Preise, Wallet, API und White-Label-Shops richten sich an Reseller, nicht an einen lokalen Betrieb.',
			'Wer eine Plattform oder eine Produktstrecke plant, sieht hier den Maßstab. Wer eine Website für Handwerk oder ein Studio sucht, schaut bei Oberlerchner und Elixier nach. Beides entsteht im selben Prozess, es ist nicht derselbe Nachweis.',
		],
		points: [
			'Eigenes Produkt, kein Kundenauftrag',
			'Story für Wholesale, API und White-Label',
			'Technischer Ton, der zu einem B2B-Publikum passt',
		],
		seoTitle: 'Simtasy, eigene B2B-Plattform von 9to6',
		seoDescription:
			'Eigenes B2B-Produkt von Eddie, kein Kundenauftrag. Wholesale, API und White-Label für eSIM-Reseller.',
		founder: true,
	},
];

export const clientCases = cases.filter((item) => item.kind === 'client');
export const productCases = cases.filter((item) => item.kind === 'product');

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
				a: 'Full-Service für den Webauftritt, mit klarem Schwerpunkt: [Webdesign](/leistungen/webdesign/) und [Webentwicklung](/leistungen/webentwicklung/). Dazu Konzeption, Texte, Ladezeit, Formulare, Hosting und Relaunch. Suchmaschinen und Kampagnen denken wir mit, aber der Kern ist die Website, die Kunden bringt.',
			},
			{
				q: 'Wie funktioniert euer Preismodell?',
				a: 'Jedes Projekt ist anders, deshalb gibt es keine Standardpreisliste. Du bekommst ein Angebot mit Umfang, Meilensteinen und Zahlungsbedingungen, bevor wir starten. Für einen ersten Eindruck reicht ein 30-Minuten-Call.',
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

export const allFaqs = faqs.flatMap((group) => group.items);

export const serviceFaqs = {
	hub: [
		{
			q: 'Ist 9to6 Full-Service oder eine reine Designagentur?',
				a: 'Beides in einem klaren Verhältnis: Full-Service ist der Rahmen (Konzept, Text, Launch, Hosting, Relaunch). Die Stärke ist [Webdesign](/leistungen/webdesign/) und [Webentwicklung](/leistungen/webentwicklung/): die Seite, die live steht und Anfragen bringt.',
		},
		{
			q: 'Für wen sind die Leistungen gedacht?',
			a: 'Für Handwerk, Studios und lokale Betriebe. Sitz in Gelnhausen, Projekte im Main-Kinzig-Kreis und in Frankfurt, Hanau und Offenbach. Einen Eindruck geben [Holzbau Oberlerchner](/referenzen/holzbau-oberlerchner/) und [D&E Elixier](/referenzen/de-elixier/).',
		},
		{
			q: 'Wie lange dauert ein Projekt?',
			a: 'Das hängt von Seitenumfang, Inhalten und ob ein Relaunch mitzieht. Im [30-Minuten-Call](/kontakt/) klären wir Ziel und groben Zeitrahmen, bevor ein Angebot entsteht. Es gibt keinen Standard-Baukasten mit Fixtermin.',
		},
		{
			q: 'Kann ich nur Design oder nur Entwicklung beauftragen?',
			a: 'Ja, wenn die andere Seite schon steht. Sinnvoll ist meist beides, weil Erscheinungsbild und Technik sonst auseinanderlaufen. Wir sagen im Gespräch ehrlich, ob nur eine Seite den Hebel hat.',
		},
	],
	webdesign: [
		{
			q: 'Woher weiß ich, ob Webdesign von 9to6 zu mir passt?',
			a: 'Wenn du keine Theme-Hülle willst, sondern einen Auftritt, der nach deinem Betrieb aussieht und zur Anfrage, zum Termin oder zum Kauf führt. Wir arbeiten mit dir an Struktur und Text, nicht an einem fertigen Baukasten.',
		},
		{
			q: 'Was ist im Webdesign enthalten, und was nicht?',
			a: 'Seitenbaum, Texte, Raster, Typografie, Komponenten, mobile Bedienung. Die live geschaltete Seite entsteht in der [Webentwicklung](/leistungen/webentwicklung/). Print (Logo, Banner, Karten) machen wir, wenn es zum Auftritt gehört, wie bei [Holzbau Oberlerchner](/referenzen/holzbau-oberlerchner/).',
		},
		{
			q: 'Wie berechnet 9to6 Webdesign?',
			a: 'Nach Aufwand und Ziel. Vor dem Kick-off gibt es ein Angebot mit Designrahmen, Seitenumfang und Terminen. Änderungen nach Freigabe rechnen wir transparent nach. Preise stehen nicht pauschal auf der Website.',
		},
		{
			q: 'Warum kein Baukasten oder Theme?',
			a: 'Ein Theme sieht schnell „fertig“ aus und verkauft trotzdem nicht. Typografie, Sprache und Handlung folgen bei uns aus dem Angebot, nicht aus einer Vorlage. Mehr dazu im Artikel [Warum deine Website keine Kunden bringt](/blog/warum-deine-website-keine-kunden-bringt/).',
		},
	],
	webentwicklung: [
		{
			q: 'Welche Technik setzt ihr ein?',
			a: 'Schlanke, moderne Webtechnik, die im Hintergrund bleibt. Für dich zählt das Ergebnis: kurze Ladezeiten, ein Anfrageweg, der ankommt, Seiten, die in der Suche bestehen. Den Stack wählen wir nach Aufgabe, nicht nach Trend.',
		},
		{
			q: 'Baut ihr noch mit WordPress?',
			a: 'Nicht als Standard. Viele Relaunches kommen von WordPress. Ziel ist eine schlankere, wartbare Seite mit einem Editor-Workflow, der zu dir passt, und mit Tempo, das Kunden nicht vertreibt.',
		},
		{
			q: 'Übernehmt ihr Hosting?',
			a: 'Ja, typischerweise über Cloudflare Pages: Build, Preview, HTTPS, weltweites CDN. Zugänge und Kosten stehen im Angebot. Alternativ arbeiten wir mit dem Hosting, das du schon hast, wenn es zur Aufgabe passt.',
		},
		{
			q: 'Was ändert sich nach dem Launch messbar?',
			a: 'Ladezeit, Erreichbarkeit der Handlung, Anfragen, die wirklich ankommen. Wie Tempo Sichtbarkeit beeinflusst, steht unter [Core Web Vitals und Google Ranking](/blog/core-web-vitals-und-google-ranking/). Zahlen aus fremden Cases versprechen wir nicht.',
		},
	],
} as const;

export const briefSteps = [
	{
		title: 'Gespräch',
		text: 'Ziel, Projektart und was schon online ist. 30 Minuten, du sprichst mit Eddie. Termin im Kalender oder eine kurze E-Mail.',
	},
	{
		title: 'Rahmen',
		text: 'Umfang, Budget und Zeitraum, bevor etwas gebaut wird. Danach ein Angebot. Auf der Website steht keine Preisliste.',
	},
	{
		title: 'Launch',
		text: 'Seite live, alte Adressen leiten um, Feinschliff nach den ersten echten Anfragen.',
	},
] as const;

export const processSteps = [
	{
		title: 'Gespräch',
		text: 'Ziel, Inhalt, was schon da ist. Ob Relaunch oder Neubau, klären wir bevor Raster oder Code entsteht.',
	},
	{
		title: 'Struktur',
		text: 'Seitenbaum, Botschaft, Handlung. Was jemand sucht, steht vorn. Was nur intern wichtig ist, rückt zurück.',
	},
	{
		title: 'Design',
		text: 'Typografie, Farbe, Komponenten. Die Seite sieht nach dir aus und führt zur Anfrage, nicht nur zum Scrollen.',
	},
	{
		title: 'Entwicklung',
		text: 'Tempo, Anfrageweg, mobile Bedienung, Metadaten. Design landet in der live Website, nicht in einer weggeworfenen Datei.',
	},
	{
		title: 'Launch',
		text: 'Redirects, Hosting, Feinschliff. Danach messen wir Anfragen und Ladezeit und schärfen nach, wo es hakt.',
	},
] as const;
