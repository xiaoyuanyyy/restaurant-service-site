export type IntegratedDemo = {
  slug: string;
  label: string;
  name: string;
  tagline: string;
  description: string;
  city: string;
  price: string;
  rating: string;
  heroImage: string;
  theme: "fine" | "italian" | "cafe" | "burger";
  highlights: string[];
  menu: Array<{
    name: string;
    description: string;
    price: string;
    image: string;
    tag: string;
  }>;
  gallery: string[];
};

export const integratedDemos: IntegratedDemo[] = [
  {
    slug: "fine-dining",
    label: "Fine Dining Demo",
    name: "Maison Lumiere",
    tagline: "A European fine dining experience under warm candlelight.",
    description:
      "A quiet luxury restaurant homepage for destination dining, tasting menus, hotel guests, and high-value reservations.",
    city: "Paris, France",
    price: "EUR80 - EUR150",
    rating: "4.8",
    heroImage:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=86",
    theme: "fine",
    highlights: ["Chef's tasting journey", "Sommelier pairings", "Private salon", "Reservation-led layout"],
    menu: [
      {
        name: "Truffle Risotto",
        description: "Carnaroli rice, aged parmesan, black truffle, and herb oil.",
        price: "EUR42",
        image:
          "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=82",
        tag: "Signature",
      },
      {
        name: "Wagyu Beef Steak",
        description: "Charcoal-seared wagyu with bordelaise jus and pommes anna.",
        price: "EUR96",
        image:
          "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=82",
        tag: "Recommended",
      },
      {
        name: "Lobster Linguine",
        description: "Fresh lobster, hand-cut linguine, champagne butter, and basil.",
        price: "EUR68",
        image:
          "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=82",
        tag: "Seafood",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    slug: "italian-bistro",
    label: "Italian Bistro Demo",
    name: "Bella Tavola",
    tagline: "Handmade pasta, house wine, and the warmth of a Florence evening.",
    description:
      "A casual Italian bistro website with a warm, social, food-forward layout for pasta, pizza, wine, and family tables.",
    city: "Florence, Italy",
    price: "EUR35 - EUR70",
    rating: "4.7",
    heroImage:
      "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=1800&q=86",
    theme: "italian",
    highlights: ["Blackboard menu", "Handmade pasta", "Tuscan wine list", "Family tables"],
    menu: [
      {
        name: "Truffle Tagliatelle",
        description: "Fresh pasta with mushrooms, parmesan, and black truffle aroma.",
        price: "EUR24",
        image:
          "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=82",
        tag: "Pasta",
      },
      {
        name: "Margherita Pizza",
        description: "San Marzano tomato, mozzarella, basil, and olive oil.",
        price: "EUR16",
        image:
          "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=82",
        tag: "Popular",
      },
      {
        name: "Tiramisu Classico",
        description: "Mascarpone, espresso-soaked ladyfingers, cocoa, and Marsala.",
        price: "EUR10",
        image:
          "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=82",
        tag: "Dolci",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    slug: "cafe-brunch",
    label: "Cafe / Brunch Demo",
    name: "Morning Table Cafe",
    tagline: "Fresh coffee, warm pastries, and simple brunch moments.",
    description:
      "A bright cafe and brunch website for morning routines, pastries, breakfast dishes, and easy mobile browsing.",
    city: "Amsterdam, Netherlands",
    price: "EUR12 - EUR28",
    rating: "4.6",
    heroImage:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1800&q=86",
    theme: "cafe",
    highlights: ["Morning rhythm", "Coffee counter", "Brunch cards", "Bakery-friendly layout"],
    menu: [
      {
        name: "Avocado Toast",
        description: "Sourdough, avocado, poached egg, chili flakes, and lemon.",
        price: "EUR13",
        image:
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=82",
        tag: "Popular",
      },
      {
        name: "Croissant Breakfast",
        description: "Butter croissant with jam, seasonal fruit, and coffee.",
        price: "EUR11",
        image:
          "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=82",
        tag: "Breakfast",
      },
      {
        name: "House Latte",
        description: "Smooth espresso, steamed milk, and a soft creamy texture.",
        price: "EUR5",
        image:
          "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=82",
        tag: "Coffee",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    slug: "burger-shop",
    label: "Burger Shop Demo",
    name: "Urban Flame Burger",
    tagline: "Freshly grilled burgers, crispy fries, and bold street flavor.",
    description:
      "A high-energy fast casual website for burger shops, fried chicken counters, street food brands, and combo meals.",
    city: "Berlin, Germany",
    price: "EUR10 - EUR22",
    rating: "4.6",
    heroImage:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1800&q=86",
    theme: "burger",
    highlights: ["Smash board", "Combo meals", "Bold menu cards", "Call-first mobile layout"],
    menu: [
      {
        name: "Flame Classic Burger",
        description: "Beef patty, cheddar, lettuce, tomato, pickles, and flame sauce.",
        price: "EUR12",
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
        tag: "Signature",
      },
      {
        name: "Double Cheese Smash",
        description: "Two smashed patties, double cheddar, onions, and smoky sauce.",
        price: "EUR15",
        image:
          "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=900&q=85",
        tag: "Popular",
      },
      {
        name: "BBQ Bacon Burger",
        description: "Beef patty, bacon, BBQ sauce, cheddar, and onion rings.",
        price: "EUR16",
        image:
          "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=85",
        tag: "Hot",
      },
      {
        name: "Spicy Chicken Burger",
        description: "Crispy chicken fillet, spicy mayo, slaw, pickles, and brioche.",
        price: "EUR13",
        image:
          "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=85",
        tag: "Spicy",
      },
      {
        name: "Loaded Cheese Fries",
        description: "Crispy fries with melted cheese, jalapenos, bacon bits, and flame sauce.",
        price: "EUR8",
        image:
          "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=900&q=85",
        tag: "Side",
      },
      {
        name: "Burger Combo Meal",
        description: "Choose any classic burger with fries and a soft drink.",
        price: "EUR18",
        image:
          "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=900&q=85",
        tag: "Combo",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1598679253544-2c97992403ea?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=900&q=85",
    ],
  },
];

export function getIntegratedDemo(slug: string) {
  return integratedDemos.find((demo) => demo.slug === slug);
}
