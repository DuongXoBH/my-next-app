import { Typography } from "@mui/material";
import SalesChart from "../sales-detail/sales-chart";

export default function DealsDetail() {
  return (
    <div id="#deal-detail" className="w-full bg-white p-8 mt-8">
      <Typography
        sx={{
          mb: 1,
          fontSize: 32,
          lineHeight: "43.5px",
          textAlign: "start",
          fontWeight: 500,
        }}
      >
        Deals Details
      </Typography>
      <SalesChart />
    </div>
  );
}
