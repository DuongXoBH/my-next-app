"use client"

import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function Note({ page }: { page: string }) {
  const t = useTranslations(page);
  return <Typography sx={{ fontWeight: "600", fontSize: "14px" }}>{t("title")}</Typography>;
}
