# Prisoner's Dilemma Lab

An interactive React + TypeScript app for exploring the Prisoner's Dilemma in two formats:

- One-shot game: inspect payoffs for a single round.
- Iterated game: compare simple strategy combinations over multiple rounds.

Live site: https://jasonona.github.io/PrisonersDilemma/

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router

## Project Structure

```text
src/
  App.tsx                 # Route definitions
  main.tsx                # App bootstrap + BrowserRouter
  components/
    SiteShell.tsx         # Shared layout and navigation
  pages/
    IntroPage.tsx         # Intro content
    OneShotPage.tsx       # One-shot interaction
    IteratedPage.tsx      # Iterated simulation
  data/
    payoff.ts             # Payoff matrix and types
  styles/
    tokens.css            # Design tokens
    base.css              # Global styles
.github/workflows/
  deploy.yml              # GitHub Pages CI/CD
```

## Prerequisites

- Node.js 24.x (repo includes `.nvmrc` with `24.15.0`)
- npm 11+

If you use `nvm`:

```bash
nvm use
```

## Install

```bash
npm install
```

## Develop

Start local dev server:

```bash
npm run dev
```

Then open the URL printed by Vite (usually `http://localhost:5173`).

## Typecheck and Build

Typecheck:

```bash
npm run typecheck
```

Production build:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## Routing + GitHub Pages Notes

This repo is deployed under a subpath (`/PrisonersDilemma/`), so two settings must stay aligned:

1. `vite.config.ts` sets:

```ts
base: '/PrisonersDilemma/'
```

2. `src/main.tsx` uses:

```tsx
<BrowserRouter basename={import.meta.env.BASE_URL}>
```

If `basename` is removed, navigating to `/PrisonersDilemma/` can redirect to the domain root (`/`).

## Deployment

Deployment is automated via GitHub Actions in `.github/workflows/deploy.yml`:

- Trigger: push to `main` (or manual run)
- Build output: `dist/`
- `dist/.nojekyll` is created
- `dist/404.html` is copied from `dist/index.html` for SPA fallback
- Artifact is deployed with `actions/deploy-pages`

To publish new changes:

1. Commit and push to `main`.
2. Wait for the "Deploy to GitHub Pages" workflow to complete.
3. Visit the live site URL above.

## License

No license file is currently included in this repository.
