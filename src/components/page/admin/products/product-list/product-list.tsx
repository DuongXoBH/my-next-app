"use client";

import {
  useFetchPaginationProduct,
  useFetchProductsApi,
} from "@/api-hooks/product";
import Image from "next/image";
import { useMemo, useState } from "react";
import { Box, Button, Tooltip } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardLoading from "@/components/common/globals/card-loading";
import { useTranslations } from "next-intl";
import { IProduct } from "../../favorites/favorites";
import ProductCard from "./product-card";
import { useAtom } from "jotai";
import { useFetchUserApiBySession } from "@/api-hooks/user";
import { userToken } from "@/stores/auth";
import { favoritesAtom } from "@/stores/admin/products";

export default function ProductList() {
  const t = useTranslations("admin.Products");
  const [token] = useAtom(userToken);
  const { data: auth } = useFetchUserApiBySession(token);
  const [favorites] = useAtom(favoritesAtom);
  const favoriesList = useMemo(() => {
    return auth ? favorites[auth.id] : [];
  }, [auth, favorites]);
  const [offset, setOffset] = useState<number>(0);
  const { data: list } = useFetchProductsApi();
  const page = Math.ceil(offset / 3) + 1;
  const total = list?.length;
  const handlePageChange = (offsetChange: number) => {
    if (offsetChange >= 0 && offsetChange < total) setOffset(offsetChange);
  };

  const { data: products, isLoading } = useFetchPaginationProduct({
    offset: offset,
    limit: 3,
  });

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

  if (isLoading) {
    return <CardLoading />;
  }

  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "24px",
        borderRadius: 2,
        backgroundColor: "#F5F6FA",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Product List */}
      <div className="w-full flex flex-row justify-start gap-[calc(2%)]">
        {newProducts?.map((element: IProduct, index: number) => {
          return (
            <div className="w-[calc(32%)]" key={`product-${index}`}>
              <ProductCard product={element} />
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Previous Button*/}
        <Tooltip title={t("prev")}>
          <Button
            onClick={() => handlePageChange(offset - 3)}
            sx={{ width: "150px", display: "flex", justifyContent: "center" }}
          >
            <Image src="/prev-1.svg" alt="" width={50} height={50} />
          </Button>
        </Tooltip>
        <p>{page}</p>
        {/* Next  Button*/}
        <Tooltip title={t("next")}>
          <Button
            onClick={() => handlePageChange(offset + 3)}
            sx={{ width: "150px", display: "flex", justifyContent: "center" }}
          >
            <Image src="/next-1.svg" alt="" width={50} height={50} />
          </Button>
        </Tooltip>
      </Box>
    </Box>
  );
}
