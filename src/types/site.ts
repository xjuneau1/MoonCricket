export type ButtonLink = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

export type HeroBlock = {
  type: "hero";
  id: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryAction?: ButtonLink;
  secondaryAction?: ButtonLink;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon?: string;
};

export type FeatureGridBlock = {
  type: "featureGrid";
  id: string;
  headline: string;
  intro?: string;
  columns?: 2 | 3 | 4;
  items: FeatureItem[];
};

export type SplitContentBlock = {
  type: "splitContent";
  id: string;
  badge?: string;
  title: string;
  body: string;
  bullets?: string[];
  image?: {
    src: string;
    alt: string;
  };
};

export type StatItem = {
  label: string;
  value: string;
};

export type StatsBlock = {
  type: "stats";
  id: string;
  title?: string;
  items: StatItem[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type TestimonialsBlock = {
  type: "testimonials";
  id: string;
  title: string;
  items: Testimonial[];
};

export type CtaBannerBlock = {
  type: "ctaBanner";
  id: string;
  title: string;
  text: string;
  action: ButtonLink;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqBlock = {
  type: "faq";
  id: string;
  title: string;
  items: FaqItem[];
};

export type PageBlock =
  | HeroBlock
  | FeatureGridBlock
  | SplitContentBlock
  | StatsBlock
  | TestimonialsBlock
  | CtaBannerBlock
  | FaqBlock;

export type SitePage = {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  blocks: PageBlock[];
};

export type SiteConfig = {
  siteName: string;
  siteUrl: string;
  navigation: {
    label: string;
    href: string;
  }[];
  pages: {
    home: SitePage;
  };
};
