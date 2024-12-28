import {
  Activity,
  LayoutDashboard,
  Server,
  Wallet,
  Shield,
  History,
  Bell,
  HelpCircle,
  Network,
  Cpu,
  BarChart,
  Boxes,
} from "lucide-react";
import { SidebarData } from "../types";

export const sidebarData: SidebarData = {
  user: {
    name: "satnaing",
    email: "Active",
    image: "/avatars/01.png",
  },
  teams: [
    {
      name: "Worker Workspace",
      icon: Server,
      value: "worker-workspace",
      description: "Register and manage nodes",
    },
    {
      name: "Cloud Workspace",
      icon: Network,
      value: "cloud-workspace",
      description: "Manage and deploy tasks",
    },
  ],
  navGroups: [
    {
      title: "Overview",
      items: [
        {
          title: "Dashboard",
          href: "/worker-workspace",
          icon: LayoutDashboard,
        },
        {
          title: "Manage Nodes",
          href: "/worker-workspace/nodes",
          icon: Server,
        },
      ],
    },
    {
      title: "Analytics",
      items: [
        {
          title: "Performance",
          href: "/worker-workspace/performance",
          icon: Activity,
        },
        {
          title: "Resources",
          href: "/worker-workspace/resources",
          icon: Cpu,
        },
        {
          title: "Statistics",
          href: "/worker-workspace/statistics",
          icon: BarChart,
        },
      ],
    },
    {
      title: "Management",
      items: [
        {
          title: "Tasks",
          href: "/worker-workspace/tasks",
          icon: Boxes,
          badge: "3",
        },
        {
          title: "Earnings",
          href: "/worker-workspace/earnings",
          icon: Wallet,
        },
        {
          title: "History",
          href: "/worker-workspace/history",
          icon: History,
        },
      ],
    },
    {
      title: "Settings",
      items: [
        {
          title: "Security",
          href: "/worker-workspace/security",
          icon: Shield,
        },
        {
          title: "Notifications",
          href: "/worker-workspace/notifications",
          icon: Bell,
        },
        {
          title: "Help Center",
          href: "/worker-workspace/help",
          icon: HelpCircle,
        },
      ],
    },
  ],
};
