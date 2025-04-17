"use client";

import Image from "next/image";
import { Tooltip } from "@mui/material";
import { useTranslations } from "next-intl";
import InvoiceMainComponent from "./invoice-main";
import ShareInvoice from "./share-invoice";
import { usePathname } from "next/navigation";

export default function InvoiceComponent() {
  const locale = usePathname().split("/")[1];
  const invoiceContentUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/${locale}/invoice-main`;
  const t = useTranslations("Invoice");
  const handlePrint = () => {
    const printWindow = window.open("/print/invoice", "_blank");
    if (printWindow) {
      printWindow.focus();
    }
  };

  return (
    <div className="w-full min-h-[750px] bg-white rounded-[14px] overflow-hidden capitalize">
      <InvoiceMainComponent />
      {/* button */}
      <div className="w-[95%] h-14 flex flex-row justify-end items-center gap-4 mt-[60px]">
        <Tooltip title={t("print")}>
          <button
            onClick={() => handlePrint()}
            className="w-[54px] h-[54px] rounded-xl bg-[#D5D5D5] flex justify-center items-center hover:bg-[#797474]"
          >
            <Image alt="" src="/shape.png" width={18} height={16}></Image>
          </button>
        </Tooltip>
        <ShareInvoice shareUrl={invoiceContentUrl}/>
      </div>
    </div>
  );
}
