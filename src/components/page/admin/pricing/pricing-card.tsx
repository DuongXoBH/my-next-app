"use client";

import LinkTag from "@/components/common/globals/link-tag";
import { IPricingList } from "@/constants/admin/pricing";
import { useTranslations } from "next-intl";

export default function PricingCard({ arr }: { arr: IPricingList }) {
  const t = useTranslations("admin.Pricing");
  return (
    <div className="w-[30%] min-h-[780px] bg-admin-pricing bg-center bg-no-repeat bg-cover flex flex-col justify-between items-center pt-10 pb-[55px] rounded-[30px] capitalize">
      <p className="text-2xl font-bold">{t(arr.title)}</p>
      <p className="text-lg ">{t("price")}</p>
      <p className="text-[36px] text-[#4581FF] font-extrabold ">
        $ {arr.price}
      </p>
      {/* line */}
      <div className="border-t border-[#9b9eaa] w-[70%] border-[2px]"></div>{" "}
      <p className={`text-lg font-medium`}>{t("setup")}</p>
      <p className={`text-lg font-medium`}>{t("brandwidth")}</p>
      <p className={`text-lg font-medium`}>{t("user")}</p>
      <p
        className={`text-lg font-medium ${arr.report ? "" : "text-[#83879b]"} `}
      >
        {t("analytics")}
      </p>
      <p
        className={`text-lg font-medium ${arr.access ? "" : "text-[#83879b]"}`}
      >
        {t("access")}
      </p>
      <p
        className={`text-lg font-medium ${
          arr.intregation ? "" : "text-[#83879b]"
        }`}
      >
        {t("intregation")}
      </p>
      <p
        className={`text-lg font-medium ${
          arr.management ? "" : "text-[#83879b]"
        }`}
      >
        {t("content")}
      </p>
      <div className="border-t border-[#9b9eaa] w-[70%] border-[2px] "></div>{" "}
      <LinkTag
        href={`/admin/pricing/${arr.id}`}
        className="w-[180px] h-[60px] text-base text-[#4581FF] rounded-[30px] flex justify-center items-center hover:text-white hover:bg-[#4581FF] border-[3px] border-[#4581FF] capitalize"
      >
        {t("start")}
      </LinkTag>
      <LinkTag
        href={`/admin/pricing/${arr.id}`}
        className="text-sm font-bold decoration-solid underline "
      >
        {t("note")}
      </LinkTag>
    </div>
  );
}
