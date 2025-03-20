import PageHeader from "@/components/common/page-header";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ContactHeader() {
  const t = useTranslations("Contact");
  return (
    <div className="flex justify-between items-center mt-4 mb-10">
      <PageHeader page="Contact"/>
      <Link
        className="w-[147px] h-[48px] bg-[#4880FF] text-white rounded-[6px] text-[14px] flex justify-center items-center"
        href="/contact/create"
      >
        {t("button")}
      </Link>
    </div>
  );
}
