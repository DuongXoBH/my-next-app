"use client";

import DealsDetail from "@/components/page/admin/dashboard/deals-detail/deals-detail";
import Revenue from "@/components/page/admin/dashboard/revenue";
import SalesDetail from "@/components/page/admin/dashboard/sales-detail/sales-detail";
import ModalList from "@/components/page/admin/dashboard/modal-list/list";
import DashboardCardList from "@/components/page/admin/dashboard/card-list/card-list";
import PageHeader from "@/components/common/globals/page-header";

export default function Dashboard() {
  return (
    <div className="w-full pb-2 relative">
      <PageHeader page="Dashboard" />
      <ModalList />
      <SalesDetail />
      <DealsDetail />
      <Revenue />
      <DashboardCardList />
    </div>
  );
}
