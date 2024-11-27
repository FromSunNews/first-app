import React from "react";
import { FloatingDock } from "@/components/shared/ui/floating-dock";
import {
  FaGithub,
  FaTelegram,
  FaDiscord
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";

export function FloatingSocial() {
  const links = [
    {
      title: "X",
      icon: (
        <FaXTwitter className="h-full w-full text-muted-foreground" />
      ),
      href: "https://x.com",
    },
    {
      title: "Telegram",
      icon: (
        <FaTelegram className="h-full w-full text-muted-foreground" />
      ),
      href: "https://t.me",
    },
    {
      title: "Discord",
      icon: (
        <FaDiscord className="h-full w-full text-muted-foreground" />
      ),
      href: "https://discord.gg",
    },
    {
      title: "Github",
      icon: (
        <FaGithub className="h-full w-full text-muted-foreground" />
      ),
      href: "https://github.com",
    },
    {
      title: "Documentation",
      icon: (
        <IoDocumentText className="h-full w-full text-muted-foreground" />
      ),
      href: "https://docs.0x0x.xyz",
    },
  ];

  return (
    <div className="fixed md:top-[calc(50%-100px)] bottom-[100px] right-4 h-auto w-auto">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}
