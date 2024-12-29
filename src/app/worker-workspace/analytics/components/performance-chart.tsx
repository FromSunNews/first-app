"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  {
    time: "00:00",
    cpu: 45,
    memory: 30,
    tasks: 12,
  },
  {
    time: "04:00",
    cpu: 55,
    memory: 40,
    tasks: 18,
  },
  {
    time: "08:00",
    cpu: 75,
    memory: 60,
    tasks: 28,
  },
  {
    time: "12:00",
    cpu: 65,
    memory: 55,
    tasks: 22,
  },
  {
    time: "16:00",
    cpu: 85,
    memory: 70,
    tasks: 32,
  },
  {
    time: "20:00",
    cpu: 75,
    memory: 60,
    tasks: 24,
  },
  {
    time: "24:00",
    cpu: 50,
    memory: 45,
    tasks: 15,
  },
];

export function PerformanceChart() {
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
          stroke="#8884d8"
          strokeWidth={2}
          name="CPU Usage"
        />
        <Line
          type="monotone"
          dataKey="memory"
          stroke="#82ca9d"
          strokeWidth={2}
          name="Memory Usage"
        />
        <Line
          type="monotone"
          dataKey="tasks"
          stroke="#ffc658"
          strokeWidth={2}
          name="Active Tasks"
        />
      </LineChart>
    </ResponsiveContainer>
  );
} 