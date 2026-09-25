import React from "react";
import Pagination from "./Pagination";

interface PageContainerProps {
  pageNumber: number;
  totalPages?: number;
  pageTitle?: string;
  category?: string;
  subtitle?: string;
  prevHref?: string;
  nextHref?: string;
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({
  pageNumber,
  totalPages = 6,
  pageTitle = "",
  prevHref,
  nextHref,
  children,
  className = "",
}: PageContainerProps) {
  return (
    <div
      className={`w-full bg-paper-white border border-ink-rule p-3 sm:p-6 lg:p-8 shadow-xs ${className}`}
    >
      {/* Main Content */}
      <div className="w-full">{children}</div>

      {/* Pagination Footer */}
      <Pagination
        current={pageNumber}
        total={totalPages}
        title={pageTitle}
        prevHref={prevHref}
        nextHref={nextHref}
      />
    </div>
  );
}
