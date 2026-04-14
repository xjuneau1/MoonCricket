import { TestimonialsBlock as TestimonialsBlockType } from "@/types/site";

import { SectionShell } from "../SectionShell";

type TestimonialsBlockProps = {
  block: TestimonialsBlockType;
};

export function TestimonialsBlock({ block }: TestimonialsBlockProps) {
  return (
    <SectionShell id={block.id}>
      <h2 className="mb-8 text-3xl font-semibold md:text-4xl">{block.title}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {block.items.map((item) => (
          <figure
            key={`${item.name}-${item.role}`}
            className="rounded-2xl border border-[var(--brand)]/18 bg-[var(--surface)] p-7 shadow-[0_10px_35px_rgba(43,67,102,0.17)]"
          >
            <blockquote className="text-lg leading-8 text-[var(--text-muted)]">{item.quote}</blockquote>
            <figcaption className="mt-5 text-sm text-[var(--text-muted)]">
              <span className="block font-semibold text-[var(--ink)]">{item.name}</span>
              <span>{item.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionShell>
  );
}
