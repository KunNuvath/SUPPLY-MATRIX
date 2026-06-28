"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import {
  ChevronRight,
  ChevronDown,
  LayoutGrid,
  List,
  X,
  Check,
  SlidersHorizontal,
  Plus,
  Heart,
} from "lucide-react";
import { products as baseProducts, Product } from "@/lib/products";

// Define local Categories metadata matching the mockup counts
const CATEGORIES = [
  { name: "All Products", count: 1240, id: "all" },
  { name: "Fresh Produce", count: 942, id: "fresh-produce" },
  { name: "Vegetables", count: 180, id: "vegetables", isSub: true },
  { name: "Fruits", count: 110, id: "fruits", isSub: true },
  { name: "Mushrooms", count: 52, id: "mushrooms", isSub: true },
  { name: "Meat & Seafood", count: 198, id: "meat-seafood" },
  { name: "Dairy & Eggs", count: 87, id: "dairy-eggs" },
  { name: "Beverages", count: 218, id: "beverages" },
  { name: "Dry Goods", count: 193, id: "dry-goods" },
  { name: "Condiments & Sauces", count: 94, id: "condiments-sauces" },
  { name: "Frozen Foods", count: 78, id: "frozen-foods" },
  { name: "Packaging & Supplies", count: 61, id: "packaging-supplies" },
];

const CERTIFICATIONS = [
  { name: "Organic", count: 318, id: "organic" },
  { name: "Halal", count: 249, id: "halal" },
  { name: "Free-Range", count: 62, id: "freerange" },
  { name: "Non-GMO", count: 144, id: "nongmo" },
];

const ORIGINS = [
  "All Origins",
  "Kandal",
  "Kampot",
  "Kampong Chhang",
  "Mondulkiri",
  "Takeo",
  "Phnom Penh",
  "Siem Reap",
  "Battambang",
];

const SUPPLIERS = [
  "All Suppliers",
  "GreenFarm Cambodia",
  "Mekong Fresh Co.",
  "Cambodian Brew Co.",
  "Rice Kingdom KH",
  "Happy Hen Farm",
  "Kampot Gold",
];

