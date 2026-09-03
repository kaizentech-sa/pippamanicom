# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Vercel preview

Production is S3 + CloudFront via `.github/workflows/deploy.yml`. Vercel is
only used for client preview links.

Deploy previews with a **local** build:

```bash
npx vercel build --prod && npx vercel deploy --prebuilt --prod
```

The build's prerender step needs a real Chromium. Vercel's build image cannot
run one — `npx playwright install chromium` fetches the browser but not its
system libraries, and installing those needs root, which the builder does not
grant, so Chromium fails on `libnspr4.so`. `scripts/prerender.mjs` treats that
as non-fatal and ships the client-rendered HTML instead, which silently loses
the static markup that crawlers and AI answer engines read. Building locally
avoids it. The GitHub Actions runner has no such problem, so production is
unaffected.

Stable preview URL: https://pippamanicom.vercel.app
