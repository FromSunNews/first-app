"use client";

import { PageContainer } from "@/components/layout/page-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/ui/card";
import { SecurityChecks } from "./components/security-checks";
import { SecurityOverview } from "./components/security-overview";

export default function SecurityPage() {
  return (
    <PageContainer>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold">Security</h1>
          <p className="text-muted-foreground">
            Monitor and manage security settings
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Security Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">95/100</div>
              <p className="text-xs text-muted-foreground">
                +2 from last scan
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Threats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">
                No threats detected
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Last Scan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2h ago</div>
              <p className="text-xs text-muted-foreground">
                Next scan in 4h
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Protected Nodes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8/8</div>
              <p className="text-xs text-muted-foreground">
                All nodes secured
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Security Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <SecurityOverview />
            </CardContent>
          </Card>

          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Security Checks</CardTitle>
            </CardHeader>
            <CardContent>
              <SecurityChecks />
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
} 