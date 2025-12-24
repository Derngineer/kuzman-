import TopContactBar from "./components/TopContactBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandCarousel from "./components/BrandCarousel";
import ParallaxSection from "./components/ParallaxSection";
import QuickActionFAB from "./components/QuickActionFAB";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <TopContactBar />
      <Navbar />
      <Hero />
      <BrandCarousel />

      {/* Beauty Section */}
      <ParallaxSection
        id="beauty"
        imageSrc="/image4.jpg"
        title="Beauty"
        subtitle="Curated skincare, makeup, and beauty essentials from the world's most coveted brands."
        ctaText="Explore Beauty"
        ctaHref="#contact"
      />

      {/* Featured Products Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extralight tracking-[0.2em] uppercase text-center mb-4">
            Featured
          </h2>
          <p className="text-xs font-extralight tracking-widest text-center text-gray-500 mb-12">
            Handpicked luxury for discerning taste
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {[
              { title: "Skincare", image: "/image5.jpg" },
              { title: "Makeup", image: "/image6.jpg" },
              { title: "Fragrance", image: "/image7.jpg" },
            ].map((item) => (
              <div
                key={item.title}
                className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-end justify-center pb-10">
                  <span className="text-white text-sm font-extralight tracking-[0.3em] uppercase">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Home Luxury Section */}
      <ParallaxSection
        id="home-luxury"
        imageSrc="/image8.jpg"
        title="Home Luxury"
        subtitle="Elevate your living space with premium covers, sheets, blankets, and home accessories."
        ctaText="Explore Home"
        ctaHref="#contact"
        overlayOpacity={0.4}
      />

      {/* Home Products Grid */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {[
              { title: "Bedding", image: "/image9.jpg" },
              { title: "Blankets & Throws", image: "/image10.jpg" },
            ].map((item) => (
              <div
                key={item.title}
                className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-lg font-extralight tracking-[0.3em] uppercase">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 bg-white text-center">
        <h2 className="text-2xl md:text-4xl font-extralight tracking-[0.15em] uppercase mb-4">
          Experience Luxury
        </h2>
        <p className="text-sm font-extralight tracking-widest text-gray-500 mb-10 max-w-md mx-auto">
          Connect with us to discover our full collection and exclusive offers.
        </p>
        <a
          href="https://wa.me/263788766757?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.%20Please%20assist%20me."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-black bg-transparent px-10 py-4 text-xs font-extralight tracking-widest uppercase hover:bg-black hover:text-white transition-colors"
        >
          Get in Touch
        </a>
      </section>

      <Footer />
      <QuickActionFAB />
    </>
  );
}
