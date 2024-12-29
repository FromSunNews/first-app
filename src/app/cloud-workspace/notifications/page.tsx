"use client";

import { PageContainer } from "@/components/layout/page-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/ui/card";
import { Button } from "@/components/shared/ui/button";
import { Badge } from "@/components/shared/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shared/ui/tabs";
import { ScrollArea } from "@/components/shared/ui/scroll-area";
import {
  Bell,
  AlertTriangle,
  Info,
  CheckCircle,
  Settings,
  Trash2,
} from "lucide-react";

export default function NotificationsPage() {
  return (
    <PageContainer>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Notifications</h1>
            <p className="text-muted-foreground">
              View and manage your cloud notifications
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
            <Button variant="outline">
              <Trash2 className="mr-2 h-4 w-4" />
              Clear All
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Notifications
              </CardTitle>
              <Bell className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">48</div>
              <p className="text-xs text-muted-foreground">
                Last 30 days
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Critical Alerts
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">
                Require attention
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                System Updates
              </CardTitle>
              <Info className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                Available updates
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Completed Tasks
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">
                Successfully completed
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Notification Center</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="space-y-4">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="unread">Unread</TabsTrigger>
                <TabsTrigger value="critical">Critical</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <ScrollArea className="h-[600px] pr-4">
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`flex items-start space-x-4 rounded-lg border p-4 ${
                          notification.status === "unread"
                            ? "bg-muted/50"
                            : ""
                        }`}
                      >
                        <div className="mt-1">
                          {notification.type === "critical" && (
                            <AlertTriangle className="h-5 w-5 text-red-500" />
                          )}
                          {notification.type === "warning" && (
                            <AlertTriangle className="h-5 w-5 text-yellow-500" />
                          )}
                          {notification.type === "success" && (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          )}
                          {notification.type === "info" && (
                            <Info className="h-5 w-5 text-blue-500" />
                          )}
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium">
                              {notification.title}
                            </p>
                            <Badge
                              variant={
                                notification.type === "critical"
                                  ? "destructive"
                                  : notification.type === "warning"
                                  ? "warning"
                                  : notification.type === "success"
                                  ? "success"
                                  : "secondary"
                              }
                            >
                              {notification.type}
                            </Badge>
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
              </TabsContent>

              <TabsContent value="unread">
                {/* Unread notifications content */}
              </TabsContent>

              <TabsContent value="critical">
                {/* Critical notifications content */}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}

const notifications = [
  {
    id: "1",
    title: "High CPU Usage Alert",
    message: "Instance i-123456 is experiencing high CPU usage (95%)",
    type: "critical",
    status: "unread",
    timestamp: "2 minutes ago",
  },
  {
    id: "2",
    title: "Deployment Successful",
    message: "Application v2.1.0 has been deployed successfully",
    type: "success",
    status: "unread",
    timestamp: "15 minutes ago",
  },
  {
    id: "3",
    title: "New Security Update",
    message: "Security patch KB123456 is available for installation",
    type: "warning",
    status: "unread",
    timestamp: "1 hour ago",
  },
  {
    id: "4",
    title: "Database Backup Complete",
    message: "Daily database backup completed successfully",
    type: "success",
    status: "read",
    timestamp: "2 hours ago",
  },
  {
    id: "5",
    title: "SSL Certificate Expiring",
    message: "SSL certificate for domain.com will expire in 7 days",
    type: "warning",
    status: "unread",
    timestamp: "3 hours ago",
  },
  {
    id: "6",
    title: "New Feature Available",
    message: "Auto-scaling feature is now available in your region",
    type: "info",
    status: "read",
    timestamp: "5 hours ago",
  },
  {
    id: "7",
    title: "Storage Space Low",
    message: "Storage volume vol-123456 is at 90% capacity",
    type: "critical",
    status: "unread",
    timestamp: "6 hours ago",
  },
  {
    id: "8",
    title: "Maintenance Schedule",
    message: "Scheduled maintenance in 48 hours",
    type: "info",
    status: "read",
    timestamp: "1 day ago",
  },
]; 