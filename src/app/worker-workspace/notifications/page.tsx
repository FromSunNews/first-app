"use client";

import { PageContainer } from "@/components/layout/page-container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shared/ui/card";
import { Badge } from "@/components/shared/ui/badge";
import { Button } from "@/components/shared/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shared/ui/tabs";
import {
  Bell,
  CheckCircle,
  AlertTriangle,
  Info,
  Settings,
  Trash2,
} from "lucide-react";

const notifications = [
  {
    id: "notif-1",
    title: "Task Completed Successfully",
    description: "AI Model Training task has completed with 98% accuracy",
    type: "success",
    time: "2 minutes ago",
    read: false,
  },
  {
    id: "notif-2",
    title: "High CPU Usage Alert",
    description: "Worker Node 1 is experiencing high CPU usage (95%)",
    type: "warning",
    time: "15 minutes ago",
    read: false,
  },
  {
    id: "notif-3",
    title: "New Task Assignment",
    description: "You have been assigned a new data processing task",
    type: "info",
    time: "1 hour ago",
    read: true,
  },
];

const getNotificationIcon = (type: string) => {
  switch (type) {
    case "success":
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case "warning":
      return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    case "info":
      return <Info className="h-5 w-5 text-blue-500" />;
    default:
      return <Bell className="h-5 w-5 text-gray-500" />;
  }
};

export default function NotificationsPage() {
  return (
    <PageContainer title="Notifications">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-2">
          <Button variant="outline">Mark All as Read</Button>
          <Button variant="outline">
            <Trash2 className="mr-2 h-4 w-4" />
            Clear All
          </Button>
        </div>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">
            Unread
            <Badge variant="secondary" className="ml-2">
              2
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="important">Important</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className={notification.read ? "opacity-60" : ""}
            >
              <CardHeader className="flex flex-row items-start space-y-0 pb-2">
                <div className="flex-1 flex items-start gap-3">
                  {getNotificationIcon(notification.type)}
                  <div>
                    <CardTitle className="text-base">
                      {notification.title}
                      {!notification.read && (
                        <Badge variant="secondary" className="ml-2">
                          New
                        </Badge>
                      )}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {notification.description}
                    </CardDescription>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">
                  {notification.time}
                </span>
              </CardHeader>
              <CardContent>
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="sm">
                    Mark as Read
                  </Button>
                  <Button variant="ghost" size="sm">
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
          <CardDescription>
            Configure how you want to receive notifications
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Add notification settings controls here */}
        </CardContent>
      </Card>
    </PageContainer>
  );
} 