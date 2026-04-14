import type { Metadata } from "next";
import Image from "next/image";

import { MenuCategoryController } from "@/components/site/MenuCategoryController";
import { menuCategories } from "@/config/menu";

export const metadata: Metadata = {
  title: "MoonCricket Menu",
  description: "Menu categories and items from The MoonCricket Grille",
};

export default function MenuPage() {
  return (
    <main className="relative w-full overflow-hidden py-10">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sand)]">The MoonCricket Grille</p>
            <h1 className="mt-2 text-4xl font-semibold text-white md:text-6xl">Menu</h1>
            <p className="mt-3 max-w-2xl text-sm text-white/90 md:text-base">
              Pub classics, seafood favorites, and house specialties served in the heart of historic downtown Winter
              Garden.
            </p>
          </div>
        </section>

        <MenuCategoryController categories={menuCategories} />
      </div>
    </main>
  );
}
