"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/image3.jpg"
        alt="Luxury beauty and lifestyle"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[0.2em] uppercase mb-6">
          Lyanne&apos;s
        </h1>
        <p className="text-sm md:text-base font-extralight tracking-widest mb-10 max-w-md mx-auto">
          Premium Beauty &amp; Home Luxury
        </p>
        <a
          href="#brands"
          className="inline-block border border-white bg-transparent px-8 py-3 text-xs font-extralight tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
        >
          Explore
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
