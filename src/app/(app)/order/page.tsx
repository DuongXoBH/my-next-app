import FilterGroup from "@/components/page/order/filter-bar/filter-group";
import OrderList from "@/components/page/order/order-list/order-list";
// import OrderList from "@/components/page/order/order-list/order-list";
import { Typography } from "@mui/material";

export default function Order() {
  return (
    <div className="w-full pb-2">
      <Typography
        sx={{
          mb: 1,
          mt:"16px",
          fontSize: 32,
          lineHeight: "43.5px",
          textAlign: "start",
          fontWeight: 700,
        }}
      >
        Order Lists
      </Typography>
      <FilterGroup />
      <OrderList />
    </div>
  );
}
