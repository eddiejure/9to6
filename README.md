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

Erstgespräche laufen über [Cal.com](https://cal.com/eddiejure/30min): 30-Minuten-Call. Auf der Startseite als Button, auf `/kontakt/` als eingebetteter Kalender.

## DSGVO

- Impressum und Datenschutzerklärung an Hosting (Cloudflare Pages) und Terminbuchung (Cal.com) angepasst.
- Keine Google Fonts, keine Analytics, keine Social Plugins, kein Cookie-Banner (keine nicht notwendigen Cookies).
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

Übernommen (Designsprache): dunkler Hero mit dezenter Violett-Atmosphäre, Glas-Karte, Montserrat in Versalien, Button `#4E22A8` / Hover `#9644D2`, Lavendel-Band, schwarze Abschlussfläche, Logo, Porträt, Impressum-Stammdaten.

Neu: Fokus auf Kundenergebnis (Anfragen, Conversion, Tempo) statt Framework-Pitch. Blog unter `/blog/`. Referenzen Holzbau Oberlerchner, D&E Elixier (`de-elixier.de`), sim.do, Simtasy. Keine Agentur-Lebenslaufseite.
