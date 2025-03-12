"use client";

import DealsDetail from "@/components/page/dashboard/deals-detail/deals-detail";
import Revenue from "@/components/page/dashboard/revenue";
import SalesDetail from "@/components/page/dashboard/sales-detail/sales-detail";
import { Typography } from "@mui/material";
import ModalList from "@/components/page/dashboard/modal-list/list";
import DashboardCardList from "@/components/page/dashboard/card-list/card-list";

export default function Dashboard() {
  return (
    <div className="w-full pb-2 relative">
      <Typography
        sx={{
          mt: "16px",
          mb: "18px",
          fontSize: 32,
          lineHeight: "43.5px",
          textAlign: "start",
          fontWeight: 700,
        }}
      >
        Dashboard
      </Typography>
      <ModalList />
      <SalesDetail />
      <DealsDetail />
      <Revenue />
      <DashboardCardList/>
    </div>
  );
}
