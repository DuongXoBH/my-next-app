import PageHeader from "@/components/common/global/page-header";
import FilterGroup from "@/components/page/order/filter-bar/filter-group";
import OrderList from "@/components/page/order/order-list/order-list";

export default function Order() {
  return (
    <div className="w-full pb-2">
      <PageHeader page="Order Lists"/>
      <FilterGroup />
      <OrderList />
    </div>
  );
}
