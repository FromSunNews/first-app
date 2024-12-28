import { Cloud, Server, Activity, Wallet, Shield, type Icon as LucideIcon } from "lucide-react";

export type Icon = typeof LucideIcon;

export const Icons = {
  logo: Cloud,
  cloud: Cloud,
  server: Server,
  activity: Activity,
  wallet: Wallet,
  shield: Shield,
} as const;
