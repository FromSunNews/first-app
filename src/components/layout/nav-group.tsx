"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/shared/ui/badge";
import { NavGroup as NavGroupType } from "./types";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/shared/ui/tooltip";
import { Separator } from "@/components/shared/ui/separator";

export function NavGroup({ title, items }: NavGroupType) {
  const pathname = usePathname();

  return (
    <div className="relative">
      <div className="px-2 py-2">
        <h2
          className={cn(
            "mb-2 px-2 text-xs font-semibold tracking-tight text-muted-foreground/70",
            "group-data-[collapsed=true]/sidebar:hidden"
          )}
        >
          {title}
        </h2>
        <div className="relative space-y-1">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Tooltip key={item.href} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "group/link flex w-full items-center gap-x-2 rounded-md py-1.5 pl-4 pr-2",
                      "text-sm font-medium text-muted-foreground",
                      "hover:bg-accent hover:text-accent-foreground",
                      "group-data-[collapsed=true]/sidebar:justify-center group-data-[collapsed=true]/sidebar:px-2 group-data-[collapsed=true]/sidebar:py-2",
                      isActive && "bg-accent/50 text-accent-foreground",
                      item.disabled && "pointer-events-none opacity-60"
                    )}
                  >
                    {Icon && (
                      <Icon
                        className={cn(
                          "h-4 w-4 shrink-0",
                          isActive ? "text-foreground" : "text-muted-foreground/70",
                          "group-hover/link:text-accent-foreground"
                        )}
                      />
                    )}
                    <span className={cn("flex-1 truncate", "group-data-[collapsed=true]/sidebar:hidden")}>
                      {item.title}
                    </span>
                    {item.badge && (
                      <Badge
                        variant="secondary"
                        className={cn(
                          "ml-auto h-5 rounded-sm px-1.5 py-0 text-xs",
                          "group-data-[collapsed=true]/sidebar:hidden"
                        )}
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" className="group-data-[collapsed=false]/sidebar:hidden">
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
            );
          })}
        </div>
      </div>
      <Separator className={cn("my-2 hidden", "group-data-[collapsed=true]/sidebar:block")} />
    </div>
  );
}
