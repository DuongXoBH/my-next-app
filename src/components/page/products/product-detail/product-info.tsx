"use client";

import { useFetchProductByIdApi } from "@/api-hooks/product";
import { useFetchUserApiBySession } from "@/api-hooks/user";
import { authShoppingCart } from "@/stores/products";
import { userToken } from "@/stores/users";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
} from "@mui/material";
import { ArrowDropDownIcon } from "@mui/x-date-pickers/icons";
import { useAtom } from "jotai";
import { useTranslations } from "next-intl";
import { toast } from "react-toastify";

export default function ProductInformation({ id }: { id: string }) {
  const t = useTranslations("ProductDetail");
  const { data: product } = useFetchProductByIdApi(id);
  const [authToken] = useAtom(userToken);
  const { data: auth } = useFetchUserApiBySession(authToken);
  const [cart, setCart] = useAtom(authShoppingCart);
  const handleAddToCart = () => {
    const isAlradyAdded = cart[auth?.id]?.some(
      (item) => item.id === product?.id
    );
    if (isAlradyAdded) {
      toast(t("add error toast"));
    } else {
      const currentCart = cart[auth.id] || [];
      setCart((prev) => {
        return {
          ...prev,
          [auth.id]: [...currentCart, { ...product, quantity: 1 }],
        };
      });
      toast(t("add success toast"));
    }
  };

  return (
    <div className="w-[49%] max-h-[75vh] overflow-auto flex flex-col gap-2 pb-2">
      <p className="w-full text-3xl text-black font-bold capitalize">
        {product?.title}
      </p>
      <Divider />
      <p className="w-full text-2xl text-black font-bold">${product?.price}</p>
      <p className="w-full text-lg text-gray-400">{t("taxes")}</p>
      <div className="w-full flex flex-row">
        <p className="w-full text-2xl text-black font-bold">{t("color")}</p>
        <div className="flex flex-row gap-3">
          <div className="w-8 h-8 rounded-full bg-purple-600"></div>
          <div className="w-8 h-8 rounded-full bg-red-600"></div>
          <div className="w-8 h-8 rounded-full bg-blue-600"></div>
          <div className="w-8 h-8 rounded-full bg-green-600"></div>
        </div>
      </div>
      <div className="w-full flex flex-row">
        <p className="w-full text-2xl text-black font-bold">{t("size")}</p>
        <div className="flex flex-row gap-3">
          <div className="w-10 h-10 rounded-full border-gray-300 border-[1px] flex justify-center items-center">
            4
          </div>
          <div className="w-10 h-10 rounded-full border-gray-300 border-[1px] flex justify-center items-center">
            5
          </div>{" "}
          <div className="w-10 h-10 rounded-full border-gray-300 border-[1px] flex justify-center items-center">
            6
          </div>
        </div>
      </div>

      {/* Button Group */}
      <div className="w-full flex flex-row justify-between">
        <button
          onClick={() => handleAddToCart()}
          className="w-[48%] h-10 flex justify-center items-center capitalize rounded-md bg-red-500 text-white hover:bg-red-700"
        >
          {t("add")}
        </button>
        <button className="w-[48%] h-10 flex justify-center items-center capitalize rounded-md bg-white text-gray-500 hover:bg-gray-400 hover:text-white">
          {t("buy")}
        </button>
      </div>

      <Divider />
      {/* Product information */}
      {/* Petail */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <p className="text-black text-base font-semibold capitalize">
            {t("title")}
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p>{product?.description}</p>
        </AccordionDetails>
      </Accordion>
      {/* Delivery */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <p className="text-black text-base font-semibold capitalize">
            {t("ship")}
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            The single most important criteria for a lot of first time
            customers. Lorem ipsum dolor sit amet consectetur adipiscing elit
            enean nisi magna rhoncus in diam vel, aliquet volutpat nisl.
          </p>
        </AccordionDetails>
      </Accordion>
      {/* Refund Policy*/}
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <p className="text-black text-base font-semibold capitalize">
            {t("refund")}
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            A Return & Refund Policy is a policy that dictates under what
            conditions customers can return products they&apos;ve purchased from
            your eCommerce store and whether you&apos;ll reimburse them or not.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
