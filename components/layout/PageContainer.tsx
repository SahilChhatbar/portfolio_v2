import React from 'react'
import Pagination from './Pagination'

interface PageContainerProps {
  pageNumber: number
  totalPages?: number
  pageTitle?: string
  category?: string
  subtitle?: string
  prevHref?: string
  nextHref?: string
  children: React.ReactNode
  className?: string
}

export default function PageContainer({
  pageNumber,
  totalPages = 6,
  pageTitle = '',
  prevHref,
  nextHref,
  children,
  className = '',
}: PageContainerProps) {
  return (
    <div
      className={`bg-paper-white border-ink-rule w-full border p-3 shadow-xs sm:p-6 lg:p-8 ${className}`}
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
  )
}
