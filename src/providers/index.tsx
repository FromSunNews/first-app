"use client";

import { PropsWithChildren } from "react";
import { ReactQueryClientProvider } from "./querry-provider";
import { AutoConnectProvider } from "./auto-connect-provider";
import { Toaster } from "@/components/shared/ui/toaster";
import { WalletProvider } from "./wallet-provider";

export function Providers({ children }: PropsWithChildren) {
  return (
    <AutoConnectProvider>
      <ReactQueryClientProvider>
        <WalletProvider>
          {children}
          <Toaster />
        </WalletProvider>
      </ReactQueryClientProvider>
    </AutoConnectProvider>
  );
}
