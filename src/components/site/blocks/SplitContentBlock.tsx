import Image from "next/image";

import { SplitContentBlock as SplitContentBlockType } from "@/types/site";

import { SectionShell } from "../SectionShell";

type SplitContentBlockProps = {
  block: SplitContentBlockType;
};

export function SplitContentBlock({ block }: SplitContentBlockProps) {
  return (
    <SectionShell id={block.id}>
      <div className="grid items-center gap-8 rounded-3xl bg-white/75 p-6 md:grid-cols-2 md:p-8">
        <div>
          {block.badge ? (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand)]">{block.badge}</p>
          ) : null}
          <h2 className="text-3xl font-semibold md:text-4xl">{block.title}</h2>
          <p className="mt-4 text-lg leading-8 text-black/75">{block.body}</p>
          {block.bullets?.length ? (
            <ul className="mt-6 space-y-3">
              {block.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-black/80">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-[var(--brand)]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {block.image ? (
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={block.image.src}
              alt={block.image.alt}
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        ) : null}
      </div>
    </SectionShell>
  );
}
