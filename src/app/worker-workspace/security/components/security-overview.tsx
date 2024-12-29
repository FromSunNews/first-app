"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  {
    time: "00:00",
    score: 92,
    threats: 0,
  },
  {
    time: "04:00",
    score: 93,
    threats: 1,
  },
  {
    time: "08:00",
    score: 92,
    threats: 2,
  },
  {
    time: "12:00",
    score: 90,
    threats: 3,
  },
  {
    time: "16:00",
    score: 93,
    threats: 1,
  },
  {
    time: "20:00",
    score: 95,
    threats: 0,
  },
  {
    time: "24:00",
    score: 95,
    threats: 0,
  },
];

export function SecurityOverview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
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
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="score"
          stroke="#4CAF50"
          strokeWidth={2}
          name="Security Score"
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="threats"
          stroke="#f44336"
          strokeWidth={2}
          name="Active Threats"
        />
      </LineChart>
    </ResponsiveContainer>
  );
} 