"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "00:00",
    cpu: 45,
    memory: 30,
    storage: 25,
  },
  {
    name: "04:00",
    cpu: 55,
    memory: 40,
    storage: 28,
  },
  {
    name: "08:00",
    cpu: 75,
    memory: 60,
    storage: 35,
  },
  {
    name: "12:00",
    cpu: 65,
    memory: 55,
    storage: 40,
  },
  {
    name: "16:00",
    cpu: 85,
    memory: 70,
    storage: 45,
  },
  {
    name: "20:00",
    cpu: 75,
    memory: 60,
    storage: 42,
  },
  {
    name: "24:00",
    cpu: 50,
    memory: 45,
    storage: 38,
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
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="cpu"
          stroke="#8884d8"
          strokeWidth={2}
          name="CPU"
        />
        <Line
          type="monotone"
          dataKey="memory"
          stroke="#82ca9d"
          strokeWidth={2}
          name="Memory"
        />
        <Line
          type="monotone"
          dataKey="storage"
          stroke="#ffc658"
          strokeWidth={2}
          name="Storage"
        />
      </LineChart>
    </ResponsiveContainer>
  );
} 