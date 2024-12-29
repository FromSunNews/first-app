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

interface Event {
  id: string;
  event: string;
  type: string;
  status: string;
  details: string;
  timestamp: string;
  node: string;
}

export const columns: ColumnDef<Event>[] = [
  {
    accessorKey: "event",
    header: "Event",
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => {
      return (
        <Badge variant="outline">
          {row.getValue("type")}
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
            status === "Success"
              ? "success"
              : status === "Error"
              ? "destructive"
              : status === "Warning"
              ? "warning"
              : "secondary"
          }
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "details",
    header: "Details",
  },
  {
    accessorKey: "timestamp",
    header: "Timestamp",
  },
  {
    accessorKey: "node",
    header: "Node",
  },
  {
    id: "actions",
    cell: ({ row }) => {
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
              onClick={() => navigator.clipboard.writeText(row.original.id)}
            >
              Copy event ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>Export event</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
]; 