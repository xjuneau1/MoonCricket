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
            className="rounded-2xl border border-black/10 bg-white p-7 shadow-[0_10px_35px_rgba(0,0,0,0.06)]"
          >
            <blockquote className="text-lg leading-8 text-black/80">{item.quote}</blockquote>
            <figcaption className="mt-5 text-sm text-black/65">
              <span className="block font-semibold text-black/85">{item.name}</span>
              <span>{item.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionShell>
  );
}
