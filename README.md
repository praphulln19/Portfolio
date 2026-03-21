# Portfolio

A production-ready personal portfolio built with React and Vite. It showcases projects, skills, experience, and contact details in a clean, accessible, single-page layout.

## Highlights

- Structured single-page sections: hero, about, skills, projects, experience, contact
- Component-driven UI backed by a centralized data file
- Theme context for consistent styling behavior
- Fast local development and optimized production builds via Vite

## Tech Stack

- React
- Vite
- CSS (custom styling)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

- [src/main.jsx](src/main.jsx): Application entry
- [src/App.jsx](src/App.jsx): Primary layout and composition
- [src/components](src/components): Section components
- [src/context/ThemeContext.jsx](src/context/ThemeContext.jsx): Theme state and provider
- [src/data/portfolioData.js](src/data/portfolioData.js): Portfolio content and metadata
- [src/App.css](src/App.css) and [src/index.css](src/index.css): Global styles

## Customization

- Update content in [src/data/portfolioData.js](src/data/portfolioData.js)
- Adjust layout and sections in [src/components](src/components)
- Refine styling in [src/App.css](src/App.css) and [src/index.css](src/index.css)

## Deployment

This project outputs a static build in `dist`. Deploy it to any static host (GitHub Pages, Netlify, Vercel, etc.) after running `npm run build`.

## License

All rights reserved. You may fork and customize for personal use with attribution.