// Helper to generate 1,240 items deterministically from our 12 base products
function generate1240Products(): Product[] {
  const generated: Product[] = [];
  const totalItems = 1240;

  // Let's create high quality mock products
  for (let i = 0; i < totalItems; i++) {
    const baseIndex = i % baseProducts.length;
    const base = baseProducts[baseIndex];

    const id = `${base.id}-${i}`;
    
    // Vary the name slightly
    let name = base.name;
    if (i >= baseProducts.length) {
      name = `${base.name} #${i + 1}`;
    }

    // Determine category based on index to distribute items realistically
    let category = "vegetables";
    let tag = base.tag;
    const pct = i % 100;

    if (pct < 15) {
      category = "vegetables";
      tag = { label: "Organic", tone: "organic" };
    } else if (pct < 25) {
      category = "fruits";
      tag = { label: "Organic", tone: "organic" };
    } else if (pct < 30) {
      category = "mushrooms";
      tag = { label: "Organic", tone: "organic" };
    } else if (pct < 45) {
      category = "meat-seafood";
      tag = undefined;
    } else if (pct < 55) {
      category = "dairy-eggs";
      tag = { label: "Free-Range", tone: "freerange" };
    } else if (pct < 70) {
      category = "beverages";
      tag = undefined;
    } else if (pct < 85) {
      category = "dry-goods";
      tag = { label: "Halal", tone: "halal" };
    } else if (pct < 92) {
      category = "condiments-sauces";
      tag = undefined;
    } else if (pct < 98) {
      category = "frozen-foods";
      tag = { label: "Halal", tone: "halal" };
    } else {
      category = "packaging-supplies";
      tag = undefined;
    }

    // Determine certifications array
    const certs: ("organic" | "halal" | "freerange" | "nongmo")[] = [];
    if (tag?.tone === "organic") certs.push("organic");
    if (tag?.tone === "halal") certs.push("halal");
    if (tag?.tone === "freerange") certs.push("freerange");
    if (i % 6 === 0) certs.push("nongmo");

    // Cycle through origins
    const origins = ["Kandal", "Kampot", "Kampong Chhang", "Mondulkiri", "Takeo", "Phnom Penh", "Siem Reap", "Battambang"];
    const origin = origins[i % origins.length];

    // Cycle through suppliers
    const suppliers = [
      "GreenFarm Cambodia",
      "Mekong Fresh Co.",
      "Cambodian Brew Co.",
      "Rice Kingdom KH",
      "Happy Hen Farm",
      "Kampot Gold",
    ];
    const supplierName = suppliers[i % suppliers.length];
    
    // Vary the package / description
    const desc = i % 2 === 0 ? "500g pack" : "1kg";
    const supplier = `${supplierName} · ${desc}`;

    // Vary pricing deterministically
    const priceMultiplier = 0.5 + ((i * 7) % 35) / 10; // values from 0.5 to 3.9
    let price = Number((base.price * priceMultiplier).toFixed(2));
    
    // Cap price for diversity and limit values
    if (price > 45) price = 42.5;
    if (price < 1.2) price = 1.5;

    let oldPrice: number | undefined = undefined;
    if (i % 4 === 0) {
      oldPrice = Number((price * 1.2).toFixed(2));
    }

    const priceKhr = Math.round(price * 4100);

    // Stock
    const stock: "In Stock" | "Low Stock" = i % 8 === 0 ? "Low Stock" : "In Stock";

    // Bundle
    let bundle = undefined;
    if (i % 9 === 0 && category === "dairy-eggs") {
      bundle = "2 trays for $5.00";
    } else if (i % 11 === 0 && category === "meat-seafood") {
      bundle = "3 for $24";
    } else if (i % 13 === 0 && price < 3) {
      bundle = "6 for $12";
    }

    // Badge
    let badge = undefined;
    if (oldPrice) {
      const discountPct = Math.round(((oldPrice - price) / oldPrice) * 100);
      badge = { label: `-${discountPct}%`, tone: "discount" as const };
    } else if (i % 10 === 0) {
      badge = { label: "NEW", tone: "new" as const };
    }

    generated.push({
      id,
      name,
      supplier,
      image: base.image, // Reuse base image for mock data
      price,
      oldPrice,
      priceKhr,
      tag,
      badge,
      stock,
      bundle,
      category,
      certifications: certs,
      origin,
    });
  }

  return generated;
}

const tagStyles: Record<string, string> = {
  organic: "bg-emerald-50 text-emerald-700",
  new: "bg-sky-50 text-sky-700",
  halal: "bg-teal-50 text-teal-700",
  freerange: "bg-amber-50 text-amber-700",
};

