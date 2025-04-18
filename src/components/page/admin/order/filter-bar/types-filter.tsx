"use client";

import { filterFunction } from "@/api-hooks/order/filter-function";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { orderListAtom, searchAtom } from "@/stores/admin/order-filter";
import { Divider } from "@mui/material";
import { useAtom } from "jotai";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useCallback, useState } from "react";

const orderTypes = [
  "Health & Medicine",
  "Book & Stationary",
  "Services & Industry",
  "Fashion & Beauty",
  "Home & Living",
  "Electronics",
  "Mobile & Phone",
  "Accessories",
  "Book",
  "Medicine",
];

export default function TypesFilter() {
  const [, setData] = useAtom(orderListAtom);
  const [isTypesOpen, setIsTypesOpen] = useState(false);
  const [orderSearch, setOrderSearch] = useAtom(searchAtom);
  const t = useTranslations("admin.Order Lists");
  //event handler for selecting type
  const handleTypeSelect = (type: string) => {
    setOrderSearch((prev) =>
      prev.type.includes(type)
        ? { ...prev, type: prev.type.filter((i) => i !== type) }
        : { ...prev, type: [...prev.type, type] }
    );
  };
  //event handler for filtering
  const handleFilter = () => {
    setIsTypesOpen(false);
    const newData = filterFunction(orderSearch);
    setData(newData);
  };
  const handleClickOutSideTypes = useCallback(() => {
    if (isTypesOpen) {
      setIsTypesOpen(false);
    }
  }, [isTypesOpen]);
  const typesRef = useOutsideClick(handleClickOutSideTypes);

  return (
    <div
      ref={typesRef}
      className="relative flex justify-center items-center border-r-[0.6px] border-r-[#D5D5D5]"
    >
      <button
        onClick={() => setIsTypesOpen(!isTypesOpen)}
        className="flex flex-row justify-between px-6 items-center gap-6 rounded-lg text-black font-bold capitalize"
      >
        {t("type")}
        <Image alt="" src="/path.png" width={12} height={8}></Image>
      </button>

      {isTypesOpen && (
        <div className="absolute top-16 left-[-180px] bg-white shadow-lg rounded-lg p-6 w-[521px] z-10">
          <p className="text-lg font-bold mb-4">Select Order Type</p>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {orderTypes.map((type) => (
              <button
                key={type}
                onClick={() => handleTypeSelect(type)}
                className={`border rounded-[17px] px-3 py-2 text-sm font-medium ${
                  orderSearch.type.includes(type)
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          <Divider />
          <p className="text-sm text-gray-500 my-3">
            *You can choose multiple Order types
          </p>

          <div className="w-full flex justify-center mt-8">
            <button
              onClick={() => {
                handleFilter();
              }}
              className="w-[25%] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              {t("apply")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
