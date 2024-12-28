import { Icons } from "@/components/shared/icons";

export default function WorkerWorkspacePage() {
  return (
    <div className="flex-1 space-y-8 p-8 pt-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="rounded-full bg-primary/10 p-4">
          <Icons.server className="h-8 w-8" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome to Worker Workspace</h1>
        <p className="text-muted-foreground">
          Manage your worker nodes, monitor performance, and track earnings in one place.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-primary/10 p-2">
              <Icons.server className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">Node Management</h3>
              <p className="text-sm text-muted-foreground">Register and manage your worker nodes</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-primary/10 p-2">
              <Icons.activity className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">Performance</h3>
              <p className="text-sm text-muted-foreground">Monitor node performance metrics</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-primary/10 p-2">
              <Icons.wallet className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">Earnings</h3>
              <p className="text-sm text-muted-foreground">Track your earnings and payouts</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-primary/10 p-2">
              <Icons.shield className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">Security</h3>
              <p className="text-sm text-muted-foreground">Manage security settings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
