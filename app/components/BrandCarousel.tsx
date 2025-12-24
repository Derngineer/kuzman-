"use client";

const brands = [
  { name: "Louis Vuitton", logo: "/images/brands/lv.svg" },
  { name: "Hermès", logo: "/images/brands/hermes.svg" },
  { name: "Nivea", logo: "/images/brands/nivea.svg" },
  { name: "Zara", logo: "/images/brands/zara.svg" },
  { name: "Dior", logo: "/images/brands/dior.svg" },
  { name: "Chanel", logo: "/images/brands/chanel.svg" },
  { name: "Estée Lauder", logo: "/images/brands/estee.svg" },
  { name: "MAC", logo: "/images/brands/mac.svg" },
];

export default function BrandCarousel() {
  return (
    <section id="brands" className="py-16 bg-white overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-extralight tracking-[0.2em] uppercase">
          Our Brands
        </h2>
        <p className="text-xs font-extralight tracking-widest text-muted mt-2">
          Curated luxury from world-renowned names
        </p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full">
        <div className="flex animate-scroll whitespace-nowrap">
          {/* First set */}
          {brands.map((brand, i) => (
            <div
              key={`brand-1-${i}`}
              className="flex-shrink-0 w-40 h-20 mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              {/* Placeholder for brand logo – replace src with actual logos */}
              <div className="text-lg font-extralight tracking-widest uppercase text-center">
                {brand.name}
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {brands.map((brand, i) => (
            <div
              key={`brand-2-${i}`}
              className="flex-shrink-0 w-40 h-20 mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <div className="text-lg font-extralight tracking-widest uppercase text-center">
                {brand.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
