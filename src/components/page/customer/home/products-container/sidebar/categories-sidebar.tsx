"use client";

import { useFetchCategoriesApi } from "@/api-hooks/categories";
import ProductsContainerSidebar from "./product-sidebar";
import CategoriesTag from "./categories-tag";

export default function CategoriesSidebar({
  isOpenNumber,
  setOpen,
}: {
  isOpenNumber: number | null;
  setOpen: (index: number | null) => void;
}) {
  const { data: categories } = useFetchCategoriesApi();
  return (
    <ProductsContainerSidebar title="categories">
      <div className="w-full">
        {categories
          ?.slice(0, 5)
          .map(
            (
              item: { id: number; image: string; name: string },
              index: number
            ) => {
              return (
                <CategoriesTag
                  key={`categories-sidebar-${index}`}
                  index={index}
                  isOpenNumber={isOpenNumber}
                  setOpen={(index) =>
                    setOpen(isOpenNumber === index ? null : index)
                  }
                  category={item}
                />
              );
            }
          )}
      </div>
    </ProductsContainerSidebar>
  );
}
