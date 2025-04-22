"use client";

import { useFetchCategoriesApi } from "@/api-hooks/categories";
import CardLoading from "@/components/common/globals/card-loading";
import CategoriesItem from "./categories-item";

export default function Categories() {
  const { data: categories, isLoading } = useFetchCategoriesApi();
  if (isLoading) {
    return (
      <div className="w-full max-h-24 overflow-y-hidden">
        <CardLoading />
      </div>
    );
  }
  return (
    <div className="w-max min-w-full container overflow-x-auto custom-scrollbar mt-5 flex flex-row gap-[1%] h-24">
      {categories?.map((item: { id: number; name: string; image: string }) => (
        <div key={`categories-item-${item.id}`} className="category-item">
          <CategoriesItem id={item.id} name={item.name} image={item.image} />
        </div>
      ))}
    </div>
  );
}
