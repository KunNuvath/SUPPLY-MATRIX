import { ShoppingBasket } from "lucide-react";

const features = [
  "120+ verified Cambodian suppliers",
  "Next-day delivery in Phnom Penh & Siem Reap",
  "Pay with KHQR or ABA Bank Transfer",
];

export default function MarketingPanel() {
  return (
    <div className="relative flex min-h-[420px] flex-col bg-gradient-to-b from-blue-500 to-blue-700 px-8 py-10 text-white lg:min-h-screen lg:px-12 lg:py-12">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
          <ShoppingBasket className="h-5 w-5 text-emerald-700" strokeWidth={2.5} />
        </div>
        <span className="text-lg font-bold tracking-wide">SUPPY-MATRIX</span>
      </div>

      <div className="mt-12 flex flex-1 flex-col justify-center lg:mt-0">
        <h1 className="max-w-md text-3xl font-bold leading-tight tracking-tight lg:text-4xl">
          Cambodia&apos;s freshest food marketplace
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-blue-50 lg:text-lg">
          Order from verified local farms and suppliers. Fresh produce, quality
          meats, local beverages — delivered next day.
        </p>

        <ul className="mt-8 space-y-4">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-white/90" />
              <span className="text-sm leading-relaxed text-blue-50 lg:text-base">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 border-t border-white/25 pt-8 lg:mt-auto">
        <blockquote className="text-sm italic leading-relaxed text-blue-50 lg:text-base">
          &ldquo;The freshest produce at the best prices — our restaurant relies
          on SUPPY-MATRIX every week.&rdquo;
        </blockquote>
        <div className="mt-4 flex items-center gap-3">
          <div className="h-10 w-10 shrink-0 rounded-full bg-white/20" />
          <div>
            <p className="text-sm font-semibold">Sopheak Nhem</p>
            <p className="text-xs text-blue-100">Head Chef, Malis Restaurant</p>
          </div>
        </div>
      </div>
    </div>
  );
}
