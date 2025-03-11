"use client";

import InvoiceComponent from "@/components/page/invoice/invoice";
import { Typography } from "@mui/material";

export default function Invoice() {
  return (
    <div className="w-full pb-2">
      <Typography
        sx={{
          mt: "16px",
          mb: "18px",
          fontSize: 32,
          lineHeight: "43.5px",
          textAlign: "start",
          fontWeight: 600,
        }}
      >
        Invoice
      </Typography>
      <InvoiceComponent/>
    </div>
  );
}
