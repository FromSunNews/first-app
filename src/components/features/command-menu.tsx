"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { IconArrowRightDashed, IconDeviceLaptop, IconMoon, IconSun } from "@tabler/icons-react";
import { useSearch } from "@/context/search-context";
import { useTheme } from "@/context/theme-context";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/shared/ui/command";
import { ScrollArea } from "@/components/shared/ui/scroll-area";
import { sidebarData } from "@/components/layout/data/sidebar-data";

export function CommandMenu() {
  const router = useRouter();
  const { setTheme } = useTheme();
  const { open, setOpen } = useSearch();

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      setOpen(false);
      command();
    },
    [setOpen]
  );

  return (
    <CommandDialog modal open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <ScrollArea type="hover" className="h-72 pr-1">
          <CommandEmpty>No results found.</CommandEmpty>
          {sidebarData.teams?.map((team) => (
            <React.Fragment key={team.value}>
              <CommandGroup heading={team.label}>
                {team.groups?.map((group) => (
                  <React.Fragment key={group.title}>
                    {group.items?.map((item, i) => (
                      <CommandItem
                        key={`${item.href}-${i}`}
                        value={item.title}
                        onSelect={() => {
                          runCommand(() => router.push(item.href));
                        }}
                      >
                        <div className="mr-2 flex h-4 w-4 items-center justify-center">
                          <IconArrowRightDashed className="size-2 text-muted-foreground/80" />
                        </div>
                        {item.title}
                      </CommandItem>
                    ))}
                  </React.Fragment>
                ))}
              </CommandGroup>
            </React.Fragment>
          ))}
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <IconSun /> <span>Light</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <IconMoon className="scale-90" />
              <span>Dark</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <IconDeviceLaptop />
              <span>System</span>
            </CommandItem>
          </CommandGroup>
        </ScrollArea>
      </CommandList>
    </CommandDialog>
  );
}
