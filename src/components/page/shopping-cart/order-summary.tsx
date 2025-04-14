"use client";

import { totalCartAmountAtom } from "@/store/product";
import { Divider } from "@mui/material";
import { useAtom } from "jotai";
import { useTranslations } from "next-intl";

export default function OrderSummary() {
  const t = useTranslations("ShoppingCart");
  const [totalCartAmount] = useAtom(totalCartAmountAtom);
  const discount = parseFloat((totalCartAmount * 0.15).toFixed(2));
  const tax = parseFloat((totalCartAmount * 0.19).toFixed(2));
  return (
    <div className="w-[25%] max-h-[380px] bg-[white] rounded-2xl flex flex-col">
      <div className="w-full p-4 flex flex-row justify-between">
        <input
          type="text"
          className="px-2 w-[70%] border border-gray-200"
          placeholder={t("Coupon Code")}
        />
        <button className="p-2 bg-gray-800 hover:bg-gray-400 text-white font-semibold rounded capitalize">
          {t("apply")}
        </button>
      </div>
      <Divider />
      <div className="w-full flex flex-row justify-between p-4">
        <p className="text-base capitalize">{t("sub total")} :</p>
        <p className="text-base">${totalCartAmount.toFixed(2)}</p>
      </div>
      <div className="w-full flex flex-row justify-between p-4">
        <p className="text-base capitalize">{t("discount")} (15%) :</p>
        <p className="text-green-500 text-base">-${discount}</p>
      </div>
      <div className="w-full flex flex-row justify-between p-4">
        <p className="text-base capitalize">{t("shipping charge")} :</p>
        <p className="text-green-500 text-base">Free</p>
      </div>
      <div className="w-full flex flex-row justify-between p-4">
        <p className="text-base capitalize">{t("tax vat")} 19% (included) :</p>
        <p className="text-green-500 text-base">${tax}</p>
      </div>
      <Divider />
      <div className="w-full flex flex-row justify-between p-4">
        <p>{t("order total")} :</p>
        <p className="text-purple-500">
          ${(totalCartAmount - discount + tax).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
