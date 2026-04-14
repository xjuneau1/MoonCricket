"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import type { MenuCategory } from "@/config/menu";

type MenuCategoryControllerProps = {
  categories: MenuCategory[];
};

const categoryImageMap: Record<string, string[]> = {
  starters: [
    "/assets/mooncricket/burger-closeup.jpg",
    "/assets/mooncricket/beer-tap.jpg",
    "/assets/mooncricket/interior-wall-lights.jpg",
  ],
  salads: [
    "/assets/mooncricket/interior-wall-lights.jpg",
    "/assets/mooncricket/burger-closeup.jpg",
  ],
  wings: [
    "/assets/mooncricket/burger.jpg",
    "/assets/mooncricket/beer-tap.jpg",
  ],
  sides: [
    "/assets/mooncricket/burger-closeup.jpg",
    "/assets/mooncricket/interior-wall-lights.jpg",
  ],
  wraps: [
    "/assets/mooncricket/burger.jpg",
    "/assets/mooncricket/wine-glasses.jpg",
  ],
  "kids menu": [
    "/assets/mooncricket/burger-closeup.jpg",
    "/assets/mooncricket/interior-wall-lights.jpg",
  ],
  sandwiches: [
    "/assets/mooncricket/burger-closeup.jpg",
    "/assets/mooncricket/burger.jpg",
  ],
  seafood: [
    "/assets/mooncricket/wine-glasses.jpg",
    "/assets/mooncricket/interior-wall-lights.jpg",
  ],
  burgers: [
    "/assets/mooncricket/burger.jpg",
    "/assets/mooncricket/burger-closeup.jpg",
  ],
  desserts: [
    "/assets/mooncricket/wine-glasses.jpg",
    "/assets/mooncricket/interior-stained-glass.jpg",
  ],
};

function stableIndex(value: string, max: number) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }

  return Math.abs(hash) % max;
}

function getMenuImage(category: string, item: string) {
  const normalizedCategory = category.toLowerCase();
  const categoryImages = categoryImageMap[normalizedCategory] ?? [
    "/assets/mooncricket/burger.jpg",
    "/assets/mooncricket/interior-wall-lights.jpg",
    "/assets/mooncricket/beer-tap.jpg",
  ];
  const imageIndex = stableIndex(`${normalizedCategory}-${item.toLowerCase()}`, categoryImages.length);
  return categoryImages[imageIndex];
}

export function MenuCategoryController({ categories }: MenuCategoryControllerProps) {
  const [activeCategoryTitle, setActiveCategoryTitle] = useState(categories[0]?.title ?? "");

  const activeCategory = useMemo(
    () => categories.find((category) => category.title === activeCategoryTitle) ?? categories[0],
    [activeCategoryTitle, categories]
  );

  if (!activeCategory) {
    return null;
  }

  return (
    <>
      <section className="mt-8 rounded-2xl border border-[var(--brand)]/18 bg-[var(--surface)] p-4 shadow-[0_8px_24px_rgba(43,67,102,0.17)] md:p-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">Choose a Category</p>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = category.title === activeCategory.title;
            return (
              <button
                key={category.title}
                type="button"
                onClick={() => setActiveCategoryTitle(category.title)}
                className={`min-h-10 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-[var(--brand)] bg-[var(--brand)] text-white"
                    : "border-[var(--brand)]/24 bg-[var(--accent-soft)] text-[var(--ink)] hover:bg-[var(--surface-soft)]"
                }`}
                aria-pressed={isActive}
              >
                {category.title}
              </button>
            );
          })}
        </div>
      </section>

      <section className="mt-10">
        <article className="rounded-3xl border border-[var(--brand)]/18 bg-[var(--surface)] p-6 shadow-[0_10px_28px_rgba(43,67,102,0.17)] md:p-7">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-3xl font-semibold text-[var(--ink)] md:text-4xl">{activeCategory.title}</h2>
            <p className="inline-flex min-h-10 items-center rounded-full border border-[var(--brand)]/24 bg-[var(--accent-soft)] px-4 py-2 text-sm font-semibold text-[var(--ink)]">
              {activeCategory.items.length} items
            </p>
          </div>

          <ul className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {activeCategory.items.map((item) => (
              <li
                key={`${activeCategory.title}-${item}`}
                className="group overflow-hidden rounded-2xl border border-[var(--brand)]/16 bg-[var(--paper)] shadow-[0_8px_18px_rgba(43,67,102,0.16)]"
              >
                <div className="relative">
                  <Image
                    src={getMenuImage(activeCategory.title, item)}
                    alt={`${item} menu photo`}
                    width={640}
                    height={420}
                    className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/35 to-transparent" />
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold text-[var(--ink)]">{item}</p>
                </div>
              </li>
            ))}
          </ul>

          {activeCategory.notes?.length ? (
            <div className="mt-5 space-y-2 rounded-xl border border-dashed border-[var(--brand)]/24 bg-[var(--surface-soft)] p-3 text-xs text-[var(--text-muted)]">
              {activeCategory.notes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          ) : null}
        </article>
      </section>
    </>
  );
}
