import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import translationData from "@/messages/en.json";
type Page = keyof typeof translationData.admin;

export default function PageHeader({ page }: { page: Page }) {
  const t = useTranslations(`admin.${page}` as const);
  return (
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
      {t("title")}
    </Typography>
  );
}
