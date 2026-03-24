<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="../.github/logika-dark.png" />
    <source media="(prefers-color-scheme: light)" srcset="../.github/logika-light.png" />
    <img alt="Logika.studio" src="../.github/logika-dark.png" height="140" />
  </picture>
</p>

<h1 align="center">🛡️ Legal Pages Template</h1>

<p align="center">
  <strong>DSGVO-konforme Rechtsseiten + blockierendes Cookie-Banner für Next.js-Projekte.</strong><br/>
  Kopieren · 7 Platzhalter ersetzen · Veröffentlichen 🚀
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14+-000?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Framer_Motion-✓-ff0050?style=flat-square&logo=framer" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/DSGVO-konform-16a34a?style=flat-square" alt="DSGVO" />
</p>

<p align="center">
  <a href="./README.md">🇮🇹 Italiano</a> ·
  <a href="./README.en.md">🇬🇧 English</a> ·
  <a href="./README.fr.md">🇫🇷 Français</a> ·
  <strong>🇩🇪 Deutsch</strong> ·
  <a href="./README.es.md">🇪🇸 Español</a>
</p>

---

## 📁 Inhalt

| Datei | Beschreibung |
|-------|-------------|
| `components/CookieBanner.tsx` | 🍪 Blockierendes Vollbild-Banner mit granularer Zustimmung (technisch / analytisch / marketing) |
| `components/LegalFooter.tsx` | 🦶 Footer-Bereich mit rechtlichen Links |
| `pages/privacy.tsx` | 🔒 Datenschutzerklärung (DSGVO) |
| `pages/cookie-policy.tsx` | 🍪 Cookie-Richtlinie |
| `pages/legal.tsx` | ⚖️ Impressum |
| `pages/terms.tsx` | 📃 Allgemeine Geschäftsbedingungen |
| `pages/cmp.tsx` | ⚙️ Cookie-Einstellungen mit Toggles pro Kategorie |

---

## ⚙️ Voraussetzungen

```bash
npm install framer-motion lucide-react
```

| Abhängigkeit | Version | Warum |
|---------------|---------|-------|
| **Next.js** | 14+ | App Router |
| **Tailwind CSS** | v4 | Utility-first Styling |
| **framer-motion** | beliebig | Banner-Animationen |
| **lucide-react** | beliebig | SVG-Icons |

---

## 🔤 Platzhalter

Suchen und ersetzen Sie diese **7 Tokens** in allen Dateien:

| Token | Beschreibung | Beispiel |
|-------|-------------|----------|
| `{{APP_NAME}}` | Name Ihrer App | `Meine App` |
| `{{COMPANY_NAME}}` | Firmenname | `Acme GmbH` |
| `{{COMPANY_ADDRESS}}` | Firmensitz | `Musterstr. 1, 10115 Berlin` |
| `{{CONTACT_EMAIL}}` | Datenschutz-Kontakt | `datenschutz@acme.de` |
| `{{DOMAIN}}` | Website-Domain | `acme.de` |
| `{{BRAND_COLOR}}` | Tailwind-Farbname | `orange`, `rose`, `blue` |
| `{{STORAGE_KEY}}` | localStorage-Schlüssel | `acme_cookie_consent` |

---

## 🏗️ Integration

### Schritt 1 — 📂 Dateien kopieren

```
ihr-projekt/
├── src/
│   ├── components/marketing/
│   │   ├── CookieBanner.tsx        ← aus components/
│   │   └── LegalFooter.tsx         ← aus components/
│   └── app/
│       ├── layout.tsx              ← <CookieBanner /> hier hinzufügen
│       └── (marketing)/
│           ├── privacy/page.tsx
│           ├── cookie-policy/page.tsx
│           ├── legal/page.tsx
│           ├── agb/page.tsx
│           └── cmp/page.tsx
```

### Schritt 2 — 🧩 CookieBanner zum Root-Layout hinzufügen

```tsx
import CookieBanner from "@/components/marketing/CookieBanner";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
```

### Schritt 3 — 🔤 Platzhalter ersetzen

### Schritt 4 — ✅ Fertig!

Veröffentlichen. Das Banner erscheint automatisch beim ersten Besuch. 🎉

---

## 🍪 Verhalten des Cookie-Banners

| Merkmal | Detail |
|---------|--------|
| 🔒 **Blockierend** | Dunkles Overlay verhindert jede Seiteninteraktion |
| ⚡ **3 schnelle Aktionen** | Ablehnen · Alle akzeptieren · Anpassen |
| 🎚️ **Granulare Toggles** | Technisch (immer aktiv) · Analytisch · Marketing |
| 💾 **Persistenz** | JSON in `localStorage` |
| 🔄 **CMP-Seite** | Einstellungen jederzeit änderbar unter `/cmp` |

---

## 📜 Lizenz

**MIT** — frei für persönliche und kommerzielle Nutzung.

---

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="../.github/logika-dark.png" />
    <source media="(prefers-color-scheme: light)" srcset="../.github/logika-light.png" />
    <img alt="Logika.studio" src="../.github/logika-dark.png" height="44" />
  </picture>
  <br/>
  <sub>Erstellt mit ❤️ von <a href="https://logika.studio">Logika.studio</a></sub>
</p>
