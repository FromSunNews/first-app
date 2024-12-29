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
import {
  Users,
  UserPlus,
  Shield,
  Activity,
  Settings,
  Mail,
  MessageSquare,
} from "lucide-react";

const teamMembers = [
  {
    id: "user-1",
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
    lastActive: "2 minutes ago",
    projects: 8,
  },
  {
    id: "user-2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Developer",
    status: "Active",
    lastActive: "1 hour ago",
    projects: 5,
  },
  {
    id: "user-3",
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "Viewer",
    status: "Offline",
    lastActive: "2 days ago",
    projects: 3,
  },
];

const getRoleBadge = (role: string) => {
  switch (role.toLowerCase()) {
    case "admin":
      return <Badge variant="destructive">{role}</Badge>;
    case "developer":
      return <Badge variant="default">{role}</Badge>;
    default:
      return <Badge variant="secondary">{role}</Badge>;
  }
};

const getStatusBadge = (status: string) => {
  switch (status.toLowerCase()) {
    case "active":
      return <Badge variant="default">{status}</Badge>;
    case "offline":
      return <Badge variant="outline">{status}</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export default function TeamPage() {
  return (
    <PageContainer title="Team">
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">
            Team Management
          </h2>
          <p className="text-sm text-muted-foreground">
            Manage your team members and their access
          </p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" /> Invite Member
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +2 this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              Online members
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Roles</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              Custom roles
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Invites</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Awaiting response
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="members" className="space-y-4">
        <TabsList>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="roles">Roles</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>
        <TabsContent value="members">
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>
                Manage your team members and their roles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Active</TableHead>
                    <TableHead>Projects</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {teamMembers.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{member.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {member.email}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{getRoleBadge(member.role)}</TableCell>
                      <TableCell>{getStatusBadge(member.status)}</TableCell>
                      <TableCell>{member.lastActive}</TableCell>
                      <TableCell>{member.projects}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Settings className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
} 