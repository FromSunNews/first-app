"use client";

import { Settings, ChevronDown, Menu } from "lucide-react";
import { Wallet, Coins, BookOpen, BarChart2, Globe, Network } from "lucide-react";

import { MdOutlineGeneratingTokens } from "react-icons/md";
import { PiBridge } from "react-icons/pi";
import { cn } from "@/libs/utils/taildwind";
import { WalletSelector } from "@/components/features/wallet-selector";
import { ToggleTheme } from "@/components/features/toggle-theme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shared/ui/dropdown-menu";
import { motion } from "framer-motion";
import { Logo } from "@/components/shared/custom/logo";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/shared/ui/sheet";
import { Separator } from "@/components/shared/ui/separator";

// Menu chính với icons
const mainMenuItems = [
  {
    title: "Farm",
    path: "/farm",
    icon: MdOutlineGeneratingTokens,
  },
  {
    title: "Lend",
    path: "/lend",
    icon: Wallet,
  },
  {
    title: "Stake",
    path: "/stake",
    icon: Coins,
  },
  {
    title: "Bridge",
    path: "/bridge",
    icon: PiBridge,
  },
];

// Menu More dropdown với icons
const moreMenuItems = [
  {
    title: "Docs",
    path: "/docs",
    icon: BookOpen,
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: BarChart2,
  },
];

// Settings menu items với icons
const settingsMenuItems = [
  {
    title: "Language",
    path: "/language",
    icon: Globe,
  },
  {
    title: "Network",
    path: "/network",
    icon: Network,
  },
];

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const handleActiveRoute = (path: string) => {
    return pathname.includes(path);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-border bg-background/80 px-4 backdrop-blur-sm md:px-0">
      <nav className="container mx-auto flex h-16 items-center justify-between">
        {/* Logo với animation */}
        <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Logo />
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">
          {mainMenuItems.map((item) => {
            const Icon = item.icon;
            const isActive = handleActiveRoute(item.path);
            return (
              <motion.div key={item.title} className="relative" whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.path);
                  }}
                  className={cn(
                    "flex items-center gap-2 rounded-md py-1.5 font-bold transition-colors",
                    !isActive && "font-normal text-muted-foreground"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-base">{item.title}</span>
                </Link>
                {isActive && (
                  <motion.div
                    className="absolute -bottom-[1px] left-0 right-0 h-[3px] rounded-full bg-primary"
                    layoutId="underline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </motion.div>
            );
          })}

          {/* More Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.button
                className="flex items-center gap-1 py-1.5 text-secondary-foreground"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <span className="text-base">More</span>
                <ChevronDown className="h-5 w-5" />
              </motion.button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="border-border bg-popover">
              <DropdownMenuLabel className="text-foreground">More Options</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-border" />
              {moreMenuItems.map((item) => {
                const Icon = item.icon;
                const isActive = handleActiveRoute(item.path);
                return (
                  <DropdownMenuItem key={item.title}>
                    <Link
                      href={item.path}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.path);
                      }}
                      className={cn("flex w-full items-center gap-2", !isActive && "text-muted-foreground")}
                    >
                      <Icon className={cn("h-5 w-5")} />
                      {item.title}
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <WalletSelector />

          {/* Settings Dropdown */}
          <div className="hidden md:block">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  className="rounded-full p-2 transition-colors hover:bg-accent"
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Settings className="h-5 w-5" />
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Settings</DropdownMenuLabel>
                <DropdownMenuSeparator />

                {/* Theme Toggle */}
                <DropdownMenuItem className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    Theme
                  </div>
                  <ToggleTheme />
                </DropdownMenuItem>

                {/* Other Settings */}
                {settingsMenuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = handleActiveRoute(item.path);
                  return (
                    <DropdownMenuItem key={item.title}>
                      <Link
                        href={item.path}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation(item.path);
                        }}
                        className={cn("flex w-full items-center gap-2", isActive && "text-primary")}
                      >
                        <Icon className="h-4 w-4" />
                        {item.title}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <motion.button className="p-2 md:hidden" whileTap={{ scale: 0.9 }} onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="mt-4 flex flex-col gap-4">
            {mainMenuItems.map((item) => (
              <a
                key={item.title}
                href={item.path}
                className="rounded-md px-4 py-2 transition-colors hover:bg-accent"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
            <Separator />
            {moreMenuItems.map((item) => (
              <a
                key={item.title}
                href={item.path}
                className="rounded-md px-4 py-2 transition-colors hover:bg-accent"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
