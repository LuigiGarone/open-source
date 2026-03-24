<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="../.github/logika-dark.png" />
    <source media="(prefers-color-scheme: light)" srcset="../.github/logika-light.png" />
    <img alt="Logika.studio" src="../.github/logika-dark.png" height="140" />
  </picture>
</p>

<h1 align="center">🛡️ Legal Pages Template</h1>

<p align="center">
  <strong>GDPR-compliant legal pages + blocking cookie banner for Next.js projects.</strong><br/>
  Copy · Replace 7 placeholders · Ship 🚀
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14+-000?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Framer_Motion-✓-ff0050?style=flat-square&logo=framer" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/GDPR-compliant-16a34a?style=flat-square" alt="GDPR" />
</p>

<p align="center">
  <a href="./README.md">🇮🇹 Italiano</a> ·
  <strong>🇬🇧 English</strong> ·
  <a href="./README.fr.md">🇫🇷 Français</a> ·
  <a href="./README.de.md">🇩🇪 Deutsch</a> ·
  <a href="./README.es.md">🇪🇸 Español</a>
</p>

---

## 📋 Table of Contents

- [What's included](#-whats-included)
- [Requirements](#️-requirements)
- [Placeholders](#-placeholders)
- [Step-by-step integration](#️-step-by-step-integration)
- [Cookie Banner behavior](#-cookie-banner-behavior)
- [Customization](#-customization)
- [FAQ](#-faq)
- [License](#-license)

---

## 📁 What's included

| File | Description |
|------|-------------|
| `components/CookieBanner.tsx` | 🍪 Fullscreen blocking banner with granular consent (essential / analytics / marketing) |
| `components/LegalFooter.tsx` | 🦶 Footer section with legal links |
| `pages/privacy.tsx` | 🔒 Privacy Policy (GDPR) |
| `pages/cookie-policy.tsx` | 🍪 Cookie Policy |
| `pages/legal.tsx` | ⚖️ Legal Notice (Imprint) |
| `pages/terms.tsx` | 📃 Terms & Conditions |
| `pages/cmp.tsx` | ⚙️ Cookie Preferences page with toggles per category |

---

## ⚙️ Requirements

```bash
npm install framer-motion lucide-react
```

| Dependency | Version | Why |
|------------|---------|-----|
| **Next.js** | 14+ | App Router |
| **Tailwind CSS** | v4 | Utility-first styling |
| **framer-motion** | any | Banner animations |
| **lucide-react** | any | SVG icons |

---

## 🔤 Placeholders

Find & replace these **7 tokens** across all files:

| Token | What it is | Example value |
|-------|-----------|---------------|
| `{{APP_NAME}}` | Your app/product name | `My App` |
| `{{COMPANY_NAME}}` | Legal entity name | `Acme Inc.` |
| `{{COMPANY_ADDRESS}}` | Registered office address | `123 Main St, Rome, Italy` |
| `{{CONTACT_EMAIL}}` | Privacy/legal contact email | `privacy@acme.com` |
| `{{DOMAIN}}` | Website domain | `acme.com` |
| `{{BRAND_COLOR}}` | Tailwind color name for accents | `orange`, `rose`, `blue` |
| `{{STORAGE_KEY}}` | localStorage key for cookie consent | `acme_cookie_consent` |

### ⚡ Quick replace

**Linux / Mac:**

```bash
grep -rl '{{APP_NAME}}' . | xargs sed -i 's/{{APP_NAME}}/My App/g'
grep -rl '{{COMPANY_NAME}}' . | xargs sed -i 's/{{COMPANY_NAME}}/Acme Inc./g'
# ... repeat for each token
```

**Or** use your IDE's **global find & replace** (`Ctrl+Shift+H` in VS Code). 🔍

---

## 🏗️ Step-by-step integration

### Step 1 — 📂 Copy files

```
your-project/
├── src/
│   ├── components/marketing/
│   │   ├── CookieBanner.tsx        ← from components/
│   │   └── LegalFooter.tsx         ← from components/
│   └── app/
│       ├── layout.tsx              ← add <CookieBanner /> here
│       └── (marketing)/
│           ├── layout.tsx          ← your marketing layout (header + footer)
│           ├── privacy/page.tsx
│           ├── cookie-policy/page.tsx
│           ├── legal/page.tsx
│           ├── terms-and-conditions/page.tsx
│           └── cmp/page.tsx
```

### Step 2 — 🧩 Add CookieBanner to root layout

```tsx
// src/app/layout.tsx
import CookieBanner from "@/components/marketing/CookieBanner";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
```

### Step 3 — 🔤 Replace placeholders

Run the **find-and-replace** for all 7 tokens (see [table above](#-placeholders)).

### Step 4 — ✅ Done!

Ship it. The banner will appear automatically on first visit. 🎉

---

## 🍪 Cookie Banner behavior

```
User lands on page
       │
  ┌────▼──────────────────────────────┐
  │  🔒 Fullscreen overlay (blocking) │
  │                                    │
  │  ┌──────────────────────────────┐  │
  │  │  "Reject"      "Accept All" │  │
  │  │                              │  │
  │  │  ▸ Customize your choices   │  │
  │  │    ┌─ 🟢 Essential [always]─┐│  │
  │  │    ├─ 🔵 Analytics [toggle]─┤│  │
  │  │    ├─ 🟣 Marketing [toggle]─┤│  │
  │  │    └─ [Save preferences]  ──┘│  │
  │  └──────────────────────────────┘  │
  └────────────────────────────────────┘
       │
  💾 Choice saved to localStorage
  ✅ Banner never shown again
```

| Feature | Detail |
|---------|--------|
| 🔒 **Blocking** | Dark overlay prevents any page interaction |
| ⚡ **3 quick actions** | Reject optional · Accept all · Customize |
| 🎚️ **Granular toggles** | Essential (locked on) · Analytics · Marketing |
| 💾 **Persistence** | JSON in `localStorage` under `{{STORAGE_KEY}}` |
| 🔄 **CMP page** | Users can change preferences later at `/cmp` |
| 🎨 **Animations** | Smooth enter/exit with Framer Motion |

---

## 🎨 Customization

### Colors

The template uses `{{BRAND_COLOR}}` as the accent color variable. Replace it with any Tailwind color:

| Color | Example |
|-------|---------|
| `orange` | 🟠 Orange (common default) |
| `blue` | 🔵 Blue |
| `rose` | 🌹 Rose |
| `emerald` | 🟢 Emerald |
| `violet` | 🟣 Violet |

### Banner styling

The banner uses standard Tailwind classes. To customize:

- **Background**: change `bg-neutral-900` in `CookieBanner.tsx`
- **Borders**: change `border-neutral-800`
- **Border radius**: change `rounded-2xl`
- **Max width**: change `max-w-4xl`

### Legal page content

The text content is intentionally **generic and templated**. Customize it based on your specific business, the type of data you process, and applicable jurisdiction.

> ⚠️ **Disclaimer**: these templates do not replace legal advice. Have them reviewed by your legal counsel before publishing in production.

---

## ❓ FAQ

<details>
<summary><strong>Can I use this in a commercial project?</strong></summary>

Yes! The MIT license allows both personal and commercial use, with no restrictions.
</details>

<details>
<summary><strong>Does it work with Next.js Pages Router?</strong></summary>

The template is optimized for the **App Router** (Next.js 14+). For Pages Router you'll need to adapt the file structure (from `app/` to `pages/`), but the React components are the same.
</details>

<details>
<summary><strong>Can I use a custom color not in Tailwind's palette?</strong></summary>

Yes, just define the color in your `tailwind.config.ts` and use that name as `{{BRAND_COLOR}}`.
</details>

<details>
<summary><strong>Does the banner block third-party scripts (Analytics, GTM)?</strong></summary>

The banner handles **visual consent** and saves the choice to localStorage. To actually block scripts, you need to conditionally load them by reading the localStorage value in your layout or through a tag manager.
</details>

<details>
<summary><strong>Can I add more cookie categories?</strong></summary>

Yes! Extend the `CookiePreferences` interface in `CookieBanner.tsx` and `cmp.tsx` with the fields you need, then add the corresponding toggles in the JSX.
</details>

---

## 📜 License

**MIT** — use freely in any project.
See the [LICENSE](../LICENSE) file for details.

---

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="../.github/logika-dark.png" />
    <source media="(prefers-color-scheme: light)" srcset="../.github/logika-light.png" />
    <img alt="Logika.studio" src="../.github/logika-dark.png" height="44" />
  </picture>
  <br/>
  <sub>Made with ❤️ by <a href="https://logika.studio">Logika.studio</a></sub>
</p>
