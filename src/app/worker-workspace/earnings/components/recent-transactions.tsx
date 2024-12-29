"use client";

import { Avatar, AvatarFallback } from "@/components/shared/ui/avatar";
import { Badge } from "@/components/shared/ui/badge";

const transactions = [
  {
    id: "1",
    amount: 250.0,
    status: "completed",
    date: "2024-01-01",
    description: "Task Completion Reward",
  },
  {
    id: "2",
    amount: 150.0,
    status: "pending",
    date: "2024-01-02",
    description: "Performance Bonus",
  },
  {
    id: "3",
    amount: 450.0,
    status: "completed",
    date: "2024-01-03",
    description: "Node Uptime Reward",
  },
  {
    id: "4",
    amount: 200.0,
    status: "processing",
    date: "2024-01-04",
    description: "Resource Contribution",
  },
  {
    id: "5",
    amount: 300.0,
    status: "completed",
    date: "2024-01-05",
    description: "Network Support",
  },
];

export function RecentTransactions() {
  return (
    <div className="space-y-8">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarFallback>
              {transaction.description
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {transaction.description}
            </p>
            <p className="text-sm text-muted-foreground">
              {new Date(transaction.date).toLocaleDateString()}
            </p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-sm font-medium">${transaction.amount}</p>
            <Badge
              variant={
                transaction.status === "completed"
                  ? "default"
                  : transaction.status === "pending"
                  ? "secondary"
                  : "outline"
              }
              className="mt-1"
            >
              {transaction.status}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  );
} 