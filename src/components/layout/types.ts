import { LucideIcon } from "lucide-react";

export interface Team {
  name: string;
  icon: LucideIcon;
  value: string;
  description: string;
}

export interface User {
  name: string;
  email: string;
  image: string;
}

export interface NavItem {
  title: string;
  href: string;
  icon?: LucideIcon;
  badge?: string;
  disabled?: boolean;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface SidebarData {
  user: User;
  teams: Team[];
  navGroups: NavGroup[];
}
