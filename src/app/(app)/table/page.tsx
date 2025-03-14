import OrderList from "@/components/page/order/order-list/order-list";
import StocksList from "@/components/page/stock/stocks-list";
import { Divider, Typography } from "@mui/material";

export default function Table() {
  return (
      <div className="w-full pb-2 flex flex-col gap-6">
        <Typography
          sx={{
            mb: "30px",
            mt: "16px",
            fontSize: 32,
            lineHeight: "43.5px",
            textAlign: "start",
            fontWeight: 700,
          }}
        >
          Table
        </Typography>
        <Divider />
        <OrderList size={8}/>
        <Divider />
        <StocksList size={8}/>        
      </div>
  );
}
