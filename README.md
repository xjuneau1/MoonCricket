## MoonCricket Grille Site (Next.js)

This project is a rebuilt multi-page website for The MoonCricket Grille using Next.js App Router, TypeScript, and Tailwind CSS.

The site includes:
- A persistent branded navbar/footer across pages
- A custom home hero section and block-driven homepage content
- Dedicated internal pages for Menu, Beer, FAQs, Events, and Contact
- Imported MoonCricket assets and curated content from the live site

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Lint and Build

```bash
npm run lint
npm run build
```

## Routes

- `/` Home
- `/menu` Menu categories and item cards
- `/beer` Beer list page
- `/faqs` FAQ and history page
- `/events` Local events page
- `/contact` Contact and employment links

## Content Sources

- Core homepage content: `src/config/site.ts`
- Menu categories/items: `src/config/menu.ts`
- Beer list: `src/config/beer.ts`
- FAQ/history sections: `src/config/faqs.ts`

## Design and Shared UI

- Global styling and theme tokens: `src/app/globals.css`
- Global layout shell (navbar + footer): `src/app/layout.tsx`
- Navbar: `src/components/site/MainNav.tsx`
- Footer: `src/components/site/SiteFooter.tsx`

## Home Page Architecture

- Top hero image section with prominent logo: `src/app/page.tsx`
- Config-driven block renderer: `src/components/site/BlockRenderer.tsx`
- Reusable blocks: `src/components/site/blocks/*`

## Menu Page Image Strategy

The Menu page uses:
- Real dessert images from MoonCricket's desserts page for dessert items
- Query-matched placeholder food images for non-dessert items

Relevant file:
- `src/app/menu/page.tsx`

Remote image hosts are configured in:
- `next.config.ts`

## Assets

MoonCricket images and logo files live in:
- `public/assets/mooncricket/`

## Notes

- The site is statically prerendered for all current routes.
- If content changes on the live MoonCricket site, update corresponding files in `src/config/*`.
