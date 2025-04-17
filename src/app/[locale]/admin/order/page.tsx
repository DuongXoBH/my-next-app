import PageHeader from "@/components/common/global/page-header";
import FilterGroup from "@/components/page/admin/order/filter-bar/filter-group";
import OrderList from "@/components/page/admin/order/order-list/order-list";

export default function Order() {
  return (
    <div className="w-full pb-2 min-h-[600px]">
      <PageHeader page="Order Lists" />
      <FilterGroup />
      <OrderList />
    </div>
  );
}
