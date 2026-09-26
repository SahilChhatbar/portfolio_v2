"use client";

import { usePathname } from "next/navigation";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const PAGE_ORDER: Record<string, number> = {
  "/": 1,
  "/about": 1,
  "/experience": 2,
  "/projects": 3,
  "/skills": 4,
  "/career": 5,
  "/contact": 6,
};

interface TransitionContextType {
  direction: "forward" | "backward";
  animationClass: string;
}

const TransitionContext = createContext<TransitionContextType>({
  direction: "forward",
  animationClass: "animate-paper-forward",
});

export function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      const prevIndex = PAGE_ORDER[prevPathRef.current] ?? 1;
      const currIndex = PAGE_ORDER[pathname] ?? 1;

      if (currIndex < prevIndex) {
        setDirection("backward");
      } else {
        setDirection("forward");
      }

      prevPathRef.current = pathname;
    }
  }, [pathname]);

  const animationClass =
    direction === "backward"
      ? "animate-paper-backward"
      : "animate-paper-forward";

  return (
    <TransitionContext.Provider value={{ direction, animationClass }}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  return useContext(TransitionContext);
}
