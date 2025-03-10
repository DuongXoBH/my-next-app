"use client";

import StocksList from "@/components/page/stocks/stocks-list";
import StocksHeader from "@/components/page/stocks/stocks-header";

export default function ProductStocks() {
  return (
    <div className="w-full pb-2">
      <StocksHeader />
      <StocksList />
    </div>
  );
}
