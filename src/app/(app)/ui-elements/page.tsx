import BarChart from "@/components/page/ui-elements/bar-chart";
import DonutChart from "@/components/page/ui-elements/donut-chart";
import PieChart from "@/components/page/ui-elements/pie-chart";
import { Typography } from "@mui/material";
import React from "react";

const UiElementsPage: React.FC = () => {
  return (
    <div className="w-full pb-2">
      <Typography
        sx={{
          mb: 1,
          fontSize: 32,
          mt: "16px",
          lineHeight: "43.5px",
          textAlign: "start",
          fontWeight: 700,
        }}
      >
        UI Elements
      </Typography>
      <BarChart />
      <PieChart/>
      <DonutChart/>
    </div>
  );
};

export default UiElementsPage;
