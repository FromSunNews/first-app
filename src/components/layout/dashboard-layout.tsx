"use client";

import React from "react";
import { AppSidebar } from "./app-sidebar";

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <main className="ml-64 flex-1">
        <div className="container p-6">{children}</div>
      </main>
    </div>
  );
};
