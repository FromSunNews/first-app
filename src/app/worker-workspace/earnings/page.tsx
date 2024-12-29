"use client";

import { PageContainer } from "@/components/layout/page-container";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shared/ui/tabs";
import { Button } from "@/components/shared/ui/button";
import { Download, Wallet } from "lucide-react";

const transactions = [
  {
    id: "tx-1",
    date: "2023-12-28",
    type: "Task Reward",
    amount: "+125.50",
    status: "Completed",
    task: "AI Model Training",
  },
  {
    id: "tx-2",
    date: "2023-12-27",
    type: "Resource Contribution",
    amount: "+75.25",
    status: "Completed",
    task: "Data Processing",
  },
  {
    id: "tx-3",
    date: "2023-12-26",
    type: "Withdrawal",
    amount: "-200.00",
    status: "Processed",
    task: "-",
  },
];

export default function EarningsPage() {
  return (
    <PageContainer title="Earnings">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,234.56</div>
            <p className="text-xs text-muted-foreground">
              +$256.89 this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$890.25</div>
            <p className="text-xs text-muted-foreground">
              Ready to withdraw
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Rewards</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$145.80</div>
            <p className="text-xs text-muted-foreground">
              From 5 active tasks
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Daily</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$42.50</div>
            <p className="text-xs text-muted-foreground">
              Last 30 days
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="transactions" className="mt-6">
        <TabsList>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="payouts">Payouts</TabsTrigger>
        </TabsList>
        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>
                  Your recent earnings and withdrawals
                </CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Task</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((tx) => (
                    <TableRow key={tx.id}>
                      <TableCell>{tx.date}</TableCell>
                      <TableCell>{tx.type}</TableCell>
                      <TableCell className={tx.amount.startsWith("+") ? "text-green-600" : "text-red-600"}>
                        {tx.amount}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{tx.status}</Badge>
                      </TableCell>
                      <TableCell>{tx.task}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Earnings Breakdown</CardTitle>
                <CardDescription>Distribution of earnings by task type</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Add earnings breakdown chart here */}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>Earnings relative to resource contribution</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Add performance metrics visualization here */}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
} 