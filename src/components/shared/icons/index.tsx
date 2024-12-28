import { Cloud, Server, type Icon as LucideIcon } from "lucide-react";

export type Icon = typeof LucideIcon;

export const Icons = {
  logo: Cloud,
  cloud: Cloud,
  server: Server,
} as const;
