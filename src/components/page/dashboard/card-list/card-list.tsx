import type { EChartsOption } from "echarts";
import DashboardCard from "./card";
import ReactECharts from "echarts-for-react";

export default function DashboardCardList() {
  const customersOption: EChartsOption = {
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        type: "pie",
        radius: ["60%", "80%"],
        center: ["50%", "40%"],
        data: [
          { value: 34249, name: "New Customers", itemStyle: { color: "#3B82F6" } },
          { value: 1420, name: "Repeated", itemStyle: { color: "#D1D5DB" } },
        ],
        label: { show: false },
        emphasis: {
          scale: true,
          itemStyle: {
            borderColor: "#fff",
            borderWidth: 2,
          },
        },
      },
    ],
  };

  const salesOption: EChartsOption = {
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: ["2015", "2016", "2017", "2018", "2019"],
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 100,
      axisLabel: {
        formatter: "{value}",
      },
    },
    series: [
      {
        data: [25, 70, 55, 30, 100],
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 8,
        itemStyle: {
          color: "#3B82F6",
          borderColor: "#fff",
        },
        lineStyle: {
          color: "#4581FF",
          width: 2,
        },
      },
      {
        data: [5, 55, 40, 10, 75],
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 8,
        itemStyle: {
          color: "#00B69B",
          borderColor: "#fff",
        },
        lineStyle: {
          color: "#00B69B",
          width: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full flex flex-row justify-between mt-20 overflow-hidden">
      <DashboardCard title="Customers">
        <div className="mt-12 flex flex-col items-center">
          <ReactECharts
            option={customersOption}
            style={{ height: "165px", width: "165px" }}
          />
          <div className="w-full flex flex-row justify-around">
            <div className="flex flex-col items-center">
              <p className="max-w-24 max-h-9 text-[28px] font-bold">
                34,249
              </p>
              <div className="flex flex-row items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#4880FF]"></div>
                <p className="text-base font-semibold">New Customers</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="max-w-24 max-h-9 text-[28px] font-bold">
                1420
              </p>
              <div className="flex flex-row items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#C0D2F0]"></div>
                <p className="text-base font-semibold">Repeated</p>
              </div>
            </div>
          </div>
        </div>
      </DashboardCard>

      <DashboardCard title="Featured Product">
        <div className="flex justify-center items-center h-full">
          <span className="text-gray-400">No data available</span>
        </div>
      </DashboardCard>

      <DashboardCard title="Sales Analytics">
        <ReactECharts
          option={salesOption}
          style={{ width: "100%", height: "350px" }}
        />
      </DashboardCard>
    </div>
  );
}
