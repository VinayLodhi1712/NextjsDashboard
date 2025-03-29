"use client"

import React, { useState, useRef, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MoreVertical, ArrowUp, ArrowDown } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";

interface AnalyticsCardProps {
  title: string;
  value: string | number;
  percentage: string;
  trend: "up" | "down";
  bgColor: string;
  data: { value: number }[];
  ChartComponent: React.FC<{ 
    data: { name: string; value: number }[]; // Define the expected structure of the data
    colors: string[]; 
    multiLine?: boolean; 
    showGrid?: boolean; 
  }>;
}


const AnalyticsCard: React.FC<AnalyticsCardProps> = ({
  title,
  value,
  percentage,
  trend,
  bgColor,
  data,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const formattedData = data?.map((item, index) => ({
    name: index.toString(),
    value: item.value,
  }));

  return (
    <Card className={`${bgColor} text-white border-none overflow-hidden`}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <MoreVertical className="h-4 w-4" />
          </button>
          
          {isMenuOpen && (
            <div className="absolute right-0 z-10 mt-2 w-40 rounded-md bg-gray-800 shadow-lg">
              <div className="py-1">
                <button
                  className="block w-full px-4 py-2 text-left text-sm text-white hover:bg-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Action
                </button>
                <button
                  className="block w-full px-4 py-2 text-left text-sm text-white hover:bg-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Another action
                </button>
                <button
                  className="block w-full px-4 py-2 text-left text-sm text-white hover:bg-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Something else
                </button>
              </div>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs flex items-center">
          {trend === "up" ? (
            <ArrowUp className="mr-1 h-3 w-3" />
          ) : (
            <ArrowDown className="mr-1 h-3 w-3" />
          )}
          <span>({percentage})</span> {trend === "up" ? "increase" : "decrease"}
        </p>
        <div className="mt-4 h-[60px]">
          {data?.length > 0 && (
            <SimpleLineChart 
              data={formattedData} 
              lineColor="rgba(255, 255, 255, 0.8)"
            />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

// Simple line chart component optimized for the card
const SimpleLineChart: React.FC<{ data: { name: string; value: number }[]; lineColor: string }> = ({ data, lineColor }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="value"
          stroke={lineColor}
          strokeWidth={2}
          dot={{ r: 3, strokeWidth: 0, fill: lineColor }}
          activeDot={{ r: 6, fill: lineColor }}
          isAnimationActive={true}
        />
        <Tooltip 
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="bg-gray-800 px-2 py-1 text-xs text-white rounded">
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
};

export default AnalyticsCard;