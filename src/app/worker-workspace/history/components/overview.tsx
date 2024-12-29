"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  {
    name: "Mon",
    success: 145,
    error: 3,
    warning: 8,
  },
  {
    name: "Tue", 
    success: 168,
    error: 2,
    warning: 12,
  },
  {
    name: "Wed",
    success: 156,
    error: 5,
    warning: 10,
  },
  {
    name: "Thu",
    success: 182,
    error: 4,
    warning: 15,
  },
  {
    name: "Fri",
    success: 192,
    error: 3,
    warning: 9,
  },
  {
    name: "Sat",
    success: 134,
    error: 2,
    warning: 7,
  },
  {
    name: "Sun",
    success: 126,
    error: 1,
    warning: 5,
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
          dataKey="success"
          fill="#4CAF50"
          radius={[4, 4, 0, 0]}
          name="Success"
        />
        <Bar
          dataKey="error"
          fill="#f44336"
          radius={[4, 4, 0, 0]}
          name="Error"
        />
        <Bar
          dataKey="warning"
          fill="#ff9800"
          radius={[4, 4, 0, 0]}
          name="Warning"
        />
      </BarChart>
    </ResponsiveContainer>
  );
} 