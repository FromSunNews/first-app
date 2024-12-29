"use client";

import { Progress } from "@/components/shared/ui/progress";
import { ScrollArea } from "@/components/shared/ui/scroll-area";

const resources = [
  {
    id: "cpu-1",
    name: "CPU Core 1",
    usage: 75,
    details: "2.4 GHz",
  },
  {
    id: "cpu-2",
    name: "CPU Core 2",
    usage: 65,
    details: "2.4 GHz",
  },
  {
    id: "cpu-3",
    name: "CPU Core 3",
    usage: 55,
    details: "2.4 GHz",
  },
  {
    id: "cpu-4",
    name: "CPU Core 4",
    usage: 45,
    details: "2.4 GHz",
  },
  {
    id: "mem-1",
    name: "Memory Bank 1",
    usage: 80,
    details: "4 GB DDR4",
  },
  {
    id: "mem-2",
    name: "Memory Bank 2",
    usage: 70,
    details: "4 GB DDR4",
  },
  {
    id: "mem-3",
    name: "Memory Bank 3",
    usage: 60,
    details: "4 GB DDR4",
  },
  {
    id: "mem-4",
    name: "Memory Bank 4",
    usage: 50,
    details: "4 GB DDR4",
  },
  {
    id: "storage-1",
    name: "SSD Storage",
    usage: 65,
    details: "512 GB NVMe",
  },
  {
    id: "network-1",
    name: "Network Interface",
    usage: 45,
    details: "1 Gbps",
  },
];

export function ResourceUsage() {
  const getProgressColor = (usage: number) => {
    if (usage >= 80) return "bg-red-500";
    if (usage >= 60) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <ScrollArea className="h-[500px] pr-4">
      <div className="space-y-6">
        {resources.map((resource) => (
          <div key={resource.id} className="space-y-2">
            <div className="flex justify-between text-sm">
              <div>
                <div className="font-medium">{resource.name}</div>
                <div className="text-muted-foreground">{resource.details}</div>
              </div>
              <div className="font-medium">{resource.usage}%</div>
            </div>
            <Progress
              value={resource.usage}
              className={`h-2 ${getProgressColor(resource.usage)}`}
            />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
} 