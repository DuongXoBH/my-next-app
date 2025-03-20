import PageHeader from "@/components/common/page-header";
import OrderList from "@/components/page/order/order-list/order-list";
import StocksList from "@/components/page/stock/stocks-list";
import { Divider } from "@mui/material";

export default function Table() {
  return (
      <div className="w-full pb-2 flex flex-col gap-6">
        <PageHeader page="Table"/>
        <Divider />
        <OrderList size={8}/>
        <Divider />
        <StocksList size={8}/>        
      </div>
  );
}
