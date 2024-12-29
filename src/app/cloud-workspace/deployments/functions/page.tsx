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
  Bot,
  Plus,
  Play,
  StopCircle,
  RotateCw,
  Settings,
  Zap,
  Clock,
} from "lucide-react";

const functions = [
  {
    id: "func-1",
    name: "Image Processing",
    runtime: "Python 3.9",
    status: "Active",
    trigger: "HTTP",
    executions: "1.2k/hour",
    avgDuration: "250ms",
    memory: "256MB",
    lastInvoked: "5 minutes ago",
    success: 98.5,
  },
  {
    id: "func-2",
    name: "Data Transformation",
    runtime: "Node.js 18",
    status: "Active",
    trigger: "Queue",
    executions: "500/hour",
    avgDuration: "150ms",
    memory: "128MB",
    lastInvoked: "2 minutes ago",
    success: 99.2,
  },
  {
    id: "func-3",
    name: "PDF Generation",
    runtime: "Java 17",
    status: "Inactive",
    trigger: "Schedule",
    executions: "100/hour",
    avgDuration: "450ms",
    memory: "512MB",
    lastInvoked: "1 hour ago",
    success: 95.8,
  },
];

const getStatusBadge = (status: string) => {
  switch (status.toLowerCase()) {
    case "active":
      return <Badge variant="default">{status}</Badge>;
    case "inactive":
      return <Badge variant="secondary">{status}</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const getTriggerBadge = (trigger: string) => {
  switch (trigger.toLowerCase()) {
    case "http":
      return <Badge variant="default">{trigger}</Badge>;
    case "queue":
      return <Badge variant="secondary">{trigger}</Badge>;
    case "schedule":
      return <Badge variant="outline">{trigger}</Badge>;
    default:
      return <Badge variant="secondary">{trigger}</Badge>;
  }
};

export default function FunctionsPage() {
  return (
    <PageContainer title="Functions">
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Serverless Functions
          </h2>
          <p className="text-sm text-muted-foreground">
            Deploy and manage your serverless functions
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create Function
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Functions</CardTitle>
            <Bot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              Across all runtimes
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Invocations</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.8k/hour</div>
            <p className="text-xs text-muted-foreground">
              Average execution rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Duration</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">283ms</div>
            <p className="text-xs text-muted-foreground">
              Average execution time
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Function List</CardTitle>
          <CardDescription>
            List of all deployed serverless functions and their metrics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Runtime</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Trigger</TableHead>
                <TableHead>Performance</TableHead>
                <TableHead>Memory</TableHead>
                <TableHead>Last Invoked</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {functions.map((func) => (
                <TableRow key={func.id}>
                  <TableCell className="font-medium">{func.name}</TableCell>
                  <TableCell>{func.runtime}</TableCell>
                  <TableCell>{getStatusBadge(func.status)}</TableCell>
                  <TableCell>{getTriggerBadge(func.trigger)}</TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">Success</span>
                        <Progress value={func.success} className="w-[60px]" />
                        <span className="text-sm text-muted-foreground">{func.success}%</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {func.executions} | Avg: {func.avgDuration}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{func.memory}</TableCell>
                  <TableCell>{func.lastInvoked}</TableCell>
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