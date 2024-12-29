"use client";

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Mon",
    completed: 145,
    running: 45,
    queued: 25,
  },
  {
    name: "Tue",
    completed: 168,
    running: 38,
    queued: 30,
  },
  {
    name: "Wed",
    completed: 156,
    running: 42,
    queued: 28,
  },
  {
    name: "Thu",
    completed: 182,
    running: 48,
    queued: 35,
  },
  {
    name: "Fri",
    completed: 192,
    running: 52,
    queued: 40,
  },
  {
    name: "Sat",
    completed: 134,
    running: 35,
    queued: 22,
  },
  {
    name: "Sun",
    completed: 126,
    running: 30,
    queued: 18,
  },
];

export function TaskOverview() {
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
          dataKey="completed"
          fill="#4CAF50"
          radius={[4, 4, 0, 0]}
          name="Completed"
          stackId="stack"
        />
        <Bar
          dataKey="running"
          fill="#2196F3"
          radius={[4, 4, 0, 0]}
          name="Running"
          stackId="stack"
        />
        <Bar
          dataKey="queued"
          fill="#FF9800"
          radius={[4, 4, 0, 0]}
          name="Queued"
          stackId="stack"
        />
      </BarChart>
    </ResponsiveContainer>
  );
} 