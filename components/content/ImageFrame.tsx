import Image from 'next/image'

interface ImageFrameProps {
  src: string
  alt: string
  priority?: boolean
  aspectRatio?: 'portrait' | 'landscape' | 'square' | 'wide'
  objectFit?: 'cover' | 'contain'
  className?: string
}

export default function ImageFrame({
  src,
  alt,
  priority = false,
  aspectRatio = 'portrait',
  objectFit = 'contain',
  className = '',
}: ImageFrameProps) {
  const aspectClasses = {
    portrait: 'aspect-[4/5]',
    landscape: 'aspect-[16/10]',
    square: 'aspect-square',
    wide: 'aspect-[16/9]',
  }

  return (
    <figure className={`w-full text-center ${className}`}>
      {/* Frame Container */}
      <div className="border-ink-rule bg-paper-white inline-block w-full border-2 p-1 shadow-2xs">
        <div
          className={`border-ink-rule/30 relative w-full overflow-hidden border ${aspectClasses[aspectRatio]} bg-paper-card flex items-center justify-center`}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            className={objectFit === 'cover' ? 'object-cover' : 'object-contain'}
          />
        </div>
      </div>
    </figure>
  )
}
