export interface IHeadingMenu {
  img: string;
  text: string;
  href: string;
}

export const HEADINGMENU = [
  {
    img: "/image-1.png",
    text: "Manage Account",
    href: "/admin/profile",
  },
  {
    img: "/image-2.png",
    text: "Change Password",
    href: "/admin/order",
  },
  {
    img: "/image-3.png",
    text: "Activity Log ",
    href: "/admin/stock",
  },
  {
    img: "/image-4.png",
    text: "Log out",
    href: "/logout",
  },
];

export const LOCALE = [
  {
    img: "/locale-1.png",
    text: "English",
    href: "en",
  },
  {
    img: "/locale-3.webp",
    text: "Việt Nam",
    href: "vi",
  },
];
