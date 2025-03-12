import { Typography } from "@mui/material";
// import SalesChart from "../sales-detail/sales-chart";

export default function DealsDetail() {
  return (
    <div id="#deal-detail" className="w-full bg-white p-8 mt-8">
      <Typography
        sx={{
          mb: 1,
          fontSize: 24,
          lineHeight: "43.5px",
          textAlign: "start",
          fontWeight: 700,
        }}
      >
        Deals Details
      </Typography>
      <div className="flex justify-center items-center h-full">
          <span className="text-gray-400">No data available</span>
        </div>
    </div>
  );
}
