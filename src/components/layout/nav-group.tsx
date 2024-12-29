"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/shared/ui/badge";
import { NavGroup as NavGroupType } from "./types";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/shared/ui/tooltip";
import { ChevronRight } from "lucide-react";
import { 
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  useSidebar
} from "@/components/shared/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/shared/ui/collapsible";

export function NavGroup({ title, items }: NavGroupType) {
  const pathname = usePathname();
  const { state } = useSidebar();

  // Helper function to check if a path is active
  const isPathActive = (href: string) => {
    // Exact match for root paths
    if (href.split('/').length <= 3) {
      return pathname === href;
    }
    // Partial match for nested paths
    return pathname.startsWith(href);
  };

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = isPathActive(item.href);
          const hasSubmenu = item.items && item.items.length > 0;

          if (hasSubmenu) {
            const isSubMenuActive = item.items?.some(subItem => isPathActive(subItem.href));
            return (
              <Collapsible key={item.href} defaultOpen={isActive || isSubMenuActive}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton isActive={isActive || isSubMenuActive}>
                      {Icon && (
                        <Icon
                          className={cn(
                            "h-4 w-4 shrink-0",
                            (isActive || isSubMenuActive) ? "text-foreground" : "text-muted-foreground/70"
                          )}
                        />
                      )}
                      <span className="flex-1 truncate">{item.title}</span>
                      {item.badge && (
                        <Badge
                          variant="secondary"
                          className="ml-auto h-5 rounded-sm px-1.5 py-0 text-xs"
                        >
                          {item.badge}
                        </Badge>
                      )}
                      <ChevronRight className="ml-auto h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items.map((subItem) => {
                        const SubIcon = subItem.icon;
                        const isSubActive = isPathActive(subItem.href);

                        return (
                          <SidebarMenuSubItem key={subItem.href}>
                            <Tooltip delayDuration={0}>
                              <TooltipTrigger asChild>
                                <SidebarMenuSubButton
                                  asChild
                                  isActive={isSubActive}
                                >
                                  <Link href={subItem.href}>
                                    {SubIcon && <SubIcon className="h-4 w-4 shrink-0" />}
                                    <span>{subItem.title}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </TooltipTrigger>
                              <TooltipContent 
                                side="right" 
                                className={cn(state !== "collapsed" && "hidden")}
                              >
                                {subItem.title}
                              </TooltipContent>
                            </Tooltip>
                          </SidebarMenuSubItem>
                        );
                      })}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            );
          }

          return (
            <SidebarMenuItem key={item.href}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex w-full items-center gap-x-2",
                        item.disabled && "pointer-events-none opacity-60"
                      )}
                    >
                      {Icon && (
                        <Icon
                          className={cn(
                            "h-4 w-4 shrink-0",
                            isActive ? "text-foreground" : "text-muted-foreground/70"
                          )}
                        />
                      )}
                      <span className="flex-1 truncate">{item.title}</span>
                      {item.badge && (
                        <Badge
                          variant="secondary"
                          className="ml-auto h-5 rounded-sm px-1.5 py-0 text-xs"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </TooltipTrigger>
                <TooltipContent 
                  side="right" 
                  className={cn(state !== "collapsed" && "hidden")}
                >
                  <div className="flex items-center gap-2">
                    <span>{item.title}</span>
                    {item.badge && (
                      <Badge variant="secondary" className="h-5 rounded-sm px-1.5 py-0 text-xs">
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                </TooltipContent>
              </Tooltip>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