// Main Catalog Content Component (Wrapped in Suspense)
function CatalogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Search query from Header URL parameter
  const searchQuery = searchParams.get("search") || "";

  // All products (cached generation)
  const allProducts = useMemo(() => generate1240Products(), []);

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50]);
  const [selectedCerts, setSelectedCerts] = useState<string[]>([]);
  const [selectedOrigin, setSelectedOrigin] = useState<string>("All Origins");
  const [selectedSupplier, setSelectedSupplier] = useState<string>("All Suppliers");
  const [inStockOnly, setInStockOnly] = useState<boolean>(true); // default true from mockup
  const [discountAvailable, setDiscountAvailable] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState<string>("Popularity");
  const [itemsPerPage, setItemsPerPage] = useState<number>(24);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);

  // Sync category state with search query resets or resets in general
  useEffect(() => {
    setCurrentPage(1);
  }, [
    selectedCategory,
    priceRange,
    selectedCerts,
    selectedOrigin,
    selectedSupplier,
    inStockOnly,
    discountAvailable,
    sortOption,
    itemsPerPage,
    searchQuery,
  ]);

  // Compute filtered products
  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    // Filter by Search Query
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.supplier.toLowerCase().includes(q)
      );
    }

    // Filter by Category
    if (selectedCategory !== "all") {
      if (selectedCategory === "fresh-produce") {
        // Includes vegetables, fruits, mushrooms
        result = result.filter((p) =>
          ["vegetables", "fruits", "mushrooms"].includes(p.category)
        );
      } else {
        result = result.filter((p) => p.category === selectedCategory);
      }
    }

    // Filter by Price Range
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Filter by Certifications (AND relation: must have all checked certs)
    if (selectedCerts.length > 0) {
      result = result.filter((p) => {
        const certs = p.certifications || [];
        return selectedCerts.every((c) => certs.includes(c as any));
      });
    }

    // Filter by Origin
    if (selectedOrigin !== "All Origins") {
      result = result.filter((p) => p.origin === selectedOrigin);
    }

    // Filter by Supplier
    if (selectedSupplier !== "All Suppliers") {
      result = result.filter((p) => p.supplier.includes(selectedSupplier));
    }

    // Filter by Stock Status
    if (inStockOnly) {
      result = result.filter((p) => p.stock === "In Stock");
    }

    // Filter by Discount
    if (discountAvailable) {
      result = result.filter((p) => p.badge?.tone === "discount");
    }

    // Sort Products
    if (sortOption === "Popularity") {
      // Deterministic sort based on id/price to mimic popularity
      result.sort((a, b) => (a.priceKhr % 3) - (b.priceKhr % 3));
    } else if (sortOption === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === "Newest") {
      // Render NEW items first
      result.sort((a, b) => {
        const aNew = a.badge?.tone === "new" ? 1 : 0;
        const bNew = b.badge?.tone === "new" ? 1 : 0;
        return bNew - aNew;
      });
    }

    return result;
  }, [
    allProducts,
    searchQuery,
    selectedCategory,
    priceRange,
    selectedCerts,
    selectedOrigin,
    selectedSupplier,
    inStockOnly,
    discountAvailable,
    sortOption,
  ]);

  // Paginated products
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));

  // Category change wrapper
  const handleCategoryClick = (catId: string) => {
    setSelectedCategory(catId);
  };

  // Toggle certification checkboxes
  const toggleCert = (certId: string) => {
    setSelectedCerts((prev) =>
      prev.includes(certId) ? prev.filter((c) => c !== certId) : [...prev, certId]
    );
  };

  // Clear all filters
  const handleClearAll = () => {
    setSelectedCategory("all");
    setPriceRange([0, 50]);
    setSelectedCerts([]);
    setSelectedOrigin("All Origins");
    setSelectedSupplier("All Suppliers");
    setInStockOnly(false);
    setDiscountAvailable(false);
  };

  // Active filter tags display
  const activeTags = useMemo(() => {
    const tags: { label: string; onDismiss: () => void }[] = [];
    if (inStockOnly) {
      tags.push({ label: "In Stock", onDismiss: () => setInStockOnly(false) });
    }
    if (discountAvailable) {
      tags.push({ label: "Discount", onDismiss: () => setDiscountAvailable(false) });
    }
    if (selectedCategory !== "all") {
      const catName = CATEGORIES.find((c) => c.id === selectedCategory)?.name || selectedCategory;
      tags.push({ label: `Category: ${catName}`, onDismiss: () => setSelectedCategory("all") });
    }
    if (priceRange[0] > 0 || priceRange[1] < 50) {
      tags.push({
        label: `$${priceRange[0]} - $${priceRange[1]}${priceRange[1] === 50 ? "+" : ""}`,
        onDismiss: () => setPriceRange([0, 50]),
      });
    }
    selectedCerts.forEach((cert) => {
      const name = CERTIFICATIONS.find((c) => c.id === cert)?.name || cert;
      tags.push({ label: name, onDismiss: () => toggleCert(cert) });
    });
    if (selectedOrigin !== "All Origins") {
      tags.push({ label: `Origin: ${selectedOrigin}`, onDismiss: () => setSelectedOrigin("All Origins") });
    }
    if (selectedSupplier !== "All Suppliers") {
      tags.push({ label: `Supplier: ${selectedSupplier}`, onDismiss: () => setSelectedSupplier("All Suppliers") });
    }
    return tags;
  }, [inStockOnly, discountAvailable, selectedCategory, priceRange, selectedCerts, selectedOrigin, selectedSupplier]);

  // Generate pagination page numbers matching mockup `< 1 2 3 ... 52 >`
  const renderPaginationButtons = () => {
    const buttons: (number | string)[] = [];
    const maxVisible = 3;

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      if (currentPage <= maxVisible) {
        buttons.push(1, 2, 3, "...", totalPages);
      } else if (currentPage > totalPages - maxVisible) {
        buttons.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        buttons.push(1, "...", currentPage, "...", totalPages);
      }
    }

    return (
      <div className="flex items-center gap-1.5 mt-8 justify-center">
        {/* Previous */}
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className={`flex h-8 w-8 items-center justify-center rounded-lg border border-black/10 text-ink/70 hover:border-brand/40 hover:text-brand transition-colors disabled:opacity-30 disabled:pointer-events-none`}
        >
          &lt;
        </button>

        {buttons.map((btn, idx) => {
          if (btn === "...") {
            return (
              <span key={`dots-${idx}`} className="px-1 text-ink/40 text-sm">
                ...
              </span>
            );
          }
          return (
            <button
              key={`page-${btn}`}
              onClick={() => setCurrentPage(Number(btn))}
              className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
                currentPage === btn
                  ? "bg-brand text-white"
                  : "border border-black/10 text-ink/70 hover:border-brand/40 hover:text-brand"
              }`}
            >
              {btn}
            </button>
          );
        })}

        {/* Next */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className={`flex h-8 w-8 items-center justify-center rounded-lg border border-black/10 text-ink/70 hover:border-brand/40 hover:text-brand transition-colors disabled:opacity-30 disabled:pointer-events-none`}
        >
          &gt;
        </button>
      </div>
    );
  };

  return (
    <div className="mx-auto max-w-[1280px] w-full px-4 sm:px-6 lg:px-8 py-6 flex flex-col flex-1">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-1 text-xs text-ink/40 font-medium">
        <a href="/" className="hover:text-brand transition-colors">
          Home
        </a>
        <ChevronRight className="h-3 w-3 shrink-0" />
        <span className="text-ink/70">All Products</span>
      </div>

      {/* Title block */}
      <div className="mt-2.5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-brand-dark leading-tight tracking-tight">
            All Products
          </h1>
          <p className="text-sm text-ink/50 mt-1">
            {filteredProducts.length.toLocaleString()} products from verified Cambodian suppliers
          </p>
        </div>

        {/* Sort, View and Mobile Filter Toggles */}
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="lg:hidden flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-ink/80"
          >
            <SlidersHorizontal className="h-3.5 w-3.5" />
            Filters
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold text-ink/70">
            <span>Sort by:</span>
            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="appearance-none rounded-lg border border-black/10 bg-white pl-3 pr-8 py-2 text-xs font-bold text-ink outline-none cursor-pointer hover:border-brand/30 focus:border-brand"
              >
                <option>Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-ink/50 pointer-events-none" />
            </div>
          </div>

          <div className="flex items-center rounded-lg border border-black/10 p-0.5 bg-gray-50 shrink-0">
            <button
              onClick={() => setViewMode("grid")}
              className={`rounded-md p-1.5 ${
                viewMode === "grid"
                  ? "bg-brand text-white"
                  : "text-ink/50 hover:text-ink"
              }`}
              aria-label="Grid view"
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`rounded-md p-1.5 ${
                viewMode === "list"
                  ? "bg-brand text-white"
                  : "text-ink/50 hover:text-ink"
              }`}
              aria-label="List view"
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="mt-8 flex gap-8 items-start relative flex-1">
        {/* Mobile Sidebar Overlay */}
        {mobileSidebarOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/40 lg:hidden"
            onClick={() => setMobileSidebarOpen(false)}
          />
        )}

        {/* Sidebar Filters */}
        <aside
          className={`w-[250px] shrink-0 border-r border-black/5 pr-4 flex-col gap-6 lg:flex ${
            mobileSidebarOpen
              ? "fixed top-0 left-0 h-full z-50 bg-white p-6 shadow-2xl overflow-y-auto w-[290px] flex animate-in slide-in-from-left duration-200"
              : "hidden"
          }`}
        >
          {/* Mobile close bar */}
          <div className="lg:hidden flex items-center justify-between mb-4 pb-3 border-b border-black/5">
            <h2 className="font-extrabold text-brand-dark">Filters</h2>
            <button
              onClick={() => setMobileSidebarOpen(false)}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <X className="h-5 w-5 text-ink/70" />
            </button>
          </div>

          {/* Active Filters Block */}
          {activeTags.length > 0 && (
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold tracking-wider uppercase text-ink/40">
                  Active Filters
                </span>
                <button
                  onClick={handleClearAll}
                  className="text-[11px] font-bold text-accent hover:text-accent-dark hover:underline transition-colors"
                >
                  Clear all
                </button>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeTags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 rounded-md bg-brand-light px-2 py-0.5 text-xs font-semibold text-brand border border-brand/5"
                  >
                    {tag.label}
                    <button
                      onClick={tag.onDismiss}
                      className="hover:bg-brand-mid/10 rounded-sm p-0.5 text-brand"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-extrabold tracking-wider uppercase text-ink/40 mb-1">
              Category
            </h3>
            <div className="flex flex-col gap-0.5 max-h-[350px] overflow-y-auto pr-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`flex items-center justify-between text-left text-xs rounded-lg px-2.5 py-2.5 transition-colors ${
                    cat.isSub ? "pl-5 text-ink/70" : "text-ink"
                  } ${
                    selectedCategory === cat.id
                      ? "bg-brand-mint text-brand font-bold"
                      : "hover:bg-gray-50 hover:text-brand"
                  }`}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                      selectedCategory === cat.id
                        ? "bg-brand/10 text-brand"
                        : "bg-gray-100 text-ink/40"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-black/5" />

          {/* Price Range Slider */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-extrabold tracking-wider uppercase text-ink/40">
              Price Range (USD)
            </h3>
            
            {/* Dynamic range labels display */}
            <div className="flex items-center justify-between text-xs font-bold text-ink/75">
              <span>Min: ${priceRange[0]}</span>
              <span>Max: ${priceRange[1]}</span>
            </div>

            {/* Range Slider Container */}
            <div className="px-2 mt-1">
              <div className="relative h-1.5 w-full bg-gray-200 rounded-full">
                <div
                  className="absolute h-1.5 bg-brand rounded-full"
                  style={{
                    left: `${(priceRange[0] / 50) * 100}%`,
                    right: `${100 - (priceRange[1] / 50) * 100}%`,
                  }}
                />
                
                {/* Min Slider Knob */}
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={priceRange[0]}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setPriceRange([Math.min(val, priceRange[1] - 1), priceRange[1]]);
                  }}
                  className="absolute w-full h-1.5 bg-transparent pointer-events-none appearance-none cursor-pointer outline-none slider-thumb-styles"
                  style={{ zIndex: priceRange[0] > 40 ? 5 : 3 }}
                />
                
                {/* Max Slider Knob */}
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={priceRange[1]}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setPriceRange([priceRange[0], Math.max(val, priceRange[0] + 1)]);
                  }}
                  className="absolute w-full h-1.5 bg-transparent pointer-events-none appearance-none cursor-pointer outline-none slider-thumb-styles"
                  style={{ zIndex: 4 }}
                />
              </div>
              
              {/* Bottom Labels exactly matches mockup */}
              <div className="flex items-center justify-between text-[10px] text-ink/40 font-bold mt-2.5">
                <span>$0.00</span>
                <span>$0 – $20</span>
                <span>$50+</span>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-black/5" />

          {/* Certifications Checkbox */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-xs font-extrabold tracking-wider uppercase text-ink/40">
              Certifications
            </h3>
            <div className="flex flex-col gap-2">
              {CERTIFICATIONS.map((cert) => {
                const checked = selectedCerts.includes(cert.id);
                return (
                  <div
                    key={cert.id}
                    onClick={() => toggleCert(cert.id)}
                    className="flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`h-4.5 w-4.5 rounded-md border flex items-center justify-center transition-colors shrink-0 ${
                          checked
                            ? "bg-brand border-brand text-white"
                            : "border-black/20 hover:border-brand/40 group-hover:border-brand"
                        }`}
                      >
                        {checked && <Check className="h-3 w-3 stroke-[3]" />}
                      </div>
                      <span className="text-xs font-medium text-ink/80 group-hover:text-brand">
                        {cert.name}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-ink/40">
                      {cert.count}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full h-px bg-black/5" />

          {/* Origin Select */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-extrabold tracking-wider uppercase text-ink/40">
              Origin
            </h3>
            <div className="relative">
              <select
                value={selectedOrigin}
                onChange={(e) => setSelectedOrigin(e.target.value)}
                className="w-full appearance-none rounded-lg border border-black/10 bg-white pl-3 pr-8 py-2 text-xs font-semibold text-ink outline-none cursor-pointer hover:border-brand/30 focus:border-brand"
              >
                {ORIGINS.map((orig) => (
                  <option key={orig}>{orig}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-ink/50 pointer-events-none" />
            </div>
          </div>

          {/* Supplier Select */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-extrabold tracking-wider uppercase text-ink/40">
              Supplier
            </h3>
            <div className="relative">
              <select
                value={selectedSupplier}
                onChange={(e) => setSelectedSupplier(e.target.value)}
                className="w-full appearance-none rounded-lg border border-black/10 bg-white pl-3 pr-8 py-2 text-xs font-semibold text-ink outline-none cursor-pointer hover:border-brand/30 focus:border-brand"
              >
                {SUPPLIERS.map((supp) => (
                  <option key={supp}>{supp}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-ink/50 pointer-events-none" />
            </div>
          </div>

          <div className="w-full h-px bg-black/5" />

          {/* Toggles */}
          <div className="flex flex-col gap-3">
            {/* In Stock Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-ink/80">
                In Stock Only
              </span>
              <button
                onClick={() => setInStockOnly((v) => !v)}
                className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 outline-none ${
                  inStockOnly ? "bg-brand" : "bg-gray-250 bg-black/10"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    inStockOnly ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

            {/* Discount Available Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-ink/80">
                Discount Available
              </span>
              <button
                onClick={() => setDiscountAvailable((v) => !v)}
                className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 outline-none ${
                  discountAvailable ? "bg-brand" : "bg-gray-250 bg-black/10"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    discountAvailable ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </aside>

        {/* Product Catalog Display */}
        <section className="flex-1 flex flex-col self-stretch">
          {/* Active Filtering Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-black/5 mb-6">
            <span className="text-xs font-bold text-ink/50">
              Showing{" "}
              {filteredProducts.length === 0
                ? "0"
                : `${(currentPage - 1) * itemsPerPage + 1}–${Math.min(
                    currentPage * itemsPerPage,
                    filteredProducts.length
                  )}`}{" "}
              of {filteredProducts.length.toLocaleString()} products
            </span>

            <div className="flex items-center gap-2 text-xs font-semibold text-ink/50">
              <span>Items per page:</span>
              <div className="relative">
                <select
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="appearance-none rounded-lg border border-black/10 bg-white pl-2.5 pr-7 py-1 text-xs font-bold text-ink outline-none cursor-pointer hover:border-brand/30 focus:border-brand"
                >
                  <option value={12}>12</option>
                  <option value={24}>24</option>
                  <option value={48}>48</option>
                  <option value={96}>96</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3 w-3 text-ink/50 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Catalog Products */}
          {filteredProducts.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-black/5 rounded-2xl p-16 text-center">
              <span className="text-4xl">🌱</span>
              <h3 className="font-extrabold text-brand-dark mt-4">
                No products found
              </h3>
              <p className="text-xs text-ink/50 mt-1 max-w-xs">
                We couldn&apos;t find matching products in our database. Try
                broadening your filters or clearing search.
              </p>
              <button
                onClick={handleClearAll}
                className="mt-4 rounded-full bg-brand px-5 py-2 text-xs font-semibold text-white hover:bg-brand-mid transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : viewMode === "grid" ? (
            /* Grid View */
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {paginatedProducts.map((product) => {
                const {
                  id,
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
                  <div
                    key={id}
                    className="group rounded-xl2 border border-black/5 bg-white overflow-hidden hover:shadow-card-hover transition-shadow flex flex-col"
                  >
                    <div className="relative aspect-[4/3] bg-gray-50">
                      <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 250px"
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                      />
                      {badge && (
                        <span
                          className={`absolute top-2.5 left-2.5 rounded-md px-2 py-1 text-[11px] font-bold ${
                            badge.tone === "discount"
                              ? "bg-accent text-white"
                              : "bg-brand text-white"
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
                          className={`self-start mb-1.5 rounded-md px-2 py-0.5 text-[11px] font-semibold ${
                            tagStyles[tag.tone] || "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {tag.label}
                        </span>
                      )}
                      <h3 className="text-sm font-semibold text-ink leading-snug line-clamp-2 min-h-[40px]">
                        {name}
                      </h3>
                      <p className="mt-0.5 text-xs text-ink/50">{supplier}</p>

                      {bundle && (
                        <p className="mt-2 rounded-md bg-accent-light px-2 py-1 text-[11px] font-medium text-accent-dark text-center">
                          {bundle}
                        </p>
                      )}

                      <div className="mt-auto pt-3">
                        <div className="flex items-baseline gap-1.5">
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

                        <button className="mt-3 w-full flex items-center justify-center gap-1.5 rounded-full bg-brand py-2 text-sm font-semibold text-white hover:bg-brand-dark transition-colors">
                          <Plus className="h-4 w-4" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* List View */
            <div className="flex flex-col gap-4">
              {paginatedProducts.map((product) => {
                const {
                  id,
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
                  <div
                    key={id}
                    className="group rounded-xl2 border border-black/5 bg-white overflow-hidden hover:shadow-card-hover transition-shadow flex flex-col sm:flex-row p-3 gap-4"
                  >
                    <div className="relative w-full sm:w-[180px] aspect-[4/3] sm:aspect-square bg-gray-50 rounded-lg overflow-hidden shrink-0">
                      <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width: 640px) 100vw, 180px"
                        className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                      />
                      {badge && (
                        <span
                          className={`absolute top-2 left-2 rounded-md px-2 py-0.5 text-[10px] font-bold ${
                            badge.tone === "discount"
                              ? "bg-accent text-white"
                              : "bg-brand text-white"
                          }`}
                        >
                          {badge.label}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between flex-1 gap-4 pt-1 pb-1">
                      <div className="flex flex-col">
                        {tag && (
                          <span
                            className={`self-start mb-1.5 rounded-md px-2 py-0.5 text-[10px] font-semibold ${
                              tagStyles[tag.tone] || "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {tag.label}
                          </span>
                        )}
                        <h3 className="text-base font-bold text-ink leading-snug">
                          {name}
                        </h3>
                        <p className="mt-0.5 text-xs text-ink/50">{supplier}</p>
                        
                        {bundle && (
                          <div className="self-start mt-2">
                            <span className="rounded-md bg-accent-light px-2.5 py-1 text-[11px] font-semibold text-accent-dark">
                              {bundle}
                            </span>
                          </div>
                        )}

                        <p className="mt-2.5 flex items-center gap-1 text-[11px] font-semibold">
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
                      </div>

                      <div className="flex flex-row sm:flex-col sm:items-end justify-between items-center sm:justify-start gap-3 shrink-0 border-t sm:border-t-0 border-black/5 pt-3 sm:pt-0">
                        <div>
                          <div className="flex items-baseline gap-1.5 sm:justify-end">
                            <span className="text-xl font-extrabold text-ink">
                              ${price.toFixed(2)}
                            </span>
                            {oldPrice && (
                              <span className="text-xs text-ink/40 line-through">
                                ${oldPrice.toFixed(2)}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-ink/45 sm:text-right">
                            ៛{priceKhr.toLocaleString()}
                          </p>
                        </div>

                        <button className="flex items-center justify-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-xs font-semibold text-white hover:bg-brand-dark transition-colors">
                          <Plus className="h-3.5 w-3.5" />
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && renderPaginationButtons()}
        </section>
      </div>

      {/* Range Input Styles Injected Directly */}
      <style jsx global>{`
        .slider-thumb-styles {
          -webkit-appearance: none;
          appearance: none;
        }
        .slider-thumb-styles::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: #1b7a43;
          border: 2px solid #ffffff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          pointer-events: auto;
          transition: background-color 0.15s, transform 0.15s;
        }
        .slider-thumb-styles::-webkit-slider-thumb:hover {
          background: #1f8a4c;
          transform: scale(1.1);
        }
        .slider-thumb-styles::-moz-range-thumb {
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: #1b7a43;
          border: 2px solid #ffffff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          pointer-events: auto;
          transition: background-color 0.15s, transform 0.15s;
        }
        .slider-thumb-styles::-moz-range-thumb:hover {
          background: #1f8a4c;
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
}

// Wrapper to prevent useSearchParams blocking layout compilation
export default function ProductsCatalog() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-[1280px] w-full px-4 py-16 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand mx-auto mb-4" />
            <p className="text-sm text-ink/50">Loading products catalog...</p>
          </div>
        </div>
      }
    >
      <CatalogContent />
    </Suspense>
  );
}
