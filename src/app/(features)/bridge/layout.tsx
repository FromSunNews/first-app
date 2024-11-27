"use client";

import { usePathname, useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/shared/ui/tabs";
import BRIDGE_TABS from "./utils/tabs-menu";
import { cn } from "@/libs/utils/taildwind";
import { Suspense } from "react";
import Loading from "@/app/loading";

export default function BridgeLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const currentTab = BRIDGE_TABS.find((tab) => pathname.includes(tab.value))?.value || "bridgeextra";

  const handleTabChange = (value: string) => {
    const tab = BRIDGE_TABS.find((tab) => tab.value === value);
    if (tab) {
      router.push(tab.link);
    }
  };

  return (
    <div className="container mx-auto max-w-2xl px-4 pt-10">
      <Tabs value={currentTab} onValueChange={handleTabChange} className="w-full">
        <TabsList className="mb-6 h-auto w-full bg-card p-1">
          {BRIDGE_TABS.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value} className={cn("flex-1 py-2")}>
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        <Suspense fallback={<Loading />}>
          <div>{children}</div>
        </Suspense>
      </Tabs>
    </div>
  );
}
