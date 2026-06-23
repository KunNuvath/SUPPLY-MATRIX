import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function PromoBanners() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Weekend Deal */}
        <div className="relative overflow-hidden rounded-2xl min-h-[260px] flex items-center">
          <Image
            src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=900&q=80"
            alt="Fresh vegetables"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-transparent" />
          <div className="relative z-10 p-8 max-w-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-white">
                Weekend Deal
              </span>
              <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium text-white">
                Ends Sunday
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
              40% off Fresh Vegetables
            </h3>
            <p className="mt-2 text-sm text-white/85">
              Premium organic picks direct from local Cambodian farms.
            </p>
            <button className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-dark transition-colors">
              Shop Now <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* New Arrivals */}
        <div className="relative overflow-hidden rounded-2xl min-h-[260px] flex items-center">
          <Image
            src="https://images.unsplash.com/photo-1442550528053-c431ecb55509?w=900&q=80"
            alt="Coffee and tea"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-transparent" />
          <div className="relative z-10 p-8 max-w-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium text-white">
                New Arrivals
              </span>
              <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium text-white">
                New this week
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
              Kampot Coffee &amp; Teas
            </h3>
            <p className="mt-2 text-sm text-white/85">
              Discover single-origin Cambodian coffee beans and premium teas.
            </p>
            <button className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-dark transition-colors">
              Explore <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
