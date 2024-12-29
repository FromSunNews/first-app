"use client";

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/shared/ui/sidebar";
import { NavGroup } from "@/components/layout/nav-group";
import { NavUser } from "@/components/layout/nav-user";
import { TeamSwitcher } from "@/components/layout/team-switcher";
import { sidebarData, getNavGroups } from "@/components/layout/data/sidebar-data";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function AppSidebar({ className, ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  
  // Get current workspace from pathname
  const workspace = pathname.split('/')[1] || 'worker-workspace';
  const navGroups = getNavGroups(workspace);
  
  return (
    <Sidebar
      collapsible="icon"
      variant="floating"
      className={cn(
        "transition-width border-r bg-background duration-300 ease-in-out overflow-hidden",
        "group/sidebar data-[collapsed=true]:w-[--collapsed-width]",
        className
      )}
      {...props}
    >
      <SidebarHeader className="border-b px-2 py-2">
        <TeamSwitcher teams={sidebarData.teams} />
      </SidebarHeader>
      <SidebarContent 
        className={cn(
          "overflow-x-hidden overflow-y-auto",
          "show-scrollbar-on-hover",
          "group-data-[collapsed=true]/sidebar:hide-scrollbar"
        )}
      >
        {navGroups.map((group) => (
          <NavGroup key={group.title} title={group.title} items={group.items} />
        ))}
      </SidebarContent>
      <SidebarFooter className="border-t px-2 py-2">
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
