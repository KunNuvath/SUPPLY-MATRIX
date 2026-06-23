import Image from "next/image";
import { Heart, Plus } from "lucide-react";
import type { Product } from "../_data/products";

const tagStyles: Record<string, string> = {
  organic: "bg-emerald-50 text-emerald-700",
  new: "bg-sky-50 text-sky-700",
  halal: "bg-teal-50 text-teal-700",
  freerange: "bg-amber-50 text-amber-700",
};

export default function ProductCard({ product }: { product: Product }) {
  const {
    name,
    supplier,
    image,
    price,
    oldPrice,
    priceKhr,
    tag,
    badge,
    stock,
    bundle,
  } = product;

  return (
    <div className="group rounded-xl2 border border-black/5 bg-white overflow-hidden hover:shadow-card-hover transition-shadow flex flex-col">
      <div className="relative aspect-[4/3] bg-gray-50">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
        />
        {badge && (
          <span
            className={`absolute top-2.5 left-2.5 rounded-md px-2 py-1 text-[11px] font-bold ${
              badge.tone === "discount"
                ? "bg-accent text-white"
                : "bg-ink text-white"
            }`}
          >
            {badge.label}
          </span>
        )}
        <button
          aria-label="Save to wishlist"
          className="absolute top-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-ink/60 hover:text-accent shadow-sm"
        >
          <Heart className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="p-3.5 flex flex-col flex-1">
        {tag && (
          <span
            className={`self-start mb-1.5 rounded-md px-2 py-0.5 text-[11px] font-semibold ${tagStyles[tag.tone]}`}
          >
            {tag.label}
          </span>
        )}
        <h3 className="text-sm font-semibold text-ink leading-snug line-clamp-2">
          {name}
        </h3>
        <p className="mt-0.5 text-xs text-ink/50">{supplier}</p>

        {bundle && (
          <p className="mt-2 rounded-md bg-accent-light px-2 py-1 text-[11px] font-medium text-accent-dark text-center">
            {bundle}
          </p>
        )}

        <div className="mt-2.5 flex items-baseline gap-1.5">
          <span className="text-lg font-extrabold text-ink">
            ${price.toFixed(2)}
          </span>
          {oldPrice && (
            <span className="text-xs text-ink/40 line-through">
              ${oldPrice.toFixed(2)}
            </span>
          )}
        </div>
        <p className="text-[11px] text-ink/45">
          ៛{priceKhr.toLocaleString()}
        </p>

        <p className="mt-1 flex items-center gap-1 text-[11px] font-medium">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              stock === "In Stock" ? "bg-emerald-500" : "bg-amber-500"
            }`}
          />
          <span
            className={
              stock === "In Stock" ? "text-emerald-600" : "text-amber-600"
            }
          >
            {stock}
          </span>
        </p>

        <button className="mt-3 flex items-center justify-center gap-1.5 rounded-full bg-brand py-2 text-sm font-semibold text-white hover:bg-brand-dark transition-colors">
          <Plus className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
