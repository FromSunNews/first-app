"use client";

import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shared/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shared/ui/table";
import { Badge } from "@/components/shared/ui/badge";
import { Play, Pause, StopCircle, RotateCw } from "lucide-react";

const tasks = [
  {
    id: "task-1",
    name: "AI Model Training",
    status: "Running",
    progress: "78%",
    node: "Worker Node 1",
    runtime: "2h 15m",
    priority: "High",
  },
  {
    id: "task-2",
    name: "Data Processing",
    status: "Paused",
    progress: "45%",
    node: "Worker Node 2",
    runtime: "1h 30m",
    priority: "Medium",
  },
  {
    id: "task-3",
    name: "Blockchain Computation",
    status: "Queued",
    progress: "0%",
    node: "Pending",
    runtime: "-",
    priority: "Low",
  },
];

const getStatusBadge = (status: string) => {
  switch (status.toLowerCase()) {
    case "running":
      return <Badge variant="default">{status}</Badge>;
    case "paused":
      return <Badge variant="secondary">{status}</Badge>;
    case "queued":
      return <Badge variant="outline">{status}</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const getPriorityBadge = (priority: string) => {
  switch (priority.toLowerCase()) {
    case "high":
      return <Badge variant="destructive">{priority}</Badge>;
    case "medium":
      return <Badge variant="secondary">{priority}</Badge>;
    case "low":
      return <Badge variant="outline">{priority}</Badge>;
    default:
      return <Badge variant="secondary">{priority}</Badge>;
  }
};

export default function TasksPage() {
  return (
    <PageContainer title="Tasks">
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Active Tasks</CardTitle>
            <CardDescription>
              View and manage your running computational tasks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Node</TableHead>
                  <TableHead>Runtime</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tasks.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell className="font-medium">{task.name}</TableCell>
                    <TableCell>{getStatusBadge(task.status)}</TableCell>
                    <TableCell>{task.progress}</TableCell>
                    <TableCell>{task.node}</TableCell>
                    <TableCell>{task.runtime}</TableCell>
                    <TableCell>{getPriorityBadge(task.priority)}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Play className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Pause className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <StopCircle className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <RotateCw className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Task Distribution</CardTitle>
              <CardDescription>Distribution of tasks across nodes</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Add task distribution visualization here */}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resource Usage</CardTitle>
              <CardDescription>Resource consumption by tasks</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Add resource usage visualization here */}
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
} 