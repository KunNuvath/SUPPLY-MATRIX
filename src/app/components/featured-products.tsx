import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import ProductCard from "./product-card";

const filters = ["All", "Organic", "On Sale", "New"];

export default function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-extrabold text-ink">
            Featured Products
          </h2>
          <p className="text-sm text-ink/50 mt-1">
            Hand-picked fresh arrivals and bestsellers
          </p>
        </div>

        <div className="flex items-center gap-2">
          {filters.map((filter, i) => (
            <button
              key={filter}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                i === 0
                  ? "bg-brand text-white"
                  : "border border-black/10 text-ink/70 hover:border-brand/40 hover:text-brand"
              }`}
            >
              {filter}
            </button>
          ))}
          <a
            href="#"
            className="ml-1 inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-brand-dark"
          >
            View all <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
