# Aditya Gupta — Developer Portfolio

A personal portfolio website showcasing my work as a Full-Stack (MERN) developer — built with React, Vite, Tailwind CSS v4 and Framer Motion.

> **Status:** Not deployed yet. Local-only for now.

---

## Tech Stack

| Layer        | Tools                                  |
| ------------ | -------------------------------------- |
| Framework    | React 19 + Vite 7                      |
| Styling      | Tailwind CSS v4 (`@tailwindcss/vite`)  |
| Animation    | Framer Motion                          |
| Icons        | `react-icons`, `lucide-react`          |
| Linting      | ESLint 9 (flat config)                 |

---

## Features

- Fully responsive single-page layout
- Animated section reveals (Framer Motion `whileInView`)
- Smooth scroll navigation between sections
- Sections: Hero, About, Skills, Projects, Experience, Contact
- Working contact form (mailto-based, client-side validated)

---

## Getting Started

### Prerequisites
- Node.js `>=18`
- npm `>=9`

### Run locally
```bash
git clone https://github.com/AdityaGupta2791/Portfolio.git
cd Portfolio
npm install
npm run dev
```
The app will start at `http://localhost:5173`.

### Build for production
```bash
npm run build      # outputs to /dist
npm run preview    # serves the built bundle locally
```

### Lint
```bash
npm run lint
```

---

## Folder Structure

```
Portfolio/
├── public/              # Static assets served as-is (project images, etc.)
├── src/
│   ├── components/      # React components (Hero, About, Skills, ...)
│   ├── App.jsx          # Root component — composes all sections
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind import + global styles
├── index.html           # Vite HTML entry
├── vite.config.js       # Vite + Tailwind plugin config
└── eslint.config.js     # ESLint flat config
```

> Note: this structure is being incrementally refactored toward a `data/`, `ui/`, `sections/` separation. See open work in commits.

---

## Roadmap

- [ ] Extract reusable UI primitives (`<Card>`, `<Section>`, `<SectionHeader>`, `<Tag>`, `<Button>`)
- [ ] Move static content to `src/data/`
- [ ] Theme tokens via Tailwind config (replace hardcoded hex)
- [ ] Real contact form backend (Resend / Formspree)
- [ ] SEO meta tags + favicon + Open Graph image
- [ ] Deploy to Vercel

---

## Contact

- **Email:** adityagupta2791@gmail.com
- **LinkedIn:** [linkedin.com/in/adityagupta2791](https://linkedin.com/in/adityagupta2791)
- **GitHub:** [github.com/AdityaGupta2791](https://github.com/AdityaGupta2791)

---

© Aditya Gupta — All rights reserved.
