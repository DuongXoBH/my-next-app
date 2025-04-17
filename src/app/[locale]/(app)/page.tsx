"use client";

import PageHeader from "@/components/common/global/page-header";
import DashboardCardList from "@/components/page/admin/dashboard/card-list/card-list";
import DealsDetail from "@/components/page/admin/dashboard/deals-detail/deals-detail";
import ModalList from "@/components/page/admin/dashboard/modal-list/list";
import Revenue from "@/components/page/admin/dashboard/revenue";
import SalesDetail from "@/components/page/admin/dashboard/sales-detail/sales-detail";

export default function HomePage() {
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
