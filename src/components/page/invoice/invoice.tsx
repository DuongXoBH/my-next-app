"use client";

import * as React from "react";
import Image from "next/image";
import { Tooltip } from "@mui/material";
import { useTranslations } from "next-intl";
import InvoicePrintComponent from "./invoice-print";

export default function InvoiceComponent() {
  const t = useTranslations("Invoice");
  const handlePrint = () => {
    const printWindow = window.open("/print/invoice", "_blank");
    if (printWindow) {
      printWindow.focus();
    }
  };

  return (
    <div className="w-full min-h-[750px] bg-white rounded-[14px] overflow-hidden capitalize">
      <InvoicePrintComponent />
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
        <Tooltip title={t("send")}>
          <button className="w-[174px] h-[54px] rounded-xl bg-[#4880FF] flex flex-row items-center justify-end gap-10 pr-2 text-white font-medium capitalize">
            {t("send")}
            <Image alt="" src="/send-button.png" width={46} height={38}></Image>
          </button>
        </Tooltip>
      </div>
    </div>
  );
}
