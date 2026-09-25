import Image from "next/image";

interface ImageFrameProps {
  src: string;
  alt: string;
  priority?: boolean;
  aspectRatio?: "portrait" | "landscape" | "square" | "wide";
  objectFit?: "cover" | "contain";
  className?: string;
}

export default function ImageFrame({
  src,
  alt,
  priority = false,
  aspectRatio = "portrait",
  objectFit = "contain",
  className = "",
}: ImageFrameProps) {
  const aspectClasses = {
    portrait: "aspect-[4/5]",
    landscape: "aspect-[16/10]",
    square: "aspect-square",
    wide: "aspect-[16/9]",
  };

  return (
    <figure className={`w-full text-center ${className}`}>
      {/* Frame Container */}
      <div className="p-1 border-2 border-ink-rule bg-paper-white shadow-2xs inline-block w-full">
        <div
          className={`relative w-full overflow-hidden border border-ink-rule/30 ${aspectClasses[aspectRatio]} bg-paper-card flex items-center justify-center`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            className={objectFit === "cover" ? "object-cover" : "object-contain"}
          />
        </div>
      </div>
    </figure>
  );
}
