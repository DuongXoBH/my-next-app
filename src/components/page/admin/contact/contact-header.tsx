"use client";

import LinkTag from "@/components/common/globals/link-tag";
import PageHeader from "@/components/common/globals/page-header";
import { useTranslations } from "next-intl";

export default function ContactHeader() {
  const t = useTranslations("admin.Contact");
  return (
    <div className="flex justify-between items-center mt-4 mb-10">
      <PageHeader page="Contact" />
      <LinkTag
        className="w-[147px] h-[48px] bg-[#4880FF] text-white rounded-[6px] text-[14px] flex justify-center items-center"
        href="/admin/contact/create"
      >
        {t("button")}
      </LinkTag>
    </div>
  );
}
