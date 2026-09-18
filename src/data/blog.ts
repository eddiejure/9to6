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
	reading: string;
	hero: string;
	sections: BlogSection[];
};

export const posts: BlogPost[] = [
	{
		slug: 'warum-deine-website-keine-kunden-bringt',
		title: 'Warum deine Website keine Kunden bringt',
		description:
			'Die meisten Unternehmensseiten sehen anständig aus und verkaufen trotzdem nicht. Was Anfragen blockiert, und wie 9to6 in Frankfurt das ändert.',
		date: '2026-09-18',
		dateLabel: '18. September 2026',
		reading: '6 Min. Lesezeit',
		hero: 'Schön ist nicht genug. Eine Website muss den nächsten Schritt so klar machen, dass aus Besuch Anfrage wird.',
		sections: [
			{
				heading: 'Das Problem sitzt selten im Logo',
				paragraphs: [
					'Viele Betriebe in Frankfurt und Rhein-Main haben eine Website, die „fertig“ wirkt: Fotos, Leistungen, Impressum. Trotzdem bleibt das Telefon ruhig. Der Grund ist selten fehlendes Budget für Animationen. Der Grund ist, dass die Seite nicht entscheidet, wen sie überzeugen will und was danach passieren soll.',
					'Besucher kommen mit einer Frage. Wer in drei Sekunden keine Antwort findet, geht. Wer eine Antwort findet, aber keinen klaren Weg zu Anruf, Formular oder Termin, geht ebenfalls.',
				],
			},
			{
				heading: 'Vier typische Blocker',
				paragraphs: [
					'Diese Muster sehen wir in Audits immer wieder. Keines davon braucht einen neuen Slogan. Alle brauchen Struktur, Tempo und klare Handlung.',
				],
				list: [
					'Die Startseite erzählt die Firmengeschichte, bevor sie das Angebot nennt.',
					'Leistungen stehen in Fließtext, ohne dass klar wird, für wen sie gedacht sind.',
					'Das Formular ist versteckt, das Telefon nur im Footer, der Button sagt „mehr erfahren“ statt „Anfrage senden“.',
					'Die Seite lädt auf dem Smartphone so langsam, dass Google und Menschen abspringen, bevor Inhalt da ist.',
				],
			},
			{
				heading: 'Was messbar hilft',
				paragraphs: [
					'Eine Website, die Kunden bringt, macht drei Dinge nacheinander: sie macht das Angebot in der ersten Bildschirmhöhe verständlich, sie führt zur Handlung, und sie ist schnell genug, dass niemand wartet.',
					'Texte in der Sprache des Betriebs. Seiten für jede Leistung, die jemand wirklich sucht. Ein Kontaktweg, der auf Mobilgeräten mit dem Daumen erreichbar ist. Danach messen wir Anfragen, nicht nur Sessions.',
				],
			},
			{
				heading: 'Nächster Schritt',
				paragraphs: [
					'Wenn deine aktuelle Seite Besucher hat, aber keine Anfragen, ist das kein Schicksal. 9to6 schaut sich Technik, Inhalt und Weg zur Handlung an und sagt dir, was sich lohnt, bevor Code geschrieben wird.',
				],
			},
		],
	},
	{
		slug: 'core-web-vitals-und-google-ranking',
		title: 'Core Web Vitals und Google Ranking',
		description:
			'Warum Ladezeit, Stabilität und Bedienung über Sichtbarkeit und Umsatz entscheiden. Ohne Fachchinesisch, mit Blick auf Anfragen.',
		date: '2026-09-18',
		dateLabel: '18. September 2026',
		reading: '7 Min. Lesezeit',
		hero: 'Google misst, wie sich deine Seite anfühlt. Langsam heißt unsichtbar. Unsichtbar heißt weniger Geschäft.',
		sections: [
			{
				heading: 'Was Core Web Vitals für dich bedeuten',
				paragraphs: [
					'Core Web Vitals sind drei Messwerte, die Google nutzt, um zu bewerten, ob eine Seite für Menschen taugt: Wie schnell der Hauptinhalt erscheint, wie schnell die Seite auf Eingaben reagiert, und ob das Layout während des Ladens springt.',
					'Du musst die Kürzel nicht merken. Du musst merken, dass eine träge, springende Seite in der Suche verliert und im Alltag Kunden kostet. Wer auf dem Handy in der S-Bahn auf dich stößt, wartet nicht auf ein Theme, das 40 Skripte nachlädt.',
				],
			},
			{
				heading: 'Ladezeit ist Umsatz',
				paragraphs: [
					'Jede zusätzliche Sekunde senkt die Chance, dass jemand bleibt. Das gilt für Shops, und es gilt für Handwerk, Studios und B2B. Eine Anfrage, die nicht abgeschickt wird, weil das Formular erst nach dem dritten Scroll erscheint, ist verloren.',
					'Deshalb bauen wir Seiten so, dass Inhalt zuerst da ist. Bilder in der richtigen Größe. Keine Tracker, die das Rendern blockieren. Hosting nah an den Nutzerinnen und Nutzern. Das Ergebnis siehst du in der Search Console und im Kalender.',
				],
			},
			{
				heading: 'Ranking folgt der Nutzbarkeit',
				paragraphs: [
					'Schnelle Seiten allein machen kein Geschäft, wenn das Angebot unklar ist. Aber langsame Seiten machen gutes Angebot unsichtbar. Sichtbarkeit, Tempo und Conversion gehören zusammen.',
					'Wir messen nach dem Launch, nicht nur vor dem Pitch. Wenn etwas hakt, schärfen wir nach: Bilder, Schriften, Formulare, interne Links.',
				],
			},
			{
				heading: 'Was 9to6 konkret ändert',
				paragraphs: [
					'Im Relaunch entfernen wir Ballast, setzen klare URLs und Metadaten, und legen Formulare so, dass sie Anfragen wirklich zustellen. Die Technik bleibt unsichtbar. Du siehst kürzere Ladezeiten und mehr abgeschickte Anfragen.',
				],
			},
		],
	},
	{
		slug: 'aus-besuchern-werden-anfragen',
		title: 'Aus Besuchern werden Anfragen',
		description:
			'Conversion auf Unternehmenswebsites: klare Angebote, starke Formulare, messbares Wachstum. Praxis aus Frankfurt und Rhein-Main.',
		date: '2026-09-18',
		dateLabel: '18. September 2026',
		reading: '6 Min. Lesezeit',
		hero: 'Traffic ohne Anfragen ist teure Dekoration. Die Seite muss verkaufen, nicht nur vorhanden sein.',
		sections: [
			{
				heading: 'Conversion ist kein Trick',
				paragraphs: [
					'Conversion heißt: ein Mensch tut das, wofür die Seite da ist. Anrufen, schreiben, buchen, kaufen. Dafür braucht es kein dunkles Pattern. Es braucht ein Angebot, das in einem Satz steht, Vertrauen, das ohne Floskeln auskommt, und einen Weg, der auf dem Telefon genauso kurz ist wie am Schreibtisch.',
				],
			},
			{
				heading: 'Die erste Bildschirmhöhe entscheidet',
				paragraphs: [
					'Oben gehören Nutzen, Zielgruppe und Handlung hin. Nicht das Teamfoto von 2014, nicht eine Slider-Show, nicht „Willkommen auf unserer Homepage“.',
					'Darunter Leistungen, die jemand sucht, Belege aus der Region, und Antworten auf Einwände: Ablauf, Radius, Erstgespräch. Referenzen, die du öffnen kannst, schlagen Behauptungen.',
				],
			},
			{
				heading: 'Formulare, die ankommen',
				paragraphs: [
					'Ein Formular mit acht Pflichtfeldern vor dem ersten Gespräch ist eine Hürde. Name und Telefon reichen oft für den Rückruf. Pflicht ist, dass die Nachricht ankommt, dass Fehler klar sind, und dass niemand nach dem Senden ins Leere fällt.',
					'Wir bauen Formulare so, dass sie auf Mobilgeräten ausfüllbar sind, dass leere Felder erklärt werden, und dass du merkst, wenn etwas schiefgeht.',
				],
			},
			{
				heading: 'Wachstum, das man zählen kann',
				paragraphs: [
					'Nach dem Launch zählen Anfragen, nicht nur Aufrufe. Wenn etwas nicht läuft, ändern wir Überschrift, Reihenfolge oder den Kontaktweg. 9to6 in Frankfurt arbeitet darauf hin, dass die Website ein Vertriebsmitarbeiter ist, der nie Feierabend hat.',
				],
			},
		],
	},
];

export function getPost(slug: string) {
	return posts.find((post) => post.slug === slug);
}
