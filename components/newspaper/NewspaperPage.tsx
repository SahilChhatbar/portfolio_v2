import React from "react";
import PageNumber from "./PageNumber";

interface NewspaperPageProps {
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

export default function NewspaperPage({
  pageNumber,
  totalPages = 6,
  pageTitle = "",
  prevHref,
  nextHref,
  children,
  className = "",
}: NewspaperPageProps) {
  return (
    <div
      className={`w-full bg-paper-white border border-ink-rule p-3 sm:p-6 lg:p-8 shadow-xs ${className}`}
    >
      {/* Main Editorial Content Directly */}
      <div className="w-full">{children}</div>

      {/* Page Number & Navigation Footer */}
      <PageNumber
        current={pageNumber}
        total={totalPages}
        title={pageTitle}
        prevHref={prevHref}
        nextHref={nextHref}
      />
    </div>
  );
}
