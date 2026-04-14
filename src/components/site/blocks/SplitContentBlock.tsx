import Image from "next/image";

import { SplitContentBlock as SplitContentBlockType } from "@/types/site";

import { SectionShell } from "../SectionShell";

type SplitContentBlockProps = {
  block: SplitContentBlockType;
};

export function SplitContentBlock({ block }: SplitContentBlockProps) {
  const isHistoryBlock = block.id === "history";

  return (
    <SectionShell id={block.id}>
      <div className="relative grid items-center gap-8 overflow-hidden rounded-3xl border border-[var(--brand)]/18 bg-[var(--surface)] p-6 md:grid-cols-2 md:p-8">
        <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-[var(--sand)]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 right-0 h-48 w-48 rounded-full bg-[var(--brand)]/18 blur-3xl" />

        <div className="relative">
          {block.badge ? (
            <p className="mb-3 inline-flex rounded-full border border-[var(--brand)]/30 bg-[var(--accent-soft)] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
              {block.badge}
            </p>
          ) : null}
          <h2 className="max-w-xl text-3xl font-semibold leading-tight md:text-5xl">{block.title}</h2>
          <p className="mt-4 text-lg leading-8 text-[var(--text-muted)]">{block.body}</p>

          {isHistoryBlock ? (
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-[var(--brand)]/20 bg-[var(--surface-soft)] p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--brand)]">Built</p>
                <p className="mt-1 text-2xl font-semibold text-[var(--ink)]">1912</p>
              </div>
              <div className="rounded-xl border border-[var(--brand)]/20 bg-[var(--surface-soft)] p-3">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--brand)]">Restored</p>
                <p className="mt-1 text-2xl font-semibold text-[var(--ink)]">2003</p>
              </div>
            </div>
          ) : null}

          {block.bullets?.length ? (
            <ul className="mt-6 space-y-3 rounded-2xl border border-[var(--brand)]/16 bg-[var(--surface-soft)] p-4">
              {block.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-[var(--text-muted)]">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-[var(--sand)]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {block.image ? (
          <div className="relative overflow-hidden rounded-2xl border border-[var(--brand)]/16 shadow-[0_16px_34px_rgba(43,67,102,0.16)]">
            <Image
              src={block.image.src}
              alt={block.image.alt}
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--sand)]">Historic Interior</p>
              <p className="mt-1 text-sm text-white/90">Original details, restored character, unmistakable MoonCricket atmosphere.</p>
            </div>
          </div>
        ) : null}
      </div>
    </SectionShell>
  );
}
