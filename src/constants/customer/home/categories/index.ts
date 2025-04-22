export interface ICategoriesMenu {
  name: string;
  href: string;
}

export interface ICategories {
  title: string;
  menu: boolean;
}
export const CATEGORIES: ICategories[] = [
  {
    title: "Home",
    menu: false,
  },
  {
    title: "Categories",
    menu: true,
  },
  {
    title: "Men's",
    menu: true,
  },
  {
    title: "Woman's",
    menu: true,
  },
  {
    title: "Jewelry",
    menu: true,
  },
  {
    title: "Perfume",
    menu: true,
  },
  {
    title: "Blog",
    menu: false,
  },
  {
    title: "Hot offers",
    menu: false,
  },
];

export const BANNER = [
  "/customer/home/banner-1.png",
  "/customer/home/banner-2.png",
  "/customer/home/banner-3.png",
];
