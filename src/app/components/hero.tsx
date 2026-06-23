import Image from "next/image";
import { Search, ChevronDown, ArrowRight } from "lucide-react";

const popularSearches = ["Rice", "Coffee", "Fresh Vegetables", "Fish Sauce"];

export default function Hero() {
  return (
    <section className="bg-brand-mint">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-5">
          {/* Main hero card */}
          <div className="relative overflow-hidden rounded-2xl min-h-[420px] flex items-end">
            <Image
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80"
              alt="Fresh vegetables and produce"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/55 to-brand-dark/10" />

            <div className="relative z-10 p-7 sm:p-9 w-full max-w-xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                  Grand Opening Sale
                </span>
                <span className="text-xs font-medium text-white/85">
                  Limited time offer
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white">
                Fresh Food &amp; Beverages
              </h1>
              <p className="mt-3 text-sm sm:text-[15px] text-white/85 max-w-md">
                Order fresh produce, quality meats, and local beverages from
                verified Cambodian suppliers.
              </p>

              <div className="mt-6 flex items-center gap-2 rounded-full bg-white p-1.5 shadow-card max-w-lg">
                <Search className="h-4 w-4 text-gray-400 ml-2.5 shrink-0" />
                <input
                  type="text"
                  placeholder="Search products, brands..."
                  className="flex-1 min-w-0 bg-transparent text-sm outline-none placeholder:text-gray-400 text-ink"
                />
                <button className="hidden sm:flex shrink-0 items-center gap-1 rounded-full px-3 py-2 text-sm text-ink/70 border-l border-black/5">
                  All Categories
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
                <button className="shrink-0 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-dark transition-colors">
                  Search
                </button>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
                <span className="text-white/80">Popular:</span>
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    className="rounded-full bg-white/15 px-3 py-1 text-white/95 hover:bg-white/25 transition-colors backdrop-blur-sm"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Side promo cards */}
          <div className="grid grid-rows-2 gap-5">
            <div className="relative overflow-hidden rounded-2xl min-h-[195px]">
              <Image
                src="https://images.unsplash.com/photo-1528825871115-3581a5387919?w=600&q=80"
                alt="Tropical fruits"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/10 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <span className="inline-block rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-brand-dark mb-2">
                  30% Off
                </span>
                <h3 className="text-lg font-bold text-white leading-snug">
                  Tropical Picks
                  <br />
                  30% Off
                </h3>
                <a
                  href="#"
                  className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-white underline underline-offset-2"
                >
                  Shop Now <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl min-h-[195px]">
              <Image
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80"
                alt="Local coffee"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/10 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <span className="inline-block rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-brand-dark mb-2">
                  Free Shipping
                </span>
                <h3 className="text-lg font-bold text-white leading-snug">
                  Local Coffee
                  <br />
                  Free Shipping
                </h3>
                <a
                  href="#"
                  className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-white underline underline-offset-2"
                >
                  Shop Now <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
