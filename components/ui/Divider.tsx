interface DividerProps {
  type?: 'double' | 'single' | 'thick' | 'ornamental' | 'dashed'
  className?: string
}

export default function Divider({ type = 'single', className = '' }: DividerProps) {
  if (type === 'double') {
    return (
      <div className={`my-2 w-full py-1.5 ${className}`}>
        <div className="border-ink-rule h-1.25 border-t-3 border-b"></div>
      </div>
    )
  }

  if (type === 'thick') {
    return (
      <div className={`my-3 w-full ${className}`}>
        <div className="border-ink-rule border-t-4"></div>
      </div>
    )
  }

  if (type === 'dashed') {
    return <div className={`border-ink-rule/40 my-2 w-full border-t border-dashed ${className}`} />
  }

  if (type === 'ornamental') {
    return (
      <div
        className={`text-ink-dark my-4 flex items-center justify-center space-x-3 select-none ${className}`}
      >
        <span className="bg-ink-rule/30 h-px flex-1"></span>
        <span className="font-serif text-xs tracking-widest uppercase">✦ ✦ ✦</span>
        <span className="bg-ink-rule/30 h-px flex-1"></span>
      </div>
    )
  }

  // Single hairline rule
  return <div className={`border-ink-rule/40 my-2 w-full border-t ${className}`} />
}
