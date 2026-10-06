# Project handoff — News Reader

## Start here

Read `AGENTS.md`, `README.md`, `src/App.tsx`, `src/hooks/useFeed.ts`,
`src/lib/feed.ts`, and `src/lib/library.ts`. The product is an editorial news reader,
not a generic dashboard.

## Stack and product boundaries

- React 18, Vite 8, TypeScript, Tailwind 4, and the selected Romanesque design system.
- Keep the installed Iconoir icon family and existing font/token setup.
- The live reader consumes the sibling `news-api` static JSON contract.
- `/demo` uses labeled local fixtures and must make zero live feed/API requests.
- Saved articles and read state are bounded browser-local data; never describe them as
  cloud or cross-device storage.
- Main flows: discovery filters → article preview → save/read state → reading queue;
  feed details expose factual freshness/provider state.

## Verification

```sh
npm run check
READER_TEST_SERVER=preview CI=1 npm run test:e2e
```

Current verification: typecheck, 14 unit tests, production build, and 7 E2E flows
(with one intentional skip) passed. Better Design spacing review passed at 100/100.

## Next-maintainer rules

- Preserve URL-backed filters, cancellation/race protection, cache/retry behavior,
  missing-image fallbacks, and keyboard-accessible dialogs/controls.
- Keep `/demo` credential-free and isolated from live requests.
- Use the existing `src/components/ui/*` primitives and installed icons; do not add
  an alternate icon pack or replace the selected visual system.
- Read the feature map and review files before changing a named flow.
- Do not access personal browser profiles; use isolated temporary browser contexts.

## Last shipped state

- Main branch is pushed and clean.
- Discovery, queue, article preview, import/export, read state, freshness, and recovery
  flows are shipped and documented.
- A public HTTPS deployment is still required for production-hosted verification.
