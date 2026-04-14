export type FaqSection = {
  title: string;
  paragraphs: string[];
};

export const faqSections: FaqSection[] = [
  {
    title: "About The MoonCricket Grille",
    paragraphs: [
      "The building dates to 1912 and originally housed Cappleman Brothers Grocery Store. Key historic features remain, including heart pine floors, pressed tin ceiling, original skylight, and transom lights.",
      "Distinctive interior details include a 25-foot diameter propeller from a prototype blimp, century-old stained glass windows, bowling-lane maple bar and booth tops, and repurposed local oak millwork.",
      "MoonCricket has been recognized by Orlando Magazine for beer selection and has also been highlighted as a top Winter Garden restaurant. The well-known 99-beer wall tradition is part of that identity.",
    ],
  },
  {
    title: "In the Beginning",
    paragraphs: [
      "The current owners acquired the building in 1995, before downtown Winter Garden's full revitalization. The structure required major restoration due to leaks, deterioration, and heavy interior alterations.",
      "Restoration work started in early 2002 and was completed in fall 2003, with a focus on returning the building to turn-of-the-century character while creating a welcoming gathering place.",
      "The MoonCricket name and smiling moon logo were created to represent a fun, inviting destination for food, drinks, and live music in downtown Winter Garden.",
    ],
  },
];
