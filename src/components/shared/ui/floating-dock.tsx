"use client";

/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/libs/utils/taildwind";
import { TbLayoutNavbarCollapse } from "react-icons/tb";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <Link
                  target="_blank"
                  href={item.href}
                  key={item.title}
                  className="h-10 w-10 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center"
                >
                  <div className="h-4 w-4 text-secondary-foreground">{item.icon}</div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center"
      >
        <TbLayoutNavbarCollapse className="h-5 w-5 text-secondary-foreground" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  let mouseY = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseY.set(e.pageY)}
      onMouseLeave={() => mouseY.set(Infinity)}
      className={cn(
        "hidden md:flex w-14 flex-col gap-3 items-center rounded-full bg-secondary/10 dark:bg-secondary/30 backdrop-blur-md py-3 shadow-lg",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseY={mouseY} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseY,
  title,
  icon,
  href,
}: {
  mouseY: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseY, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return val - bounds.y - bounds.height / 2;
  });

  let widthTransform = useTransform(distance, [-100, 0, 100], [36, 56, 36]);
  let heightTransform = useTransform(distance, [-100, 0, 100], [36, 56, 36]);
  let widthTransformIcon = useTransform(distance, [-100, 0, 100], [18, 28, 18]);
  let heightTransformIcon = useTransform(distance, [-100, 0, 100], [18, 28, 18]);
  let xTransform = useTransform(distance, [-100, 0, 100], [0, -16, 0]);

  let translateX = useSpring(xTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link target="_blank" href={href}>
      <motion.div
        ref={ref}
        style={{
          width,
          height,
          x: translateX,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center relative"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: -8 }}
              exit={{ opacity: 0, x: -10 }}
              className="px-2 py-1 h-auto whitespace-pre rounded-md bg-secondary/10 dark:bg-secondary/30 border-border text-secondary-foreground absolute right-full mr-2 text-xs shadow-md"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-secondary-foreground"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}
