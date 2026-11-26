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
	sections: BlogSection[];
};

export const posts: BlogPost[] = [
	{
		slug: 'warum-deine-website-keine-kunden-bringt',
		title: 'Warum deine Website keine Kunden bringt',
		description:
			'Warum eine fertige Seite in Gelnhausen oder Frankfurt trotzdem keine Anfrage bringt, und was Oberlerchner und Elixier anders machen.',
		date: '2026-09-18',
		dateLabel: '18. September 2026',
		dateModified: '2026-11-26',
		dateModifiedLabel: '26. November 2026',
		hero: 'Eine Website, die fertig aussieht, ist noch keine, die Arbeit bringt. Der nächste Schritt muss in der ersten Ansicht stehen.',
		sections: [
			{
				heading: 'Fertig ist nicht dasselbe wie brauchbar',
				paragraphs: [
					'Viele Betriebe im Main-Kinzig-Kreis und in Frankfurt haben eine Website mit Foto, Leistungsliste und Impressum. Sie wirkt abgeschlossen. Trotzdem bleibt die Anfrage aus. Der Grund liegt selten an einem fehlenden Effekt. Die Seite hat nicht entschieden, wen sie überzeugen will und was dieser Mensch als Nächstes tun soll.',
					'Wer über die Suche kommt, hat schon eine Frage. In Gelnhausen ist das oft ein konkretes Gewerk, ein Termin vor Ort oder ein Angebot für ein Haus. In Frankfurt-Sachsenhausen ist es eine Behandlung, ein Standort, ein freier Termin. Wer die Antwort nicht in den ersten Sekunden sieht, geht zur nächsten Seite. Wer die Antwort sieht und keinen Weg zur Nachricht oder zum Termin findet, geht ebenfalls.',
				],
			},
			{
				heading: 'Was in der Region immer wieder fehlt',
				paragraphs: [
					'Lokale Seiten erzählen gern die Geschichte des Betriebs, bevor sie das Angebot nennen. Das Gebiet fehlt oder steht nur im Footer. Die Leistung, die jemand sucht, liegt in einem Fließtext ohne Überschrift. Auf dem Handy, zwischen zwei Terminen auf der Baustelle oder in der Bahn nach Hanau, ist die Seite eng, langsam oder unklar.',
					'Dazu kommt ein Kontaktweg, der nach einem internen Ablauf aussieht: acht Felder, ein Button mit „mehr erfahren“, eine Adresse ohne Zusammenhang zur Leistung. Für einen Betrieb in Gelnhausen, Offenbach oder Frankfurt reicht ein klarer Satz und ein kurzer Weg. Der Rest kann darunter stehen.',
				],
			},
			{
				heading: 'Holzbau Oberlerchner in Gelnhausen',
				paragraphs: [
					'Beim Holzbaubetrieb Oberlerchner war der Auftritt die Aufgabe, nicht ein einzelnes Bild. Konzept, Logo, Visitenkarten, Baubanner, Tafeln und die Website sollten dieselbe Linie haben. Auf der Seite stehen Dachbau, konstruktiver Holzbau, Terrassen und Carports so, dass jemand aus Gelnhausen und dem Main-Kinzig-Kreis sie ohne Umweg findet.',
					'Das Ergebnis ist kein erfundener Prozentsatz. Es ist eine erreichbare Seite: Leistungen und Gebiet in der ersten Ansicht, lesbar auf dem Handy. Wer den Fall im Detail sehen will, öffnet [Holzbau Oberlerchner](/referenzen/holzbau-oberlerchner/). Genau diese Klarheit fehlt vielen Seiten, die schon „online“ sind und trotzdem keine Anfrage erzeugen.',
				],
			},
			{
				heading: 'D&E Elixier in Frankfurt-Sachsenhausen',
				paragraphs: [
					'Ein Kosmetikinstitut verkauft Vertrauen und einen Termin. D&E Elixier in Frankfurt-Sachsenhausen brauchte eine Website, die Behandlungen und den Weg dorthin ruhig erklärt. Ein austauschbarer Look hätte nach einer Vorlage ausgesehen, nicht nach dem Institut.',
					'Im Relaunch sitzen Leistungen, Standort und Buchungsweg vorn. Gesichtsbehandlungen und Fußpflege sind für Menschen auffindbar, die in Frankfurt und der näheren Umgebung suchen. Der Fall steht unter [D&E Elixier](/referenzen/de-elixier/). Dasselbe Muster gilt für Studios in Offenbach oder Hanau: erst das Angebot, dann die Atmosphäre, dann ein kurzer nächster Schritt.',
				],
			},
			{
				heading: 'Vier Blocker, die wir in Audits sehen',
				paragraphs: [
					'Keiner dieser Punkte braucht einen neuen Slogan. Alle brauchen eine Reihenfolge, Tempo und eine Handlung. Wie aus dem Besuch eine Anfrage wird, steht unter [Aus Besuchern werden Anfragen](/blog/aus-besuchern-werden-anfragen/).',
				],
				list: [
					'Die Startseite erzählt die Firmengeschichte, bevor sie sagt, was du anbietest und für wen.',
					'Leistungen stehen im Fließtext. Gebiet, Ort und Umkreis fehlen in der Überschrift.',
					'Der nächste Schritt heißt „mehr erfahren“ und führt auf eine weitere Seite ohne Nachricht und ohne Termin.',
					'Die Seite lädt auf dem Smartphone so langsam, dass Menschen abspringen, bevor der Inhalt da ist. Dazu mehr unter [Ladezeit und Ranking](/blog/core-web-vitals-und-google-ranking/).',
				],
			},
			{
				heading: 'Was eine Seite ändern muss',
				paragraphs: [
					'Drei Dinge nacheinander: das Angebot in der ersten Bildschirmhöhe, ein Weg zur Handlung, Tempo genug, dass niemand wartet. Texte in der Sprache des Betriebs. Eine Seite für jede Leistung, die jemand wirklich sucht. Für 9to6 ist der Weg zum Gespräch ein Termin oder eine kurze E-Mail mit Projektart, Budget und Zeitraum. Auf deiner eigenen Seite kann der Weg ein Termin, eine Nachricht oder ein Kauf sein. Er muss mit dem Daumen erreichbar sein.',
					'Wie das Erscheinungsbild entsteht, steht unter [Webdesign](/leistungen/webdesign/). Wie Tempo und der technische Unterbau dazukommen, unter [Webentwicklung](/leistungen/webentwicklung/). Der Sitz von 9to6 ist Gelnhausen, die Projekte liegen im Main-Kinzig-Kreis und in Frankfurt, Hanau und Offenbach. Mehr zum Einzugsgebiet: [Webdesign Gelnhausen](/webdesign-gelnhausen/).',
				],
			},
			{
				heading: 'Nächster Schritt',
				paragraphs: [
					'Wenn deine Seite Besucher hat und keine Anfragen, lässt sich das anschauen, bevor etwas gebaut wird. Im [Termin](/kontakt/#kalender) oder per [kurzer E-Mail](/kontakt/#anfrage) reichen Projektart, ungefährer Rahmen und Zeitraum. Eddie antwortet selbst. Eine Preisliste steht hier nicht, weil der Umfang vorher unklar wäre.',
				],
			},
		],
	},
	{
		slug: 'core-web-vitals-und-google-ranking',
		title: 'Ladezeit, Core Web Vitals und lokale Sichtbarkeit',
		description:
			'Was Ladezeit für Betriebe in Gelnhausen, Hanau und Frankfurt bedeutet. Ohne Scores aus fremden Konten, mit dem, was ein Relaunch wirklich ändert.',
		date: '2026-09-18',
		dateLabel: '18. September 2026',
		dateModified: '2026-11-26',
		dateModifiedLabel: '26. November 2026',
		hero: 'Eine träge Seite verliert Menschen, bevor sie das Angebot lesen. Sichtbarkeit und Anfragen hängen an demselben Tempo.',
		sections: [
			{
				heading: 'Drei Messwerte, in Alltagssprache',
				paragraphs: [
					'Core Web Vitals sind drei Werte, mit denen Google einschätzt, ob eine Seite für Menschen brauchbar ist. Der erste: wie schnell der Hauptinhalt erscheint. Der zweite: wie schnell die Seite auf eine Eingabe reagiert. Der dritte: ob das Layout beim Laden springt und du danebentippst.',
					'Du musst die Kürzel nicht auswendig. Du musst wissen, dass eine springende, schwere Seite in der Suche schlechter dasteht und im Alltag Leute verliert. Wer in der S-Bahn zwischen Hanau und Frankfurt auf dem Handy sucht, wartet nicht auf ein Theme, das Dutzende Skripte nachlädt.',
				],
			},
			{
				heading: 'Warum das im Main-Kinzig-Kreis und in Frankfurt zählt',
				paragraphs: [
					'Eine lokale Suche ist ungeduldig. „Holzbau Gelnhausen“, „Kosmetik Sachsenhausen“, „Webdesign Offenbach“: die Person vergleicht drei Treffer in einer Minute. Der Treffer, der erst ein großes Bild und dann den Text zeigt, ist schon verloren, auch wenn die Leistung die richtige wäre.',
					'Für Handwerk kommt dazu das Gerät. Auf der Baustelle ist das Netz wechselhaft, das Display klein, die Zeit kurz. Eine Seite, die auf dem Schreibtisch noch „geht“, ist dort schon zu spät. Dasselbe gilt für ein Studio, dessen Termin auf dem Weg gebucht werden soll.',
				],
			},
			{
				heading: 'Was Seiten schwer macht',
				paragraphs: [
					'Die üblichen Gewichte sind vorhersehbar. Ein Screenshot oder ein Foto als unkomprimiertes PNG, oft über ein Megabyte, obwohl es auf dem Handy nur ein paar hundert Pixel breit ist. Ein Baukasten, der Schriften, Slider und Tracker lädt, bevor die Überschrift da ist. Dieselben Bilder ohne Breite und Höhe, sodass die Seite nach dem Laden nach unten springt.',
					'Bei [Holzbau Oberlerchner](/referenzen/holzbau-oberlerchner/) war Tempo Teil des Auftrags, zusammen mit der lokalen Sortierung. Die Seite soll auf dem Smartphone sofort lesbar sein. Wir veröffentlichen dafür keine Laborwerte aus einem fremden Konto. Sichtbar ist, dass Bilder in der richtigen Größe ankommen und der Inhalt nicht hinter einem Theme wartet. Wie aus Tempo eine Anfrage wird, steht unter [Warum Websites keine Kunden bringen](/blog/warum-deine-website-keine-kunden-bringt/).',
				],
			},
			{
				heading: 'Was ein Relaunch anfasst',
				paragraphs: [
					'Ballast weg, Bilder in passenden Größen, klare URLs, Metadaten, Weiterleitungen von alten Adressen. Der Anfrageweg so gelegt, dass er auf dem Telefon ausfüllbar ist und die Nachricht wirklich ankommt. Der technische Unterbau bleibt unsichtbar. Du merkst kürzere Wartezeit und eine Seite, die nicht springt.',
					'Hosting über ein Netz, das nah am Besucher ausliefert, gehört dazu. Den Rahmen beschreibt die [Webentwicklung](/leistungen/webentwicklung/). Erscheinungsbild und Reihenfolge davor beschreibt das [Webdesign](/leistungen/webdesign/). Beides aus Gelnhausen, für Betriebe im Main-Kinzig-Kreis und in Frankfurt, Hanau und Offenbach.',
				],
			},
			{
				heading: 'Was wir nicht behaupten',
				paragraphs: [
					'Schnelle Seiten allein machen kein Geschäft, wenn das Angebot unklar ist. Langsame Seiten machen ein gutes Angebot unsichtbar. Sichtbarkeit, Tempo und der nächste Schritt gehören zusammen. Wir messen nach dem Launch an deiner Seite. Wir setzen keine Ranglisten-Versprechen aus anderen Branchen auf deine Startseite.',
					'Feldwerte aus der Search Console gehören dem Betreiber der jeweiligen Website. 9to6 zitiert sie nicht als Werbung. Wenn etwas hakt, schärfen wir Bilder, Schriften, interne Links und den Weg zur Anfrage nach.',
				],
			},
			{
				heading: 'Nächster Schritt',
				paragraphs: [
					'Wenn deine aktuelle Seite schwer wirkt oder alte WordPress-Adressen noch im Index stehen, lässt sich das im Gespräch eingrenzen. [Termin wählen](/kontakt/#kalender) oder [kurz schreiben](/kontakt/#anfrage): Projektart, Budgetrahmen, Zeitraum. Danach siehst du, ob ein Relaunch der Hebel ist oder ob zuerst die Struktur fehlt.',
				],
			},
		],
	},
	{
		slug: 'aus-besuchern-werden-anfragen',
		title: 'Aus Besuchern werden Anfragen',
		description:
			'Wie aus einem Besuch eine Anfrage wird: Angebot, Beweis, Termin oder kurze E-Mail. Beispiele aus Gelnhausen und Frankfurt-Sachsenhausen.',
		date: '2026-09-18',
		dateLabel: '18. September 2026',
		dateModified: '2026-11-26',
		dateModifiedLabel: '26. November 2026',
		hero: 'Besuch ohne Anfrage ist teure Dekoration. Die Seite muss den nächsten Schritt anbieten, nicht nur vorhanden sein.',
		sections: [
			{
				heading: 'Eine Anfrage ist eine konkrete Handlung',
				paragraphs: [
					'Eine Anfrage heißt: ein Mensch tut das, wofür die Seite da ist. Er schreibt, bucht einen Termin oder kauft. Dafür braucht es kein dunkles Muster. Es braucht ein Angebot in einem Satz, einen Beleg, der ohne Floskel auskommt, und einen Weg, der auf dem Telefon so kurz ist wie am Schreibtisch.',
					'Für 9to6 sind das zwei Wege. Ein Termin über den Kalender, wenn du schon 30 Minuten sprechen willst. Eine E-Mail, wenn du zuerst Projektart, Budget und Zeitraum schicken willst. Beides führt zu Eddie. Ein anonymer Anruf ist kein Weg, den wir in den Vordergrund stellen.',
				],
			},
			{
				heading: 'Die erste Ansicht entscheidet',
				paragraphs: [
					'Oben gehören Nutzen, für wen die Seite ist, und die Handlung hin. Für einen Betrieb in Gelnhausen ist das die Leistung plus das Gebiet. Für ein Institut in Frankfurt ist es die Behandlung plus der Standort. Eine Begrüßung ohne Inhalt verbraucht die einzige Stelle, an der noch alle lesen.',
					'Darunter kommen die Leistungen, die jemand sucht, und die Antworten auf die üblichen Einwände: Ablauf, Radius, was der erste Schritt kostet an Zeit. Wie diese erste Ansicht gestaltet wird, steht unter [Webdesign](/leistungen/webdesign/).',
				],
			},
			{
				heading: 'Beweis vor dem Termin',
				paragraphs: [
					'Wer einen Termin buchen soll, will vorher sehen, dass Vergleichbares schon live ist. Zwei Kundenprojekte tragen das bei 9to6. [Holzbau Oberlerchner](/referenzen/holzbau-oberlerchner/) in Gelnhausen: Logo, Print und eine Website, die Leistungen und Gebiet sortiert. [D&E Elixier](/referenzen/de-elixier/) in Frankfurt-Sachsenhausen: ein Relaunch, bei dem Behandlung und Terminweg vorn stehen.',
					'Diese beiden stehen bewusst vor dem Kalender. Wer nur die eigenen Produkte sehen will: sim.do und Simtasy gehören Eddie. Sie zeigen, wie eine Produktstrecke gebaut ist. Sie sind keine Kundenreferenz aus dem Main-Kinzig-Kreis oder aus Frankfurt und stehen deshalb in einer eigenen Gruppe unter [Referenzen](/referenzen/).',
				],
			},
			{
				heading: 'Drei Angaben, damit die Anfrage echt ist',
				paragraphs: [
					'Eine Nachricht ohne Kontext ist schwer zu beantworten. Drei Angaben reichen: was gebaut werden soll, welcher Budgetrahmen ungefähr passt, wann es losgehen soll. Das ist keine Preisliste. Es filtert Vorhaben, die noch keine sind, und spart beiden Seiten ein leeres Gespräch.',
					'Auf der Kundenseite gilt dasselbe Prinzip, nur mit den Feldern, die der Betrieb wirklich braucht. Ein langes Pflichtformular vor dem ersten Satz ist eine Hürde. Ein klares Feld, das auf dem Handy ausfüllbar ist und dessen Nachricht ankommt, ist der Weg. Fehler müssen sichtbar sein. Nach dem Senden darf niemand im Leeren landen.',
					'Den Text dazu, warum Seiten trotz Besuch leer bleiben, findest du unter [Warum deine Website keine Kunden bringt](/blog/warum-deine-website-keine-kunden-bringt/).',
				],
			},
			{
				heading: 'Gebiet nennen, ohne eine Stadtseite pro Ort zu bauen',
				paragraphs: [
					'9to6 sitzt in der Rhönstraße 95 in Gelnhausen. Der Kern ist Gelnhausen und der Main-Kinzig-Kreis. Frankfurt, Hanau und Offenbach sind die weitere Umgebung, kein zweites Büro. Eine eigene dünne Seite für jeden Ort würde dasselbe versprechen und nichts belegen.',
					'Stattdessen steht das Gebiet in den Leistungsseiten, in den Fällen und auf einer Seite, die den Radius erklärt: [Webdesign in Gelnhausen](/webdesign-gelnhausen/). Hanau und Offenbach kommen dort vor, weil die Zusammenarbeit dorthin reicht, nicht weil jede Stadt eine Kopie braucht.',
				],
			},
			{
				heading: 'Nächster Schritt',
				paragraphs: [
					'Wenn du einen Auftritt willst, der Anfragen erzeugt, bring die drei Angaben mit. [Termin wählen](/kontakt/#kalender) oder [kurz schreiben](/kontakt/#anfrage). Eddie sagt dir, ob Design, Entwicklung oder beides der Hebel ist, bevor Code entsteht.',
				],
			},
		],
	},
];

export function getPost(slug: string) {
	return posts.find((post) => post.slug === slug);
}
