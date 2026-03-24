<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/logika-dark.png" />
    <source media="(prefers-color-scheme: light)" srcset=".github/logika-light.png" />
    <img alt="Logika.studio" src=".github/logika-dark.png" height="140" />
  </picture>
</p>

<h1 align="center">🌍 Open Source</h1>

<p align="center">
  <strong>La raccolta open source di <a href="https://logika.studio">Logika.studio</a></strong><br/>
  Snippet, template e componenti riutilizzabili — testati in produzione, pronti da copiare.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="MIT License" />
  <img src="https://img.shields.io/badge/maintainer-Luigi_Garone-orange?style=flat-square" alt="Maintainer" />
  <img src="https://img.shields.io/badge/Next.js-14+-000?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-✓-3178c6?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss" alt="Tailwind" />
</p>

---

## 💡 Perché nasce questa repo?

Chi sviluppa web lo sa: **ogni nuovo progetto parte riscrivendo le stesse cose**. Cookie banner, pagine legali, footer, form di contatto, configurazioni standard… tempo speso a rifare ciò che hai già fatto decine di volte.

Questa repo nasce per risolvere esattamente questo problema.

> **Una raccolta centralizzata di codice riutilizzabile**, pronto da copiare in qualsiasi progetto.
> Ogni pezzo è stato usato in produzione, testato su progetti reali dei clienti di [Logika.studio](https://logika.studio).

### 🎯 A chi è rivolta?

| | Chi | Come la usa |
|:-:|-----|-------------|
| 👨‍💻 | **Sviluppatori esperti** | Copia il template, sostituisci i placeholder, risparmia ore |
| 🎓 | **Neofiti e studenti** | Studia componenti reali e production-ready come riferimento |
| 👥 | **Team e colleghi** | Una base condivisa per partire tutti dallo stesso standard |
| 🏢 | **Freelancer e agenzie** | Template pronti per ogni nuovo cliente, personalizzabili in minuti |

### ✨ Principi

- **🚀 Pronto all'uso** — copia, sostituisci i placeholder, pubblica
- **✅ Testato in produzione** — ogni template viene da progetti reali
- **🧩 Modulare** — prendi solo quello che ti serve, nessuna dipendenza tra template
- **🔤 Placeholder system** — un trova-e-sostituisci adatta tutto al tuo brand
- **📖 Documentato** — ogni progetto ha il suo README con guida passo-passo
- **🌍 Multilingua** — documentazione in IT, EN, FR, DE, ES

---

## 📦 Progetti disponibili

| | Progetto | Descrizione | Stack | README |
|:-:|----------|-------------|-------|--------|
| 🛡️ | **[dev-templates](./dev-templates/)** | Template riutilizzabili per progetti web: pagine legali GDPR, cookie banner bloccante, footer, pagina CMP | Next.js · Tailwind · Framer Motion | [📖 Leggi](./dev-templates/README.md) |

> 🔜 **Altri progetti in arrivo!** Componenti UI, configurazioni, utility, boilerplate…

---

## 🚀 Quick Start

```bash
# 1️⃣  Clona tutta la raccolta
git clone https://github.com/LuigiGarone/open-source.git

# 2️⃣  Entra nel progetto che ti interessa
cd open-source/dev-templates

# 3️⃣  Segui il README del progetto specifico
#     Ogni progetto ha istruzioni dettagliate per l'integrazione
```

### 📂 Oppure copia solo ciò che ti serve

```bash
# Esempio: copiare le legal-pages nel tuo progetto
cp -r open-source/dev-templates/legal-pages/components/ tuo-progetto/src/components/marketing/
cp -r open-source/dev-templates/legal-pages/pages/       tuo-progetto/src/app/(marketing)/
```

Non devi usare la repo intera — **prendi solo i pezzi che ti servono**.

---

## 📂 Struttura della repo

```
open-source/
├── 📄 README.md                          ← sei qui
├── 📄 LICENSE                            ← MIT
├── 🖼️ .github/                           ← asset (loghi Logika.studio)
│
└── 🧰 dev-templates/                    ← template riutilizzabili
    ├── 📄 README.md                      ← indice dei template
    ├── 🖼️ .github/                       ← asset (loghi)
    └── 🛡️ legal-pages/                  ← pagine legali GDPR
        ├── 📄 README.md                  ← guida completa
        ├── 📁 components/
        │   ├── CookieBanner.tsx          ← cookie banner bloccante
        │   └── LegalFooter.tsx           ← footer legale
        └── 📁 pages/
            ├── privacy.tsx               ← Privacy Policy
            ├── cookie-policy.tsx         ← Cookie Policy
            ├── legal.tsx                 ← Note Legali
            ├── terms.tsx                 ← Termini e Condizioni
            └── cmp.tsx                   ← Preferenze Cookie
```

---

## 🤝 Contribuire

Vuoi aggiungere un template, segnalare un bug o proporre un miglioramento? Sei il benvenuto!

1. 🍴 Fai un **fork** della repo
2. 🌿 Crea un **branch** (`git checkout -b feature/nome-contributo`)
3. ✏️ Effettua le modifiche
4. ✅ Testa tutto
5. 📬 Apri una **Pull Request**

> 💬 Non sei sicuro? [Apri una issue](../../issues) per discuterne prima.

### 📝 Linee guida

- Ogni nuovo progetto va in una **cartella dedicata** nella root
- Ogni progetto deve avere il proprio **README.md** con istruzioni chiare
- Usa **placeholder** (`{{TOKEN}}`) per i valori personalizzabili
- Il codice deve essere **production-ready**: niente TODO, niente hack, niente codice commentato

---

## 📜 Licenza

Tutti i progetti in questa repo sono distribuiti con licenza **MIT** — liberi per uso personale e commerciale.
Consulta il file [LICENSE](./LICENSE) per i dettagli.

---

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/logika-dark.png" />
    <source media="(prefers-color-scheme: light)" srcset=".github/logika-light.png" />
    <img alt="Logika.studio" src=".github/logika-dark.png" height="44" />
  </picture>
  <br/>
  <sub>Realizzato con ❤️ da <a href="https://logika.studio">Luigi Garone</a> — <a href="https://logika.studio">Logika.studio</a></sub>
</p>
