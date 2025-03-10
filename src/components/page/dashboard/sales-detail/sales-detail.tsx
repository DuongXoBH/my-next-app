import { Typography } from "@mui/material";
import SalesChart from "./sales-chart";

export default function SalesDetail() {
  return (
    <div id="#sales-detail" className="w-full bg-white p-8 mt-8">
      <Typography
        sx={{
          mb: 1,
          fontSize: 32,
          lineHeight: "43.5px",
          textAlign: "start",
          fontWeight: 500,
        }}
      >
        Sales Details
      </Typography>
      <SalesChart />
    </div>
  );
}
