import { FeatureGridBlock as FeatureGridBlockType } from "@/types/site";

import { SectionShell } from "../SectionShell";

type FeatureGridBlockProps = {
  block: FeatureGridBlockType;
};

const columnClassMap: Record<2 | 3 | 4, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

export function FeatureGridBlock({ block }: FeatureGridBlockProps) {
  const columns = block.columns ?? 3;

  return (
    <SectionShell id={block.id}>
      <div className="mb-10 flex max-w-3xl flex-col gap-4">
        <h2 className="text-3xl font-semibold md:text-4xl">{block.headline}</h2>
        {block.intro ? <p className="text-lg text-black/70">{block.intro}</p> : null}
      </div>

      <div className={`grid gap-4 ${columnClassMap[columns]}`}>
        {block.items.map((item, index) => (
          <article
            key={`${block.id}-${index}-${item.title}`}
            className="group rounded-2xl border border-[var(--brand)]/16 bg-white/80 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(58,50,49,0.12)]"
          >
            <div className="mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-[var(--brand)] via-[var(--sand)] to-[var(--mint)]" />
            {item.icon ? (
              <span className="inline-flex rounded-full bg-[var(--ink)] px-3 py-1 text-xs font-semibold text-white shadow-[0_5px_12px_rgba(58,50,49,0.22)]">
                {item.icon}
              </span>
            ) : null}
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-black/70">{item.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
