"use client";

import { PageContainer } from "@/components/layout/page-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/ui/card";
import { ResourceUsage } from "./components/resource-usage";
import { ResourceOverview } from "./components/resource-overview";

export default function ResourcesPage() {
  return (
    <PageContainer>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold">Resources</h1>
          <p className="text-muted-foreground">
            Monitor and manage your node resources
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                CPU Usage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">65%</div>
              <p className="text-xs text-muted-foreground">
                8 cores active
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Memory Usage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.8 GB</div>
              <p className="text-xs text-muted-foreground">
                of 16 GB total
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Storage Usage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">256 GB</div>
              <p className="text-xs text-muted-foreground">
                of 512 GB total
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Network Usage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">450 Mbps</div>
              <p className="text-xs text-muted-foreground">
                1 Gbps capacity
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Resource Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ResourceOverview />
            </CardContent>
          </Card>

          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Resource Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <ResourceUsage />
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
} 