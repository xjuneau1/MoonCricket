import { CtaBannerBlock as CtaBannerBlockType } from "@/types/site";

import { SectionShell } from "../SectionShell";
import { SiteButton } from "../SiteButton";

type CtaBannerBlockProps = {
  block: CtaBannerBlockType;
};

export function CtaBannerBlock({ block }: CtaBannerBlockProps) {
  return (
    <SectionShell id={block.id} className="pb-24">
      <div className="rounded-3xl border border-[var(--brand)]/18 bg-[var(--surface-soft)] p-8 text-[var(--ink)] md:p-12">
        <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">{block.title}</h2>
        <p className="mt-4 max-w-2xl text-[var(--text-muted)]">{block.text}</p>
        <div className="mt-8">
          <SiteButton action={{ ...block.action, variant: "ghost" }} />
        </div>
      </div>
    </SectionShell>
  );
}
