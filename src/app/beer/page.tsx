import type { Metadata } from "next";
import Image from "next/image";

import { beerList } from "@/config/beer";

export const metadata: Metadata = {
  title: "MoonCricket Beer",
  description: "Beer knowledge and selection at The MoonCricket Grille",
};

export default function BeerPage() {
  return (
    <main className="relative w-full overflow-hidden py-10">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <section className="relative overflow-hidden rounded-3xl border border-[var(--brand)]/18">
          <Image
            src="/assets/mooncricket/beer-tap.jpg"
            alt="Beer taps at MoonCricket"
            width={1600}
            height={900}
            className="h-64 w-full object-cover md:h-80"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--sand)]">Beer Knowledge</p>
            <h1 className="mt-2 text-4xl font-semibold text-white md:text-5xl">Brews</h1>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-[var(--brand)]/18 bg-[var(--surface)] p-5 md:p-6">
          <p className="text-sm text-[var(--text-muted)]">
            MoonCricket is known for a deep, rotating beer lineup featuring craft staples, imports, and hard-to-find
            bottles for every palate.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {beerList.map((beer) => (
              <div key={beer} className="rounded-full border border-[var(--brand)]/18 bg-[var(--surface-soft)] px-3 py-2 text-xs font-medium text-[var(--ink)]">
                {beer}
              </div>
            ))}
          </div>
          <a
            href="/menu"
            className="mt-6 inline-flex rounded-full bg-[var(--brand)] px-4 py-2 text-sm font-semibold text-white"
          >
            View Menu
          </a>
        </section>
      </div>
    </main>
  );
}
