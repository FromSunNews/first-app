"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Mon",
    score: 92,
    threats: 2,
  },
  {
    name: "Tue",
    score: 93,
    threats: 1,
  },
  {
    name: "Wed",
    score: 95,
    threats: 0,
  },
  {
    name: "Thu",
    score: 94,
    threats: 1,
  },
  {
    name: "Fri",
    score: 95,
    threats: 0,
  },
  {
    name: "Sat",
    score: 95,
    threats: 0,
  },
  {
    name: "Sun",
    score: 95,
    threats: 0,
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
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
        <Line
          type="monotone"
          dataKey="score"
          stroke="#8884d8"
          strokeWidth={2}
          name="Security Score"
        />
        <Line
          type="monotone"
          dataKey="threats"
          stroke="#ff0000"
          strokeWidth={2}
          name="Active Threats"
        />
      </LineChart>
    </ResponsiveContainer>
  );
} 