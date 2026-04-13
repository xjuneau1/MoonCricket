import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { BlockRenderer } from "@/components/site/BlockRenderer";
import { Header } from "@/components/site/Header";

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

      <Header siteName={siteConfig.siteName} navItems={siteConfig.navigation} />
      <main>
        <BlockRenderer blocks={homePage.blocks} />
      </main>
    </div>
  );
}
