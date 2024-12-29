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
  Cloud,
  Code2,
  Terminal,
  Settings,
  Users,
  Layers,
  GitBranch,
  MonitorPlay
} from "lucide-react";
import { SidebarData } from "../types";

const workerNavGroups = [
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
        badge: "2",
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
];

const cloudNavGroups = [
  {
    title: "Overview",
    items: [
      {
        title: "Dashboard",
        href: "/cloud-workspace",
        icon: LayoutDashboard,
      },
      {
        title: "Projects",
        href: "/cloud-workspace/projects",
        icon: Layers,
        badge: "5",
      },
    ],
  },
  {
    title: "Development",
    items: [
      {
        title: "Deployments",
        href: "/cloud-workspace/deployments",
        icon: Cloud,
      },
      {
        title: "Code Editor",
        href: "/cloud-workspace/editor",
        icon: Code2,
      },
      {
        title: "Terminal",
        href: "/cloud-workspace/terminal",
        icon: Terminal,
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        title: "Team",
        href: "/cloud-workspace/team",
        icon: Users,
        badge: "New",
      },
      {
        title: "Monitoring",
        href: "/cloud-workspace/monitoring",
        icon: MonitorPlay,
      },
      {
        title: "Version Control",
        href: "/cloud-workspace/version-control",
        icon: GitBranch,
      },
    ],
  },
  {
    title: "Settings",
    items: [
      {
        title: "Configuration",
        href: "/cloud-workspace/configuration",
        icon: Settings,
      },
      {
        title: "Notifications",
        href: "/cloud-workspace/notifications",
        icon: Bell,
      },
      {
        title: "Help Center",
        href: "/cloud-workspace/help",
        icon: HelpCircle,
      },
    ],
  },
];

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
  navGroups: workerNavGroups, // Default to worker workspace
};

export function getNavGroups(workspace: string) {
  switch (workspace) {
    case "worker-workspace":
      return workerNavGroups;
    case "cloud-workspace":
      return cloudNavGroups;
    default:
      return workerNavGroups;
  }
}
