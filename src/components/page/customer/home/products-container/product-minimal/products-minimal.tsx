"use client";

import { useFetchProductsApi } from "@/api-hooks/product";
import MinimalList from "./minimal-list";
import { IProduct } from "@/components/page/admin/favorites/favorites";

export default function ProductsMinimal() {
  const { data: products } = useFetchProductsApi();

  const transformedProducts = products?.map((product: IProduct) => ({
    image: product?.images[0],
    name: product.title,
    category: product?.category["name"],
    price: product.price || 0,
  }));

  return (
    <div className="w-full flex flex-row gap-[calc(2%)] mt-5">
      <div className="w-[calc(32%)]">
        <MinimalList
          title="new arrivals"
          list={transformedProducts?.slice(0, 4)}
        />
      </div>
      <div className="w-[calc(32%)]">
        <MinimalList title="trending" list={transformedProducts?.slice(5, 9)} />
      </div>
      <div className="w-[calc(32%)]">
        <MinimalList
          title="top rated"
          list={transformedProducts?.slice(10, 14)}
        />
      </div>
    </div>
  );
}
