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
  Workflow,
  Plus,
  Play,
  StopCircle,
  RotateCw,
  Settings,
  GitBranch,
  Timer,
} from "lucide-react";

const workflows = [
  {
    id: "wf-1",
    name: "Data ETL Pipeline",
    type: "Scheduled",
    status: "Running",
    schedule: "Every 6 hours",
    lastRun: "30 minutes ago",
    nextRun: "5 hours 30 minutes",
    duration: "15 minutes",
    steps: 8,
    success: 100,
  },
  {
    id: "wf-2",
    name: "CI/CD Pipeline",
    type: "Triggered",
    status: "Running",
    schedule: "On Push",
    lastRun: "10 minutes ago",
    nextRun: "On next push",
    duration: "8 minutes",
    steps: 5,
    success: 92,
  },
  {
    id: "wf-3",
    name: "Backup Workflow",
    type: "Scheduled",
    status: "Failed",
    schedule: "Daily at 00:00",
    lastRun: "1 day ago",
    nextRun: "11 hours",
    duration: "45 minutes",
    steps: 4,
    success: 75,
  },
];

const getStatusBadge = (status: string) => {
  switch (status.toLowerCase()) {
    case "running":
      return <Badge variant="default">{status}</Badge>;
    case "failed":
      return <Badge variant="destructive">{status}</Badge>;
    case "completed":
      return <Badge variant="secondary">{status}</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

const getTypeBadge = (type: string) => {
  switch (type.toLowerCase()) {
    case "scheduled":
      return <Badge variant="default">{type}</Badge>;
    case "triggered":
      return <Badge variant="secondary">{type}</Badge>;
    default:
      return <Badge variant="outline">{type}</Badge>;
  }
};

export default function WorkflowsPage() {
  return (
    <PageContainer title="Workflows">
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Automated Workflows
          </h2>
          <p className="text-sm text-muted-foreground">
            Manage and monitor your automated workflows
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create Workflow
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Workflows</CardTitle>
            <Workflow className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              Currently running
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Steps</CardTitle>
            <GitBranch className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">
              Across all workflows
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Duration</CardTitle>
            <Timer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">22m</div>
            <p className="text-xs text-muted-foreground">
              Per workflow run
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Workflow List</CardTitle>
          <CardDescription>
            List of all automated workflows and their execution status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Schedule</TableHead>
                <TableHead>Performance</TableHead>
                <TableHead>Last Run</TableHead>
                <TableHead>Next Run</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {workflows.map((workflow) => (
                <TableRow key={workflow.id}>
                  <TableCell className="font-medium">{workflow.name}</TableCell>
                  <TableCell>{getTypeBadge(workflow.type)}</TableCell>
                  <TableCell>{getStatusBadge(workflow.status)}</TableCell>
                  <TableCell>{workflow.schedule}</TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">Success</span>
                        <Progress value={workflow.success} className="w-[60px]" />
                        <span className="text-sm text-muted-foreground">{workflow.success}%</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {workflow.steps} steps | {workflow.duration}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{workflow.lastRun}</TableCell>
                  <TableCell>{workflow.nextRun}</TableCell>
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