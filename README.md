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

## Termine

Erstgespräche laufen über [Cal.com](https://cal.com/eddiejure/30min): 30-Minuten-Call. Auf `/kontakt/` als eingebetteter Kalender mit Zwei-Klick-Lösung: Cal.com lädt erst nach Klick auf „Freie Termine anzeigen“ oder wenn die Seite über einen Termin-Button (`#kalender`) geöffnet wird.

## DSGVO

- Impressum und Datenschutzerklärung an Hosting (Cloudflare Pages) und Terminbuchung (Cal.com) angepasst.
- Keine Google Fonts, keine Analytics, keine Social Plugins, kein Cookie-Banner (die Seite setzt selbst keine Cookies; Cal.com lädt erst nach Klick).
- Schriften: selbst gehostetes Montserrat (lateinischer Schnitt, Schnitte 400/500/600/700).

## Cloudflare Pages

Im Dashboard:

1. Repository verbinden.
2. Framework: Astro, Build-Befehl `npm run build`, Ausgabeverzeichnis `dist/client`.
3. Custom Domain `9to6.de` auf das Projekt zeigen.

CLI, wenn wrangler eingeloggt ist:

```bash
npm run build
npx wrangler pages deploy dist/client --project-name 9to6
```

`astro.config.mjs` nutzt `@astrojs/cloudflare` mit `output: 'static'`.

## Inhalt: übernommen vs. neu

Designsprache: dunkler Grund mit violetter Atmosphäre, Montserrat mit enger Laufweite und Satzschreibung in Überschriften (Versalien nur für kleine Labels), Pill-Buttons im Verlauf `#4E22A8` → `#9644D2`, dunkle Glas-Karten. Alle Tokens stehen oben in `src/styles/global.css`.

SEO/GEO: Jede FAQ steht nur auf einer Seite (keine doppelten FAQPage-Inhalte). `public/llms.txt` und `public/llms-full.txt` fassen die Fakten für KI-Assistenten zusammen. Social-Share-Bild: `public/images/og-9to6.jpg`.

Neu: Fokus auf Kundenergebnis (Anfragen, Conversion, Tempo) statt Framework-Pitch. Blog unter `/blog/`. Referenzen Holzbau Oberlerchner, D&E Elixier (`de-elixier.de`), sim.do, Simtasy. Keine Agentur-Lebenslaufseite.
