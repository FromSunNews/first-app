"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  {
    time: "00:00",
    cpu: 45,
    memory: 30,
    storage: 25,
    network: 20,
  },
  {
    time: "04:00",
    cpu: 55,
    memory: 35,
    storage: 25,
    network: 25,
  },
  {
    time: "08:00",
    cpu: 65,
    memory: 45,
    storage: 30,
    network: 35,
  },
  {
    time: "12:00",
    cpu: 75,
    memory: 60,
    storage: 35,
    network: 45,
  },
  {
    time: "16:00",
    cpu: 65,
    memory: 55,
    storage: 35,
    network: 40,
  },
  {
    time: "20:00",
    cpu: 50,
    memory: 45,
    storage: 30,
    network: 30,
  },
  {
    time: "24:00",
    cpu: 45,
    memory: 35,
    storage: 25,
    network: 25,
  },
];

export function ResourceOverview() {
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
          stroke="#f44336"
          strokeWidth={2}
          name="CPU"
        />
        <Line
          type="monotone"
          dataKey="memory"
          stroke="#4CAF50"
          strokeWidth={2}
          name="Memory"
        />
        <Line
          type="monotone"
          dataKey="storage"
          stroke="#2196F3"
          strokeWidth={2}
          name="Storage"
        />
        <Line
          type="monotone"
          dataKey="network"
          stroke="#FF9800"
          strokeWidth={2}
          name="Network"
        />
      </LineChart>
    </ResponsiveContainer>
  );
} 