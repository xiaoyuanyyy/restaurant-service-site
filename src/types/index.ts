export type DemoSite = {
  title: string;
  description: string;
  image: string;
  status: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  fit: string;
  badge?: string;
  highlighted?: boolean;
};

export type FAQItem = {
  question: string;
  answer: string;
};
