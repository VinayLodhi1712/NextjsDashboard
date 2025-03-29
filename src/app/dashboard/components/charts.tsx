"use client";

import React from "react";
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
  return (
    <div className="h-full w-full">
      <ResponsiveContainer width="100%" height={300}>{children}</ResponsiveContainer>
    </div>
  );
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

export function PieChartComponent({ percentage = 65, colors }: { percentage?: number; colors?: string[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsPieChart>
        <Pie 
          data={[
            { name: "Complete", value: percentage }, 
            { name: "Incomplete", value: 100 - percentage }
          ]} 
          cx="50%" 
          cy="50%" 
          innerRadius={60} 
          outerRadius={80} 
          startAngle={90} 
          endAngle={-270} 
          dataKey="value"
        >
          <Cell fill={colors?.[0] || "#0ea5e9"} />
          <Cell fill={colors?.[1] || "#2a2a2a"} />
        </Pie>
      </RechartsPieChart>
    </ResponsiveContainer>
  );
}

export function SingleLineChart({ data, color = "#8884d8" }: { data: { name: string; value: number }[]; color?: string }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
        <XAxis dataKey="name" stroke="#888" />
        <YAxis stroke="#888" />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function MultiLineChart({ data, colors = ["#8884d8", "#82ca9d", "#ffc658"] }: { data: { name: string; [key: string]: number | string }[]; colors?: string[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#888" />
        <YAxis stroke="#888" />
        <Tooltip />
        <Legend />
        {Object.keys(data[0])
          .filter(key => key !== "name")
          .map((key, index) => (
            <Line key={key} type="monotone" dataKey={key} stroke={colors[index % colors.length]} strokeWidth={2} />
          ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

export function BarChartComponent({ data = dummyData, colors }: { data?: typeof dummyData; colors?: string[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#888" />
        <YAxis stroke="#888" />
        <Tooltip />
        <Legend />
        {Object.keys(data[0])
          .filter(key => key !== "name")
          .map((key, index) => (
            <Bar key={key} dataKey={key} fill={colors?.[index] || "#0ea5e9"} />
          ))}
      </BarChart>
    </ResponsiveContainer>
  );
}

export function AreaChartComponent({ data, colors }: { data: { name: string; [key: string]: number | string }[]; colors?: string[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#888" />
        <YAxis stroke="#888" />
        <Tooltip />
        {Object.keys(data[0])
          .filter(key => key !== "name")
          .map((key, index) => (
            <Area key={key} type="monotone" dataKey={key} stroke={colors?.[index] || "#8884d8"} fill={colors?.[index] || "#8884d8"} />
          ))}
      </AreaChart>
    </ResponsiveContainer>
  );
}
