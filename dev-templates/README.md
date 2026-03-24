<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/logika-dark.png" />
    <source media="(prefers-color-scheme: light)" srcset=".github/logika-light.png" />
    <img alt="Logika.studio" src=".github/logika-dark.png" height="250" />
  </picture>
</p>

<h1 align="center">🧰 dev-templates</h1>

<p align="center">
  <strong>Template pronti per la produzione, riutilizzabili e open source.</strong><br/>
  Copia · Sostituisci i placeholder · Pubblica 🚀
</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="MIT License" />
  <img src="https://img.shields.io/badge/Next.js-14+-000?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss" alt="Tailwind" />
  <img src="https://img.shields.io/badge/TypeScript-✓-3178c6?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Framer_Motion-✓-ff0050?style=flat-square&logo=framer" alt="Framer Motion" />
</p>

<p align="center">
  <strong>🇮🇹 Italiano</strong> ·
  <a href="./README.en.md">🇬🇧 English</a> ·
  <a href="./README.fr.md">🇫🇷 Français</a> ·
  <a href="./README.de.md">🇩🇪 Deutsch</a> ·
  <a href="./README.es.md">🇪🇸 Español</a>
</p>

---

## 💡 Perché questa repo?

Ogni volta che inizi un nuovo progetto web, ci sono componenti che riscrivi da zero: **pagine legali**, **cookie banner**, **footer**, **form di contatto**…

**dev-templates** risolve questo problema. È una raccolta di template **pronti all'uso**, testati in produzione, che puoi copiare in qualsiasi progetto Next.js e personalizzare in pochi minuti.

| | Vantaggio |
|:-:|-----------|
| ⏱️ | **Risparmia tempo** — non riscrivere le stesse pagine per ogni cliente |
| ✅ | **Qualità garantita** — ogni template è stato usato in progetti reali |
| 🌍 | **Open source** — usalo gratis, contribuisci se vuoi, condividilo con il tuo team |
| 🔤 | **Placeholder system** — un semplice trova-e-sostituisci adatta tutto al tuo brand |

---

## 📦 Template disponibili

| | Template | Contenuto | Stack |
|:-:|----------|-----------|-------|
| 🛡️ | **[legal-pages](./legal-pages/)** | Pagine legali GDPR + cookie banner bloccante con consenso granulare | Next.js · Tailwind · Framer Motion |

> 🔜 **Altri template in arrivo.** Hai un'idea? [Apri una issue](../../issues) o una PR!

---

## 🚀 Quick Start

```bash
# 1️⃣  Clona la repo
git clone https://github.com/LuigiGarone/open-source.git

# 2️⃣  Copia il template che ti serve nel tuo progetto
cp -r open-source/dev-templates/legal-pages/components/ tuo-progetto/src/components/marketing/
cp -r open-source/dev-templates/legal-pages/pages/       tuo-progetto/src/app/(marketing)/

# 3️⃣  Sostituisci i placeholder (vedi il README di ogni template)
```

Ogni template usa **token placeholder** come `{{APP_NAME}}`, `{{COMPANY_NAME}}`, ecc.
Un solo passaggio di **trova-e-sostituisci** e sei pronto. ✨

---

## 📂 Struttura della repo

```
dev-templates/
├── 📄 README.md                  ← sei qui (+ EN, FR, DE, ES)
├── 📄 LICENSE                    ← MIT
├── 🖼️ .github/
│   ├── logika-dark.png
│   └── logika-light.png
└── 🛡️ legal-pages/
    ├── 📄 README.md              ← guida completa (+ EN, FR, DE, ES)
    ├── 📁 components/
    │   ├── CookieBanner.tsx      ← banner cookie bloccante
    │   └── LegalFooter.tsx       ← footer con link legali
    └── 📁 pages/
        ├── privacy.tsx           ← Privacy Policy (GDPR)
        ├── cookie-policy.tsx     ← Cookie Policy
        ├── legal.tsx             ← Note Legali
        ├── terms.tsx             ← Termini e Condizioni
        └── cmp.tsx               ← Preferenze Cookie (CMP)
```

---

## 🤝 Vuoi contribuire?

Hai trovato un bug o vuoi aggiungere un template? Le PR sono benvenute!

1. 🍴 Fai un **fork** della repo
2. 🌿 Crea un **branch** per la tua modifica (`git checkout -b feature/nome-template`)
3. ✏️ Effettua le modifiche e committa
4. 📬 Apri una **Pull Request**

> 💬 Se non sei sicuro di come procedere, apri prima una [issue](../../issues) per discuterne.

---

## 📜 Licenza

Distribuito con licenza **MIT** — libero per uso personale e commerciale.
Consulta il file [LICENSE](./LICENSE) per i dettagli.

---

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/logika-dark.png" />
    <source media="(prefers-color-scheme: light)" srcset=".github/logika-light.png" />
    <img alt="Logika.studio" src=".github/logika-dark.png" height="80" />
  </picture>
  <br/>
  <sub>Realizzato con ❤️ da <a href="https://logika.studio">Logika.studio</a></sub>
</p>
