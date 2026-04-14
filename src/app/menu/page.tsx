import type { Metadata } from "next";
import Image from "next/image";

import { menuCategories } from "@/config/menu";

export const metadata: Metadata = {
  title: "MoonCricket Menu",
  description: "Menu categories and items from The MoonCricket Grille",
};

function toAnchor(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const dessertImageMap: Record<string, string> = {
  "chocolate overload cake":
    "https://static.wixstatic.com/media/f836bc_e7187bf5e0874367a01dd260a1f8555f~mv2.jpg/v1/fill/w_672,h_447,al_c,lg_1,q_80,enc_avif,quality_auto/Chocolate%20Cake.jpg",
  "peanut butter pie":
    "https://static.wixstatic.com/media/f836bc_b7a76ccb0e904d5197f4629e5492c433~mv2.jpg/v1/fill/w_672,h_448,al_c,lg_1,q_80,enc_avif,quality_auto/f836bc_b7a76ccb0e904d5197f4629e5492c433~mv2.jpg",
  "carrot cake":
    "https://static.wixstatic.com/media/f836bc_eb03800d307042519f4b86cb839b56df~mv2.jpg/v1/fill/w_672,h_448,al_c,lg_1,q_80,enc_avif,quality_auto/Carrot%20Cake.jpg",
};

function getMenuTags(category: string, item: string) {
  const text = `${category} ${item}`.toLowerCase();

  const matchRules: Array<[RegExp, string[]]> = [
    [/(burger|patty melt|cheese burger|wagyu|lamb burger|turkey burger)/, ["burger", "fries", "pub-food"]],
    [/(taco)/, ["tacos", "mexican-food", "plate"]],
    [/(salad|caesar|greens|vinaigrette|beet)/, ["salad", "healthy-food", "restaurant"]],
    [/(wings|kickers)/, ["chicken-wings", "bar-food", "appetizer"]],
    [/(sandwich|reuben|cuban|blt|philly|dip|melt|hoagie|po boy)/, ["sandwich", "deli-food", "fries"]],
    [/(shrimp|fish|mahi|salmon|seafood|calamari)/, ["seafood", "restaurant", "dinner"]],
    [/(dessert|cake|pie)/, ["dessert", "cake", "bakery"]],
    [/(wrap)/, ["wrap", "lunch", "restaurant-food"]],
    [/(fries|onion rings|pickles|side|coleslaw|beans|rice)/, ["side-dish", "comfort-food", "restaurant"]],
    [/(kids|nuggets|grilled cheese|mac n cheese)/, ["family-meal", "comfort-food", "plate"]],
    [/(dip|artichoke|portobello|starter|chips)/, ["appetizer", "bar-food", "plate"]],
  ];

  for (const [pattern, tags] of matchRules) {
    if (pattern.test(text)) {
      return tags;
    }
  }

  return ["restaurant-food", "meal", "plate"];
}

function getPlaceholderImage(category: string, item: string) {
  if (category.toLowerCase() === "desserts") {
    const dessertImage = dessertImageMap[item.toLowerCase()];
    if (dessertImage) {
      return dessertImage;
    }
  }

  const tags = getMenuTags(category, item);
  const lock = encodeURIComponent(`${category}-${item}`);
  return `https://loremflickr.com/640/420/${tags.join(",")}?lock=${lock}`;
}

export default function MenuPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10">
      <section className="relative overflow-hidden rounded-[2rem] border border-[var(--brand)]/20 shadow-[0_18px_45px_rgba(20,104,168,0.18)]">
        <Image
          src="/assets/mooncricket/burger.jpg"
          alt="MoonCricket menu food"
          width={1600}
          height={900}
          className="h-72 w-full object-cover md:h-96"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/35 to-black/15" />
        <div className="absolute bottom-0 left-0 p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-100">The MoonCricket Grille</p>
          <h1 className="mt-2 text-4xl font-semibold text-white md:text-6xl">Menu</h1>
          <p className="mt-3 max-w-2xl text-sm text-white/90 md:text-base">
            Every item below includes a temporary placeholder image so you can design and iterate now, then swap in
            final photography later.
          </p>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-[var(--brand)]/20 bg-white/70 p-4 shadow-[0_8px_24px_rgba(66,66,66,0.08)] md:p-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">Jump to Category</p>
        <div className="flex flex-wrap gap-2">
          {menuCategories.map((category) => (
            <a
              key={category.title}
              href={`#${toAnchor(category.title)}`}
              className="rounded-full border border-[var(--brand)]/30 bg-[var(--accent-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--ink)] hover:bg-white"
            >
              {category.title}
            </a>
          ))}
        </div>
      </section>

      <section className="mt-10 space-y-8">
        {menuCategories.map((category) => (
          <article
            id={toAnchor(category.title)}
            key={category.title}
            className="scroll-mt-28 rounded-3xl border border-[var(--brand)]/20 bg-white/80 p-6 shadow-[0_10px_28px_rgba(66,66,66,0.08)] md:p-7"
          >
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-3xl font-semibold text-[var(--ink)] md:text-4xl">{category.title}</h2>
              <a
                href={category.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[var(--ink)] px-3 py-1.5 text-xs font-semibold text-white"
              >
                Original Page
              </a>
            </div>

            <ul className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {category.items.map((item) => (
                <li
                  key={`${category.title}-${item}`}
                  className="group overflow-hidden rounded-2xl border border-black/10 bg-[var(--paper)] shadow-[0_8px_18px_rgba(66,66,66,0.06)]"
                >
                  <div className="relative">
                    <Image
                      src={getPlaceholderImage(category.title, item)}
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

            {category.notes?.length ? (
              <div className="mt-5 space-y-2 rounded-xl border border-dashed border-[var(--brand)]/35 bg-white/70 p-3 text-xs text-black/70">
                {category.notes.map((note) => (
                  <p key={note}>{note}</p>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </section>
    </main>
  );
}
