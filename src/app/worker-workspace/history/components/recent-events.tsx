"use client";

import { ScrollArea } from "@/components/shared/ui/scroll-area";
import { Badge } from "@/components/shared/ui/badge";
import { CheckCircle, AlertTriangle, AlertCircle, Info } from "lucide-react";

const events = [
  {
    id: "1",
    event: "Task Completed",
    type: "success",
    details: "AI Model Training completed successfully",
    timestamp: "2 minutes ago",
    node: "Worker Node 1",
  },
  {
    id: "2",
    event: "Node Offline",
    type: "error",
    details: "Worker Node 2 went offline unexpectedly",
    timestamp: "15 minutes ago",
    node: "Worker Node 2",
  },
  {
    id: "3",
    event: "Task Started",
    type: "info",
    details: "Data Processing task started",
    timestamp: "30 minutes ago",
    node: "Worker Node 3",
  },
  {
    id: "4",
    event: "Resource Warning",
    type: "warning",
    details: "High memory usage detected",
    timestamp: "1 hour ago",
    node: "Worker Node 1",
  },
  {
    id: "5",
    event: "System Update",
    type: "info",
    details: "System updated to version 2.1.0",
    timestamp: "2 hours ago",
    node: "All Nodes",
  },
  {
    id: "6",
    event: "Task Failed",
    type: "error",
    details: "Network Analysis task failed",
    timestamp: "3 hours ago",
    node: "Worker Node 4",
  },
  {
    id: "7",
    event: "Security Scan",
    type: "success",
    details: "Security scan completed with no threats",
    timestamp: "4 hours ago",
    node: "All Nodes",
  },
  {
    id: "8",
    event: "Backup Created",
    type: "success",
    details: "System backup created successfully",
    timestamp: "5 hours ago",
    node: "Worker Node 1",
  },
];

export function RecentEvents() {
  const getEventIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "error":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      default:
        return <Info className="h-4 w-4 text-blue-500" />;
    }
  };

  const getEventBadge = (type: string) => {
    switch (type) {
      case "success":
        return (
          <Badge variant="outline" className="text-green-500 border-green-500">
            Success
          </Badge>
        );
      case "error":
        return (
          <Badge variant="outline" className="text-red-500 border-red-500">
            Error
          </Badge>
        );
      case "warning":
        return (
          <Badge variant="outline" className="text-yellow-500 border-yellow-500">
            Warning
          </Badge>
        );
      default:
        return (
          <Badge variant="outline" className="text-blue-500 border-blue-500">
            Info
          </Badge>
        );
    }
  };

  return (
    <ScrollArea className="h-[500px] pr-4">
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-start space-x-4 rounded-lg border p-4"
          >
            <div className="mt-1">{getEventIcon(event.type)}</div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{event.event}</p>
                {getEventBadge(event.type)}
              </div>
              <p className="text-sm text-muted-foreground">{event.details}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{event.node}</span>
                <span>{event.timestamp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
} 