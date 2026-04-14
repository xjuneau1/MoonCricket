"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type MiniCarouselImage = {
  src: string;
  alt: string;
};

type MiniImageCarouselProps = {
  images: MiniCarouselImage[];
  intervalMs?: number;
};

export function MiniImageCarousel({ images, intervalMs = 5200 }: MiniImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) {
      return;
    }

    const timerId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(timerId);
  }, [images.length, intervalMs]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="relative mt-4 h-32 overflow-hidden rounded-xl border border-[var(--brand)]/20 bg-black/10">
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 360px"
          className={`object-cover transition-opacity duration-500 ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      {images.length > 1 ? (
        <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
          {images.map((image, index) => (
            <button
              key={`${image.src}-dot`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show image ${index + 1}`}
              aria-pressed={index === activeIndex}
              className={`inline-flex h-5 w-5 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)] ${
                index === activeIndex ? "bg-[var(--sand)]" : "bg-white/75 hover:bg-white"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--ink)]/85" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
