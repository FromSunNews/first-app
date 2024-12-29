"use client";

import { Badge } from "@/components/shared/ui/badge";
import { ScrollArea } from "@/components/shared/ui/scroll-area";
import { Bell, AlertTriangle, Info, CheckCircle } from "lucide-react";

const notifications = [
  {
    id: "1",
    title: "Critical Security Alert",
    message: "Unauthorized access attempt detected from IP 192.168.1.100",
    type: "critical",
    status: "unread",
    timestamp: "2 minutes ago",
  },
  {
    id: "2",
    title: "Task Completed",
    message: "AI Model Training task completed successfully",
    type: "success",
    status: "unread",
    timestamp: "15 minutes ago",
  },
  {
    id: "3",
    title: "System Update",
    message: "New system update available: v2.1.0",
    type: "info",
    status: "unread",
    timestamp: "30 minutes ago",
  },
  {
    id: "4",
    title: "Resource Warning",
    message: "High memory usage detected on Worker Node 1",
    type: "warning",
    status: "unread",
    timestamp: "1 hour ago",
  },
  {
    id: "5",
    title: "Backup Completed",
    message: "System backup completed successfully",
    type: "success",
    status: "read",
    timestamp: "2 hours ago",
  },
  {
    id: "6",
    title: "Network Issue",
    message: "Network connectivity issues detected",
    type: "critical",
    status: "unread",
    timestamp: "3 hours ago",
  },
  {
    id: "7",
    title: "Performance Alert",
    message: "CPU usage exceeded 90% threshold",
    type: "warning",
    status: "read",
    timestamp: "4 hours ago",
  },
  {
    id: "8",
    title: "Task Started",
    message: "Data Processing task started on Worker Node 2",
    type: "info",
    status: "read",
    timestamp: "5 hours ago",
  },
];

interface NotificationListProps {
  filter: "all" | "unread" | "critical";
}

export function NotificationList({ filter }: NotificationListProps) {
  const getFilteredNotifications = () => {
    switch (filter) {
      case "unread":
        return notifications.filter((n) => n.status === "unread");
      case "critical":
        return notifications.filter((n) => n.type === "critical");
      default:
        return notifications;
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "critical":
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "info":
        return <Info className="h-4 w-4 text-blue-500" />;
      default:
        return <Bell className="h-4 w-4" />;
    }
  };

  const getBadge = (type: string) => {
    switch (type) {
      case "critical":
        return (
          <Badge variant="outline" className="text-red-500 border-red-500">
            Critical
          </Badge>
        );
      case "warning":
        return (
          <Badge variant="outline" className="text-yellow-500 border-yellow-500">
            Warning
          </Badge>
        );
      case "success":
        return (
          <Badge variant="outline" className="text-green-500 border-green-500">
            Success
          </Badge>
        );
      case "info":
        return (
          <Badge variant="outline" className="text-blue-500 border-blue-500">
            Info
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollArea className="h-[600px] pr-4">
      <div className="space-y-4">
        {getFilteredNotifications().map((notification) => (
          <div
            key={notification.id}
            className={`flex items-start space-x-4 rounded-lg border p-4 ${
              notification.status === "unread" ? "bg-muted/50" : ""
            }`}
          >
            <div className="mt-1">{getIcon(notification.type)}</div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{notification.title}</p>
                {getBadge(notification.type)}
              </div>
              <p className="text-sm text-muted-foreground">
                {notification.message}
              </p>
              <p className="text-xs text-muted-foreground">
                {notification.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
} 