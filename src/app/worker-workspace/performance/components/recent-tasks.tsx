"use client";

import { Avatar, AvatarFallback } from "@/components/shared/ui/avatar";

const tasks = [
  {
    id: "1",
    name: "AI Model Training",
    status: "Running",
    duration: "2h 15m",
    progress: 45,
  },
  {
    id: "2",
    name: "Data Processing",
    status: "Completed", 
    duration: "1h 30m",
    progress: 100,
  },
  {
    id: "3",
    name: "Blockchain Validation",
    status: "Running",
    duration: "45m",
    progress: 75,
  },
  {
    id: "4",
    name: "Network Analysis",
    status: "Queued",
    duration: "-",
    progress: 0,
  },
  {
    id: "5",
    name: "Security Scan",
    status: "Running",
    duration: "30m",
    progress: 60,
  },
];

export function RecentTasks() {
  return (
    <div className="space-y-8">
      {tasks.map((task) => (
        <div key={task.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback>
              {task.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{task.name}</p>
            <p className="text-sm text-muted-foreground">
              {task.status} • {task.duration}
            </p>
          </div>
          <div className="ml-auto font-medium">
            {task.status === "Completed" ? (
              <span className="text-green-500">Completed</span>
            ) : (
              <div className="flex items-center gap-2">
                <div className="h-2 w-20 rounded-full bg-secondary">
                  <div
                    className="h-2 rounded-full bg-primary"
                    style={{ width: `${task.progress}%` }}
                  />
                </div>
                <span>{task.progress}%</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
} 