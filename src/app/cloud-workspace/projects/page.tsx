"use client";

import { PageContainer } from "@/components/layout/page-container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shared/ui/card";
import { Button } from "@/components/shared/ui/button";
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
import { Plus, Database, Container, GitBranch, Settings } from "lucide-react";

const projects = [
  {
    id: "proj-1",
    name: "E-commerce Backend",
    type: "Database",
    status: "Active",
    lastDeployed: "2 hours ago",
    resources: "4 instances",
    team: "Backend Team",
  },
  {
    id: "proj-2",
    name: "ML Model API",
    type: "Container",
    status: "Active",
    lastDeployed: "1 day ago",
    resources: "2 instances",
    team: "AI Team",
  },
  {
    id: "proj-3",
    name: "Analytics Dashboard",
    type: "Container",
    status: "Maintenance",
    lastDeployed: "5 days ago",
    resources: "1 instance",
    team: "Data Team",
  },
];

const getProjectIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case "database":
      return <Database className="h-4 w-4" />;
    case "container":
      return <Container className="h-4 w-4" />;
    default:
      return <GitBranch className="h-4 w-4" />;
  }
};

const getStatusBadge = (status: string) => {
  switch (status.toLowerCase()) {
    case "active":
      return <Badge variant="default">{status}</Badge>;
    case "maintenance":
      return <Badge variant="secondary">{status}</Badge>;
    default:
      return <Badge variant="outline">{status}</Badge>;
  }
};

export default function ProjectsPage() {
  return (
    <PageContainer title="Projects">
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            All Projects
          </h2>
          <p className="text-sm text-muted-foreground">
            Manage and monitor your cloud projects
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Create Project
        </Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Projects</TabsTrigger>
          <TabsTrigger value="databases">Databases</TabsTrigger>
          <TabsTrigger value="containers">Containers</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>Project List</CardTitle>
              <CardDescription>
                A list of all your cloud projects and their current status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Deployed</TableHead>
                    <TableHead>Resources</TableHead>
                    <TableHead>Team</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell className="font-medium">{project.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getProjectIcon(project.type)}
                          {project.type}
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(project.status)}</TableCell>
                      <TableCell>{project.lastDeployed}</TableCell>
                      <TableCell>{project.resources}</TableCell>
                      <TableCell>{project.team}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="icon">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Resource Usage</CardTitle>
            <CardDescription>
              Overview of resource allocation across projects
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Add resource usage visualization here */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Deployment Activity</CardTitle>
            <CardDescription>
              Recent deployment activities and status
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Add deployment activity timeline here */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Team Collaboration</CardTitle>
            <CardDescription>
              Team members and their project contributions
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Add team collaboration metrics here */}
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
} 