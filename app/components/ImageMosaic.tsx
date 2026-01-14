"use client";

import { useEffect, useRef, useState } from "react";

const mosaicImages = [
  { src: "/pic15.jpeg", alt: "Luxury lifestyle", size: "large" },
  { src: "/pic16.jpeg", alt: "Premium fragrance", size: "small" },
  { src: "/pic17.jpeg", alt: "Elegant home", size: "small" },
  { src: "/pic18.jpeg", alt: "Cozy luxury", size: "medium" },
  { src: "/pic19.jpeg", alt: "Beauty essentials", size: "small" },
  { src: "/pic2.jpeg", alt: "Home comfort", size: "large" },
  { src: "/fragrance1.jpg", alt: "Signature scents", size: "medium" },
  { src: "/skincare1.jpg", alt: "Skincare", size: "small" },
];

export default function ImageMosaic() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the animations
            mosaicImages.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index]);
              }, index * 150);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-extralight tracking-[0.4em] uppercase text-gray-400 mb-3">
            Gallery
          </p>
          <h2 className="text-2xl md:text-4xl font-extralight tracking-[0.15em] uppercase mb-4">
            The Lyanne&apos;s Aesthetic
          </h2>
          <div className="w-16 h-px bg-black/20 mx-auto" />
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {mosaicImages.map((image, index) => {
            const isVisible = visibleItems.includes(index);
            const sizeClasses = {
              large: "col-span-2 row-span-2",
              medium: "col-span-2 md:col-span-1 row-span-1",
              small: "col-span-1 row-span-1",
            };

            return (
              <div
                key={index}
                className={`
                  ${sizeClasses[image.size as keyof typeof sizeClasses]}
                  relative overflow-hidden group cursor-pointer
                  transition-all duration-700 ease-out
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="aspect-square w-full h-full">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${image.src})` }}
                  />
                  {/* Elegant overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
                  
                  {/* Subtle corner accents on hover */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-l border-t border-white/0 group-hover:border-white/70 transition-all duration-500" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-r border-b border-white/0 group-hover:border-white/70 transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Elegant tagline */}
        <p className="text-center mt-12 text-xs font-extralight tracking-[0.3em] uppercase text-gray-400">
          Curated for the extraordinary
        </p>
      </div>
    </section>
  );
}
