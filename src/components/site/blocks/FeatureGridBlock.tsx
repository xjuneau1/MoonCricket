import { FeatureGridBlock as FeatureGridBlockType } from "@/types/site";

import { MiniImageCarousel } from "../MiniImageCarousel";
import { SectionShell } from "../SectionShell";

type FeatureGridBlockProps = {
  block: FeatureGridBlockType;
};

const columnClassMap: Record<2 | 3 | 4, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

const categoryImages: Record<string, string[]> = {
  starters: [
    "/assets/mooncricket/burger-closeup.jpg",
    "/assets/mooncricket/interior-wall-lights.jpg",
    "/assets/mooncricket/beer-tap.jpg",
  ],
  burgers: [
    "/assets/mooncricket/burger.jpg",
    "/assets/mooncricket/burger-closeup.jpg",
    "/assets/mooncricket/interior-wall-lights.jpg",
  ],
  sandwiches: [
    "/assets/mooncricket/burger-closeup.jpg",
    "/assets/mooncricket/wine-glasses.jpg",
    "/assets/mooncricket/burger.jpg",
  ],
  "seafood favorites": [
    "/assets/mooncricket/wine-glasses.jpg",
    "/assets/mooncricket/interior-stained-glass.jpg",
    "/assets/mooncricket/interior-wall-lights.jpg",
  ],
  brews: [
    "/assets/mooncricket/beer-tap.jpg",
    "/assets/mooncricket/wine-glasses.jpg",
    "/assets/mooncricket/interior-wall-lights.jpg",
  ],
  "local events": [
    "/assets/mooncricket/interior-wall-lights.jpg",
    "/assets/mooncricket/interior-stained-glass.jpg",
    "/assets/mooncricket/wine-glasses.jpg",
  ],
};

function getCardImages(title: string) {
  const key = title.toLowerCase();
  const images = categoryImages[key] ?? [
    "/assets/mooncricket/interior-wall-lights.jpg",
    "/assets/mooncricket/burger.jpg",
    "/assets/mooncricket/beer-tap.jpg",
  ];

  return images.map((src) => ({
    src,
    alt: `${title} highlight at MoonCricket`,
  }));
}

export function FeatureGridBlock({ block }: FeatureGridBlockProps) {
  const columns = block.columns ?? 3;

  return (
    <SectionShell id={block.id}>
      <div className="mb-10 flex max-w-3xl flex-col gap-4">
        <h2 className="text-3xl font-semibold md:text-4xl">{block.headline}</h2>
        {block.intro ? <p className="text-lg text-[var(--text-muted)]">{block.intro}</p> : null}
      </div>

      <div className={`grid gap-4 ${columnClassMap[columns]}`}>
        {block.items.map((item, index) => (
          <article
            key={`${block.id}-${index}-${item.title}`}
            className="group rounded-2xl border border-[var(--brand)]/18 bg-[var(--surface-soft)] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(43,67,102,0.17)]"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <div className="mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-[var(--brand)] via-[var(--sand)] to-[var(--mint)]" />
            <MiniImageCarousel images={getCardImages(item.title)} />
            <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{item.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
