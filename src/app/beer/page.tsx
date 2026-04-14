import type { Metadata } from "next";
import Image from "next/image";

import { beerList } from "@/config/beer";

export const metadata: Metadata = {
  title: "MoonCricket Beer",
  description: "Beer knowledge and selection at The MoonCricket Grille",
};

export default function BeerPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10">
      <section className="relative overflow-hidden rounded-3xl border border-black/10">
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-100">Beer Knowledge</p>
          <h1 className="mt-2 text-4xl font-semibold text-white md:text-5xl">Brews</h1>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-black/10 bg-white/75 p-5 md:p-6">
        <p className="text-sm text-black/70">
          This page mirrors the beer list published on MoonCricket&apos;s brews page.
        </p>
        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
          {beerList.map((beer) => (
            <div key={beer} className="rounded-full border border-black/10 bg-[var(--paper)] px-3 py-2 text-xs font-medium text-black/80">
              {beer}
            </div>
          ))}
        </div>
        <a
          href="https://www.mooncricketgrille.com/mooncricket-grille-brews"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex rounded-full bg-[var(--brand)] px-4 py-2 text-sm font-semibold text-white"
        >
          View Source Brews Page
        </a>
      </section>
    </main>
  );
}
