"use client"

import type React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  Legend,
} from "recharts";

export function ChartContainer({ children }: { children: React.ReactElement }) {
  console.log("Rendering Chart Container with:", children);
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height={300}>{children}</ResponsiveContainer>
    </div>
  );
}

import type { TooltipProps } from "recharts";

export function ChartTooltip({ active, payload, label }: TooltipProps<number, string>) {
  if (active && payload && payload.length) {
    console.log("Tooltip data:", payload);
    return (
      <div className="rounded-lg border bg-background p-2 shadow-sm">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col">
            <span className="text-[0.70rem] uppercase text-muted-foreground">{label}</span>
            <span className="font-bold text-muted-foreground">{payload[0].value}</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

const dummyData = [
  { name: "Jan", value1: 41, value2: 87, value3: 27 },
  { name: "Feb", value1: 49, value2: 37, value3: 39 },
  { name: "Mar", value1: 71, value2: 98, value3: 58 },
  { name: "Apr", value1: 53, value2: 57, value3: 53 },
  { name: "May", value1: 71, value2: 37, value3: 38 },
  { name: "Jun", value1: 78, value2: 78, value3: 20 },
  { name: "Jul", value1: 76, value2: 58, value3: 20 },
];

export function LineChartComponent({ data = dummyData, multiLine = true }: { data?: typeof dummyData; multiLine?: boolean }) {
  console.log("Rendering LineChartComponent with data:", data);
  return (
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="name" stroke="#888" />
      <YAxis stroke="#888" />
      <Tooltip content={<ChartTooltip />} />
      <Legend />
      {multiLine && (
        <>
          <Line type="monotone" dataKey="value1" stroke="#0ea5e9" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="value2" stroke="#4ade80" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="value3" stroke="#f43f5e" strokeWidth={2} dot={false} />
        </>
      )}
    </LineChart>
  );
}

export function BarChartComponent({ data = dummyData }) {
  console.log("Rendering BarChartComponent with data:", data);
  return (
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="name" stroke="#888" />
      <YAxis stroke="#888" />
      <Tooltip content={<ChartTooltip />} />
      <Legend />
      <Bar dataKey="value1" fill="#0ea5e9" />
      <Bar dataKey="value2" fill="#4ade80" />
      <Bar dataKey="value3" fill="#f59e0b" />
    </BarChart>
  );
}

export function PieChartComponent() {
  const percentage = 65;
  console.log("Rendering PieChartComponent with percentage:", percentage);
  return (
    <RechartsPieChart>
      <Pie data={[{ name: "Complete", value: percentage }, { name: "Incomplete", value: 100 - percentage }]} cx="50%" cy="50%" innerRadius={60} outerRadius={80} startAngle={90} endAngle={-270} dataKey="value">
        <Cell fill="#0ea5e9" />
        <Cell fill="#2a2a2a" />
      </Pie>
    </RechartsPieChart>
  );
}

export function AreaChartComponent({ data = dummyData }) {
  console.log("Rendering AreaChartComponent with data:", data);
  return (
    <AreaChart data={data}>
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="name" stroke="#888" />
      <YAxis stroke="#888" />
      <Tooltip content={<ChartTooltip />} />
      <Legend />
      <Area type="monotone" dataKey="value1" stroke="#0ea5e9" fill="#0ea5e9" />
      <Area type="monotone" dataKey="value2" stroke="#f59e0b" fill="#f59e0b" />
      <Area type="monotone" dataKey="value3" stroke="#10b981" fill="#10b981" />
    </AreaChart>
  );
}