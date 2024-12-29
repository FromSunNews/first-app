import { PageContainer } from "@/components/layout/page-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/ui/card";
import { Button } from "@/components/shared/ui/button";
import { Plus } from "lucide-react";
import { DataTable } from "@/components/shared/data-table";
import { columns } from "./columns";

const data = [
  {
    id: "1",
    name: "Worker Node 1",
    status: "Active",
    cpu: "4 cores",
    memory: "16 GB",
    storage: "500 GB",
    lastSeen: "2 minutes ago",
  },
  {
    id: "2", 
    name: "Worker Node 2",
    status: "Inactive",
    cpu: "8 cores", 
    memory: "32 GB",
    storage: "1 TB",
    lastSeen: "1 hour ago",
  },
  {
    id: "3",
    name: "Worker Node 3", 
    status: "Active",
    cpu: "16 cores",
    memory: "64 GB", 
    storage: "2 TB",
    lastSeen: "5 minutes ago",
  },
];

export default function ManageNodesPage() {
  return (
    <PageContainer>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Manage Nodes</h1>
            <p className="text-muted-foreground">
              View and manage your worker nodes
            </p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Register New Node
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Nodes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
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
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total CPU Cores
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">128</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Memory
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">512 GB</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Worker Nodes</CardTitle>
          </CardHeader>
          <CardContent>
            <DataTable columns={columns} data={data} />
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
