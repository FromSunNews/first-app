"use client";

import { Avatar, AvatarFallback } from "@/components/shared/ui/avatar";
import { Badge } from "@/components/shared/ui/badge";
import { ScrollArea } from "@/components/shared/ui/scroll-area";

const performers = [
  {
    id: "1",
    name: "Worker Node 1",
    tasksCompleted: 458,
    successRate: 99.5,
    status: "online",
  },
  {
    id: "2",
    name: "Worker Node 2",
    tasksCompleted: 425,
    successRate: 98.8,
    status: "online",
  },
  {
    id: "3",
    name: "Worker Node 3",
    tasksCompleted: 412,
    successRate: 98.5,
    status: "online",
  },
  {
    id: "4",
    name: "Worker Node 4",
    tasksCompleted: 389,
    successRate: 97.9,
    status: "online",
  },
  {
    id: "5",
    name: "Worker Node 5",
    tasksCompleted: 356,
    successRate: 97.5,
    status: "online",
  },
  {
    id: "6",
    name: "Worker Node 6",
    tasksCompleted: 345,
    successRate: 97.2,
    status: "offline",
  },
  {
    id: "7",
    name: "Worker Node 7",
    tasksCompleted: 334,
    successRate: 96.8,
    status: "online",
  },
  {
    id: "8",
    name: "Worker Node 8",
    tasksCompleted: 312,
    successRate: 96.5,
    status: "online",
  },
];

export function TopPerformers() {
  return (
    <ScrollArea className="h-[500px] pr-4">
      <div className="space-y-4">
        {performers.map((performer) => (
          <div
            key={performer.id}
            className="flex items-center justify-between space-x-4 rounded-lg border p-4"
          >
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarFallback>
                  {performer.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{performer.name}</p>
                <p className="text-sm text-muted-foreground">
                  {performer.tasksCompleted} tasks completed
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium">{performer.successRate}%</p>
                <p className="text-sm text-muted-foreground">Success rate</p>
              </div>
              <Badge
                variant="outline"
                className={
                  performer.status === "online"
                    ? "text-green-500 border-green-500"
                    : "text-red-500 border-red-500"
                }
              >
                {performer.status}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
} 