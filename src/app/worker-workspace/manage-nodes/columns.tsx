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

export type Node = {
  id: string;
  name: string;
  status: string;
  cpu: string;
  memory: string;
  storage: string;
  lastSeen: string;
};

export const columns: ColumnDef<Node>[] = [
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
        <Badge variant={status === "Active" ? "default" : "secondary"}>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "cpu",
    header: "CPU",
  },
  {
    accessorKey: "memory",
    header: "Memory",
  },
  {
    accessorKey: "storage",
    header: "Storage",
  },
  {
    accessorKey: "lastSeen",
    header: "Last Seen",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const node = row.original;

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
              onClick={() => navigator.clipboard.writeText(node.id)}
            >
              Copy node ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>Edit settings</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Stop node</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
]; 