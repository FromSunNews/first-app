import React from "react";
import { Button } from "@/components/shared/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/shared/ui/table";
import { Badge } from "@/components/shared/ui/badge";

const workers = [
  {
    id: "worker-1",
    name: "Worker Node 1",
    status: "active",
    cpu: "4 cores",
    memory: "16GB",
    earnings: "450 WAL",
    uptime: "99.9%",
  },
  {
    id: "worker-2",
    name: "Worker Node 2",
    status: "active",
    cpu: "8 cores",
    memory: "32GB",
    earnings: "820 WAL",
    uptime: "99.7%",
  },
  {
    id: "worker-3",
    name: "Worker Node 3",
    status: "inactive",
    cpu: "4 cores",
    memory: "16GB",
    earnings: "280 WAL",
    uptime: "98.5%",
  },
];

export default function ManageNodesPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Manage Worker Nodes</h2>
        <Button>Add New Node</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>CPU</TableHead>
              <TableHead>Memory</TableHead>
              <TableHead>Earnings</TableHead>
              <TableHead>Uptime</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {workers.map((worker) => (
              <TableRow key={worker.id}>
                <TableCell>{worker.name}</TableCell>
                <TableCell>
                  <Badge variant={worker.status === "active" ? "default" : "secondary"}>{worker.status}</Badge>
                </TableCell>
                <TableCell>{worker.cpu}</TableCell>
                <TableCell>{worker.memory}</TableCell>
                <TableCell>{worker.earnings}</TableCell>
                <TableCell>{worker.uptime}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm" className="text-red-600">
                    Stop
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
