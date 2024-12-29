"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/shared/ui/badge";
import { Button } from "@/components/shared/ui/button";
import { Progress } from "@/components/shared/ui/progress";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shared/ui/dropdown-menu";

export type Task = {
  id: string;
  name: string;
  type: string;
  priority: string;
  status: string;
  progress: number;
  startTime: string;
  estimatedEnd: string;
};

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "priority",
    header: "Priority",
    cell: ({ row }) => {
      const priority = row.getValue("priority") as string;
      return (
        <Badge
          variant={
            priority === "High"
              ? "destructive"
              : priority === "Medium"
              ? "default"
              : "secondary"
          }
        >
          {priority}
        </Badge>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge
          variant={
            status === "Running"
              ? "default"
              : status === "Completed"
              ? "secondary"
              : status === "Failed"
              ? "destructive"
              : "outline"
          }
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "progress",
    header: "Progress",
    cell: ({ row }) => {
      const progress = row.getValue("progress") as number;
      return (
        <div className="flex items-center gap-2">
          <Progress value={progress} className="h-2 w-[60px]" />
          <span className="text-sm font-medium">{progress}%</span>
        </div>
      );
    },
  },
  {
    accessorKey: "startTime",
    header: "Start Time",
  },
  {
    accessorKey: "estimatedEnd",
    header: "Estimated End",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const task = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(task.id)}
            >
              Copy task ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>View logs</DropdownMenuItem>
            {task.status === "Running" && (
              <DropdownMenuItem className="text-red-600">
                Stop task
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
]; 