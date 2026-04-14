"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type CarouselImage = {
  src: string;
  alt: string;
};

type HeroCarouselProps = {
  images: CarouselImage[];
  intervalMs?: number;
};

export function HeroCarousel({ images, intervalMs = 5200 }: HeroCarouselProps) {
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
    <div className="relative h-[72vh] w-full overflow-hidden md:h-[84vh]">
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          sizes="100vw"
          priority={index === 0}
          className={`object-cover transition-opacity duration-700 ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {images.length > 1 ? (
        <>
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((image, index) => (
              <button
                key={`${image.src}-dot`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show hero image ${index + 1}`}
                aria-pressed={index === activeIndex}
                className={`inline-flex h-7 w-7 items-center justify-center rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)] ${
                  index === activeIndex
                    ? "bg-[var(--sand)] ring-2 ring-[var(--ink)]/70"
                    : "bg-[var(--ink)]/45 hover:bg-[var(--ink)]/70"
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-white/95" />
              </button>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
