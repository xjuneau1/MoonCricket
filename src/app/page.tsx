import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { BlockRenderer } from "@/components/site/BlockRenderer";
import { HeroCarousel } from "@/components/site/HeroCarousel";

const homePage = siteConfig.pages.home;

const heroImages = [
  { src: "/assets/mooncricket/interior-wall-lights.jpg", alt: "MoonCricket interior with warm wall lighting" },
  { src: "/assets/mooncricket/interior-stained-glass.jpg", alt: "MoonCricket stained glass and historic details" },
  { src: "/assets/mooncricket/beer-tap.jpg", alt: "Beer taps at MoonCricket" },
  { src: "/assets/mooncricket/burger.jpg", alt: "MoonCricket burger and fries" },
  { src: "/assets/mooncricket/burger-closeup.jpg", alt: "Close-up of MoonCricket burger" },
  { src: "/assets/mooncricket/wine-glasses.jpg", alt: "Drinks at MoonCricket" },
];

export const metadata: Metadata = {
  title: homePage.seoTitle,
  description: homePage.seoDescription,
};

const homeContentBlocks = homePage.blocks.filter((block) => block.type !== "hero");

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--paper)]">
      <main>
        <section className="relative">
          <HeroCarousel images={heroImages} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/42 to-black/28" />
          <div className="absolute inset-0 mx-auto grid w-full max-w-6xl items-center gap-6 px-6 pb-12 pt-24 md:grid-cols-[1.35fr_1fr] md:px-10 md:pt-28">
            <div>
              <p className="text-base font-semibold uppercase tracking-[0.22em] text-[var(--sand)] md:text-xl">Welcome to</p>
              <Image
                src="/assets/mooncricket/MClogo_upscale_nobg.png"
                alt="The MoonCricket Grille"
                width={760}
                height={240}
                className="mt-5 h-auto w-[95%] max-w-[980px] object-contain drop-shadow-[0_12px_26px_rgba(0,0,0,0.55)]"
                priority
              />
              <p className="mt-5 max-w-3xl text-lg text-white/92 md:text-2xl">
                Great food, deep beer knowledge, and downtown character inside a restored historic space.
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-black/32 p-4 text-white/95 backdrop-blur-sm md:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sand)]">Visit Us</p>
              <p className="mt-1 text-base font-semibold md:text-lg">14 W Plant Street, Winter Garden, FL</p>
              <p className="text-sm text-white/85">407-905-5325</p>

              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--sand)]">Current Hours</p>
              <p className="mt-1 text-sm text-white/90">Sun 11:30 - 4:00 PM | Mon Closed</p>
              <p className="text-sm text-white/90">Tue-Wed 11:30 AM - 8:00 PM | Thu-Sat 11:30 AM - 9:00 PM</p>

              <Link
                href="/menu"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-[var(--sand)] px-5 py-2.5 text-sm font-semibold text-black shadow-[0_8px_18px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#e5c774]"
              >
                View Menu
              </Link>
            </div>
          </div>
        </section>
        <BlockRenderer blocks={homeContentBlocks} />
      </main>
    </div>
  );
}
