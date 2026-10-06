# News Reader

- React 18, Vite 8, TypeScript and Tailwind 4. Use Node 22.12+ and npm.
- `npm ci`; `npm run dev`. Verify changes with `npm run check` and `npm run test:e2e`.
- The live reader consumes the sibling news-api repository's static JSON contract. `/demo` uses labeled local fixtures and never requests live feeds.
- Saved reading is bounded local data; do not describe it as cloud or cross-device storage.
- Preserve the selected Romanesque-based News Reader system and its assigned Iconoir icon family.
- Never access personal browser profiles or settings. Browser verification uses isolated temporary profiles only.

<!-- better-design:start -->
Read DESIGN.md when present. Compose installed src/components/ui/* primitives: Sidebar for the app shell, Table for records, and the installed dependent-flow stepper only when appropriate. Preserve the installed font loader and resolve every --font-* token. Use src/index.css design tokens. See .better-design/rules.md.
<!-- better-design:end -->
