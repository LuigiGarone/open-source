<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="../.github/logika-dark.png" />
    <source media="(prefers-color-scheme: light)" srcset="../.github/logika-light.png" />
    <img alt="Logika.studio" src="../.github/logika-dark.png" height="50" />
  </picture>
</p>

<h1 align="center">🛡️ Legal Pages Template</h1>

<p align="center">
  <strong>Páginas legales compatibles con RGPD + banner de cookies bloqueante para proyectos Next.js.</strong><br/>
  Copia · Reemplaza 7 placeholders · Publica 🚀
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14+-000?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss" alt="Tailwind" />
  <img src="https://img.shields.io/badge/Framer_Motion-✓-ff0050?style=flat-square&logo=framer" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/RGPD-compatible-16a34a?style=flat-square" alt="RGPD" />
</p>

<p align="center">
  <a href="./README.md">🇮🇹 Italiano</a> ·
  <a href="./README.en.md">🇬🇧 English</a> ·
  <a href="./README.fr.md">🇫🇷 Français</a> ·
  <a href="./README.de.md">🇩🇪 Deutsch</a> ·
  <strong>🇪🇸 Español</strong>
</p>

---

## 📁 Contenido

| Archivo | Descripción |
|---------|-------------|
| `components/CookieBanner.tsx` | 🍪 Banner bloqueante a pantalla completa con consentimiento granular (esenciales / analíticas / marketing) |
| `components/LegalFooter.tsx` | 🦶 Sección footer con enlaces legales |
| `pages/privacy.tsx` | 🔒 Política de Privacidad (RGPD) |
| `pages/cookie-policy.tsx` | 🍪 Política de Cookies |
| `pages/legal.tsx` | ⚖️ Aviso Legal |
| `pages/terms.tsx` | 📃 Términos y Condiciones |
| `pages/cmp.tsx` | ⚙️ Página de Preferencias de Cookies con toggles por categoría |

---

## ⚙️ Requisitos

```bash
npm install framer-motion lucide-react
```

| Dependencia | Versión | Por qué |
|-------------|---------|---------|
| **Next.js** | 14+ | App Router |
| **Tailwind CSS** | v4 | Estilo utility-first |
| **framer-motion** | cualquiera | Animaciones del banner |
| **lucide-react** | cualquiera | Iconos SVG |

---

## 🔤 Placeholders

Busca y reemplaza estos **7 tokens** en todos los archivos:

| Token | Qué representa | Ejemplo |
|-------|---------------|---------|
| `{{APP_NAME}}` | Nombre de tu app | `Mi App` |
| `{{COMPANY_NAME}}` | Razón social | `Acme S.L.` |
| `{{COMPANY_ADDRESS}}` | Domicilio social | `Calle Mayor 1, 28001 Madrid` |
| `{{CONTACT_EMAIL}}` | Email de contacto legal | `privacidad@acme.es` |
| `{{DOMAIN}}` | Dominio del sitio | `acme.es` |
| `{{BRAND_COLOR}}` | Nombre de color Tailwind | `orange`, `rose`, `blue` |
| `{{STORAGE_KEY}}` | Clave localStorage para consentimiento | `acme_cookie_consent` |

---

## 🏗️ Integración

### Paso 1 — 📂 Copia los archivos

```
tu-proyecto/
├── src/
│   ├── components/marketing/
│   │   ├── CookieBanner.tsx        ← desde components/
│   │   └── LegalFooter.tsx         ← desde components/
│   └── app/
│       ├── layout.tsx              ← agrega <CookieBanner /> aquí
│       └── (marketing)/
│           ├── privacy/page.tsx
│           ├── cookie-policy/page.tsx
│           ├── legal/page.tsx
│           ├── terminos/page.tsx
│           └── cmp/page.tsx
```

### Paso 2 — 🧩 Agrega CookieBanner al layout raíz

```tsx
import CookieBanner from "@/components/marketing/CookieBanner";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
```

### Paso 3 — 🔤 Reemplaza los placeholders

### Paso 4 — ✅ ¡Listo!

Publica. El banner aparecerá automáticamente en la primera visita. 🎉

---

## 🍪 Comportamiento del banner

| Característica | Detalle |
|----------------|---------|
| 🔒 **Bloqueante** | Overlay oscuro que impide cualquier interacción |
| ⚡ **3 acciones rápidas** | Rechazar · Aceptar todo · Personalizar |
| 🎚️ **Toggles granulares** | Esenciales (siempre activas) · Analíticas · Marketing |
| 💾 **Persistencia** | JSON en `localStorage` |
| 🔄 **Página CMP** | Modificar preferencias en cualquier momento en `/cmp` |

---

## 📜 Licencia

**MIT** — libre para uso personal y comercial.

---

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="../.github/logika-dark.png" />
    <source media="(prefers-color-scheme: light)" srcset="../.github/logika-light.png" />
    <img alt="Logika.studio" src="../.github/logika-dark.png" height="36" />
  </picture>
  <br/>
  <sub>Hecho con ❤️ por <a href="https://logika.studio">Logika.studio</a></sub>
</p>
