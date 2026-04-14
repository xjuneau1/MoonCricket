import type { Metadata } from "next";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { BlockRenderer } from "@/components/site/BlockRenderer";

const homePage = siteConfig.pages.home;

export const metadata: Metadata = {
  title: homePage.seoTitle,
  description: homePage.seoDescription,
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--paper)]">
      <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-[var(--mint)] opacity-50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-48 h-80 w-80 rounded-full bg-[var(--sand)] opacity-45 blur-3xl" />

      <main>
        <section className="relative">
          <Image
            src="/assets/mooncricket/interior-wall-lights.jpg"
            alt="MoonCricket interior"
            width={1600}
            height={900}
            className="h-[42vh] w-full object-cover md:h-[56vh]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/25" />
          <div className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-6xl px-6 pb-10 md:px-10 md:pb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-100/95">Winter Garden, FL</p>
            <Image
              src="/assets/mooncricket/logo.png"
              alt="The MoonCricket Grille"
              width={760}
              height={240}
              className="mt-3 h-24 w-auto max-w-[92%] object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.45)] md:h-40"
              priority
            />
            <p className="mt-3 max-w-2xl text-base text-white/90 md:text-lg">
              Great food, deep beer knowledge, and downtown character inside a restored historic space.
            </p>
          </div>
        </section>
        <BlockRenderer blocks={homePage.blocks} />
      </main>
    </div>
  );
}
