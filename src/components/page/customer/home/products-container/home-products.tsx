"use client";

import { useState } from "react";
import CategoriesSidebar from "./sidebar/categories-sidebar";
import ProductsMinimal from "./product-minimal/products-minimal";
import ProductsMain from "./products-main/products-main";
import BestSeller from "./sidebar/seller-sidebar";

export default function HomeProducts() {
  const [open, setOpen] = useState<number | null>(null);
  console.log("🚀 ~ HomeProducts ~ open:", open);
  return (
    <div className="w-full relative flex flex-row gap-7 mt-10">
      <div
        className={`min-w-[315px] flex flex-col gap-5 sticky top-7 bg-inherit overflow-y-hidden ${open !== null ? "max-h-[1096px]" : "max-h-[940px]"}`}
      >
        <CategoriesSidebar isOpenNumber={open} setOpen={setOpen} />
        <BestSeller />
      </div>
      <div
        className="bg-inherit rounded-lg"
        style={{ width: "calc(100% - 315px)" }}
      >
        <ProductsMinimal />
        <ProductsMain />
      </div>
    </div>
  );
}
