import type { DemoSite, FAQItem, PricingPlan } from "@/src/types";

export const service = {
  name: "SYY Studio",
  email: "hello@lumisites.studio",
  heroTitle: "Modern Restaurant Websites for European Restaurants",
  heroSubtitle:
    "I help restaurants, cafes, and bistros present their menu, atmosphere, location, and reservation entry with a polished website that works beautifully on mobile.",
};

export const painPoints = [
  "The current website feels old or unfinished.",
  "The mobile experience is hard to read.",
  "Menus are hidden in PDFs or blurry photos.",
  "Tourists cannot find the reservation button quickly.",
  "Restaurant photos are not presented with care.",
  "The business only has a Facebook page, not an official website.",
];

export const solutions = [
  "Elegant single-page restaurant homepage",
  "Clear menu and signature dish sections",
  "Warm gallery layout for atmosphere photos",
  "Responsive design for phone, tablet, and desktop",
  "Address, phone, opening hours, and price range",
  "Reservation and call buttons placed where visitors need them",
  "Fast preview link before final launch",
  "Optional monthly care for menu and content updates",
];

export const demos: DemoSite[] = [
  {
    title: "French Fine Dining Demo",
    description: "A candlelit Michelin-style homepage for refined tasting menus.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    status: "Coming in phase 2",
  },
  {
    title: "Italian Bistro Demo",
    description: "A warm neighbourhood bistro website built around food, wine, and bookings.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    status: "Coming in phase 2",
  },
  {
    title: "Cafe / Brunch Demo",
    description: "A bright cafe homepage for brunch menus, coffee, and local visitors.",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    status: "Coming in phase 2",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter Website",
    price: "€199",
    description: "A polished single-page restaurant homepage for the essentials.",
    features: [
      "Single-page restaurant homepage",
      "Menu, gallery, address, and phone sections",
      "Reservation button",
      "Mobile-friendly layout",
      "1 revision",
    ],
  },
  {
    name: "Premium Website",
    price: "€399",
    description: "A more refined visual presentation for restaurants that want stronger brand impact.",
    highlighted: true,
    features: [
      "Homepage with premium visual direction",
      "Menu area and signature dish highlights",
      "Photo gallery",
      "Reservation and location sections",
      "3 revisions",
    ],
  },
  {
    name: "Monthly Care",
    price: "€49/month",
    description: "Light ongoing support after launch so the website stays accurate.",
    features: [
      "Up to 4 small updates per month",
      "Update menu and prices",
      "Update opening hours",
      "Replace photos",
      "Basic website check",
    ],
  },
];

export const processSteps = [
  "The restaurant contacts me.",
  "The restaurant sends photos, menu, address, and opening hours.",
  "The client pays a 50% deposit.",
  "I create a watermarked preview website.",
  "The client reviews and requests adjustments.",
  "The client pays the remaining 50%.",
  "I remove the watermark and connect the official domain.",
  "Monthly care can continue after launch.",
];

export const faqs: FAQItem[] = [
  {
    question: "How long does a website take?",
    answer: "A first preview can usually be prepared in a few days after the restaurant sends the required materials.",
  },
  {
    question: "Do restaurants need to provide photos?",
    answer: "Real restaurant photos are best. If they are not ready, the first preview can use placeholder images.",
  },
  {
    question: "Can menu items and prices be changed later?",
    answer: "Yes. Small content changes can be handled manually or through the monthly care plan.",
  },
  {
    question: "Can the website use the restaurant's own domain?",
    answer: "Yes. The official domain is connected after final payment and approval.",
  },
  {
    question: "Does this include a real booking system?",
    answer: "The MVP includes a reservation entry or demo form. A real booking integration can be added later.",
  },
  {
    question: "Can clients see a demo first?",
    answer: "Yes. Demo sites and watermarked preview links are part of the workflow.",
  },
];

