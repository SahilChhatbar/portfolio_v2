import Image from "next/image";
import Caption from "./Caption";

interface NewspaperImageProps {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  priority?: boolean;
  aspectRatio?: "square" | "portrait" | "landscape" | "wide";
  className?: string;
}

export default function NewspaperImage({
  src,
  alt,
  caption,
  credit,
  priority = false,
  aspectRatio = "portrait",
  className = "",
}: NewspaperImageProps) {
  const aspectClasses = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    wide: "aspect-[16/9]",
  }[aspectRatio];

  return (
    <figure className={`w-full my-2 ${className}`}>
      {/* Newspaper Double Frame */}
      <div className="p-1 sm:p-1.5 border border-ink-rule bg-paper-white shadow-xs">
        <div className="relative w-full overflow-hidden border border-ink-dark bg-paper-card">
          <div className={`relative w-full ${aspectClasses}`}>
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={priority}
              className="object-cover grayscale contrast-110 filter hover:contrast-125 transition-all duration-300"
            />
            {/* Subtle halftone/newsprint overlay texture */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] bg-size-[4px_4px]" />
          </div>
        </div>
      </div>

      {caption && <Caption text={caption} credit={credit} />}
    </figure>
  );
}
