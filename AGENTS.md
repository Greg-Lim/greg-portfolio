# Repository Instructions

## Project Overview

This is Greg Lim's personal website, built with React 19, TypeScript, Vite, Tailwind CSS, and Bun. The app lives in `src/`, static files live in `public/`, and generated production output goes to `dist/`.

## Commands

- Install dependencies: `bun install`
- Start the local dev server: `bun run dev`
- Build for production: `bun run build`
- Run lint checks: `bun run lint`
- Preview the production build: `bun run preview`

Use Bun for package scripts because this repo has a `bun.lock` lockfile and the GitHub Actions deploy workflow uses Bun.

## Development Notes

- Keep source changes in `src/` unless the task specifically needs config, workflow, or static asset changes.
- Use the `@/` alias for imports from `src/` when it keeps imports clearer.
- Do not edit generated output in `dist/`; rebuild it from source instead.
- Avoid committing `node_modules/`, logs, local environment files, or build artifacts.
- Preserve the existing component style: React function components, TypeScript, Tailwind utility classes, and small local UI primitives under `src/components/ui/`.
- Image and media assets currently live under `src/assets/` and `src/resume/media/`; reuse these when appropriate before adding new assets.

## Verification

Before finishing changes that affect application behavior, run:

```sh
bun run lint
bun run build
```

For visual or layout changes, also run the dev server and inspect the affected page in a browser.

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` deploys `dist/` to GitHub Pages on pushes to `main`, using the custom domain in `CNAME`.
