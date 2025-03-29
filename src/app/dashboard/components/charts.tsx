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

export const AreaChartComponent = ({ data, colors }: { data: { name: string; [key: string]: number | string }[]; colors?: string[] }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {Object.keys(data[0])
          .filter(key => key !== 'name')
          .map((key, index) => (
            <Area
              key={key}
              type="monotone"
              dataKey={key}
              stackId="1"
              stroke={colors?.[index] || '#8884d8'}
              fill={colors?.[index] || '#8884d8'}
            />
          ))}
      </AreaChart>
    </ResponsiveContainer>
  );
};
// Custom tooltip that matches the image design
export function ChartTooltip({ active, payload }: { active?: boolean; payload?: { name?: string; value?: number }[] }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/70 rounded-md px-3 py-2 text-xs text-white shadow">
        <div className="flex flex-col">
          <span className="font-bold">{payload[0].name || "Value"}</span>
          <span>{payload[0].value}</span>
        </div>
      </div>
    );
  }
  return null;
}

// Simple Line Chart optimized for analytics cards
export function SimpleLineChart({ data, color = "#fff", height = 60 }: { data: { value: number }[]; color?: string; height?: number }) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={2}
          dot={{ r: 3, strokeWidth: 0, fill: color }}
          activeDot={{ r: 5, fill: color }}
        />
        <Tooltip content={<ChartTooltip />} />
      </LineChart>
    </ResponsiveContainer>
  );
}
// Updated LineChartComponent that supports multiple lines
export function LineChartComponent({ data, colors, multiLine = false, showGrid = false }: { data: { name: string; [key: string]: number | string }[]; colors?: string[]; multiLine?: boolean; showGrid?: boolean }) {
  // If the data format is an array of { value } objects, transform for simple line chart
  if (!multiLine && data?.length > 0 && 'value' in data[0]) {
    const formattedData = data.map((item, index) => ({
      name: index.toString(),
      value: item.value,
    }));
    
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={formattedData}>
          <Line
            type="monotone"
            dataKey="value"
            stroke="rgba(255,255,255,0.8)"
            strokeWidth={2}
            dot={{ r: 3, strokeWidth: 0, fill: "rgba(255,255,255,0.8)" }}
            activeDot={{ r: 5, fill: "#fff" }}
          />
          <Tooltip 
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-black/70 px-2 py-1 text-xs text-white rounded-md">
                    {payload[0].value}
                  </div>
                );
              }
              return null;
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  }
  
  // For multiple lines (as needed for the traffic chart)
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {showGrid && <CartesianGrid strokeDasharray="3 3" stroke="#333" />}
        <XAxis dataKey="name" stroke="#888" />
        <YAxis stroke="#888" />
        <Tooltip
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="bg-black/70 rounded-md px-3 py-2 text-xs text-white shadow">
                  <p className="font-medium">{label}</p>
                  {payload.map((entry, index) => (
                    <div key={index} className="flex items-center justify-between mt-1">
                      <span style={{ color: entry.color }}>{entry.name}:</span>
                      <span className="font-medium ml-2">{entry.value}</span>
                    </div>
                  ))}
                </div>
              );
            }
            return null;
          }}
        />
        <Legend />
        
        {/* Dynamically generate lines for each data key except 'name' */}
        {data && data.length > 0 && Object.keys(data[0])
          .filter(key => key !== 'name')
          .map((key, index) => (
            <Line
              key={key}
              type="monotone"
              dataKey={key}
              name={key}
              stroke={colors?.[index] || '#8884d8'}
              strokeWidth={2}
              dot={{ r: 2 }}
              activeDot={{ r: 4 }}
            />
          ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

// Bar Chart Component that matches the image
export function BarChartComponent({ data = dummyData, colors }: { data?: typeof dummyData; colors?: string[] }) {
  console.log("Rendering BarChartComponent with data:", data);
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" stroke="#888" />
        <YAxis stroke="#888" />
        <Tooltip content={<ChartTooltip active={undefined} payload={undefined} />} />
        <Legend />
        {Object.keys(data[0])
          .filter(key => key !== 'name')
          .map((key, index) => (
            <Bar
              key={key}
              dataKey={key}
              fill={colors?.[index] || '#0ea5e9'}
            />
          ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
