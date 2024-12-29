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
import { Progress } from "@/components/shared/ui/progress";
import {
  AppWindow,
  Plus,
  Play,
  StopCircle,
  RotateCw,
  Settings,
  Globe,
  Server,
} from "lucide-react";

const applications = [
  {
    id: "app-1",
    name: "E-commerce Frontend",
    environment: "Production",
    status: "Running",
    health: "Healthy",
    url: "https://shop.example.com",
    cpu: 45,
    memory: 60,
    lastDeployed: "2 hours ago",
  },
  {
    id: "app-2",
    name: "Admin Dashboard",
    environment: "Staging",
    status: "Running",
    health: "Warning",
    url: "https://admin-staging.example.com",
    cpu: 75,
    memory: 80,
    lastDeployed: "1 day ago",
  },
  {
    id: "app-3",
    name: "Customer Portal",
    environment: "Development",
    status: "Stopped",
    health: "Offline",
    url: "https://portal-dev.example.com",
    cpu: 0,
    memory: 0,
    lastDeployed: "5 days ago",
  },
];

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

const getEnvironmentBadge = (env: string) => {
  switch (env.toLowerCase()) {
    case "production":
      return <Badge variant="destructive">{env}</Badge>;
    case "staging":
      return <Badge variant="default">{env}</Badge>;
    default:
      return <Badge variant="secondary">{env}</Badge>;
  }
};

export default function ApplicationsPage() {
  return (
    <PageContainer title="Applications">
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Web Applications
          </h2>
          <p className="text-sm text-muted-foreground">
            Deploy and manage your web applications
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Deploy Application
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Apps</CardTitle>
            <AppWindow className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              Across all environments
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Domains</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              Custom domains configured
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resource Usage</CardTitle>
            <Server className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65%</div>
            <p className="text-xs text-muted-foreground">
              Average utilization
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Application List</CardTitle>
          <CardDescription>
            List of all deployed web applications and their status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Environment</TableHead>
                <TableHead>Health</TableHead>
                <TableHead>Resource Usage</TableHead>
                <TableHead>URL</TableHead>
                <TableHead>Last Deployed</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((app) => (
                <TableRow key={app.id}>
                  <TableCell className="font-medium">{app.name}</TableCell>
                  <TableCell>{getEnvironmentBadge(app.environment)}</TableCell>
                  <TableCell>{getHealthBadge(app.health)}</TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">CPU</span>
                        <Progress value={app.cpu} className="w-[60px]" />
                        <span className="text-sm text-muted-foreground">{app.cpu}%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">RAM</span>
                        <Progress value={app.memory} className="w-[60px]" />
                        <span className="text-sm text-muted-foreground">{app.memory}%</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <a
                      href={app.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-500 hover:underline"
                    >
                      {app.url}
                    </a>
                  </TableCell>
                  <TableCell>{app.lastDeployed}</TableCell>
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
    </PageContainer>
  );
} 