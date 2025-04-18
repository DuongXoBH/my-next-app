"use client";

import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import ProductList from "../product-list/product-list";

export default function RelatedProducts({ id }: { id: number }) {
  const t = useTranslations("admin.ProductDetail");
  return (
    <div className="w-full flex flex-col">
      <Typography
        sx={{
          mt: "16px",
          mb: "18px",
          fontSize: 32,
          lineHeight: "43.5px",
          textAlign: "start",
          fontWeight: 700,
          textTransform: "capitalize",
        }}
      >
        {t("related products")} {id}
      </Typography>
      <ProductList />
    </div>
  );
}
