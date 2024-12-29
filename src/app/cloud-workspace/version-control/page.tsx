"use client";

import { PageContainer } from "@/components/layout/page-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/ui/card";
import { Button } from "@/components/shared/ui/button";
import { Input } from "@/components/shared/ui/input";
import { Badge } from "@/components/shared/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shared/ui/tabs";
import {
  GitBranch,
  GitCommit,
  GitPullRequest,
  Plus,
  Search,
  MoreVertical,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shared/ui/dropdown-menu";

export default function VersionControlPage() {
  return (
    <PageContainer>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Version Control</h1>
            <p className="text-muted-foreground">
              Manage your repositories and code versions
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Repository
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Repositories
              </CardTitle>
              <GitBranch className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                Active repositories
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Open Pull Requests
              </CardTitle>
              <GitPullRequest className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">
                Pending reviews
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Recent Commits
              </CardTitle>
              <GitCommit className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">
                Last 7 days
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Branches
              </CardTitle>
              <GitBranch className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">
                Across all repos
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Repositories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search repositories..." className="pl-8" />
                </div>
              </div>
              <Button variant="outline">Filter</Button>
            </div>

            <Tabs defaultValue="all" className="space-y-4">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="archived">Archived</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {repositories.map((repo) => (
                  <div
                    key={repo.id}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <GitBranch className="h-8 w-8 text-muted-foreground" />
                      <div>
                        <div className="font-medium">{repo.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {repo.description}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary">{repo.language}</Badge>
                          <span className="text-sm text-muted-foreground">
                            Updated {repo.lastUpdated}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-sm text-muted-foreground">
                        {repo.branches} branches
                      </div>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Repository</DropdownMenuItem>
                          <DropdownMenuItem>Clone</DropdownMenuItem>
                          <DropdownMenuItem>Settings</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            Archive
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="active">
                {/* Active repositories content */}
              </TabsContent>

              <TabsContent value="archived">
                {/* Archived repositories content */}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}

const repositories = [
  {
    id: "1",
    name: "walnut-core",
    description: "Core functionality for the Walnut Network",
    language: "Rust",
    lastUpdated: "2 hours ago",
    branches: 5,
  },
  {
    id: "2",
    name: "walnut-client",
    description: "Client implementation for Walnut Network",
    language: "TypeScript",
    lastUpdated: "1 day ago",
    branches: 3,
  },
  {
    id: "3",
    name: "walnut-docs",
    description: "Documentation and guides",
    language: "Markdown",
    lastUpdated: "3 days ago",
    branches: 2,
  },
  {
    id: "4",
    name: "walnut-contracts",
    description: "Smart contracts for the network",
    language: "Solidity",
    lastUpdated: "5 days ago",
    branches: 4,
  },
  {
    id: "5",
    name: "walnut-api",
    description: "API services and endpoints",
    language: "Go",
    lastUpdated: "1 week ago",
    branches: 3,
  },
]; 