"use client";

import React from "react";
import { ChevronsUpDown, Wallet, LogOut, Settings, Activity, History } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/shared/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shared/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/shared/ui/sidebar";
import { User } from "../types";

interface NavUserProps {
  user: User;
}

export function NavUser({ user }: NavUserProps) {
  const [balance, setBalance] = React.useState("0.00");

  const shortenAddress = (address: string) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton size="lg" className="data-[state=open]:bg-accent">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={user.image} alt={user.name} />
                <AvatarFallback className="rounded-lg">{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{shortenAddress(user.name)}</span>
                <span className="flex items-center gap-1 truncate text-xs">
                  <Activity className="h-3 w-3" />
                  {user.email}
                  <div className="mt-1 h-2 w-2 rounded-full bg-green-500"></div>
                </span>
              </div>
              <ChevronsUpDown className="ml-auto h-4 w-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56"
            side="right"
            align="start"
            sideOffset={8}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={user.image} alt={user.name} />
                  <AvatarFallback className="rounded-lg">{user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{shortenAddress(user.name)}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Wallet className="mr-2 h-4 w-4" />
                Balance
                <span className="ml-auto text-xs text-muted-foreground">{balance} WAL</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <History className="mr-2 h-4 w-4" />
                Transaction History
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
