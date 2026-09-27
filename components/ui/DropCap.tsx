interface DropCapProps {
  letter: string
  className?: string
}

export default function DropCap({ letter, className = '' }: DropCapProps) {
  return (
    <span
      className={`font-headline text-ink-primary float-left pt-1 pr-2.5 text-5xl leading-[0.8] font-black uppercase select-none sm:text-6xl md:text-7xl ${className}`}
    >
      {letter}
    </span>
  )
}
