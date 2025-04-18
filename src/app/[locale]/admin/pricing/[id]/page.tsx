"use client";

import PageHeader from "@/components/common/global/page-header";
import { PRICINGLIST } from "@/constants/admin/pricing";
import { use, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "@/components/page/admin/pricing/payment";
import Image from "next/image";
import { Tooltip } from "@mui/material";
import { useTranslations } from "next-intl";
import translationData from "@/messages/en.json";
type IPricingKey = keyof (typeof translationData)["admin"]["PricingDetail"];

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const paymentMethods = [
  { id: "Visa", icon: "/pricing/visa-logo.png" },
  { id: "Paypal", icon: "/pricing/paypal-logo.png" },
  { id: "App store", icon: "/pricing/app-store-logo.png" },
];

export default function DetailPricing({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = use(params);
  const data = PRICINGLIST;
  const t = useTranslations("admin.PricingDetail");
  const [selectedMethod, setSelectedMethod] = useState("Visa");

  return (
    <div className="w-full pb-2 flex flex-col gap-6">
      <PageHeader page="PricingDetail" />

      <h6 className="w-full text-2xl font-semibold text-center">
        {t("note")} <span className="text-red-600">${data[id].price}</span>{" "}
        {t("for")}{" "}
        <span className="text-blue-600 capitalize">
          {t(data[id].title as IPricingKey)}
        </span>
      </h6>
      <div className="w-full flex flex-row gap-6 justify-center">
        <div className="max-w-60 w-full flex flex-col justify-between items-center gap-4 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 uppercase">
            Payment Method
          </h2>
          {paymentMethods.map((method: { id: string; icon: string }) => {
            return (
              <Tooltip title={method.id} key={method.id}>
                <button
                  onClick={() => setSelectedMethod(method.id)}
                  className={`w-full bg-white rounded-lg flex justify-center ${method.id === selectedMethod ? "border-2 border-blue-500" : ""}`}
                >
                  <Image
                    alt={method.id}
                    src={method.icon}
                    width={200}
                    height={120}
                  ></Image>
                </button>
              </Tooltip>
            );
          })}
        </div>
        <Elements stripe={stripePromise}>
          <Payment data={data[id]} method={selectedMethod} />
        </Elements>
      </div>
    </div>
  );
}
