"use client";

import * as React from "react";
import { ChevronsUpDown } from "lucide-react";
import { usePathname } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shared/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/shared/ui/sidebar";
import { useRouter } from "next/navigation";
import { Team } from "./types";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/shared/ui/tooltip";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

interface TeamSwitcherProps {
  teams?: Team[];
}

export function TeamSwitcher({ teams = [] }: TeamSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  
  // Find active team based on pathname
  const activeTeam = React.useMemo(() => {
    return teams.find(team => pathname.startsWith(`/${team.value}`)) || teams[0];
  }, [teams, pathname]);

  const handleTeamChange = (team: Team) => {
    router.push(`/${team.value}`);
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className={cn(
                    "w-full justify-between",
                    "group-data-[collapsed=true]/sidebar:justify-center",
                    "group-data-[collapsed=true]/sidebar:px-2",
                    "data-[state=open]:bg-accent"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center",
                        "group-data-[collapsed=true]/sidebar:h-6 group-data-[collapsed=true]/sidebar:w-6"
                      )}
                    >
                      <Avatar>
                        <AvatarImage src={"/logo/icon.png"} width={24} height={24} />
                        <AvatarFallback>{activeTeam.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </div>
                    <div
                      className={cn(
                        "flex flex-col items-start justify-center gap-1",
                        "group-data-[collapsed=true]/sidebar:hidden"
                      )}
                    >
                      <span className="text-sm font-semibold leading-none tracking-tight">Walnut Network</span>
                      <span className="text-xs leading-none text-muted-foreground">{activeTeam.name}</span>
                    </div>
                  </div>
                  <ChevronsUpDown
                    className={cn("ml-2 h-4 w-4 shrink-0 opacity-50", "group-data-[collapsed=true]/sidebar:hidden")}
                  />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
            </TooltipTrigger>
            <TooltipContent side="right" className="group-data-[collapsed=false]/sidebar:hidden">
              <div className="flex flex-col gap-1">
                <span className="font-semibold">{activeTeam.name}</span>
                <span className="text-xs text-muted-foreground">{activeTeam.description}</span>
              </div>
            </TooltipContent>
          </Tooltip>
          <DropdownMenuContent
            className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-[240px]"
            align="start"
            side="right"
            sideOffset={8}
          >
            {teams.map((team) => (
              <DropdownMenuItem
                key={team.value}
                onClick={() => handleTeamChange(team)}
                className={cn(
                  "flex items-center gap-3 p-3",
                  pathname.startsWith(`/${team.value}`) && "bg-accent"
                )}
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  {React.createElement(team.icon, {
                    className: "h-4 w-4",
                  })}
                </div>
                <div className="flex flex-col items-start justify-center">
                  <span className="text-sm font-semibold leading-none tracking-tight">{team.name}</span>
                  <span className="text-xs leading-none text-muted-foreground">{team.description}</span>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
