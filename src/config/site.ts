import { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  siteName: "Northstar Studio",
  siteUrl: "https://example.com",
  navigation: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  pages: {
    home: {
      slug: "/",
      seoTitle: "Northstar Studio | Static Site Template",
      seoDescription:
        "Composable, configurable static site template built with Next.js blocks.",
      blocks: [
        {
          type: "hero",
          id: "hero-main",
          eyebrow: "Config-first Website Builder",
          title: "Assemble polished pages from reusable blocks",
          subtitle:
            "Edit a single config file to shape your marketing site. Swap sections, rewrite copy, and change links without touching component internals.",
          primaryAction: { label: "Start Building", href: "#services", variant: "primary" },
          secondaryAction: { label: "View Blocks", href: "#work", variant: "secondary" },
        },
        {
          type: "featureGrid",
          id: "services",
          headline: "Reusable sections with strong defaults",
          intro:
            "Each block accepts typed props so content editing is fast and safe.",
          columns: 3,
          items: [
            {
              icon: "01",
              title: "Hero Sections",
              description: "Launch with variants for launch pages, agencies, and products.",
            },
            {
              icon: "02",
              title: "Feature Grids",
              description: "Highlight benefits with consistent layout and spacing.",
            },
            {
              icon: "03",
              title: "Content Splits",
              description: "Pair copy with media and checklist bullets for storytelling.",
            },
            {
              icon: "04",
              title: "Stats Rows",
              description: "Drop in social proof metrics and performance highlights.",
            },
            {
              icon: "05",
              title: "Testimonials",
              description: "Keep customer quotes styled and readable out of the box.",
            },
            {
              icon: "06",
              title: "FAQ and CTA",
              description: "Close the page with objections handled and clear next steps.",
            },
          ],
        },
        {
          type: "splitContent",
          id: "about",
          badge: "How It Works",
          title: "A single source of truth for structure and content",
          body: "The page renderer reads blocks in order from your config. Reorder blocks to redesign the narrative. Add a new block object to extend the page with no layout rewiring.",
          bullets: [
            "Typed block contracts prevent invalid content shapes",
            "Fast iteration by editing one file",
            "Scales cleanly as pages and sections grow",
          ],
          image: {
            src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
            alt: "Team reviewing page modules on a wall",
          },
        },
        {
          type: "stats",
          id: "work",
          title: "Built for launch speed",
          items: [
            { label: "Reusable blocks", value: "7" },
            { label: "Config file edits", value: "1" },
            { label: "Average page setup", value: "< 30 min" },
            { label: "Design consistency", value: "100%" },
          ],
        },
        {
          type: "testimonials",
          id: "testimonials",
          title: "Teams move faster with this pattern",
          items: [
            {
              quote:
                "We shipped a new landing page in a morning by rearranging blocks and replacing copy.",
              name: "Priya Menon",
              role: "Product Marketing Lead",
            },
            {
              quote:
                "The typed config removes guesswork. Content edits are now low risk and reviewable in one diff.",
              name: "Alex Rivera",
              role: "Frontend Engineer",
            },
          ],
        },
        {
          type: "faq",
          id: "faq",
          title: "Common questions",
          items: [
            {
              question: "Can this stay fully static?",
              answer:
                "Yes. Keep content in config files and deploy with static output if needed.",
            },
            {
              question: "How do I add a new section type?",
              answer:
                "Create a block component, add its type to the union, and register it in the renderer map.",
            },
          ],
        },
        {
          type: "ctaBanner",
          id: "contact",
          title: "Ready to shape your own template?",
          text: "Duplicate this starter and swap in your brand, pages, and block data.",
          action: { label: "Get Started", href: "#", variant: "primary" },
        },
      ],
    },
  },
};
