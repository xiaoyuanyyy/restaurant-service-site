export type DemoWebsite = {
  title: string;
  description: string;
  suitableFor: string;
  image: string;
  demoUrl: string;
};

export const demoWebsites: DemoWebsite[] = [
  {
    title: "Fine Dining Restaurant Demo",
    description: "A refined dark luxury homepage for premium restaurants and tasting menus.",
    suitableFor: "Fine dining restaurants, French restaurants, hotel restaurants.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "/demos/fine-dining",
  },
  {
    title: "Italian Bistro Demo",
    description: "A warm and elegant website for Italian restaurants and bistros.",
    suitableFor: "Italian restaurants, wine bars, bistros.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "/demos/italian-bistro",
  },
  {
    title: "Cafe / Brunch Demo",
    description: "A bright and cozy website for cafes, brunch spots, and bakeries.",
    suitableFor: "Cafes, brunch cafes, bakeries, breakfast restaurants.",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "/demos/cafe-brunch",
  },
  {
    title: "Burger Shop Demo",
    description: "A bold and energetic website for burger shops and fast casual restaurants.",
    suitableFor: "Burger shops, fried chicken shops, street food restaurants.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
    demoUrl: "/demos/burger-shop",
  },
];
