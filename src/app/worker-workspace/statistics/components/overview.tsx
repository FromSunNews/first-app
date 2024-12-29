"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  {
    name: "Mon",
    tasks: 145,
    success: 142,
  },
  {
    name: "Tue",
    tasks: 168,
    success: 165,
  },
  {
    name: "Wed",
    tasks: 156,
    success: 154,
  },
  {
    name: "Thu",
    tasks: 192,
    success: 189,
  },
  {
    name: "Fri",
    tasks: 178,
    success: 175,
  },
  {
    name: "Sat",
    tasks: 145,
    success: 142,
  },
  {
    name: "Sun",
    tasks: 123,
    success: 120,
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip />
        <Bar
          dataKey="tasks"
          fill="#8884d8"
          radius={[4, 4, 0, 0]}
          name="Total Tasks"
        />
        <Bar
          dataKey="success"
          fill="#82ca9d"
          radius={[4, 4, 0, 0]}
          name="Successful Tasks"
        />
      </BarChart>
    </ResponsiveContainer>
  );
} 