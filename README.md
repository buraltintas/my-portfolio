# burak-altintas.com

Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

**[burak-altintas.com](https://burak-altintas.com)**

## Tech Stack

- **Framework:** Next.js 15 (App Router, Static Export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Content:** MDX for project case studies
- **Animation:** Canvas API (custom particle system)
- **Deployment:** Netlify
- **Analytics:** Google Analytics & Tag Manager

## Features

- Bilingual: English at `/`, Turkish under `/tr`, linked with hreflang
- Interactive hero animation with code snippets & particle network
- Project showcase with MDX-based case studies
- Responsive design (mobile-first)
- SEO and GEO: per-language metadata, JSON-LD (Person, ProfilePage, projects), sitemap with alternates, `llms.txt`
- Accessible (skip-to-content, semantic HTML, keyboard navigation)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/          # Routes: (en) at the root, (tr) under /tr
  views/        # Page bodies and metadata shared by both languages
  components/   # React components (home, layout, projects, ui)
  data/         # Site config, experience, skills
  i18n/         # Translations & locale provider
  lib/          # Project utilities (MDX parsing)
  types/        # TypeScript interfaces
content/
  projects/     # MDX project case studies
public/
  images/       # Static assets
```

## Contact

- **Email:** burak.altintas@yahoo.com.tr
- **LinkedIn:** [burak--altintas](https://www.linkedin.com/in/burak--altintas/)
- **GitHub:** [buraltintas](https://github.com/buraltintas)
- **Medium:** [baltintas](https://medium.com/@baltintas)
