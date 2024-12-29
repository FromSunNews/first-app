"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/shared/ui/badge";
import { Button } from "@/components/shared/ui/button";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shared/ui/dropdown-menu";

export type Project = {
  id: string;
  name: string;
  status: string;
  type: string;
  resources: string;
  lastUpdated: string;
};

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge
          variant={
            status === "Active"
              ? "default"
              : status === "Maintenance"
              ? "secondary"
              : "outline"
          }
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "resources",
    header: "Resources",
  },
  {
    accessorKey: "lastUpdated",
    header: "Last Updated",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const project = row.original;

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
              onClick={() => navigator.clipboard.writeText(project.id)}
            >
              Copy project ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>Edit settings</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              Delete project
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
]; 