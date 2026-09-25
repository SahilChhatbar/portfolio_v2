interface CaptionProps {
  text: string;
  credit?: string;
  className?: string;
}

export default function Caption({
  text,
  credit = "STAFF PHOTO / SAHIL CHHATBAR",
  className = "",
}: CaptionProps) {
  return (
    <div className={`mt-1.5 text-left select-text ${className}`}>
      <p className="font-serif italic text-xs text-ink-body leading-snug">
        {text}
      </p>
      {credit && (
        <p className="font-sans text-[9px] uppercase tracking-wider text-ink-light mt-0.5">
          — PHOTO / CREDIT: {credit}
        </p>
      )}
    </div>
  );
}
