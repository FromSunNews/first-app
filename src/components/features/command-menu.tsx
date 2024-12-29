"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useSearch } from "@/context/search-context";
import { useTheme } from "next-themes";
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
import { Moon, Sun, Laptop, ArrowRight } from "lucide-react";

const groups = [
  {
    title: "Worker Workspace",
    items: [
      {
        title: "Overview",
        href: "/worker-workspace",
      },
      {
        title: "Node Management",
        href: "/worker-workspace/manage-nodes",
      },
      {
        title: "Performance",
        href: "/worker-workspace/performance",
      },
      {
        title: "Earnings",
        href: "/worker-workspace/earnings",
      },
    ],
  },
  {
    title: "Cloud Workspace",
    items: [
      {
        title: "Overview",
        href: "/cloud-workspace",
      },
      {
        title: "Projects",
        href: "/cloud-workspace/projects",
      },
      {
        title: "Deployments",
        href: "/cloud-workspace/deployments",
      },
      {
        title: "Resources",
        href: "/cloud-workspace/resources",
      },
    ],
  },
];

export function CommandMenu() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { open, setOpen } = useSearch();

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      setOpen(false);
      command();
    },
    [setOpen]
  );

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <ScrollArea className="h-[300px]">
          <CommandEmpty>No results found.</CommandEmpty>
          {groups.map((group) => (
            <React.Fragment key={group.title}>
              <CommandGroup heading={group.title}>
                {group.items?.map((item) => (
                  <CommandItem
                    key={item.href}
                    value={item.title}
                    onSelect={() => {
                      runCommand(() => router.push(item.href));
                    }}
                  >
                    <ArrowRight className="mr-2 h-4 w-4" />
                    {item.title}
                  </CommandItem>
                ))}
              </CommandGroup>
            </React.Fragment>
          ))}
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <Sun className="mr-2 h-4 w-4" />
              Light
              {theme === "light" && (
                <span className="ml-auto text-xs">Active</span>
              )}
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <Moon className="mr-2 h-4 w-4" />
              Dark
              {theme === "dark" && (
                <span className="ml-auto text-xs">Active</span>
              )}
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <Laptop className="mr-2 h-4 w-4" />
              System
              {theme === "system" && (
                <span className="ml-auto text-xs">Active</span>
              )}
            </CommandItem>
          </CommandGroup>
        </ScrollArea>
      </CommandList>
    </CommandDialog>
  );
}
