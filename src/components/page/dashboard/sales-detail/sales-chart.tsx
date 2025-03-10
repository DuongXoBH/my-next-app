"use client";

import React from "react";
import ReactECharts from "echarts-for-react";
import type { EChartsOption } from "echarts";

export default function SalesChart() {
  const data = [20, 40, 50, 80, 30, 60, 20, 50, 70, 60, 40, 50];

  const labels = [
    "5k",
    "10k",
    "15k",
    "20k",
    "25k",
    "30k",
    "35k",
    "40k",
    "45k",
    "50k",
    "55k",
    "60k",
  ];

  const option: EChartsOption = {
    tooltip: {
      trigger: "axis",
    },
    xAxis: {
      type: "category",
      data: labels,
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 100,
      axisLabel: {
        formatter: "{value}%",
      },
    },
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 100,
      },
      {
        type: "slider",
        start: 0,
        end: 100,
      },
    ],
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    series: [
      {
        data,
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 8,
        itemStyle: {
          color: "#3B82F6",
          borderColor: "#fff",
          borderWidth: 2,
        },
        lineStyle: {
          color: "#3B82F6",
          width: 2,
        },
        areaStyle: {
          color: "rgba(59, 130, 246, 0.2)",
        },
      },
    ],
  };

  return (
    <div className="w-full h-[380px]">
      <ReactECharts option={option} style={{ height: "100%", width: "100%" }} />
    </div>
  );
}
