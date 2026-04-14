import { StatsBlock as StatsBlockType } from "@/types/site";

import { SectionShell } from "../SectionShell";

type StatsBlockProps = {
  block: StatsBlockType;
};

export function StatsBlock({ block }: StatsBlockProps) {
  const isAtAGlanceBlock = block.id === "brews";

  return (
    <SectionShell id={block.id}>
      {block.title ? (
        <div className="mb-8 rounded-2xl border border-[var(--brand)]/18 bg-[var(--surface)] p-5 shadow-[0_10px_24px_rgba(43,67,102,0.15)] md:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">Snapshot</p>
          <h2 className="mt-2 text-3xl font-semibold leading-tight md:text-4xl">{block.title}</h2>
          {isAtAGlanceBlock ? (
            <p className="mt-2 max-w-3xl text-sm text-[var(--text-muted)] md:text-base">
              From building history to signature beer culture, these are the details that define the MoonCricket
              experience.
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {block.items.map((item, index) => (
          <div
            key={`${item.label}-${item.value}`}
            className="group relative overflow-hidden rounded-2xl border border-[var(--brand)]/18 bg-[var(--surface-soft)] p-6 text-center shadow-[0_10px_22px_rgba(43,67,102,0.12)] transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[var(--sand)]/25 blur-2xl" />
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--brand)]">0{index + 1}</p>
            <p className="mt-2 text-4xl font-semibold leading-none md:text-5xl">{item.value}</p>
            <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-gradient-to-r from-[var(--brand)] via-[var(--sand)] to-[var(--mint)]" />
            <p className="mt-3 text-sm uppercase tracking-[0.12em] text-[var(--text-muted)]">{item.label}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
