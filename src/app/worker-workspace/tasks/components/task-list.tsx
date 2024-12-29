"use client";

import { Badge } from "@/components/shared/ui/badge";
import { Progress } from "@/components/shared/ui/progress";
import { ScrollArea } from "@/components/shared/ui/scroll-area";

const tasks = [
  {
    id: "1",
    name: "AI Model Training",
    type: "Machine Learning",
    status: "running",
    progress: 65,
    node: "Worker Node 1",
    timeLeft: "2h 15m",
  },
  {
    id: "2",
    name: "Data Processing",
    type: "Data Analysis",
    status: "queued",
    progress: 0,
    node: "Worker Node 2",
    timeLeft: "Pending",
  },
  {
    id: "3",
    name: "Network Analysis",
    type: "Networking",
    status: "completed",
    progress: 100,
    node: "Worker Node 3",
    timeLeft: "Completed",
  },
  {
    id: "4",
    name: "Security Scan",
    type: "Security",
    status: "running",
    progress: 45,
    node: "Worker Node 4",
    timeLeft: "1h 30m",
  },
  {
    id: "5",
    name: "Backup Operation",
    type: "Maintenance",
    status: "failed",
    progress: 75,
    node: "Worker Node 5",
    timeLeft: "Failed",
  },
  {
    id: "6",
    name: "Log Analysis",
    type: "Data Analysis",
    status: "running",
    progress: 25,
    node: "Worker Node 6",
    timeLeft: "3h 45m",
  },
  {
    id: "7",
    name: "System Update",
    type: "Maintenance",
    status: "completed",
    progress: 100,
    node: "Worker Node 7",
    timeLeft: "Completed",
  },
  {
    id: "8",
    name: "Performance Test",
    type: "Testing",
    status: "queued",
    progress: 0,
    node: "Worker Node 8",
    timeLeft: "Pending",
  },
];

export function TaskList() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "running":
        return "text-blue-500 border-blue-500";
      case "completed":
        return "text-green-500 border-green-500";
      case "failed":
        return "text-red-500 border-red-500";
      default:
        return "text-yellow-500 border-yellow-500";
    }
  };

  const getProgressColor = (status: string) => {
    switch (status) {
      case "running":
        return "bg-blue-500";
      case "completed":
        return "bg-green-500";
      case "failed":
        return "bg-red-500";
      default:
        return "bg-yellow-500";
    }
  };

  return (
    <ScrollArea className="h-[500px] pr-4">
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex flex-col space-y-2 rounded-lg border p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">{task.name}</p>
                <p className="text-sm text-muted-foreground">{task.type}</p>
              </div>
              <Badge
                variant="outline"
                className={getStatusColor(task.status)}
              >
                {task.status}
              </Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{task.node}</span>
                <span>{task.timeLeft}</span>
              </div>
              <Progress
                value={task.progress}
                className={`h-2 ${getProgressColor(task.status)}`}
              />
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
} 