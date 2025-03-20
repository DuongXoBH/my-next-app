import PageHeader from "@/components/common/page-header";
import BarChart from "@/components/page/ui-elements/bar-chart";
import DonutChart from "@/components/page/ui-elements/donut-chart";
import PieChart from "@/components/page/ui-elements/pie-chart";
import React from "react";

const UiElementsPage: React.FC = () => {
  return (
    <div className="w-full pb-2">
      <PageHeader page="UI Elements"/>
      <BarChart />
      <PieChart/>
      <DonutChart/>
    </div>
  );
};

export default UiElementsPage;
