"use client";

import PageHeader from "@/components/common/globals/page-header";
import InvoiceComponent from "@/components/page/admin/invoice/invoice";

export default function Invoice() {
  return (
    <div className="w-full pb-2">
      <PageHeader page="Invoice" />
      <InvoiceComponent />
    </div>
  );
}
