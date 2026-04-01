# Project

Next.js TypeScript template — general-purpose boilerplate for building and deploying apps on Vercel.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **Testing:** Vitest (unit), Playwright (e2e)
- **Deployment:** Vercel

## Commands

| Command             | Description                    |
| ------------------- | ------------------------------ |
| `pnpm dev`          | Start dev server (Turbopack)   |
| `pnpm build`        | Production build               |
| `pnpm lint`         | Run ESLint                     |
| `pnpm typecheck`    | TypeScript type checking       |
| `pnpm test`         | Run unit tests                 |
| `pnpm test:e2e`     | Run Playwright e2e tests       |
| `pnpm format`       | Format all files with Prettier |
| `pnpm format:check` | Check formatting               |
| `pnpm analyze`      | Build with bundle analyzer     |

## Code Conventions

- Conventional commits enforced via commitlint (e.g., `feat:`, `fix:`, `chore:`)
- Prettier + ESLint run automatically on pre-commit via lint-staged
- Path alias: `@/*` maps to project root (e.g., `import { cn } from "@/lib/utils"`)
- Tailwind CSS v4 — styles configured in CSS, no `tailwind.config.js`

## Project Structure

```
app/           → Next.js App Router pages and layouts
components/ui/ → Reusable UI components (shadcn/ui ready)
lib/           → Utility functions and shared logic
public/        → Static assets
e2e/           → Playwright end-to-end tests
```

## Deployment

Deploy to Vercel via `git push` to `main` or `vercel deploy` from CLI.
