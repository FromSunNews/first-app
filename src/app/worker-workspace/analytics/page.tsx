import { PageContainer } from "@/components/layout/page-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/ui/card";
import { PerformanceChart } from "./components/performance-chart";
import { ResourceUsage } from "./components/resource-usage";
import { TaskDistribution } from "./components/task-distribution";

export default function AnalyticsPage() {
  return (
    <PageContainer>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold">Analytics</h1>
          <p className="text-muted-foreground">
            View detailed performance analytics and insights
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Average CPU Usage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">65%</div>
              <p className="text-xs text-muted-foreground">
                +5% from last week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Task Success Rate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98.5%</div>
              <p className="text-xs text-muted-foreground">
                +0.5% from last week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Average Response Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45ms</div>
              <p className="text-xs text-muted-foreground">
                -5ms from last week
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Tasks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">
                +180 from last week
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <PerformanceChart />
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

          <Card className="col-span-7">
            <CardHeader>
              <CardTitle>Task Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <TaskDistribution />
            </CardContent>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
} 