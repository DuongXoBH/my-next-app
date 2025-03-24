"use client";

import { useFetchProductByIdApi } from "@/api-hooks/product";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
} from "@mui/material";
import { ArrowDropDownIcon } from "@mui/x-date-pickers/icons";
import { useTranslations } from "next-intl";

export default function ProductInformation({ id }: { id: string }) {
  const t = useTranslations("ProductDetail");
  const { data: product } = useFetchProductByIdApi(id);
  return (
    <div className="w-[49%] flex flex-col gap-2">
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
      <div className="w-full flex flex-row justify-between">
        <button className="w-[48%] h-10 flex justify-center items-center capitalize rounded-md bg-red-500 text-white hover:bg-red-700">
          {t("add")}
        </button>
        <button className="w-[48%] h-10 flex justify-center items-center capitalize rounded-md bg-white text-gray-500 hover:bg-gray-400 hover:text-white">
          {t("buy")}
        </button>
      </div>
      <Divider />
      {/* detail */}
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
      {/* delivery */}
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
      {/* refund */}
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
