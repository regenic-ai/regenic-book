# Regenic Book

Open-source **book**, **regenic.ai** website, and **public methodology** for
[Regenic](https://github.com/regenic-ai/regenic).

**Make organizations great again.**

The free book [**Rewrite the DNA: How to Build an AI-Native Organization**](https://regenic.ai/en/book)
(Chinese: [**《重写基因》**](https://regenic.ai/zh/book)) defines the method. This
repository ships the site, the manuscripts, and public standards — not the product
application itself.

中文说明：[README.zh-CN.md](README.zh-CN.md)

## Names (do not mix them up)

| Name | What it is |
| --- | --- |
| **Rewrite the DNA** / **《重写基因》** | The book (subtitle: _How to Build an AI-Native Organization_) |
| **Regenic** | The product brand — AI-native org management software |
| **Regenic Book** | This repository — site, manuscripts, public methodology |
| **bioby.ai** | First operating company running the method in production |

## What this repo contains

- **Website** — Next.js 16 app: book reader, method pages, diagnosis checklist, 90-day roadmap, EN/ZH routes
- **`content/`** — English and Chinese book chapters, public standards, research index
- **`lib/`** — Markdown rendering, i18n, SEO

## Product

The Regenic application — unified judgment standards and shared context for
AI-native organizations — lives in
[`regenic-ai/regenic`](https://github.com/regenic-ai/regenic).

## Quick start

Requires Node.js (compatible with Next.js 16) and npm.

```bash
git clone https://github.com/regenic-ai/regenic-book.git
cd regenic-book
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (redirects to `/en`).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript |
| `npm test` | Unit tests (Vitest) |
| `npm run test:e2e` | Playwright E2E |
| `npm run check:boundaries` | Block sensitive content in public tree |
| `npm run check:licenses` | Dependency license policy |

## Site routes

| Path | Description |
| --- | --- |
| `/en/book`, `/zh/book` | Full book online |
| `/en/method`, `/zh/method` | Method overview |
| `/en/tools/diagnosis` | 8-question diagnosis |
| `/en/standards`, `/en/research` | Public standards and research index |

Default locale: **English** (`/` → `/en`).

## Contributing

Issues and pull requests: [github.com/regenic-ai/regenic-book/issues](https://github.com/regenic-ai/regenic-book/issues)

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a PR. Security:
[SECURITY.md](SECURITY.md). No contact forms on the site.

## License

| Path | License |
| --- | --- |
| Application code | [MIT](LICENSE-CODE) |
| `content/` and public methodology | [CC BY-NC 4.0](LICENSE-CONTENT) |

See [TRADEMARKS.md](TRADEMARKS.md) and [THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md).
