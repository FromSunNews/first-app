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
import { Plus, Power, Settings } from "lucide-react";

const nodes = [
  {
    id: "node-1",
    name: "Worker Node 1",
    status: "Active",
    cpu: "78%",
    memory: "4.2GB/8GB",
    tasks: 12,
    uptime: "5d 12h",
  },
  {
    id: "node-2",
    name: "Worker Node 2",
    status: "Active",
    cpu: "45%",
    memory: "3.1GB/8GB",
    tasks: 8,
    uptime: "2d 6h",
  },
];

export default function NodesPage() {
  return (
    <PageContainer title="Manage Nodes">
      <div className="flex justify-end mb-6">
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Register New Node
        </Button>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Active Nodes</CardTitle>
            <CardDescription>
              List of all registered worker nodes and their current status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>CPU Usage</TableHead>
                  <TableHead>Memory</TableHead>
                  <TableHead>Active Tasks</TableHead>
                  <TableHead>Uptime</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {nodes.map((node) => (
                  <TableRow key={node.id}>
                    <TableCell className="font-medium">{node.name}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{node.status}</Badge>
                    </TableCell>
                    <TableCell>{node.cpu}</TableCell>
                    <TableCell>{node.memory}</TableCell>
                    <TableCell>{node.tasks}</TableCell>
                    <TableCell>{node.uptime}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Power className="h-4 w-4" />
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

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Node Health</CardTitle>
              <CardDescription>Overall health status of your nodes</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Add health metrics visualization here */}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resource Allocation</CardTitle>
              <CardDescription>Current resource distribution across nodes</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Add resource allocation chart here */}
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
} 