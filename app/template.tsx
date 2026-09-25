"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const PAGE_ORDER: Record<string, number> = {
  "/": 1,
  "/about": 1,
  "/experience": 2,
  "/projects": 3,
  "/skills": 4,
  "/career": 5,
  "/contact": 6,
};

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prevPathRef = useRef(pathname);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  useEffect(() => {
    const prevIndex = PAGE_ORDER[prevPathRef.current] ?? 1;
    const currIndex = PAGE_ORDER[pathname] ?? 1;

    if (currIndex < prevIndex) {
      setDirection("backward");
    } else {
      setDirection("forward");
    }

    prevPathRef.current = pathname;
  }, [pathname]);

  const animationClass =
    direction === "backward"
      ? "animate-paper-backward"
      : "animate-paper-forward";

  return (
    <div key={pathname} className={`w-full ${animationClass}`}>
      {children}
    </div>
  );
}
