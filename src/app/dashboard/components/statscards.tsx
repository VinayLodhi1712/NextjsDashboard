import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  percentage: string;
  trend: "up" | "down";
  icon: React.ReactNode;
  linkText: string;
  linkHref: string;
  trendColor: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  percentage,
  trend,
  icon,
  linkText,
  linkHref,
  trendColor,
}) => {
  return (
    <Card className="bg-[#1a1a1a] border-[#2a2a2a]">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className={`flex items-center text-sm ${trendColor}`}>
          {trend === "up" ? (
            <ArrowUp className="mr-1 h-4 w-4" />
          ) : (
            <ArrowDown className="mr-1 h-4 w-4" />
          )}
          {percentage}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">
          {trend === "up" ? "Growth" : "Decline"}
        </p>
        <div className="mt-4 flex items-center">
          {icon}
          <a href={linkHref} className="text-xs text-muted-foreground hover:text-primary">
            {linkText}
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
