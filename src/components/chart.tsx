"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "M",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "T",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "W",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "T",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "F",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "S",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Today",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
];

export function Chart() {
  return (
    <ResponsiveContainer>
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
          tickFormatter={(value) => ``}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
