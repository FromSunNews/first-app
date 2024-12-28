"use client";

import { cn } from "@/lib/utils";

interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  fixed?: boolean;
  ref?: React.Ref<HTMLElement>;
}

export const Footer = ({ className, fixed, children, ...props }: FooterProps) => {
  return (
    <footer
      className={cn(
        "flex items-center justify-between border-t bg-background px-4 py-3",
        fixed && "footer-fixed peer/footer fixed bottom-0 z-50 w-[inherit]",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>© 2023 Walnut Network</span>
        <span>·</span>
        <span>Version 1.0.0</span>
      </div>
      <div className="flex items-center gap-4">{children}</div>
    </footer>
  );
};

Footer.displayName = "Footer";
