"use client";

import { Progress } from "@/components/shared/ui/progress";

const resources = [
  {
    name: "CPU Core 1",
    usage: 85,
    total: "3.5 GHz",
    trend: "+5%",
  },
  {
    name: "CPU Core 2",
    usage: 65,
    total: "3.5 GHz",
    trend: "-2%",
  },
  {
    name: "Memory Bank 1",
    usage: 75,
    total: "8 GB",
    trend: "+3%",
  },
  {
    name: "Memory Bank 2",
    usage: 45,
    total: "8 GB",
    trend: "-1%",
  },
  {
    name: "SSD Storage",
    usage: 55,
    total: "500 GB",
    trend: "+2%",
  },
  {
    name: "Network Interface",
    usage: 35,
    total: "1 Gbps",
    trend: "+0.5%",
  },
];

export function ResourceUsage() {
  return (
    <div className="space-y-8">
      {resources.map((resource) => (
        <div key={resource.name} className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {resource.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {resource.total}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">{resource.usage}%</div>
              <p className={`text-xs ${resource.trend.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                {resource.trend} from last hour
              </p>
            </div>
          </div>
          <Progress
            value={resource.usage}
            className="h-2"
            variant={resource.usage > 80 ? "destructive" : "default"}
          />
        </div>
      ))}
    </div>
  );
} 