import { StatsBlock as StatsBlockType } from "@/types/site";

import { SectionShell } from "../SectionShell";

type StatsBlockProps = {
  block: StatsBlockType;
};

export function StatsBlock({ block }: StatsBlockProps) {
  return (
    <SectionShell id={block.id}>
      {block.title ? <h2 className="mb-8 text-3xl font-semibold md:text-4xl">{block.title}</h2> : null}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {block.items.map((item) => (
          <div
            key={`${item.label}-${item.value}`}
            className="rounded-2xl border border-black/10 bg-white/80 p-6 text-center"
          >
            <p className="text-3xl font-semibold md:text-4xl">{item.value}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.12em] text-black/60">{item.label}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
