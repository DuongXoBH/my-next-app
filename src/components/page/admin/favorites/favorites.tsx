"use client";

import { useFetchProductsApi } from "@/api-hooks/product";
import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardLoading from "@/components/common/globals/card-loading";
import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { useAtom } from "jotai";
import { favoritesAtom } from "@/stores/admin/products";
import { useFetchUserApiBySession } from "@/api-hooks/user";
import { userToken } from "@/stores/auth";
import ProductCard from "../products/product-list/product-card";

export interface IProduct {
  id: number;
  title: string;
  images: string[];
  price: number;
  category: {
    name: string;
    slug: string;
    image: string;
  };
  totalFavorites: number;
  favorites: boolean;
}
export default function FavoritesList() {
  const t = useTranslations("admin.Favorites");
  const [count, setCount] = useState(6);
  const [token] = useAtom(userToken);
  const [favorites] = useAtom(favoritesAtom);
  const { data: auth } = useFetchUserApiBySession(token);
  const { data: products, isLoading } = useFetchProductsApi();
  const [favoritesList, setFavoritesList] = useState<IProduct[]>([]);

  const favoriesList = useMemo(() => {
    return auth ? favorites[auth.id] : [];
  }, [auth, favorites]);

  const newProducts = useMemo(() => {
    return products?.map(
      (product: {
        id: number;
        title: string;
        images: string[];
        price: number;
      }) => ({
        ...product,
        totalFavorites: 250,
        favorites: favoriesList?.includes(product.id),
      })
    );
  }, [products, favoriesList]);

  useEffect(() => {
    if (newProducts) {
      const FavoritesList = newProducts.filter(
        (element: IProduct) => element.favorites
      );
      setFavoritesList(FavoritesList);
    }
  }, [newProducts]);

  if (isLoading) {
    return <CardLoading />;
  }

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "start",
          gap: "2%",
        }}
      >
        {favoritesList
          ?.slice(0, count)
          .map((element: IProduct, index: number) => {
            return (
              <div key={`favorites-${index}`} className="w-[calc(32%)]">
                <ProductCard product={element} />
              </div>
            );
          })}
      </Box>
      {count < favoritesList?.length && (
        <button
          className="w-[25%] h-[50px] border-[1px] border-gray-300 rounded-[8px] hover:bg-gray-300"
          onClick={() => setCount((count) => count + 3)}
        >
          {t("see-more")}
        </button>
      )}
    </div>
  );
}
