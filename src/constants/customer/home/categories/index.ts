export interface ICategoriesMenu {
  name: string;
  href: string;
}

export interface ICategories {
  title: string;
  menu: boolean;
  href: string;
}
export const CATEGORIES: ICategories[] = [
  {
    title: "Home",
    menu: false,
    href: "/",
  },
  {
    title: "Categories",
    menu: true,
    href: "#",
  },
  {
    title: "Men's",
    menu: true,
    href: "#",
  },
  {
    title: "Woman's",
    menu: true,
    href: "#",
  },
  {
    title: "Jewelry",
    menu: true,
    href: "#",
  },
  {
    title: "Perfume",
    menu: true,
    href: "#",
  },
  {
    title: "News",
    menu: false,
    href: "/news",
  },
  {
    title: "Hot offers",
    menu: false,
    href: "#",
  },
];

export const BANNER = [
  "/customer/home/banner-1.png",
  "/customer/home/banner-2.png",
  "/customer/home/banner-3.png",
];
