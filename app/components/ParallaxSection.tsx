"use client";

import { useEffect, useRef, useState } from "react";

interface ParallaxSectionProps {
  id: string;
  imageSrc: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  overlayOpacity?: number;
}

export default function ParallaxSection({
  id,
  imageSrc,
  title,
  subtitle,
  ctaText,
  ctaHref = "#",
  overlayOpacity = 0.3,
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image - works better on mobile */}
      <div 
        className="absolute inset-0 parallax"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      />

      {/* Content */}
      <div
        className={`relative z-10 text-center text-white px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-5xl font-extralight tracking-[0.15em] uppercase mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm md:text-base font-extralight tracking-widest mb-8 max-w-lg mx-auto">
            {subtitle}
          </p>
        )}
        {ctaText && (
          <a
            href={ctaHref}
            className="inline-block border border-white bg-transparent px-8 py-3 text-xs font-extralight tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}
