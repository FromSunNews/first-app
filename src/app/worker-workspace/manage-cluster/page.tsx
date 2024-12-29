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
  Server,
  Plus,
  Play,
  StopCircle,
  RotateCw,
  Settings,
  Cpu,
  Memory,
  Network,
  HardDrive,
} from "lucide-react";

const workers = [
  {
    id: "i-0a1b2c3d4",
    name: "worker-0a1b2c3d",
    instanceType: "t3.2xlarge",
    type: "CPU",
    processor: "x86_64",
    status: "running",
    uptime: "2 hrs 15 mins",
    role: "Head Node",
    performance: {
      cpu: 45,
      memory: 32,
      network: 75,
      storage: 60
    },
    network: {
      ip: "172.31.16.25",
      location: "ap-southeast-1a"
    }
  },
  {
    id: "i-1e2f3g4h5",
    name: "worker-1e2f3g4h",
    instanceType: "p3.2xlarge", 
    type: "GPU",
    processor: "x86_64",
    status: "running",
    uptime: "1 hr 30 mins",
    role: "Worker Node",
    performance: {
      cpu: 65,
      memory: 48,
      network: 85,
      storage: 45
    },
    network: {
      ip: "172.31.16.26",
      location: "ap-southeast-1b"
    }
  }
];

const getStatusBadge = (status: string) => {
  switch (status.toLowerCase()) {
    case "running":
      return <Badge variant="default">Running</Badge>;
    case "stopped":
      return <Badge variant="secondary">Stopped</Badge>;
    case "failed":
      return <Badge variant="destructive">Failed</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const getTypeBadge = (type: string) => {
  switch (type.toLowerCase()) {
    case "cpu":
      return <Badge variant="default">{type}</Badge>;
    case "gpu":
      return <Badge variant="secondary">{type}</Badge>;
    default:
      return <Badge variant="outline">{type}</Badge>;
  }
};

export default function ManageClusterPage() {
  return (
    <PageContainer title="Manage Cluster">
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Cluster Management
          </h2>
          <p className="text-sm text-muted-foreground">
            Monitor and manage your worker nodes in the cluster
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Node
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Nodes</CardTitle>
            <Server className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              Active in cluster
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">CPU Usage</CardTitle>
            <Cpu className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65%</div>
            <p className="text-xs text-muted-foreground">
              Average utilization
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Memory Usage</CardTitle>
            <Memory className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">48%</div>
            <p className="text-xs text-muted-foreground">
              Average utilization
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Network I/O</CardTitle>
            <Network className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4 GB/s</div>
            <p className="text-xs text-muted-foreground">
              Average throughput
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Worker Nodes</CardTitle>
          <CardDescription>
            List of all worker nodes in your cluster
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Resource Usage</TableHead>
                <TableHead>Network</TableHead>
                <TableHead>Uptime</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {workers.map((worker) => (
                <TableRow key={worker.id}>
                  <TableCell className="font-medium">
                    <div className="flex flex-col">
                      <span>{worker.name}</span>
                      <span className="text-sm text-muted-foreground">{worker.instanceType}</span>
                    </div>
                  </TableCell>
                  <TableCell>{getTypeBadge(worker.type)}</TableCell>
                  <TableCell>{getStatusBadge(worker.status)}</TableCell>
                  <TableCell>{worker.role}</TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">CPU</span>
                        <Progress value={worker.performance.cpu} className="w-[60px]" />
                        <span className="text-sm text-muted-foreground">{worker.performance.cpu}%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">RAM</span>
                        <Progress value={worker.performance.memory} className="w-[60px]" />
                        <span className="text-sm text-muted-foreground">{worker.performance.memory}%</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="text-sm">{worker.network.ip}</span>
                      <span className="text-sm text-muted-foreground">{worker.network.location}</span>
                    </div>
                  </TableCell>
                  <TableCell>{worker.uptime}</TableCell>
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