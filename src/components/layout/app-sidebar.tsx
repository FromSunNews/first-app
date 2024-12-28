"use client";

import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from "@/components/shared/ui/sidebar";
import { ScrollArea } from "@/components/shared/ui/scroll-area";
import { NavGroup } from "@/components/layout/nav-group";
import { NavUser } from "@/components/layout/nav-user";
import { TeamSwitcher } from "@/components/layout/team-switcher";
import { sidebarData } from "@/components/layout/data/sidebar-data";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function AppSidebar({ className, ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const activeTeam = sidebarData.teams.find((team) => pathname.startsWith(`/${team.value}`));

  return (
    <Sidebar
      collapsible="icon"
      variant="floating"
      className={cn(
        "transition-width border-r bg-background duration-300 ease-in-out",
        "group/sidebar data-[collapsed=true]:w-[--collapsed-width]",
        className
      )}
      {...props}
    >
      <SidebarHeader className="border-b px-2 py-2">
        <TeamSwitcher teams={sidebarData.teams} />
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea
          className={cn(
            "h-[calc(100vh-8.5rem)]",
            "hover:pr-2 group-hover/sidebar:pr-2",
            "[&_[data-radix-scroll-area-viewport]]:!block",
            "[&_[data-radix-scroll-area-thumb]]:!rounded",
            "[&_[data-radix-scroll-area-thumb]]:!bg-accent",
            "[&_[data-radix-scroll-area-scrollbar]]:hover:bg-accent/10",
            "[&_[data-radix-scroll-area-scrollbar][data-orientation=vertical]]:w-2",
            "[&_[data-radix-scroll-area-scrollbar][data-orientation=vertical]]:hover:w-2.5",
            "group-data-[collapsed=true]/sidebar:[&_[data-radix-scroll-area-scrollbar]]:opacity-0"
          )}
        >
          <div className="px-2 py-2">
            {sidebarData.navGroups.map((group) => (
              <NavGroup key={group.title} title={group.title} items={group.items} />
            ))}
          </div>
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter className="border-t px-2 py-2">
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
