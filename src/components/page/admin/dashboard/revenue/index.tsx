import { Typography } from "@mui/material";
import RevenueChart from "./revenue-chart";
import { useTranslations } from "next-intl";

export default function Revenue() {
  const t = useTranslations("admin.Dashboard");
  return (
    <div className="w-full bg-white p-8 mt-8">
      <Typography
        sx={{
          mb: 1,
          fontSize: 24,
          lineHeight: "43.5px",
          textAlign: "start",
          fontWeight: 700,
        }}
      >
        {t("revenua")}
      </Typography>
      <RevenueChart />
    </div>
  );
}
