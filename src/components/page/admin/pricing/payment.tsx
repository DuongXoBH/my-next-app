"use client";

import { IPricingList } from "@/constants/pricing";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useTranslations } from "next-intl";
import translationData from "@/messages/en.json";
type IPricingKey = keyof (typeof translationData)["PricingDetail"];
import { useState } from "react";
import { toast } from "react-toastify";

export default function Payment({data, method} :{data: IPricingList, method: string}) {
  const t = useTranslations("PricingDetail");
  const stripe = useStripe();
  const elements = useElements();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);

    const res = await fetch("/api/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({ amount: data.price as unknown as number * 100 }),
    });

    const { clientSecret } = await res.json();

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardNumberElement)!,
        billing_details: { name },
      },
    });

    if (result.error) {
      alert(result.error.message);
    } else {
      toast(t("success"));
    }

    setLoading(false);
  };

  const inputStyle = {
    base: {
      fontSize: "16px",
      color: "#1f2937",
      "::placeholder": {
        color: "#9ca3af",
      },
    },
    invalid: {
      color: "#dc2626",
    },
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl w-full bg-white p-6 rounded-2xl shadow-lg space-y-6"
    >
      <div className="space-y-4 mt-12">
        <p>{t("pay with")} {t(method as IPricingKey)}</p>
        <div>
          <label className="block text-sm mb-1">{t("card number")}</label>
          <div className="border px-3 py-2 rounded-lg">
            <CardNumberElement options={{ style: inputStyle }} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">{t("expiration")}</label>
            <div className="border px-3 py-2 rounded-lg">
              <CardExpiryElement options={{ style: inputStyle }} />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">CVV</label>
            <div className="border px-3 py-2 rounded-lg">
              <CardCvcElement options={{ style: inputStyle }} />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">{t("hoder name")}</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            placeholder="John Green"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition disabled:opacity-50"
      >
        {loading ? t("processing") : t("confirm payment")}
      </button>
    </form>
  );
}
