import { PageBlock } from "@/types/site";

import { CtaBannerBlock } from "./blocks/CtaBannerBlock";
import { FaqBlock } from "./blocks/FaqBlock";
import { FeatureGridBlock } from "./blocks/FeatureGridBlock";
import { HeroBlock } from "./blocks/HeroBlock";
import { SplitContentBlock } from "./blocks/SplitContentBlock";
import { StatsBlock } from "./blocks/StatsBlock";
import { TestimonialsBlock } from "./blocks/TestimonialsBlock";

type BlockRendererProps = {
  blocks: PageBlock[];
};

export function BlockRenderer({ blocks }: BlockRendererProps) {
  return (
    <>
      {blocks.map((block) => {
        switch (block.type) {
          case "hero":
            return <HeroBlock key={block.id} block={block} />;
          case "featureGrid":
            return <FeatureGridBlock key={block.id} block={block} />;
          case "splitContent":
            return <SplitContentBlock key={block.id} block={block} />;
          case "stats":
            return <StatsBlock key={block.id} block={block} />;
          case "testimonials":
            return <TestimonialsBlock key={block.id} block={block} />;
          case "faq":
            return <FaqBlock key={block.id} block={block} />;
          case "ctaBanner":
            return <CtaBannerBlock key={block.id} block={block} />;
          default:
            return null;
        }
      })}
    </>
  );
}
