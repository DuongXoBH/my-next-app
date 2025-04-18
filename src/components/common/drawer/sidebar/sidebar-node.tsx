"use client";

import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import translationData from "@/messages/en.json";
type Page = keyof typeof translationData.admin;

export default function Note({ page }: { page: string }) {
  const t = useTranslations(`admin.${page as Page}`);
  return (
    <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>
      {t("title")}
    </Typography>
  );
}
