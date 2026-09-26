"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { useTransition } from "@/context/TransitionContext";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { animationClass } = useTransition();

  return (
    <div key={pathname} className={`w-full ${animationClass}`}>
      {children}
    </div>
  );
}
