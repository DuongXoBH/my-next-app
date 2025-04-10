"use client";

import PageHeader from "@/components/common/global/page-header";
import ModalList from "@/components/page/dashboard/modal-list/list";
import SalesDetail from "@/components/page/dashboard/sales-detail/sales-detail";
import DealsDetail from "@/components/page/dashboard/deals-detail/deals-detail";
import Revenue from "@/components/page/dashboard/revenue";
import DashboardCardList from "@/components/page/dashboard/card-list/card-list";

export default function Home() {
  return (
    <div className="w-full pb-2 relative">
          <PageHeader page="Dashboard"/>
          <ModalList />
          <SalesDetail />
          <DealsDetail />
          <Revenue />
          <DashboardCardList/>
        </div>
  );
}
