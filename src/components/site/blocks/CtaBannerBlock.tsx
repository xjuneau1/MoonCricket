import { CtaBannerBlock as CtaBannerBlockType } from "@/types/site";

import { SectionShell } from "../SectionShell";
import { SiteButton } from "../SiteButton";

type CtaBannerBlockProps = {
  block: CtaBannerBlockType;
};

export function CtaBannerBlock({ block }: CtaBannerBlockProps) {
  return (
    <SectionShell id={block.id} className="pb-24">
      <div className="rounded-3xl bg-[var(--ink)] p-8 text-white md:p-12">
        <h2 className="max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">{block.title}</h2>
        <p className="mt-4 max-w-2xl text-white/75">{block.text}</p>
        <div className="mt-8">
          <SiteButton action={{ ...block.action, variant: "ghost" }} />
        </div>
      </div>
    </SectionShell>
  );
}
