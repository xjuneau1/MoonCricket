import { FaqBlock as FaqBlockType } from "@/types/site";

import { SectionShell } from "../SectionShell";

type FaqBlockProps = {
  block: FaqBlockType;
};

export function FaqBlock({ block }: FaqBlockProps) {
  return (
    <SectionShell id={block.id}>
      <h2 className="mb-8 text-3xl font-semibold md:text-4xl">{block.title}</h2>
      <div className="space-y-4">
        {block.items.map((item) => (
          <details key={item.question} className="group rounded-2xl border border-[var(--brand)]/18 bg-[var(--surface)] p-5">
            <summary className="cursor-pointer list-none font-semibold">
              <span>{item.question}</span>
              <span className="ml-2 text-[var(--text-muted)] transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-[var(--text-muted)]">{item.answer}</p>
          </details>
        ))}
      </div>
    </SectionShell>
  );
}
