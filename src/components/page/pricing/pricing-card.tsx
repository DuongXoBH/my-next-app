"use client";

import { IPricingList } from "@/constants/pricing";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function PricingCard(props: { arr: IPricingList }) {
  const t = useTranslations("Pricing");
  const handleClick = (id: number) => {
    console.log(id);
  };
  return (
    <div className="w-[30%] min-h-[780px] bg-pricing bg-center bg-no-repeat bg-cover flex flex-col justify-between items-center pt-10 pb-[55px] rounded-[30px] capitalize">
      <p className="text-2xl font-bold">{t(props.arr.title)}</p>
      <p className="text-lg ">{t("price")}</p>
      <p className="text-[36px] text-[#4581FF] font-extrabold ">
        $ {props.arr.price}
      </p>
      {/* line */}
      <div className="border-t border-[#9b9eaa] w-[70%] border-[2px]"></div>{" "}
      <p className={`text-lg font-medium`}>{t("setup")}</p>
      <p className={`text-lg font-medium`}>{t("brandwidth")}</p>
      <p className={`text-lg font-medium`}>{t("user")}</p>
      <p
        className={`text-lg font-medium ${
          props.arr.report ? "" : "text-[#83879b]"
        } `}
      >
        {t("analytics")}
      </p>
      <p
        className={`text-lg font-medium ${
          props.arr.access ? "" : "text-[#83879b]"
        }`}
      >
        {t("access")}
      </p>
      <p
        className={`text-lg font-medium ${
          props.arr.intregation ? "" : "text-[#83879b]"
        }`}
      >
        {t("intregation")}
      </p>
      <p
        className={`text-lg font-medium ${
          props.arr.management ? "" : "text-[#83879b]"
        }`}
      >
        {t("content")}
      </p>
      <div className="border-t border-[#9b9eaa] w-[70%] border-[2px] "></div>{" "}
      <button
        type="button"
        onClick={() => handleClick(props.arr.id)}
        className="w-[180px] h-[60px] text-base text-[#4581FF] rounded-[30px] flex justify-center items-center hover:text-white hover:bg-[#4581FF] border-[3px] border-[#4581FF] capitalize"
      >
        {t("start")}
      </button>
      <Link href="#" className="text-sm font-bold decoration-solid underline ">
        {t("note")}
      </Link>
    </div>
  );
}
