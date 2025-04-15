"use client";

import { useFetchProductsApi } from "@/api-hooks/product";
import { IProduct, stockAtom } from "@/stores/products";
import SearchIcon from "@mui/icons-material/Search";
import { useAtom } from "jotai";
import { useTranslations } from "next-intl";
import { ChangeEvent, useEffect, useState } from "react";

export default function StockSearch() {
  const t = useTranslations("Product Stock");
  const [searchValue, setSearchValue] = useState<string>("");
  const [, setStockAtom] = useAtom(stockAtom);
  const { data: products } = useFetchProductsApi();

  useEffect(() => {
    const newList = products?.filter((product: IProduct) => {
      return product.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    setStockAtom(newList);
  }, [searchValue, products, setStockAtom]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <div className="w-[300px] rounded-[50px] flex flex-row items-center bg-white px-4 gap-2 border-[1px] border-gray-400">
      <SearchIcon color="disabled" />{" "}
      <input
        type="text"
        placeholder={t("search")}
        className="w-full h-9 text-gray-600 rounded-r-[50px] focus:outline-none"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
