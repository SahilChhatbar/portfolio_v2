interface DropCapProps {
  letter: string;
  className?: string;
}

export default function DropCap({ letter, className = "" }: DropCapProps) {
  return (
    <span
      className={`float-left font-headline font-black text-5xl sm:text-6xl md:text-7xl leading-[0.8] pr-2.5 pt-1 text-ink-primary uppercase select-none ${className}`}
    >
      {letter}
    </span>
  );
}
