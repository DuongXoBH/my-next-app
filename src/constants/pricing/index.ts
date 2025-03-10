export interface IPricingList {
    id: number;
  title: string;
  price: string;
  report: boolean;
  access: boolean;
  intregation: boolean;
  management: boolean;
}

export const PRICINGLIST: IPricingList[] = [
  {
    id:1,
    title: "Basic",
    price: "14.99",
    report: false,
    access: false,
    intregation: false,
    management: false,
  },
  {
    id:2,
    title: "Standart",
    price: "49.99",
    report: true,
    access: true,
    intregation: false,
    management: false,
  },
  {
    id:3,
    title: "Premium",
    price: "89.99",
    report: true,
    access: true,
    intregation: true,
    management: true,
  },
];
