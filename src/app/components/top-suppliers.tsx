import { Building2, BadgeCheck, MapPin, Star, ArrowRight } from "lucide-react";
import { suppliers } from "@/lib/products";

export default function TopSuppliers() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-extrabold text-ink">Top Suppliers</h2>
          <p className="text-sm text-ink/50 mt-1">
            Trusted and verified local Cambodian suppliers
          </p>
        </div>
        <a
          href="#"
          className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-brand-dark"
        >
          View all suppliers <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {suppliers.map((s) => (
          <div
            key={s.name}
            className="rounded-xl2 border border-black/5 bg-white p-5 hover:shadow-card-hover transition-shadow"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
                <Building2 className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="flex items-center gap-1 text-sm font-semibold text-ink">
                  <span className="truncate">{s.name}</span>
                  <BadgeCheck className="h-4 w-4 text-brand shrink-0" />
                </p>
                <p className="text-xs text-ink/50">{s.type}</p>
                <p className="mt-0.5 flex items-center gap-1 text-xs text-ink/45">
                  <MapPin className="h-3 w-3" />
                  {s.location}
                </p>
              </div>
            </div>

            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {s.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-gray-50 px-2 py-1 text-[11px] font-medium text-ink/60"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-3.5">
              <p className="flex items-center gap-1 text-xs font-semibold text-ink">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                {s.rating}
                <span className="font-normal text-ink/40">
                  ({s.reviews})
                </span>
              </p>
              <a
                href="#"
                className="flex items-center gap-1 text-xs font-semibold text-brand hover:text-brand-dark"
              >
                View <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
