import {
  Carrot,
  Beef,
  Egg,
  Coffee,
  Wheat,
  FlaskConical,
  Snowflake,
  Package,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    icon: Carrot,
    name: "Fresh Produce",
    sub: "Vegetables, Fruits",
    bg: "bg-emerald-50",
    fg: "text-emerald-600",
  },
  {
    icon: Beef,
    name: "Meat & Seafood",
    sub: "Fresh & Frozen",
    bg: "bg-rose-50",
    fg: "text-rose-500",
  },
  {
    icon: Egg,
    name: "Dairy & Eggs",
    sub: "Milk, Cheese, Eggs",
    bg: "bg-amber-50",
    fg: "text-amber-500",
  },
  {
    icon: Coffee,
    name: "Beverages",
    sub: "Coffee, Tea, Juices",
    bg: "bg-orange-50",
    fg: "text-orange-500",
  },
  {
    icon: Wheat,
    name: "Dry Goods",
    sub: "Rice, Flour, Pasta",
    bg: "bg-yellow-50",
    fg: "text-yellow-600",
  },
  {
    icon: FlaskConical,
    name: "Condiments",
    sub: "Sauces & Spices",
    bg: "bg-red-50",
    fg: "text-red-500",
  },
  {
    icon: Snowflake,
    name: "Frozen Foods",
    sub: "Ready Meals",
    bg: "bg-sky-50",
    fg: "text-sky-500",
  },
  {
    icon: Package,
    name: "Packaging",
    sub: "Supplies & Bags",
    bg: "bg-violet-50",
    fg: "text-violet-500",
  },
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-end justify-between mb-5">
        <h2 className="text-2xl font-extrabold text-ink">Shop by Category</h2>
        <a
          href="#"
          className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-brand-dark"
        >
          View all categories <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {categories.map(({ icon: Icon, name, sub, bg, fg }) => (
          <a
            key={name}
            href="#"
            className="flex flex-col items-center text-center gap-2.5 rounded-xl2 border border-black/5 bg-white px-3 py-5 hover:shadow-card-hover hover:-translate-y-0.5 transition-all"
          >
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-full ${bg} ${fg}`}
            >
              <Icon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-semibold text-ink">
                {name}
              </span>
              <span className="block text-[11px] text-ink/50">{sub}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
