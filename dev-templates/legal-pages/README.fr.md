<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="../.github/logika-dark.png" />
    <source media="(prefers-color-scheme: light)" srcset="../.github/logika-light.png" />
    <img alt="Logika.studio" src="../.github/logika-dark.png" height="50" />
  </picture>
</p>

<h1 align="center">🛡️ Legal Pages Template</h1>

<p align="center">
  <strong>Pages légales conformes au RGPD + bannière cookies bloquante pour projets Next.js.</strong><br/>
  Copiez · Remplacez 7 placeholders · Publiez 🚀
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14+-000?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Framer_Motion-✓-ff0050?style=flat-square&logo=framer" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/RGPD-conforme-16a34a?style=flat-square" alt="RGPD" />
</p>

<p align="center">
  <a href="./README.md">🇮🇹 Italiano</a> ·
  <a href="./README.en.md">🇬🇧 English</a> ·
  <strong>🇫🇷 Français</strong> ·
  <a href="./README.de.md">🇩🇪 Deutsch</a> ·
  <a href="./README.es.md">🇪🇸 Español</a>
</p>

---

## 📁 Contenu

| Fichier | Description |
|---------|-------------|
| `components/CookieBanner.tsx` | 🍪 Bannière bloquante plein écran avec consentement granulaire (essentiels / analytiques / marketing) |
| `components/LegalFooter.tsx` | 🦶 Section footer avec liens légaux |
| `pages/privacy.tsx` | 🔒 Politique de Confidentialité (RGPD) |
| `pages/cookie-policy.tsx` | 🍪 Politique des Cookies |
| `pages/legal.tsx` | ⚖️ Mentions Légales |
| `pages/terms.tsx` | 📃 Conditions Générales d'Utilisation |
| `pages/cmp.tsx` | ⚙️ Page de Préférences Cookies avec toggles par catégorie |

---

## ⚙️ Prérequis

```bash
npm install framer-motion lucide-react
```

| Dépendance | Version | Pourquoi |
|------------|---------|----------|
| **Next.js** | 14+ | App Router |
| **Tailwind CSS** | v4 | Style utility-first |
| **framer-motion** | toute | Animations bannière |
| **lucide-react** | toute | Icônes SVG |

---

## 🔤 Placeholders

Recherchez et remplacez ces **7 tokens** dans tous les fichiers :

| Token | Description | Exemple |
|-------|------------|---------|
| `{{APP_NAME}}` | Nom de votre application | `Mon App` |
| `{{COMPANY_NAME}}` | Raison sociale | `Acme SARL` |
| `{{COMPANY_ADDRESS}}` | Siège social | `12 Rue de la Paix, 75002 Paris` |
| `{{CONTACT_EMAIL}}` | Email contact vie privée | `privacy@acme.fr` |
| `{{DOMAIN}}` | Domaine du site | `acme.fr` |
| `{{BRAND_COLOR}}` | Nom de couleur Tailwind | `orange`, `rose`, `blue` |
| `{{STORAGE_KEY}}` | Clé localStorage pour le consentement | `acme_cookie_consent` |

---

## 🏗️ Intégration

### Étape 1 — 📂 Copiez les fichiers

```
votre-projet/
├── src/
│   ├── components/marketing/
│   │   ├── CookieBanner.tsx        ← depuis components/
│   │   └── LegalFooter.tsx         ← depuis components/
│   └── app/
│       ├── layout.tsx              ← ajoutez <CookieBanner /> ici
│       └── (marketing)/
│           ├── privacy/page.tsx
│           ├── cookie-policy/page.tsx
│           ├── legal/page.tsx
│           ├── conditions/page.tsx
│           └── cmp/page.tsx
```

### Étape 2 — 🧩 Ajoutez CookieBanner au layout racine

```tsx
import CookieBanner from "@/components/marketing/CookieBanner";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
```

### Étape 3 — 🔤 Remplacez les placeholders

### Étape 4 — ✅ Terminé !

Publiez. La bannière apparaîtra automatiquement à la première visite. 🎉

---

## 🍪 Comportement de la bannière

| Caractéristique | Détail |
|-----------------|--------|
| 🔒 **Bloquante** | Overlay sombre empêchant toute interaction |
| ⚡ **3 actions rapides** | Refuser · Tout accepter · Personnaliser |
| 🎚️ **Toggles granulaires** | Essentiels (toujours actifs) · Analytiques · Marketing |
| 💾 **Persistance** | JSON dans `localStorage` |
| 🔄 **Page CMP** | Modification des préférences à tout moment sur `/cmp` |

---

## 📜 Licence

**MIT** — libre pour usage personnel et commercial.

---

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="../.github/logika-dark.png" />
    <source media="(prefers-color-scheme: light)" srcset="../.github/logika-light.png" />
    <img alt="Logika.studio" src="../.github/logika-dark.png" height="36" />
  </picture>
  <br/>
  <sub>Réalisé avec ❤️ par <a href="https://logika.studio">Logika.studio</a></sub>
</p>
