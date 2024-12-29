"use client";

import { PageContainer } from "@/components/layout/page-container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shared/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shared/ui/tabs";
import { Progress } from "@/components/shared/ui/progress";

export default function PerformancePage() {
  return (
    <PageContainer title="Performance">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average CPU Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">67.5%</div>
            <Progress value={67.5} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Memory Utilization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5.8GB/8GB</div>
            <Progress value={72.5} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Network I/O</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4GB/s</div>
            <Progress value={80} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Task Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98.2%</div>
            <Progress value={98.2} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="mt-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="cpu">CPU</TabsTrigger>
          <TabsTrigger value="memory">Memory</TabsTrigger>
          <TabsTrigger value="network">Network</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Performance Trends</CardTitle>
                <CardDescription>
                  System performance metrics over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Add performance trend chart here */}
              </CardContent>
            </Card>

            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Resource Distribution</CardTitle>
                <CardDescription>
                  Current resource allocation across tasks
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Add resource distribution chart here */}
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Task Performance</CardTitle>
                <CardDescription>
                  Performance metrics for running tasks
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Add task performance metrics here */}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Health</CardTitle>
                <CardDescription>
                  Overall system health indicators
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Add system health indicators here */}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
} 