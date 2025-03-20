import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import GridViewIcon from "@mui/icons-material/GridView";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ChecklistIcon from "@mui/icons-material/Checklist";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BookIcon from "@mui/icons-material/Book";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import BarChartIcon from "@mui/icons-material/BarChart";
import PersonIcon from "@mui/icons-material/Person";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const DASHBOARD = [
  {
    text: "Dashboard",
    href: "/dashboard",
    icon: HistoryToggleOffIcon,
  },
  {
    text: "Products",
    href: "/products",
    icon: GridViewIcon,
  },
  {
    text: "Favorites",
    href: "/favorites",
    icon: FavoriteBorderIcon,
  },
  {
    text: "Inbox",
    href: "/mail",
    icon: QuestionAnswerIcon,
  },
  {
    text: "Order Lists",
    href: "/order",
    icon: ChecklistIcon,
  },
  {
    text: "Product Stock",
    href: "/stock",
    icon: Inventory2Icon,
  },
];

export const PAGE_DASHBOARD = [
  {
    text: "Pricing",
    href: "/pricing",
    icon: CardGiftcardIcon,
  },
  {
    text: "Calender",
    href: "/calender",
    icon: CalendarMonthIcon,
  },
  {
    text: "To-do",
    href: "/todo",
    icon: BookIcon,
  },
  {
    text: "Contact",
    href: "/contact",
    icon: PeopleAltIcon,
  },
  {
    text: "Invoice",
    href: "/invoice",
    icon: LocalAtmIcon,
  },
  {
    text: "UI Elements",
    href: "/ui-elements",
    icon: BarChartIcon,
  },
  {
    text: "Team",
    href: "/team",
    icon: PersonIcon,
  },
  {
    text: "Table",
    href: "/table",
    icon: BorderAllIcon,
  },
];

export interface IDashboardModal {
  title: string;
  value: string;
  img: string;
  compare: string;
  upStatus: boolean;
}

export const DASHBOARDMODAL = [
  {
    title: "user",
    value: "40,689",
    img: "/dashboard/Icon.svg",
    compare: "8.5% Up from yesterday",
    upStatus: true,
  },
  {
    title:"order",
    value: "10293",
    img: "/dashboard/order.svg",
    compare:"1.3% Up from past week",
    upStatus: true,

},
{
    title:"sales",
    value: "$89,000",
    img: "/dashboard/sales.svg",
    compare:"4.3% Down from yesterday",
    upStatus: false,

},
{
    title:"pending",
    value: "2040",
    img: "/dashboard/pending.svg",
    compare:"1.8% Up from yesterday",
    upStatus: true,

},
];
