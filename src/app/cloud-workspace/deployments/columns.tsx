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

export type Deployment = {
  id: string;
  name: string;
  status: string;
  type: string;
  resources: string;
  lastDeployed: string;
};

export const columns: ColumnDef<Deployment>[] = [
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
            status === "Running"
              ? "default"
              : status === "Failed"
              ? "destructive"
              : "secondary"
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
    accessorKey: "lastDeployed",
    header: "Last Deployed",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const deployment = row.original;

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
              onClick={() => navigator.clipboard.writeText(deployment.id)}
            >
              Copy deployment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View logs</DropdownMenuItem>
            <DropdownMenuItem>Edit configuration</DropdownMenuItem>
            <DropdownMenuItem>Restart deployment</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              Stop deployment
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
]; 