import type { DemoSite, FAQItem, PricingPlan } from "@/src/types";

export const service = {
  name: "SYY Studio",
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
    name: "入门网站",
    price: "199欧元",
    description: "适合需要快速上线基础主页的小型餐厅。",
    features: [
      "单页餐厅主页",
      "基础菜单展示",
      "地址和电话展示",
      "基础预约按钮",
      "移动端适配",
      "1次修改",
    ],
    fit: "适合：已有客流，只需要一个干净线上门面的餐厅。",
  },
  {
    name: "高级转化网站",
    price: "399欧元",
    description: "适合想提升品牌质感、展示招牌菜并引导游客预约的餐厅。",
    badge: "推荐给大多数餐厅",
    highlighted: true,
    features: [
      "更高级的视觉设计",
      "招牌菜重点展示区域",
      "菜单分类与推荐标签",
      "餐厅图集与氛围展示",
      "预约与位置引导板块",
      "更适合游客浏览的页面结构",
      "3次修改",
    ],
    fit: "适合：希望让网站看起来更专业，并提升预约转化的餐厅。",
  },
  {
    name: "每月维护",
    price: "每月49欧元",
    description: "上线后提供轻量级持续支持，确保网站信息始终准确。",
    features: [
      "每月最多4次小幅更新",
      "更新菜单和价格",
      "更新营业时间",
      "替换照片",
      "基础网站检查",
    ],
    fit: "适合：上线后需要持续维护菜单、价格、营业时间和图片的餐厅。",
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

