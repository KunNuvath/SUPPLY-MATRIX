import { Smartphone, Apple, PlayCircle } from "lucide-react";

export default function AppBanner() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 pb-10">
      <div className="rounded-2xl bg-brand-light px-6 py-8 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <span className="hidden sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand text-white">
            <Smartphone className="h-7 w-7" />
          </span>
          <div>
            <h3 className="text-lg font-bold text-ink">
              Get the SUPPY-MATRIX App
            </h3>
            <p className="text-sm text-ink/55 mt-0.5">
              Order on the go. Track deliveries. Get exclusive app-only deals.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button className="flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white hover:bg-black transition-colors">
            <Apple className="h-4 w-4" />
            App Store
          </button>
          <button className="flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white hover:bg-black transition-colors">
            <PlayCircle className="h-4 w-4" />
            Google Play
          </button>
        </div>
      </div>
    </section>
  );
}
