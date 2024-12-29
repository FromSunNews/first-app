"use client";

import { PageContainer } from "@/components/layout/page-container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shared/ui/card";
import { Button } from "@/components/shared/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shared/ui/table";
import { Badge } from "@/components/shared/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shared/ui/tabs";
import {
  Plus,
  AppWindow,
  Blocks,
  Bot,
  Workflow,
  Play,
  StopCircle,
  RotateCw,
  Settings,
} from "lucide-react";

const deployments = [
  {
    id: "dep-1",
    name: "User Authentication API",
    type: "Service",
    status: "Running",
    health: "Healthy",
    lastUpdated: "10 minutes ago",
    resources: "2 pods",
    version: "v1.2.3",
  },
  {
    id: "dep-2",
    name: "ML Prediction Service",
    type: "Function",
    status: "Running",
    health: "Warning",
    lastUpdated: "1 hour ago",
    resources: "1 pod",
    version: "v2.0.1",
  },
  {
    id: "dep-3",
    name: "Data Processing Pipeline",
    type: "Workflow",
    status: "Stopped",
    health: "Offline",
    lastUpdated: "2 days ago",
    resources: "0 pods",
    version: "v1.0.0",
  },
];

const getDeploymentIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case "application":
      return <AppWindow className="h-4 w-4" />;
    case "service":
      return <Blocks className="h-4 w-4" />;
    case "function":
      return <Bot className="h-4 w-4" />;
    case "workflow":
      return <Workflow className="h-4 w-4" />;
    default:
      return <AppWindow className="h-4 w-4" />;
  }
};

const getHealthBadge = (health: string) => {
  switch (health.toLowerCase()) {
    case "healthy":
      return <Badge variant="default">{health}</Badge>;
    case "warning":
      return <Badge variant="secondary">{health}</Badge>;
    case "offline":
      return <Badge variant="destructive">{health}</Badge>;
    default:
      return <Badge variant="outline">{health}</Badge>;
  }
};

export default function DeploymentsPage() {
  return (
    <PageContainer title="Deployments">
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            All Deployments
          </h2>
          <p className="text-sm text-muted-foreground">
            Manage and monitor your cloud deployments
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Deployment
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="functions">Functions</TabsTrigger>
          <TabsTrigger value="workflows">Workflows</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>Deployment List</CardTitle>
              <CardDescription>
                A list of all your cloud deployments and their current status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Health</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead>Resources</TableHead>
                    <TableHead>Version</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {deployments.map((deployment) => (
                    <TableRow key={deployment.id}>
                      <TableCell className="font-medium">
                        {deployment.name}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getDeploymentIcon(deployment.type)}
                          {deployment.type}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            deployment.status === "Running"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {deployment.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{getHealthBadge(deployment.health)}</TableCell>
                      <TableCell>{deployment.lastUpdated}</TableCell>
                      <TableCell>{deployment.resources}</TableCell>
                      <TableCell>{deployment.version}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon">
                            <Play className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <StopCircle className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <RotateCw className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Settings className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Resource Utilization</CardTitle>
            <CardDescription>
              Resource usage across all deployments
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Add resource utilization chart here */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Deployment Health</CardTitle>
            <CardDescription>
              Overall health status of deployments
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Add health status chart here */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>
              Latest deployment activities and changes
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Add activity timeline here */}
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
} 