import { Typography } from "@mui/material";
import RevenueChart from "./revenue-chart";

export default function Revenue(){
    return (
        <div className="w-full bg-white p-8 mt-8">
        <Typography
          sx={{
            mb: 1,
            fontSize: 32,
            lineHeight: "43.5px",
            textAlign: "start",
            fontWeight: 500,
          }}
        >
          Revenue
        </Typography>
        <RevenueChart />
      </div>
    )
}