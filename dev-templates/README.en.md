<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/logika-dark.png" />
    <source media="(prefers-color-scheme: light)" srcset=".github/logika-light.png" />
    <img alt="Logika.studio" src=".github/logika-dark.png" height="60" />
  </picture>
</p>

<h1 align="center">🧰 dev-templates</h1>

<p align="center">
  <strong>Production-ready, reusable, open source templates.</strong><br/>
  Copy · Replace placeholders · Ship 🚀
</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="MIT License" />
  <img src="https://img.shields.io/badge/Next.js-14+-000?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss" alt="Tailwind" />
  <img src="https://img.shields.io/badge/TypeScript-✓-3178c6?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Framer_Motion-✓-ff0050?style=flat-square&logo=framer" alt="Framer Motion" />
</p>

<p align="center">
  <a href="./README.md">🇮🇹 Italiano</a> ·
  <strong>🇬🇧 English</strong> ·
  <a href="./README.fr.md">🇫🇷 Français</a> ·
  <a href="./README.de.md">🇩🇪 Deutsch</a> ·
  <a href="./README.es.md">🇪🇸 Español</a>
</p>

---

## 💡 Why this repo?

Every time you start a new web project, you end up rewriting the same components: **legal pages**, **cookie banners**, **footers**, **contact forms**…

**dev-templates** solves this. It's a collection of **ready-to-use templates**, battle-tested in production, that you can copy into any Next.js project and customize in minutes.

| | Benefit |
|:-:|---------|
| ⏱️ | **Save time** — stop rewriting the same pages for every client |
| ✅ | **Production quality** — every template has been used in real projects |
| 🌍 | **Open source** — use it for free, contribute if you want, share with your team |
| 🔤 | **Placeholder system** — a simple find-and-replace adapts everything to your brand |

---

## 📦 Available Templates

| | Template | What's inside | Stack |
|:-:|----------|---------------|-------|
| 🛡️ | **[legal-pages](./legal-pages/)** | GDPR legal pages + blocking cookie banner with granular consent | Next.js · Tailwind · Framer Motion |

> 🔜 **More templates coming soon.** Got an idea? [Open an issue](../../issues) or a PR!

---

## 🚀 Quick Start

```bash
# 1️⃣  Clone the repo
git clone https://github.com/LuigiGarone/open-source.git

# 2️⃣  Copy the template you need into your project
cp -r open-source/dev-templates/legal-pages/components/ your-project/src/components/marketing/
cp -r open-source/dev-templates/legal-pages/pages/       your-project/src/app/(marketing)/

# 3️⃣  Replace placeholders (see each template's README)
```

Every template uses **placeholder tokens** like `{{APP_NAME}}`, `{{COMPANY_NAME}}`, etc.
One **find-and-replace** pass and you're done. ✨

---

## 📂 Repo structure

```
dev-templates/
├── 📄 README.md                  ← you are here
├── 📄 LICENSE                    ← MIT
├── 🖼️ .github/
│   ├── logika-dark.png
│   └── logika-light.png
└── 🛡️ legal-pages/
    ├── 📄 README.md              ← full template guide
    ├── 📁 components/
    │   ├── CookieBanner.tsx      ← blocking cookie banner
    │   └── LegalFooter.tsx       ← footer with legal links
    └── 📁 pages/
        ├── privacy.tsx           ← Privacy Policy (GDPR)
        ├── cookie-policy.tsx     ← Cookie Policy
        ├── legal.tsx             ← Legal Notice
        ├── terms.tsx             ← Terms & Conditions
        └── cmp.tsx               ← Cookie Preferences (CMP)
```

---

## 🤝 Contributing

Found a bug or want to add a template? PRs are welcome!

1. 🍴 **Fork** the repo
2. 🌿 Create a **branch** for your change (`git checkout -b feature/template-name`)
3. ✏️ Make your changes and commit
4. 📬 Open a **Pull Request**

> 💬 Not sure how to proceed? Open an [issue](../../issues) first to discuss it.

---

## 📜 License

Distributed under the **MIT** license — free for personal and commercial use.
See the [LICENSE](./LICENSE) file for details.

---

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/logika-dark.png" />
    <source media="(prefers-color-scheme: light)" srcset=".github/logika-light.png" />
    <img alt="Logika.studio" src=".github/logika-dark.png" height="36" />
  </picture>
  <br/>
  <sub>Made with ❤️ by <a href="https://logika.studio">Logika.studio</a></sub>
</p>
