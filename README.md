# Next.js TypeScript Template

A professional-grade Next.js template for rapidly building and deploying apps on Vercel.

## Features

- **Next.js 16** with App Router and Turbopack
- **TypeScript** in strict mode
- **Tailwind CSS v4** with CSS-based configuration
- **ESLint + Prettier** with auto-formatting on commit
- **Husky + lint-staged** for pre-commit hooks
- **Commitlint** enforcing conventional commits
- **Vitest** for unit testing
- **Playwright** for end-to-end testing
- **Bundle Analyzer** for build optimization
- **Vercel Analytics + Speed Insights** built in
- **GitHub Actions CI/CD** with lint, typecheck, test, build, e2e, and release-please
- **Claude Code** configuration with hooks and MCP integrations
- **Dependabot** for automated dependency updates
- **shadcn/ui ready** — add components with one command

## Quick Start

```bash
# Clone the template
gh repo create my-app --template OWNER/nextjs-typescript-template --clone
cd my-app

# Install dependencies
pnpm install

# Start development
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## Project Structure

```
├── app/                  # Next.js App Router
│   ├── globals.css       # Global styles (Tailwind)
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   └── ui/               # UI components (shadcn/ui)
├── lib/                  # Utilities and shared logic
├── public/               # Static assets
├── e2e/                  # Playwright e2e tests
├── .claude/              # Claude Code settings and hooks
├── .github/              # CI/CD workflows, dependabot, PR template
├── .husky/               # Git hooks (pre-commit, commit-msg)
└── ...config files
```

## Scripts

| Script              | Description                     |
| ------------------- | ------------------------------- |
| `pnpm dev`          | Start dev server with Turbopack |
| `pnpm build`        | Create production build         |
| `pnpm start`        | Start production server         |
| `pnpm lint`         | Run ESLint                      |
| `pnpm typecheck`    | Run TypeScript type checking    |
| `pnpm test`         | Run unit tests with Vitest      |
| `pnpm test:watch`   | Run tests in watch mode         |
| `pnpm test:e2e`     | Run Playwright e2e tests        |
| `pnpm format`       | Format all files with Prettier  |
| `pnpm format:check` | Check formatting                |
| `pnpm analyze`      | Build with bundle analyzer      |

## Adding shadcn/ui

```bash
pnpm dlx shadcn@latest init
pnpm dlx shadcn@latest add button card dialog
```

Components will be added to `components/ui/`.

## Deployment

### Vercel (recommended)

Push to GitHub and import in [Vercel](https://vercel.com/new). Vercel auto-detects Next.js and deploys with zero configuration.

### Environment Variables

Copy `.env.example` to `.env.local` and add your values:

```bash
cp .env.example .env.local
```

Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

## Customization

1. Update `app/layout.tsx` metadata (title, description)
2. Replace `public/` assets with your own
3. Update `.github/CODEOWNERS` with your GitHub username
4. Add dependencies as needed for your use case

## License

MIT
