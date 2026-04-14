export type MenuCategory = {
  title: string;
  sourceUrl: string;
  notes?: string[];
  items: string[];
};

export const menuCategories: MenuCategory[] = [
  {
    title: "Starters",
    sourceUrl: "/menu",
    items: [
      "Basket of Homemade Kettle Chips",
      "Spinach Artichoke Dip",
      "Bam-Bam Shrimp (Buffalo Sauce)",
      "Fried Calamari",
      "Loaded Potato Skins",
      "Green Tomatoes",
      "Basket of Fries",
      "Stuffed Portobello",
      "Bam-Bam Shrimp (Zesty Bam-Bam Sauce)",
      "Chicken Kickers",
      "Sweet Potato Fries",
      "Pork Rinds Basket",
      "Fried Pickles",
      "Smoked Fish Dip",
      "Basket of Onion Rings",
    ],
  },
  {
    title: "Salads",
    sourceUrl: "/menu",
    notes: [
      "House dressings listed on site: Balsamic Vinaigrette, Bleu Cheese, Caesar, Italian, Asian Ginger, Fat-Free Raspberry Vinaigrette, Ranch, and 1000 Island.",
    ],
    items: [
      "Roasted Beet Salad",
      "Asian Sesame-Chicken Salad",
      "Buffalo Chicken Salad",
      "Grilled Shrimp Caesar",
      "The Head Chef",
      "Grilled Chicken Strawberry Walnut Salad",
      "House Salad",
      "Caesar Salad",
      "Tuna Salad",
      "Grilled Salmon Cous Cous Salad",
    ],
  },
  {
    title: "Wings",
    sourceUrl: "/menu",
    notes: [
      "Wing sauces on site: Mild, Medium, Hot, Randall, Teriyaki, Garlic, and Bar-b-que.",
      "Order sizes listed on site: 9-piece, 12-piece, and 18-piece.",
    ],
    items: [
      "Crispy Fried Wings",
    ],
  },
  {
    title: "Sides",
    sourceUrl: "/menu",
    notes: [
      "Premium sides listed on site: Sweet Potato Fries, Fried Green Tomatoes, Caesar Salad, Mixed Salad.",
    ],
    items: [
      "Cucumber Onion Salad",
      "Creamy Cole Slaw",
      "Red Potato Salad",
      "Black Beans and Rice",
    ],
  },
  {
    title: "Wraps",
    sourceUrl: "/menu",
    items: [
      "Buffalo Chicken Wrap",
      "Tuna Salad Wrap",
      "Chicken Bacon Ranch Wrap",
      "Turkey Wrap",
    ],
  },
  {
    title: "Kids Menu",
    sourceUrl: "/menu",
    notes: ["Site note: Kids ten and under, served with fries."],
    items: [
      "Quarter Pound Cheeseburger",
      "Chicken Nuggets",
      "1/2 Grilled Cheese Sandwich",
      "Mac n Cheese",
    ],
  },
  {
    title: "Sandwiches",
    sourceUrl: "/menu",
    items: [
      "Buffalo Chicken Sandwich",
      "Grilled Chicken and Avocado Club",
      "Prime Rib French Dip",
      "Reuben",
      "The Cuban",
      "The Big BLT",
      "The Club",
      "Blackened Mahi Mahi Sandwich",
      "Tuna Melt",
      "Chicken Philly",
      "Fish Sandwich",
      "Bam-Bam Shrimp Po Boy",
      "Grilled Mahi Mahi Reuben",
      "Portobello Hoagie",
    ],
  },
  {
    title: "Seafood",
    sourceUrl: "/menu",
    items: [
      "Fish Tacos",
      "Fish Platter",
      "Shrimp Platter",
      "Teriyaki Glazed Salmon",
      "Bam-Bam Shrimp Tacos",
      "Fish-N-Shrimp Combo",
    ],
  },
  {
    title: "Burgers",
    sourceUrl: "/menu",
    notes: ["Site note: All burgers listed as half-pound fresh Black Angus beef."],
    items: [
      "Mediterranean Lamb Burger",
      "Cheese Burger",
      "Wagyu Bacon Cheddar Burger",
      "Bacon Cheese Burger (10.69 listed on site)",
      "Turkey Burger",
      "Patty Melt",
      "Blue Cheese Burger",
      "Mushroom Swiss Burger",
      "Avocado Burger",
    ],
  },
  {
    title: "Desserts",
    sourceUrl: "/menu",
    items: [
      "Chocolate Overload Cake",
      "Peanut Butter Pie",
      "Carrot Cake",
    ],
  },
];
