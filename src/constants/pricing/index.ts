export type TTranslations = {
  Pricing: {
    title: string;
    basic: string,
    standard: string,
    premium: string,
    price: string,
    setup: string,
    brandwidth: string,
    user: string,
    analytics: string,
    access: string,
    intregation: string,
    content: string,
    start:string,
    note: string
  },
};
export interface IPricingList {
    id: number;
  title: keyof TTranslations["Pricing"];
  price: string;
  report: boolean;
  access: boolean;
  intregation: boolean;
  management: boolean;
}

export const PRICINGLIST: IPricingList[] = [
  {
    id:1,
    title: "basic",
    price: "14.99",
    report: false,
    access: false,
    intregation: false,
    management: false,
  },
  {
    id:2,
    title: "standard",
    price: "49.99",
    report: true,
    access: true,
    intregation: false,
    management: false,
  },
  {
    id:3,
    title: "premium",
    price: "89.99",
    report: true,
    access: true,
    intregation: true,
    management: true,
  },
];
