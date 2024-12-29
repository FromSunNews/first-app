"use client";

import { PageContainer } from "@/components/layout/page-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/ui/card";
import { Button } from "@/components/shared/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shared/ui/tabs";
import { Badge } from "@/components/shared/ui/badge";
import { Progress } from "@/components/shared/ui/progress";
import {
  Activity,
  Cpu,
  Database,
  HardDrive,
  Network,
  AlertTriangle,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MonitoringPage() {
  return (
    <PageContainer>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Resource Monitoring</h1>
            <p className="text-muted-foreground">
              Monitor and analyze your cloud resources
            </p>
          </div>
          <Button>
            <Activity className="mr-2 h-4 w-4" />
            View Reports
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">CPU Usage</CardTitle>
              <Cpu className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">75%</div>
                <Badge variant="secondary">Normal</Badge>
              </div>
              <Progress value={75} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">
                8/12 cores active
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Memory Usage</CardTitle>
              <Database className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">85%</div>
                <Badge variant="secondary">High</Badge>
              </div>
              <Progress value={85} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">
                13.6/16 GB used
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Storage</CardTitle>
              <HardDrive className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">60%</div>
                <Badge variant="secondary">Normal</Badge>
              </div>
              <Progress value={60} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">
                300/500 GB used
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Network</CardTitle>
              <Network className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">90%</div>
                <Badge variant="destructive">Critical</Badge>
              </div>
              <Progress value={90} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">
                900/1000 Mbps
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="cpu" className="space-y-4">
              <TabsList>
                <TabsTrigger value="cpu">CPU</TabsTrigger>
                <TabsTrigger value="memory">Memory</TabsTrigger>
                <TabsTrigger value="disk">Disk</TabsTrigger>
                <TabsTrigger value="network">Network</TabsTrigger>
              </TabsList>

              <TabsContent value="cpu" className="space-y-4">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={cpuData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="usage"
                        stroke="#2563eb"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Active Processes
                      </CardTitle>
                      <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">245</div>
                      <p className="text-xs text-muted-foreground">
                        15 high priority
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Thread Count
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">1,024</div>
                      <p className="text-xs text-muted-foreground">
                        8 per core average
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="memory" className="space-y-4">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={memoryData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="usage"
                        stroke="#2563eb"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>

              <TabsContent value="disk" className="space-y-4">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={diskData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="usage"
                        stroke="#2563eb"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>

              <TabsContent value="network" className="space-y-4">
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={networkData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="usage"
                        stroke="#2563eb"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}

const cpuData = [
  { time: "00:00", usage: 65 },
  { time: "01:00", usage: 70 },
  { time: "02:00", usage: 75 },
  { time: "03:00", usage: 72 },
  { time: "04:00", usage: 68 },
  { time: "05:00", usage: 75 },
  { time: "06:00", usage: 80 },
];

const memoryData = [
  { time: "00:00", usage: 75 },
  { time: "01:00", usage: 80 },
  { time: "02:00", usage: 85 },
  { time: "03:00", usage: 82 },
  { time: "04:00", usage: 78 },
  { time: "05:00", usage: 85 },
  { time: "06:00", usage: 90 },
];

const diskData = [
  { time: "00:00", usage: 55 },
  { time: "01:00", usage: 57 },
  { time: "02:00", usage: 60 },
  { time: "03:00", usage: 58 },
  { time: "04:00", usage: 56 },
  { time: "05:00", usage: 60 },
  { time: "06:00", usage: 65 },
];

const networkData = [
  { time: "00:00", usage: 85 },
  { time: "01:00", usage: 87 },
  { time: "02:00", usage: 90 },
  { time: "03:00", usage: 88 },
  { time: "04:00", usage: 86 },
  { time: "05:00", usage: 90 },
  { time: "06:00", usage: 95 },
]; 