import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

interface ChartCardProps {
  title: string;
  description: string;
  data: { name: string; value1: number; value2: number; value3: number }[];
  ChartComponent: React.FC<{ data: { name: string; value1: number; value2: number; value3: number }[]; colors?: string[] }>;
  colors?: string[];
}

const ChartCard: React.FC<ChartCardProps> = ({ title, description, data, ChartComponent, colors }) => {
  return (
    <Card className="bg-[#1a1a1a] border-[#2a2a2a]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{title}</CardTitle>
          <Select defaultValue="week3">
            <SelectTrigger className="w-[120px] bg-[#1a1a1a] border-[#2a2a2a]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week1">Week 1</SelectItem>
              <SelectItem value="week2">Week 2</SelectItem>
              <SelectItem value="week3">Week 3</SelectItem>
              <SelectItem value="week4">Week 4</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[250px]">
          {data && data.length > 0 ? (
            <ChartComponent data={data} colors={colors} />
          ) : (
            <div className="flex h-full items-center justify-center text-gray-400">
              No chart data available
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ChartCard;