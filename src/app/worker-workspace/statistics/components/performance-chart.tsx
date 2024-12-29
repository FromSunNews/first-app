"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  {
    time: "00:00",
    tasks: 45,
    responseTime: 120,
  },
  {
    time: "04:00",
    tasks: 55,
    responseTime: 125,
  },
  {
    time: "08:00",
    tasks: 85,
    responseTime: 130,
  },
  {
    time: "12:00",
    tasks: 125,
    responseTime: 135,
  },
  {
    time: "16:00",
    tasks: 95,
    responseTime: 125,
  },
  {
    time: "20:00",
    tasks: 75,
    responseTime: 120,
  },
  {
    time: "24:00",
    tasks: 45,
    responseTime: 115,
  },
];

export function PerformanceChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={data}>
        <XAxis
          dataKey="time"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          yAxisId="left"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}ms`}
        />
        <Tooltip />
        <Area
          yAxisId="left"
          type="monotone"
          dataKey="tasks"
          stroke="#2196F3"
          fill="#2196F3"
          fillOpacity={0.2}
          name="Tasks"
        />
        <Area
          yAxisId="right"
          type="monotone"
          dataKey="responseTime"
          stroke="#4CAF50"
          fill="#4CAF50"
          fillOpacity={0.2}
          name="Response Time"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
} 