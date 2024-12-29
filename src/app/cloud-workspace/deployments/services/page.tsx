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
  Blocks,
  Plus,
  Play,
  StopCircle,
  RotateCw,
  Settings,
  Network,
  Cpu,
} from "lucide-react";

const services = [
  {
    id: "svc-1",
    name: "Authentication Service",
    type: "REST API",
    status: "Running",
    health: "Healthy",
    endpoint: "/api/auth",
    requests: "2.5k/min",
    latency: "45ms",
    cpu: 35,
    memory: 50,
    lastUpdated: "30 minutes ago",
  },
  {
    id: "svc-2",
    name: "Payment Gateway",
    type: "gRPC",
    status: "Running",
    health: "Warning",
    endpoint: "payments.service:50051",
    requests: "500/min",
    latency: "120ms",
    cpu: 65,
    memory: 70,
    lastUpdated: "1 hour ago",
  },
  {
    id: "svc-3",
    name: "Search Service",
    type: "GraphQL",
    status: "Degraded",
    health: "Warning",
    endpoint: "/graphql",
    requests: "1.2k/min",
    latency: "200ms",
    cpu: 85,
    memory: 90,
    lastUpdated: "15 minutes ago",
  },
];

const getHealthBadge = (health: string) => {
  switch (health.toLowerCase()) {
    case "healthy":
      return <Badge variant="default">{health}</Badge>;
    case "warning":
      return <Badge variant="secondary">{health}</Badge>;
    case "critical":
      return <Badge variant="destructive">{health}</Badge>;
    default:
      return <Badge variant="outline">{health}</Badge>;
  }
};

const getTypeBadge = (type: string) => {
  switch (type.toLowerCase()) {
    case "rest api":
      return <Badge variant="default">{type}</Badge>;
    case "grpc":
      return <Badge variant="secondary">{type}</Badge>;
    case "graphql":
      return <Badge variant="outline">{type}</Badge>;
    default:
      return <Badge variant="secondary">{type}</Badge>;
  }
};

export default function ServicesPage() {
  return (
    <PageContainer title="Services">
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Microservices
          </h2>
          <p className="text-sm text-muted-foreground">
            Deploy and manage your microservices
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Deploy Service
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Services</CardTitle>
            <Blocks className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">
              Running microservices
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
            <Network className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2k/min</div>
            <p className="text-xs text-muted-foreground">
              Average request rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resource Usage</CardTitle>
            <Cpu className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72%</div>
            <p className="text-xs text-muted-foreground">
              Average CPU utilization
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Service List</CardTitle>
          <CardDescription>
            List of all deployed microservices and their status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Health</TableHead>
                <TableHead>Resource Usage</TableHead>
                <TableHead>Traffic</TableHead>
                <TableHead>Endpoint</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.id}>
                  <TableCell className="font-medium">{service.name}</TableCell>
                  <TableCell>{getTypeBadge(service.type)}</TableCell>
                  <TableCell>{getHealthBadge(service.health)}</TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">CPU</span>
                        <Progress value={service.cpu} className="w-[60px]" />
                        <span className="text-sm text-muted-foreground">{service.cpu}%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">RAM</span>
                        <Progress value={service.memory} className="w-[60px]" />
                        <span className="text-sm text-muted-foreground">{service.memory}%</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="text-sm">{service.requests}</div>
                      <div className="text-xs text-muted-foreground">
                        Latency: {service.latency}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <code className="text-sm">{service.endpoint}</code>
                  </TableCell>
                  <TableCell>{service.lastUpdated}</TableCell>
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