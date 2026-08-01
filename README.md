<p align="center">
  <img src="public/favicon.png" alt="Eddyappz.com Logo" width="80"/>
</p>

<h1 align="center">Eddyappz.com</h1>

<p align="center">
  <b>Ethan Edwards' personal site — portfolio, resume, and contact, built on Angular.</b><br>
  <i>Newsprint-inspired design system. Signals-first, standalone components, zero backend.</i>
</p>

---

### Links

- **Live Site:** [https://eddyappz.com](https://eddyappz.com)

---

## Overview

**Eddyappz.com** is a single-page Angular site showcasing projects, a resume, and a way to get in touch. It's optimized for:

- **Standalone, signal-driven Angular** — no NgModules, `OnPush` everywhere, state via `signal()`/`computed()`
- **A distinctive design system** — the "Newsprint" style: stark geometry, high-contrast typography, zero border radius ([docs/design.md](docs/design.md))
- **Accessibility by default** — WCAG AA minimums and AXE-clean components
- **Static, cloud-native hosting** — no server, deployed straight to Azure Static Web Apps

---

## Technology Stack

**Frontend:**

- Angular 21 (standalone components, signals)
- Tailwind CSS 4

**Tooling:**

- Vitest for unit tests
- Prettier for formatting
- Microsoft Clarity for analytics

**Infrastructure:**

- Azure Static Web Apps
- GitHub Actions (CI/CD)

---

## Quick Start

### Prerequisites

- Node.js 20+
- NPM 9+

### Clone & Install

```bash
git clone https://github.com/EthanE96/Personal_Site.git
cd Personal_Site
npm install
```

### Run Locally

```bash
npm start
# App: http://localhost:4200/
```

### Build & Test

```bash
npm run build   # production build
npm run watch   # build in watch mode
npm test        # run unit tests
```

---

## Project Structure

| Folder                    | Description                                      |
| -------------------------- | ------------------------------------------------- |
| `src/app/pages/`           | Route-level pages: landing, resume, contact, 404  |
| `src/app/layout/`          | App shell chrome (sidebar navigation)              |
| `src/app/shared/`          | Reusable components and services (e.g. theming)   |
| `src/app/data/`             | Static content data (e.g. project listings)        |
| `src/app/models/`           | Shared TypeScript types/interfaces                |
| `public/`                   | Static assets (favicon, images)                    |
| `docs/`                     | Design system and project documentation            |

---

## CI/CD

- **Deploy:** Pushes to `main` build and deploy to Azure Static Web Apps ([azure-static-web-apps-happy-ocean-03f5cce1e.yml](.github/workflows/azure-static-web-apps-happy-ocean-03f5cce1e.yml))

---

## Documentation

- [Design System — Newsprint](docs/design.md)

---

## Contributing

This is a personal portfolio project, but issues and suggestions are welcome — feel free to open one.
