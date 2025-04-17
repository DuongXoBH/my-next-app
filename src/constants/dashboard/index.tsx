import translationData from "@/messages/en.json";
type dashboardKeys = keyof typeof translationData.Dashboard;

export const DASHBOARD = [
  {
    text: "Dashboard",
    href: "/admin/dashboard",
    icon: "/sidebar/dashboard-icon.png",
  },
  {
    text: "Products",
    href: "/admin/products",
    icon: "/sidebar/products-icon.png",
  },
  {
    text: "Favorites",
    href: "/admin/favorites",
    icon: "/sidebar/favorites-icon.png",
  },
  {
    text: "Inbox",
    href: "/admin/mail",
    icon: "/sidebar/inbox-icon.png",
  },
  {
    text: "Order Lists",
    href: "/admin/order",
    icon: "/sidebar/order-icon.png",
  },
  {
    text: "Product Stock",
    href: "/admin/stock",
    icon: "/sidebar/stock-icon.png",
  },
];

export const PAGE_DASHBOARD = [
  {
    text: "Pricing",
    href: "/admin/pricing",
    icon: "/sidebar/pricing-icon.png",
  },
  {
    text: "Calender",
    href: "/admin/calender",
    icon: "/sidebar/calender-icon.png",
  },
  {
    text: "To-do",
    href: "/admin/todo",
    icon: "/sidebar/todo-icon.png",
  },
  {
    text: "Contact",
    href: "/admin/contact",
    icon: "/sidebar/contact-icon.png",
  },
  {
    text: "Invoice",
    href: "/admin/invoice",
    icon: "/sidebar/invoice-icon.png",
  },
  {
    text: "UI Elements",
    href: "/admin/ui-elements",
    icon: "/sidebar/ui-element-icon.png",
  },
  {
    text: "Team",
    href: "/admin/team",
    icon: "/sidebar/team-icon.png",
  },
  {
    text: "Table",
    href: "/admin/table",
    icon: "/sidebar/table-icon.png",
  },
];

export interface IDashboardModal {
  title: dashboardKeys;
  value: string;
  img: string;
  compare: string;
  upStatus: boolean;
}

export const DASHBOARDMODAL: IDashboardModal[] = [
  {
    title: "user",
    value: "40,689",
    img: "/dashboard/Icon.svg",
    compare: "8.5% Up from yesterday",
    upStatus: true,
  },
  {
    title: "order",
    value: "10293",
    img: "/dashboard/order.svg",
    compare: "1.3% Up from past week",
    upStatus: true,
  },
  {
    title: "sales",
    value: "$89,000",
    img: "/dashboard/sales.svg",
    compare: "4.3% Down from yesterday",
    upStatus: false,
  },
  {
    title: "pending",
    value: "2040",
    img: "/dashboard/pending.svg",
    compare: "1.8% Up from yesterday",
    upStatus: true,
  },
];
