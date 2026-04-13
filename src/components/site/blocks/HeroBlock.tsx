import { HeroBlock as HeroBlockType } from "@/types/site";

import { SectionShell } from "../SectionShell";
import { SiteButton } from "../SiteButton";

type HeroBlockProps = {
  block: HeroBlockType;
};

export function HeroBlock({ block }: HeroBlockProps) {
  return (
    <SectionShell id={block.id} className="pt-24 md:pt-28">
      <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/65 p-8 shadow-[0_20px_80px_rgba(10,31,68,0.12)] backdrop-blur-sm md:p-12">
        <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[var(--mint)] opacity-70 blur-2xl" />
        <div className="absolute -bottom-16 right-0 h-44 w-44 rounded-full bg-[var(--sand)] opacity-80 blur-2xl" />

        <div className="relative flex flex-col gap-7">
          {block.eyebrow ? (
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--brand)]">{block.eyebrow}</p>
          ) : null}
          <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight md:text-6xl">
            {block.title}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-black/70 md:text-xl">{block.subtitle}</p>
          <div className="flex flex-wrap gap-3">
            {block.primaryAction ? <SiteButton action={block.primaryAction} /> : null}
            {block.secondaryAction ? <SiteButton action={block.secondaryAction} /> : null}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
