# John Adrian Gozun Portfolio

Modern responsive portfolio for John Adrian Gozun, built with React and Tailwind CSS.

## Features

- Mobile-first sticky navigation with hamburger menu
- Responsive hero with picture-ready portfolio image slots
- Local placeholder visuals that can be replaced with real photos
- Photo areas for portrait, Arduino builds, wiring/repair, and systems work
- About, education, experience timeline, skills grid, and contact footer
- Dark industrial theme with electric blue, circuit green, and warm hardware accents

## Run Locally

Install Node.js LTS first, then run:

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Vercel

Vercel should auto-detect this as a Vite React project.

- Framework Preset: `Vite`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`

## Photos

Replace these files with your real pictures when ready:

```text
public/images/profile-placeholder.svg
public/images/arduino-placeholder.svg
public/images/workbench-placeholder.svg
public/images/systems-placeholder.svg
```

You can keep the same filenames or update the paths in `src/data/portfolio.js`.

## Content

Main resume content and photo paths live in `src/data/portfolio.js`.
