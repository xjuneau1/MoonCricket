## Static Site Template (Next.js)

This project is a config-driven static site starter built with Next.js App Router, TypeScript, and Tailwind CSS.

The homepage is assembled block by block from one source of truth:
- `src/config/site.ts`

## Run Locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build and Lint

```bash
npm run lint
npm run build
```

## How the Architecture Works

- `src/types/site.ts`
Defines typed contracts for every block.

- `src/config/site.ts`
Contains all editable content and page composition order.

- `src/components/site/BlockRenderer.tsx`
Maps block types to React components.

- `src/components/site/blocks/*`
Reusable, configurable block components.

- `src/app/page.tsx`
Reads config and renders blocks in sequence.

## Add or Reorder Sections

1. Open `src/config/site.ts`.
2. In `pages.home.blocks`, reorder existing block objects or add a new one.
3. If adding a new block type:
	- Create a type in `src/types/site.ts`.
	- Create a component in `src/components/site/blocks/`.
	- Register the block in `src/components/site/BlockRenderer.tsx`.

## Notes

- This starter currently includes: hero, feature grid, split content, stats, testimonials, FAQ, and CTA banner blocks.
- The home route is statically prerendered.
