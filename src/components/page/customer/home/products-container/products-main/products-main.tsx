"use client";
import { useFetchProductsApi } from "@/api-hooks/product";
import { IProduct } from "@/components/page/admin/favorites/favorites";
import { Divider } from "@mui/material";
import ProductsCard from "./product-card";

export default function ProductsMain() {
  const { data: products } = useFetchProductsApi();
  return (
    <div className="w-full flex flex-col mt-10 gap-6">
      <p className="w-full text-xl font-bold capitalize">new products</p>
      <Divider />
      <div className="w-full flex flex-wrap gap-[calc(2%)]">
        {products?.slice(0, 12).map((product: IProduct, index: number) => {
          return (
            <div key={`products-${index}`} className="w-[calc(23.5%)] mb-4">
              <ProductsCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
