# 9to6

Agentur-Website für **Webdesign und Webentwicklung** in Frankfurt / Rhein-Main. Moderne Websites, die neue Kunden anziehen und messbar Anfragen generieren. Visuell am Live-Auftritt [9to6.de](https://9to6.de) ausgerichtet.

## Lokal starten

Voraussetzung: Node.js 22 oder neuer.

```bash
npm install
cp .env.example .env
npm run dev
```

Der Dev-Server läuft auf **http://127.0.0.1:4347** (Port bewusst nicht 3000 / 5173 / 8080).

Ohne `PUBLIC_WEB3FORMS_ACCESS_KEY` simuliert das Kontaktformular im Dev-Modus nach der Validierung den Erfolg. So lassen sich leer, Fehler, Laden und Erfolg prüfen, ohne Daten an Dritte zu schicken.

## Kontaktformular (kein Cloudflare Worker)

Zustellung über [Web3Forms](https://web3forms.com): der Browser sendet das Formular per HTTPS an `https://api.web3forms.com/submit`. Kein eigener Worker, keine Pages Function nur fürs Formular.

1. Konto bei Web3Forms anlegen, Access Key kopieren.
2. Lokal in `.env` und bei Cloudflare Pages als Umgebungsvariable: `PUBLIC_WEB3FORMS_ACCESS_KEY`.
3. Zieladresse im Web3Forms-Dashboard auf `info@9to6.de` setzen.

Schutz: Pflichtfelder, Honeypot, kurze Zeitsperre, DSGVO-Hinweis bzw. Einwilligung auf der Kontaktseite. Leere Felder, Validierungsfehler, Ladezustand, Erfolg und Netzfehler haben eigene Texte.

## DSGVO

- Impressum und Datenschutzerklärung übernommen und an Hosting (Cloudflare Pages) plus Formular (Web3Forms) angepasst.
- Keine Google Fonts, keine Analytics, keine Social Plugins, kein Cookie-Banner (keine nicht notwendigen Cookies).
- Schriften: selbst gehostetes Montserrat (lateinischer Schnitt, Schnitte 400/500/600/700).

## Cloudflare Pages

Im Dashboard:

1. Repository verbinden.
2. Framework: Astro, Build-Befehl `npm run build`, Ausgabeverzeichnis `dist`.
3. Umgebungsvariable `PUBLIC_WEB3FORMS_ACCESS_KEY` setzen.
4. Custom Domain `9to6.de` auf das Projekt zeigen.

CLI, wenn wrangler eingeloggt ist:

```bash
npm run build
npx wrangler pages deploy dist
```

`astro.config.mjs` nutzt `@astrojs/cloudflare` mit `output: 'static'`. Das Formular bleibt clientseitig bei Web3Forms, unabhängig vom Adapter.

## Inhalt: übernommen vs. neu

Übernommen (Designsprache): dunkler Hero mit dezenter Violett-Atmosphäre, Glas-Karte, Montserrat in Versalien, Button `#4E22A8` / Hover `#9644D2`, Lavendel-Band, schwarze Abschlussfläche, Logo, Porträt, Impressum-Stammdaten.

Neu: Fokus auf Kundenergebnis (Anfragen, Conversion, Tempo) statt Framework-Pitch. Blog unter `/blog/`. Referenzen Holzbau Oberlerchner, D&E Elixier (`de-elixier.de`), sim.do, Simtasy. Keine Agentur-Lebenslaufseite.
