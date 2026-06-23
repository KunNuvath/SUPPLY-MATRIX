import { Globe } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-brand-dark text-white text-xs">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4">
        <p className="truncate">
          Free delivery on orders over $30 · KHQR payments accepted
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <span className="hidden sm:inline text-white/80">
            1 USD = 4,100 KHR
          </span>
          <div className="flex items-center rounded-full bg-white/10 p-0.5 text-[11px] font-medium">
            <span className="rounded-full bg-brand px-2 py-0.5 text-white">
              USD
            </span>
            <span className="px-2 py-0.5 text-white/70">KHR</span>
          </div>
          <button className="hidden sm:flex items-center gap-1 text-white/80 hover:text-white">
            <Globe className="h-3.5 w-3.5" />
            EN
          </button>
        </div>
      </div>
    </div>
  );
}
