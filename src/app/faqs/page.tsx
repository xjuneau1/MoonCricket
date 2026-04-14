import type { Metadata } from "next";
import Image from "next/image";

import { faqSections } from "@/config/faqs";

export const metadata: Metadata = {
  title: "MoonCricket FAQs",
  description: "History and background of The MoonCricket Grille",
};

export default function FaqsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10">
      <section className="relative overflow-hidden rounded-3xl border border-black/10">
        <Image
          src="/assets/mooncricket/interior-stained-glass.jpg"
          alt="Historic MoonCricket interior"
          width={1600}
          height={900}
          className="h-64 w-full object-cover md:h-80"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute bottom-0 left-0 p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-100">Story + History</p>
          <h1 className="mt-2 text-4xl font-semibold text-white md:text-5xl">FAQs</h1>
        </div>
      </section>

      <section className="mt-8 space-y-6">
        {faqSections.map((section) => (
          <article key={section.title} className="rounded-2xl border border-black/10 bg-white/80 p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-[var(--ink)] md:text-3xl">{section.title}</h2>
            <div className="mt-4 space-y-4 text-base leading-8 text-black/80">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}

        <a
          href="https://www.mooncricketgrille.com/mooncricket-grille-faqs"
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-white"
        >
          View Source FAQ Page
        </a>
      </section>
    </main>
  );
}
