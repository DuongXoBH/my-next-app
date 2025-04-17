"use client";
import PageHeader from "@/components/common/global/page-header";
import StockSearch from "./stock-search";

export default function StocksHeader() {
  return (
    <div className="flex justify-between items-center mt-4 mb-10">
      <PageHeader page="Product Stock" />
      <StockSearch />
    </div>
  );
}
