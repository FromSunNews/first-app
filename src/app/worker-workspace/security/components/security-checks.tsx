"use client";

import { Badge } from "@/components/shared/ui/badge";
import { ScrollArea } from "@/components/shared/ui/scroll-area";
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const checks = [
  {
    id: "1",
    name: "Firewall Status",
    status: "passed",
    details: "All ports properly configured",
    lastCheck: "5 minutes ago",
  },
  {
    id: "2",
    name: "Encryption",
    status: "passed",
    details: "AES-256 encryption active",
    lastCheck: "5 minutes ago",
  },
  {
    id: "3",
    name: "Access Control",
    status: "warning",
    details: "Review admin permissions recommended",
    lastCheck: "10 minutes ago",
  },
  {
    id: "4",
    name: "SSL Certificates",
    status: "passed",
    details: "Certificates up to date",
    lastCheck: "15 minutes ago",
  },
  {
    id: "5",
    name: "Malware Scan",
    status: "passed",
    details: "No threats detected",
    lastCheck: "20 minutes ago",
  },
  {
    id: "6",
    name: "Network Security",
    status: "failed",
    details: "Unauthorized access attempt detected",
    lastCheck: "25 minutes ago",
  },
  {
    id: "7",
    name: "Data Backup",
    status: "passed",
    details: "Backup completed successfully",
    lastCheck: "30 minutes ago",
  },
  {
    id: "8",
    name: "System Updates",
    status: "warning",
    details: "Updates available for installation",
    lastCheck: "35 minutes ago",
  },
];

export function SecurityChecks() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "passed":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case "failed":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "passed":
        return (
          <Badge variant="outline" className="text-green-500 border-green-500">
            Passed
          </Badge>
        );
      case "warning":
        return (
          <Badge variant="outline" className="text-yellow-500 border-yellow-500">
            Warning
          </Badge>
        );
      case "failed":
        return (
          <Badge variant="outline" className="text-red-500 border-red-500">
            Failed
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollArea className="h-[500px] pr-4">
      <div className="space-y-4">
        {checks.map((check) => (
          <div
            key={check.id}
            className="flex items-start space-x-4 rounded-lg border p-4"
          >
            <div className="mt-1">{getStatusIcon(check.status)}</div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">{check.name}</p>
                {getStatusBadge(check.status)}
              </div>
              <p className="text-sm text-muted-foreground">{check.details}</p>
              <p className="text-xs text-muted-foreground">
                Last checked: {check.lastCheck}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
} 