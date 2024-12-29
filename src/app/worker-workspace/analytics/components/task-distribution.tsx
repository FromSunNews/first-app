"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts";

const data = [
  {
    category: "AI Training",
    completed: 45,
    running: 12,
    queued: 8,
  },
  {
    category: "Data Processing",
    completed: 35,
    running: 8,
    queued: 15,
  },
  {
    category: "Network Analysis",
    completed: 28,
    running: 5,
    queued: 10,
  },
  {
    category: "Security Scans",
    completed: 22,
    running: 4,
    queued: 6,
  },
  {
    category: "Backup Tasks",
    completed: 18,
    running: 3,
    queued: 5,
  },
  {
    category: "Maintenance",
    completed: 15,
    running: 2,
    queued: 4,
  },
];

export function TaskDistribution() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="category"
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
        <Legend />
        <Bar
          dataKey="completed"
          stackId="stack"
          fill="#4CAF50"
          name="Completed"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="running"
          stackId="stack"
          fill="#2196F3"
          name="Running"
          radius={[4, 4, 0, 0]}
        />
        <Bar
          dataKey="queued"
          stackId="stack"
          fill="#FFC107"
          name="Queued"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
} 