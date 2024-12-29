"use client";

import { PageContainer } from "@/components/layout/page-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/ui/card";
import { Overview } from "./components/overview";
import { RecentEvents } from "./components/recent-events";

export default function HistoryPage() {
  return (
    <PageContainer>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold">History</h1>
          <p className="text-muted-foreground">
            View system events and activity history
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,853</div>
              <p className="text-xs text-muted-foreground">
                +180 this week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Success Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98.2%</div>
              <p className="text-xs text-muted-foreground">
                +0.2% improvement
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Error Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.8%</div>
              <p className="text-xs text-muted-foreground">
                -0.2% decrease
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Nodes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">
                All nodes healthy
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Event Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <Overview />
            </CardContent>
          </Card>

          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Recent Events</CardTitle>
            </CardHeader>
            <CardContent>
              <RecentEvents />
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
} 