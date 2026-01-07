"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const newArrivals = [
  { 
    src: "/image17.jpeg", 
    title: "Exclusive Collection",
    category: "New In"
  },
  { 
    src: "/image18.jpeg", 
    title: "Premium Selection",
    category: "Featured"
  },
  { 
    src: "/image19.jpeg", 
    title: "Luxury Essentials",
    category: "Trending"
  },
  { 
    src: "/image20.jpeg", 
    title: "Curated Picks",
    category: "Best Seller"
  },
];

export default function ProductShowcase() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            newArrivals.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index]);
              }, index * 200);
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
    <section ref={sectionRef} className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-extralight tracking-[0.4em] uppercase text-gray-400 mb-3">
            Just Arrived
          </p>
          <h2 className="text-2xl md:text-4xl font-extralight tracking-[0.15em] uppercase mb-4">
            New Arrivals
          </h2>
          <div className="w-16 h-px bg-black/20 mx-auto mb-6" />
          <p className="text-sm font-extralight tracking-widest text-gray-500 max-w-md mx-auto">
            Discover our latest curated selection of premium products
          </p>
        </div>

        {/* Product Grid - Asymmetric Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {newArrivals.map((product, index) => {
            const isVisible = visibleItems.includes(index);
            const isHovered = hoveredIndex === index;
            
            // Create asymmetric heights for visual interest
            const heightClass = index % 2 === 0 ? "aspect-[3/4]" : "aspect-[3/5]";
            
            return (
              <div
                key={index}
                className={`
                  relative overflow-hidden group cursor-pointer
                  transition-all duration-700 ease-out
                  ${heightClass}
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
                  ${index === 0 ? "md:col-span-2 md:row-span-2 md:aspect-square" : ""}
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image */}
                <Image
                  src={product.src}
                  alt={product.title}
                  fill
                  className={`
                    object-cover transition-transform duration-700
                    ${isHovered ? "scale-110" : "scale-100"}
                  `}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                
                {/* Gradient Overlay */}
                <div 
                  className={`
                    absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0
                    transition-opacity duration-500
                    ${isHovered ? "opacity-100" : "opacity-70"}
                  `}
                />
                
                {/* Category Badge */}
                <div 
                  className={`
                    absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm
                    transition-all duration-500
                    ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
                  `}
                >
                  <span className="text-[10px] font-light tracking-[0.2em] uppercase text-black">
                    {product.category}
                  </span>
                </div>
                
                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
                  <h3 
                    className={`
                      text-white text-sm md:text-base font-extralight tracking-[0.2em] uppercase
                      transition-all duration-500
                      ${isHovered ? "translate-y-0" : "translate-y-2"}
                    `}
                  >
                    {product.title}
                  </h3>
                  
                  {/* Enquire Link */}
                  <a
                    href={`https://wa.me/263788766757?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(product.title)}%20from%20your%20New%20Arrivals.%20Could%20you%20please%20share%20more%20details%3F`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      inline-flex items-center gap-2 mt-3 text-white/80 hover:text-white
                      text-xs font-extralight tracking-widest uppercase
                      transition-all duration-500
                      ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                    `}
                  >
                    <span>Enquire</span>
                    <svg 
                      className="w-3 h-3 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
                
                {/* Corner Accents */}
                <div 
                  className={`
                    absolute top-4 right-4 w-8 h-8 border-t border-r border-white/0
                    transition-all duration-500
                    ${isHovered ? "border-white/50 scale-100" : "scale-75"}
                  `}
                />
                <div 
                  className={`
                    absolute bottom-4 left-4 w-8 h-8 border-b border-l border-white/0
                    transition-all duration-500
                    ${isHovered ? "border-white/50 scale-100" : "scale-75"}
                  `}
                />
              </div>
            );
          })}
        </div>
        
        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/263788766757?text=Hi%2C%20I%27d%20like%20to%20see%20more%20of%20your%20new%20arrivals%20and%20latest%20products.%20Please%20share%20your%20catalog."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-black bg-transparent px-8 py-3 text-xs font-extralight tracking-widest uppercase hover:bg-black hover:text-white transition-colors"
          >
            View All New Arrivals
          </a>
        </div>
      </div>
    </section>
  );
}
