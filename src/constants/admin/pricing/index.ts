import translationData from "@/messages/en.json";
type IPricingKey = keyof (typeof translationData)["admin"]["Pricing"];
export interface IPricingList {
  id: number;
  title: IPricingKey;
  price: string;
  report: boolean;
  access: boolean;
  intregation: boolean;
  management: boolean;
}

export const PRICINGLIST: IPricingList[] = [
  {
    id: 0,
    title: "basic",
    price: "14.99",
    report: false,
    access: false,
    intregation: false,
    management: false,
  },
  {
    id: 1,
    title: "standard",
    price: "49.99",
    report: true,
    access: true,
    intregation: false,
    management: false,
  },
  {
    id: 2,
    title: "premium",
    price: "89.99",
    report: true,
    access: true,
    intregation: true,
    management: true,
  },
];
