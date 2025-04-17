import { Typography } from "@mui/material";
import SalesChart from "./sales-chart";
import { useTranslations } from "next-intl";

export default function SalesDetail() {
  const t = useTranslations("Dashboard");
  return (
    <div id="#sales-detail" className="w-full bg-white p-8 mt-8">
      <Typography
        sx={{
          mb: 1,
          fontSize: 24,
          lineHeight: "43.5px",
          textAlign: "start",
          fontWeight: 700,
        }}
      >
        {t("sales-detail")}
      </Typography>
      <SalesChart />
    </div>
  );
}
