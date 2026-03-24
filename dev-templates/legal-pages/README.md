<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="../.github/logika-dark.png" />
    <source media="(prefers-color-scheme: light)" srcset="../.github/logika-light.png" />
    <img alt="Logika.studio" src="../.github/logika-dark.png" height="250" />
  </picture>
</p>

<h1 align="center">🛡️ Legal Pages Template</h1>

<p align="center">
  <strong>Pagine legali GDPR-compliant + cookie banner bloccante per progetti Next.js.</strong><br/>
  Copia · Sostituisci 7 placeholder · Pubblica 🚀
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14+-000?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Framer_Motion-✓-ff0050?style=flat-square&logo=framer" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/GDPR-compliant-16a34a?style=flat-square" alt="GDPR" />
</p>

<p align="center">
  <strong>🇮🇹 Italiano</strong> ·
  <a href="./README.en.md">🇬🇧 English</a> ·
  <a href="./README.fr.md">🇫🇷 Français</a> ·
  <a href="./README.de.md">🇩🇪 Deutsch</a> ·
  <a href="./README.es.md">🇪🇸 Español</a>
</p>

---

## 📋 Indice

- [Cosa include](#-cosa-include)
- [Requisiti](#-requisiti)
- [Placeholder](#-placeholder)
- [Integrazione passo-passo](#-integrazione-passo-passo)
- [Comportamento del Cookie Banner](#-comportamento-del-cookie-banner)
- [Personalizzazione](#-personalizzazione)
- [FAQ](#-faq)
- [Licenza](#-licenza)

---

## 📁 Cosa include

| File | Descrizione |
|------|-------------|
| `components/CookieBanner.tsx` | 🍪 Banner bloccante fullscreen con consenso granulare (tecnici / analitici / marketing) |
| `components/LegalFooter.tsx` | 🦶 Sezione footer con link alle pagine legali |
| `pages/privacy.tsx` | 🔒 Privacy Policy (GDPR) |
| `pages/cookie-policy.tsx` | 🍪 Cookie Policy |
| `pages/legal.tsx` | ⚖️ Note Legali |
| `pages/terms.tsx` | 📃 Termini e Condizioni |
| `pages/cmp.tsx` | ⚙️ Pagina Preferenze Cookie con toggle per categoria |

---

## ⚙️ Requisiti

```bash
npm install framer-motion lucide-react
```

| Dipendenza | Versione | Perché |
|------------|----------|--------|
| **Next.js** | 14+ | App Router |
| **Tailwind CSS** | v4 | Stile utility-first |
| **framer-motion** | qualsiasi | Animazioni banner |
| **lucide-react** | qualsiasi | Icone SVG |

---

## 🔤 Placeholder

Cerca e sostituisci questi **7 token** in tutti i file:

| Token | Cosa rappresenta | Esempio |
|-------|-------------------|---------|
| `{{APP_NAME}}` | Nome della tua app/prodotto | `La Mia App` |
| `{{COMPANY_NAME}}` | Ragione sociale | `Acme Srl` |
| `{{COMPANY_ADDRESS}}` | Sede legale | `Via Roma 1, 00100 Roma (RM)` |
| `{{CONTACT_EMAIL}}` | Email contatto privacy/legale | `privacy@acme.it` |
| `{{DOMAIN}}` | Dominio del sito | `acme.it` |
| `{{BRAND_COLOR}}` | Nome colore Tailwind per gli accenti | `orange`, `rose`, `blue` |
| `{{STORAGE_KEY}}` | Chiave localStorage per il consenso cookie | `acme_cookie_consent` |

### ⚡ Sostituzione rapida

**Linux / Mac:**

```bash
# Sostituisci tutti i placeholder in un colpo solo
grep -rl '{{APP_NAME}}' . | xargs sed -i 's/{{APP_NAME}}/La Mia App/g'
grep -rl '{{COMPANY_NAME}}' . | xargs sed -i 's/{{COMPANY_NAME}}/Acme Srl/g'
grep -rl '{{COMPANY_ADDRESS}}' . | xargs sed -i "s/{{COMPANY_ADDRESS}}/Via Roma 1, 00100 Roma (RM)/g"
grep -rl '{{CONTACT_EMAIL}}' . | xargs sed -i 's/{{CONTACT_EMAIL}}/privacy@acme.it/g'
grep -rl '{{DOMAIN}}' . | xargs sed -i 's/{{DOMAIN}}/acme.it/g'
grep -rl '{{BRAND_COLOR}}' . | xargs sed -i 's/{{BRAND_COLOR}}/orange/g'
grep -rl '{{STORAGE_KEY}}' . | xargs sed -i 's/{{STORAGE_KEY}}/acme_cookie_consent/g'
```

**Oppure** usa il **trova-e-sostituisci globale** del tuo IDE (`Ctrl+Shift+H` in VS Code). 🔍

---

## 🏗️ Integrazione passo-passo

### Passo 1 — 📂 Copia i file

```
tuo-progetto/
├── src/
│   ├── components/marketing/
│   │   ├── CookieBanner.tsx        ← da components/
│   │   └── LegalFooter.tsx         ← da components/
│   └── app/
│       ├── layout.tsx              ← aggiungi <CookieBanner /> qui
│       └── (marketing)/
│           ├── layout.tsx          ← il tuo layout marketing (header + footer)
│           ├── privacy/page.tsx
│           ├── cookie-policy/page.tsx
│           ├── legal/page.tsx
│           ├── termini-e-condizioni/page.tsx
│           └── cmp/page.tsx
```

### Passo 2 — 🧩 Aggiungi CookieBanner al root layout

```tsx
// src/app/layout.tsx
import CookieBanner from "@/components/marketing/CookieBanner";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
```

### Passo 3 — 🔤 Sostituisci i placeholder

Fai il **trova-e-sostituisci** dei 7 token (vedi [tabella sopra](#-placeholder)).

### Passo 4 — ✅ Fatto!

Pubblica. Il banner comparirà automaticamente alla prima visita. 🎉

---

## 🍪 Comportamento del Cookie Banner

```
L'utente arriva sulla pagina
       │
  ┌────▼──────────────────────────────┐
  │  🔒 Overlay fullscreen (bloccante)│
  │                                    │
  │  ┌──────────────────────────────┐  │
  │  │  "Rifiuta"    "Accetta Tutti"│  │
  │  │                              │  │
  │  │  ▸ Personalizza le scelte   │  │
  │  │    ┌─ 🟢 Tecnici  [sempre] ─┐│  │
  │  │    ├─ 🔵 Analitici [toggle]─┤│  │
  │  │    ├─ 🟣 Marketing [toggle]─┤│  │
  │  │    └─ [Salva preferenze]  ──┘│  │
  │  └──────────────────────────────┘  │
  └────────────────────────────────────┘
       │
  💾 Scelta salvata in localStorage
  ✅ Il banner non riappare più
```

| Caratteristica | Dettaglio |
|----------------|-----------|
| 🔒 **Bloccante** | Overlay scuro che impedisce qualsiasi interazione con la pagina |
| ⚡ **3 azioni rapide** | Rifiuta opzionali · Accetta tutti · Personalizza |
| 🎚️ **Toggle granulari** | Tecnici (sempre attivi) · Analitici · Marketing |
| 💾 **Persistenza** | JSON in `localStorage` con chiave `{{STORAGE_KEY}}` |
| 🔄 **Pagina CMP** | Gli utenti possono modificare le preferenze in seguito su `/cmp` |
| 🎨 **Animazioni** | Entrata/uscita fluida con Framer Motion |

---

## 🎨 Personalizzazione

### Colori

Il template usa `{{BRAND_COLOR}}` come variabile per il colore di accento. Sostituiscilo con qualsiasi colore Tailwind:

| Colore | Esempio |
|--------|---------|
| `orange` | 🟠 Arancione (default in molti progetti) |
| `blue` | 🔵 Blu |
| `rose` | 🌹 Rosa |
| `emerald` | 🟢 Verde |
| `violet` | 🟣 Viola |

### Stile del banner

Il banner usa classi Tailwind standard. Per personalizzarlo:

- **Sfondo**: modifica `bg-neutral-900` in `CookieBanner.tsx`
- **Bordi**: modifica `border-neutral-800`
- **Border radius**: modifica `rounded-2xl`
- **Larghezza massima**: modifica `max-w-4xl`

### Contenuto delle pagine legali

I testi sono volutamente **generici e templated**. Personalizzali in base alla tua attività specifica, al tipo di dati trattati e alla giurisdizione applicabile.

> ⚠️ **Disclaimer**: questi template non sostituiscono la consulenza legale. Falli revisionare dal tuo consulente prima di pubblicarli in produzione.

---

## ❓ FAQ

<details>
<summary><strong>Posso usarlo in un progetto commerciale?</strong></summary>

Sì! La licenza MIT permette l'uso sia personale che commerciale, senza limitazioni.
</details>

<details>
<summary><strong>Funziona con il Pages Router di Next.js?</strong></summary>

Il template è ottimizzato per l'**App Router** (Next.js 14+). Per il Pages Router dovrai adattare la struttura dei file (da `app/` a `pages/`), ma i componenti React sono gli stessi.
</details>

<details>
<summary><strong>Posso usare un colore custom non presente in Tailwind?</strong></summary>

Sì, basta definire il colore nel tuo `tailwind.config.ts` e usare quel nome come `{{BRAND_COLOR}}`.
</details>

<details>
<summary><strong>Il banner blocca gli script di terze parti (Analytics, GTM)?</strong></summary>

Il banner gestisce il **consenso visivo** e salva la scelta in localStorage. Per bloccare effettivamente gli script, devi condizionarne il caricamento leggendo il valore di `localStorage` nel tuo layout o tramite un tag manager.
</details>

<details>
<summary><strong>Posso aggiungere altre categorie di cookie?</strong></summary>

Sì! Estendi l'interfaccia `CookiePreferences` in `CookieBanner.tsx` e `cmp.tsx` aggiungendo i campi necessari, poi aggiungi i toggle corrispondenti nel JSX.
</details>

---

## 📜 Licenza

**MIT** — usalo liberamente in qualsiasi progetto.
Consulta il file [LICENSE](../LICENSE) per i dettagli.

---

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="../.github/logika-dark.png" />
    <source media="(prefers-color-scheme: light)" srcset="../.github/logika-light.png" />
    <img alt="Logika.studio" src="../.github/logika-dark.png" height="80" />
  </picture>
  <br/>
  <sub>Realizzato con ❤️ da <a href="https://logika.studio">Logika.studio</a></sub>
</p>
