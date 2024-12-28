"use client";

import { PropsWithChildren } from "react";
import { ReactQueryClientProvider } from "./querry-provider";
import { AutoConnectProvider } from "./auto-connect-provider";
import { Toaster } from "@/components/shared/ui/toaster";
import { WalletProvider } from "./wallet-provider";
import { SidebarProvider } from "@/components/shared/ui/sidebar";
import { SearchProvider } from "@/context/search-context";

export function Providers({ children }: PropsWithChildren) {
  return (
    <AutoConnectProvider>
      <ReactQueryClientProvider>
        <WalletProvider>
          <SearchProvider>
            <SidebarProvider>{children}</SidebarProvider>
            <Toaster />
          </SearchProvider>
        </WalletProvider>
      </ReactQueryClientProvider>
    </AutoConnectProvider>
  );
}
