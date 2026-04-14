import { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  siteName: "The MoonCricket Grille",
  siteUrl: "https://www.mooncricketgrille.com",
  navigation: [
    { label: "Menu", href: "#menu" },
    { label: "History", href: "#history" },
    { label: "Brews", href: "#brews" },
    { label: "Events", href: "#events" },
    { label: "Visit", href: "#visit" },
  ],
  pages: {
    home: {
      slug: "/",
      seoTitle: "The MoonCricket Grille | Winter Garden, FL",
      seoDescription:
        "MoonCricket Grille in Winter Garden, FL. Explore menu highlights, brews, events, and visit details.",
      blocks: [
        {
          type: "hero",
          id: "hero-main",
          eyebrow: "Downtown Winter Garden Favorite",
          title: "Welcome to The MoonCricket Grille",
          subtitle:
            "14 W Plant Street, Winter Garden, FL | 407-905-5325. Hours: Sun 11:30 - 4:00 PM, Mon Closed, Tue-Wed 11:30 AM - 8:00 PM, Thu-Sat 11:30 AM - 9:00 PM.",
          primaryAction: {
            label: "View Full Menu",
            href: "https://www.mooncricketgrille.com/mooncricket-grille-menu",
            variant: "primary",
          },
          secondaryAction: {
            label: "Get Directions",
            href: "https://www.mooncricketgrille.com/mooncricket-grille-contact",
            variant: "secondary",
          },
        },
        {
          type: "featureGrid",
          id: "menu",
          headline: "From the MoonCricket menu",
          intro:
            "Highlights pulled from live MoonCricket menu pages including Starters, Burgers, Sandwiches, Seafood, and Brews.",
          columns: 3,
          items: [
            {
              icon: "ST",
              title: "Starters",
              description:
                "Basket of Homemade Kettle Chips, Spinach Artichoke Dip, Bam-Bam Shrimp, Fried Calamari, Stuffed Portobello, and Smoked Fish Dip.",
            },
            {
              icon: "BG",
              title: "Burgers",
              description:
                "Half-pound fresh Black Angus burgers, including Wagyu Bacon Cheddar, Mediterranean Lamb Burger, Avocado Burger, Patty Melt, and Blue Cheese Burger.",
            },
            {
              icon: "SW",
              title: "Sandwiches",
              description:
                "Buffalo Chicken, Prime Rib French Dip, Reuben, The Cuban, Blackened Mahi Mahi Sandwich, Bam-Bam Shrimp Po Boy, and Portobello Hoagie.",
            },
            {
              icon: "SF",
              title: "Seafood Favorites",
              description:
                "Fish Tacos, Shrimp Platter, Teriyaki Glazed Salmon, Bam-Bam Shrimp Tacos, and Fish-N-Shrimp Combo.",
            },
            {
              icon: "BR",
              title: "Brews",
              description:
                "A deep bottle and draft list including styles from ciders and lagers to stouts, IPAs, and Belgian ales.",
            },
            {
              icon: "EV",
              title: "Local Events",
              description:
                "Near Winter Garden Farmers Market (Saturdays 9 AM - 2 PM) and Friday's on the Plaza (7 PM - 9 PM).",
            },
          ],
        },
        {
          type: "splitContent",
          id: "history",
          badge: "Since 2003",
          title: "Built in 1912, reimagined as MoonCricket",
          body: "Set inside a restored historic building, MoonCricket blends century-old architecture with a lively grille atmosphere, preserving heart pine floors, pressed tin ceilings, and the one-of-a-kind details that define the space.",
          bullets: [
            "Original skylight and transom windows remain from the early 1900s",
            "Vintage stained glass and a 25-foot prototype blimp propeller anchor the interior",
            "Bowling-lane maple bar tops and local oak millwork create the signature look",
          ],
          image: {
            src: "/assets/mooncricket/interior-stained-glass.jpg",
            alt: "Interior stained glass and vintage details at MoonCricket",
          },
        },
        {
          type: "stats",
          id: "brews",
          title: "MoonCricket Highlights",
          items: [
            { label: "Building constructed", value: "1912" },
            { label: "Restoration completed", value: "2003" },
            { label: "Best beer selection awards", value: "3x" },
            { label: "Name-on-wall beer club", value: "99 Beers" },
          ],
        },
        {
          type: "testimonials",
          id: "events",
          title: "What makes MoonCricket special",
          items: [
            {
              quote:
                "Voted one of Orlando's Best Beer Selections multiple times, with a lineup built for both craft regulars and curious first-timers.",
              name: "Orlando Magazine Mentions",
              role: "Beer + Restaurant Recognition",
            },
            {
              quote:
                "Set in the heart of downtown Winter Garden, close to local markets and Friday night events, with food, drinks, and a one-of-a-kind atmosphere.",
              name: "Downtown Winter Garden",
              role: "Community Destination",
            },
          ],
        },
        {
          type: "faq",
          id: "visit",
          title: "Visit information",
          items: [
            {
              question: "Where is The MoonCricket Grille located?",
              answer:
                "14 W Plant Street, Winter Garden, FL. Phone: 407-905-5325.",
            },
            {
              question: "What are MoonCricket's current hours?",
              answer:
                "Sun 11:30 - 4:00 PM, Mon Closed, Tue 11:30 AM - 8:00 PM, Wed 11:30 AM - 8:00 PM, Thu-Sat 11:30 AM - 9:00 PM.",
            },
            {
              question: "Where can I see beer details and menu sections?",
              answer:
                "Browse the live menu and brews pages for full details, including Starters, Burgers, Sandwiches, Seafood, and Beer Knowledge.",
            },
            {
              question: "Does MoonCricket post events and job opportunities?",
              answer:
                "Yes. Events and employment information are published on the Events and Contact pages, including an employment application PDF.",
            },
          ],
        },
      ],
    },
  },
};
