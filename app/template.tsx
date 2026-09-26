"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="w-full animate-paper-forward">
      {children}
    </div>
  );
}
