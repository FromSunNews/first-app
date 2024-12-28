export const menuItems = {
  "cloud-workspace": [
    {
      title: "Overview",
      path: "/cloud-workspace",
    },
    {
      title: "Deploy Cluster",
      path: "/cloud-workspace/deploy-cluster",
    },
    {
      title: "Manage Resources",
      path: "/cloud-workspace/manage-resources",
    },
    {
      title: "Billing",
      path: "/cloud-workspace/billing",
    },
  ],
  "worker-workspace": [
    {
      title: "Overview",
      path: "/worker-workspace",
    },
    {
      title: "Manage Nodes",
      path: "/worker-workspace/manage-nodes",
    },
    {
      title: "Performance",
      path: "/worker-workspace/performance",
    },
    {
      title: "Earnings",
      path: "/worker-workspace/earnings",
    },
  ],
} as const;

export type WorkspaceKey = keyof typeof menuItems;
export type MenuItem = (typeof menuItems)[WorkspaceKey][number];
