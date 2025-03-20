import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function PageHeader({ page }: { page: string }) {
  const t = useTranslations(page);
  return (
    <Typography
      sx={{
        mt: "16px",
        mb: "18px",
        fontSize: 32,
        lineHeight: "43.5px",
        textAlign: "start",
        fontWeight: 700,
      }}
    >
      {t("title")}
    </Typography>
  );
}
