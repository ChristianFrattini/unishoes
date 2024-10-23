"use client";

import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Legend,
} from "recharts";

interface iAppProps {
  data: {
    date: string;
    revenue: number;
  }[];
}
/* eslint-disable @typescript-eslint/no-explicit-any */
const aggregateData = (data: any) => {
  const aggregated = data.reduce((acc: any, curr: any) => {
    if (acc[curr.date]) {
      acc[curr.date] += curr.revenue;
    } else {
      acc[curr.date] = curr.revenue;
    }
    return acc;
  }, {});

  return Object.keys(aggregated).map((date) => ({
    date,
    revenue: aggregated[date],
  }));
};
/* eslint-disable @typescript-eslint/no-explicit-any */

export default function Chart({ data }: iAppProps) {
  const processedData = aggregateData(data);
  return (
    <div>
      <ResponsiveContainer width={"100%"} height={400}>
        <LineChart data={processedData}>
          <CartesianGrid strokeDasharray={"3 3"} />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type={"monotone"}
            stroke={"#3b82f6"}
            activeDot={{ r: 8 }}
            dataKey={"revenue"}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
