"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface TrafficChartCardProps {
  title: string;
  description: string;
  data: {
    label: string;
    value: number;
    color: string;
  }[];
  trafficData: { name: string; value1: number; value2: number; value3: number }[]; // Accepts existing structure
  daysData: { day: string; percentage1: number; percentage2: number }[];
  ChartComponent: React.FC<{
    data: { name: string; value1: number; value2: number; value3: number }[]; // Passes same structure
    multiLine: true;
    showGrid: boolean;
    colors: string[];
  }>;
}


const TrafficChartCard: React.FC<TrafficChartCardProps> = ({
  title,
  description,
  data,
  trafficData,
  daysData,
  ChartComponent,
}) => {
  return (
    <Card className="bg-[#1a1a1a] border-[#2a2a2a]">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-white">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div className="flex items-center gap-2">
          <Tabs defaultValue="month">
            <TabsList className="bg-[#252525]">
              <TabsTrigger value="day">Day</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="year">Year</TabsTrigger>
            </TabsList>
          </Tabs>
          <Button size="icon" variant="outline" className="bg-[#1a1a1a] border-[#2a2a2a]">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {data.map((item, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-4">
                <div className={`w-1 h-16 rounded-full`} style={{ backgroundColor: item.color }}></div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">{item.label}</div>
                  <div className="text-2xl font-bold text-white">{item.value.toLocaleString()}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="h-[300px]">
          <ChartComponent 
            data={trafficData} 
            multiLine={true} 
            showGrid={true} 
            colors={["#3b82f6", "#ef4444", "#10b981"]}
          />
        </div>
        
        <div className="mt-6 grid grid-cols-2 md:grid-cols-7 gap-4">
          {daysData.map((day) => (
            <div key={day.day} className="space-y-2">
              <div className="text-sm text-muted-foreground">{day.day}</div>
              <div className="h-2 bg-[#252525] rounded-full">
                <div className="h-full rounded-full bg-blue-500" style={{ width: `${day.percentage1}%` }}></div>
              </div>
              <div className="h-2 bg-[#252525] rounded-full">
                <div className="h-full rounded-full bg-red-500" style={{ width: `${day.percentage2}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TrafficChartCard;
