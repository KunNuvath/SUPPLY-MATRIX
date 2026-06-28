"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleUserRound,
  Globe2,
  Heart,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  ShoppingCart,
  Star,
  Store,
} from "lucide-react";
import { useMemo, useState } from "react";

import styles from "./suppliers.module.css";

type Supplier = {
  name: string;
  type: string;
  location: string;
  tags: string[];
  rating: number;
  reviews: number;
  verified?: boolean;
};

const featuredSuppliers = [
  {
    name: "Cambodian Brew Co.",
    description: "Premium single-origin Cambodian coffee & artisan teas",
    products: 84,
    rating: 4.9,
    image: "/images/cardamom-coffee.png",
  },
  {
    name: "GreenFarm Cambodia",
    description: "Certified organic vegetables & seasonal fruits from Siem Reap",
    products: 127,
    rating: 4.8,
    image: "/images/green-farm.png",
  },
  {
    name: "Kampot Gold Spices",
    description: "World-renowned Kampot pepper & authentic Cambodian spices",
    products: 56,
    rating: 4.9,
    image: "/images/kampot-pepper.png",
  },
];

const suppliers: Supplier[] = [
  { name: "GreenFarm Cambodia", type: "Local Farm", location: "Siem Reap", tags: ["Fresh Produce", "Organic"], rating: 4.8, reviews: 234, verified: true },
  { name: "Mekong Fresh Co.", type: "Wholesale Importer", location: "Phnom Penh", tags: ["Meat & Seafood", "Frozen"], rating: 4.6, reviews: 178, verified: true },
  { name: "Cambodian Brew Co.", type: "Beverage Supplier", location: "Battambang", tags: ["Coffee", "Tea", "Beverages"], rating: 4.9, reviews: 312, verified: true },
  { name: "Rice Kingdom KH", type: "Local Farm", location: "Kampong Chhnang", tags: ["Dry Goods", "Rice", "Organic"], rating: 4.7, reviews: 145 },
  { name: "Kampot Gold Spices", type: "Local Farm", location: "Kampot", tags: ["Condiments", "Spices", "Organic"], rating: 4.9, reviews: 289, verified: true },
  { name: "AsiaKitchen Imports", type: "Wholesale Importer", location: "Phnom Penh", tags: ["Dry Goods", "Noodles", "Halal"], rating: 4.4, reviews: 97, verified: true },
  { name: "Happy Hen Farm", type: "Local Farm", location: "Kandal", tags: ["Dairy & Eggs", "Free-Range"], rating: 4.7, reviews: 203, verified: true },
  { name: "Angkor Dairy Co.", type: "Beverage Supplier", location: "Phnom Penh", tags: ["Dairy", "Beverages", "Halal"], rating: 4.5, reviews: 118, verified: true },
  { name: "Mekong Farms", type: "Local Farm", location: "Prey Veng", tags: ["Fresh Produce", "Tropical Fruits"], rating: 4.6, reviews: 156 },
  { name: "IcePack Frozen Foods", type: "Wholesale Importer", location: "Phnom Penh", tags: ["Frozen Foods", "Seafood"], rating: 4.3, reviews: 74, verified: true },
  { name: "BoxPlus Packaging", type: "Packaging Supplier", location: "Phnom Penh", tags: ["Packaging", "Supplies"], rating: 4.2, reviews: 61 },
  { name: "KH Organic Collective", type: "Local Farm", location: "Siem Reap", tags: ["Organic", "Vegetables", "Fruits"], rating: 4.8, reviews: 192, verified: true },
];

const supplierTypes = [
  ["All Types", "120"],
  ["Local Farm", "54"],
  ["Wholesale Importer", "32"],
  ["Beverage Supplier", "18"],
  ["Packaging Supplier", "16"],
];

const categories = [
  "Fresh Produce",
  "Meat & Seafood",
  "Dairy & Eggs",
  "Beverages",
  "Dry Goods",
  "Frozen Foods",
];

function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className={`${styles.brand} ${inverse ? styles.brandInverse : ""}`} aria-label="Suppy Matrix home">
      <span className={styles.brandMark}><Leaf size={22} strokeWidth={2.5} /></span>
      <span className={styles.brandWords}>
        <strong>SUPPY</strong>
        <small>MATRIX</small>
      </span>
    </Link>
  );
}

function FeaturedCard({ supplier }: { supplier: (typeof featuredSuppliers)[number] }) {
  return (
    <article className={styles.featuredCard}>
      <Image src={supplier.image} alt={`${supplier.name} farm landscape`} fill sizes="(max-width: 760px) 100vw, 33vw" className={styles.featuredImage} />
      <div className={styles.imageShade} />
      <div className={styles.featuredContent}>
        <div className={styles.featuredMeta}>
          <span className={styles.verifiedPill}>Verified</span>
          <span className={styles.starLine}><Star size={13} fill="currentColor" /> {supplier.rating}</span>
        </div>
        <h3>{supplier.name}</h3>
        <p>{supplier.description}</p>
        <div className={styles.featuredBottom}>
          <span>{supplier.products} products</span>
          <a href="#supplier-list">Visit Store <ArrowRight size={15} /></a>
        </div>
      </div>
    </article>
  );
}

function SupplierCard({ supplier, onView }: { supplier: Supplier; onView: (name: string) => void }) {
  return (
    <article className={styles.supplierCard}>
      <div className={styles.supplierTop}>
        <div className={styles.storeIcon}><Store size={25} strokeWidth={1.8} /></div>
        <div className={styles.supplierIdentity}>
          <h3>{supplier.name} {supplier.verified && <BadgeCheck size={16} aria-label="Verified supplier" />}</h3>
          <p>{supplier.type}</p>
          <span><MapPin size={12} fill="currentColor" /> {supplier.location}</span>
        </div>
      </div>
      <div className={styles.tags}>
        {supplier.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      <div className={styles.cardDivider} />
      <div className={styles.supplierBottom}>
        <span className={styles.rating}><Star size={15} fill="currentColor" /> <strong>{supplier.rating}</strong> <small>({supplier.reviews})</small></span>
        <button type="button" onClick={() => onView(supplier.name)}>View <ArrowRight size={15} /></button>
      </div>
    </article>
  );
}

export default function SuppliersPage() {
  const [query, setQuery] = useState("");
  const [supplierType, setSupplierType] = useState("All Types");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [location, setLocation] = useState("All Provinces");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [minimumRating, setMinimumRating] = useState(0);
  const [sortBy, setSortBy] = useState("Top Rated");
  const [page, setPage] = useState(1);
  const [notice, setNotice] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const visibleSuppliers = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const filtered = suppliers.filter((supplier) => {
      const matchesQuery = !needle || [supplier.name, supplier.type, supplier.location, ...supplier.tags].join(" ").toLowerCase().includes(needle);
      const matchesType = supplierType === "All Types" || supplier.type === supplierType;
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.some((category) => supplier.tags.includes(category));
      const matchesLocation = location === "All Provinces" || supplier.location === location;
      return matchesQuery && matchesType && matchesCategory && matchesLocation && (!verifiedOnly || supplier.verified) && supplier.rating >= minimumRating;
    });

    return [...filtered].sort((a, b) => sortBy === "A–Z" ? a.name.localeCompare(b.name) : sortBy === "Most Reviewed" ? b.reviews - a.reviews : b.rating - a.rating);
  }, [location, minimumRating, query, selectedCategories, sortBy, supplierType, verifiedOnly]);

  function toggleCategory(category: string) {
    setSelectedCategories((current) => current.includes(category) ? current.filter((item) => item !== category) : [...current, category]);
    setPage(1);
  }

  function resetFilters() {
    setQuery("");
    setSupplierType("All Types");
    setSelectedCategories([]);
    setLocation("All Provinces");
    setVerifiedOnly(false);
    setMinimumRating(0);
    setPage(1);
  }

  function showSupplier(name: string) {
    setNotice(`${name} storefront selected — full store pages are coming soon.`);
    window.setTimeout(() => setNotice(""), 3200);
  }

  return (
    <div className={styles.page}>
      <header>
        <div className={styles.utilityBar}>
          <div className={styles.container}>
            <p>Free delivery on orders over $30 · KHQR payments accepted</p>
            <div><span>1 USD = 4,100 KHR</span><strong>USD / KHR</strong><span><Globe2 size={13} /> EN</span></div>
          </div>
        </div>

        <div className={styles.mainNav}>
          <div className={styles.container}>
            <Brand />
            <label className={styles.productSearch}>
              <Search size={19} />
              <input value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} aria-label="Search products and suppliers" placeholder="Search for products, brands, suppliers..." />
              <button type="button" onClick={() => document.getElementById("supplier-list")?.scrollIntoView({ behavior: "smooth" })}>Search</button>
            </label>
            <button className={styles.menuButton} type="button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation"><Menu /></button>
            <nav className={`${styles.navLinks} ${menuOpen ? styles.navOpen : ""}`} aria-label="Main navigation">
              <a href="#supplier-list">Products</a>
              <a href="#supplier-list" className={styles.activeNav}>Suppliers</a>
              <a href="#featured">Promotions</a>
              <a href="#footer">Orders</a>
              <a href="#footer">Support</a>
            </nav>
            <div className={styles.actions}>
              <button type="button"><Heart /><span>Saved</span></button>
              <button type="button" className={styles.cartAction}><ShoppingCart /><em>3</em><span>Cart</span></button>
              <Link href="/login"><CircleUserRound /><span>Account</span></Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.breadcrumb}><a href="#">Home</a><ChevronRight size={15} /><span>Suppliers</span></div>
            <div className={styles.heroRow}>
              <div>
                <h1>Our Suppliers</h1>
                <p>Browse verified local farms, importers, and specialty producers supplying fresh food &amp; beverages across Cambodia.</p>
              </div>
              <label className={styles.supplierSearch}><Search size={18} /><input value={query} onChange={(event) => { setQuery(event.target.value); setPage(1); }} placeholder="Search suppliers..." aria-label="Search suppliers" /></label>
            </div>
            <div className={styles.stats}>
              <div><strong>120+</strong><span>Active Suppliers</span></div>
              <div><strong>1,240+</strong><span>Products Listed</span></div>
              <div><strong>18</strong><span>Provinces Covered</span></div>
              <div><strong>98%</strong><span>Order Fulfilment Rate</span></div>
            </div>
          </div>
        </section>

        <section id="featured" className={`${styles.container} ${styles.featuredSection}`}>
          <div className={styles.sectionTitle}><h2>Featured Suppliers</h2><span>Editor&apos;s Pick</span></div>
          <div className={styles.featuredGrid}>{featuredSuppliers.map((supplier) => <FeaturedCard key={supplier.name} supplier={supplier} />)}</div>
        </section>

        <section id="supplier-list" className={`${styles.container} ${styles.directory}`}>
          <aside className={styles.filters}>
            <div className={styles.filterHeading}><h2>Filter Suppliers</h2><button type="button" onClick={resetFilters}>Clear all</button></div>
            <fieldset>
              <legend>Supplier Type</legend>
              {supplierTypes.map(([type, count]) => (
                <label className={styles.radioRow} key={type}>
                  <input type="radio" name="supplier-type" checked={supplierType === type} onChange={() => { setSupplierType(type); setPage(1); }} />
                  <span>{type}</span><small>{count}</small>
                </label>
              ))}
            </fieldset>
            <fieldset>
              <legend>Product Category</legend>
              {categories.map((category) => (
                <label className={styles.checkRow} key={category}>
                  <input type="checkbox" checked={selectedCategories.includes(category)} onChange={() => toggleCategory(category)} />
                  <span>{category}</span>
                </label>
              ))}
            </fieldset>
            <fieldset>
              <legend>Location</legend>
              <label className={styles.selectWrap}>
                <select value={location} onChange={(event) => { setLocation(event.target.value); setPage(1); }} aria-label="Province">
                  <option>All Provinces</option><option>Phnom Penh</option><option>Siem Reap</option><option>Battambang</option><option>Kampot</option><option>Kandal</option><option>Prey Veng</option><option>Kampong Chhnang</option>
                </select><ChevronDown size={15} />
              </label>
            </fieldset>
            <div className={styles.switchRow}><span>Verified Only</span><label className={styles.switch}><input type="checkbox" checked={verifiedOnly} onChange={(event) => { setVerifiedOnly(event.target.checked); setPage(1); }} /><i /></label></div>
            <fieldset className={styles.ratingFilter}>
              <legend>Min. Rating</legend>
              {[0, 4, 4.5, 4.8].map((rating) => (
                <label className={styles.radioRow} key={rating}>
                  <input type="radio" name="rating" checked={minimumRating === rating} onChange={() => { setMinimumRating(rating); setPage(1); }} />
                  <span>{rating === 0 ? "Any" : `${rating}+`}</span>
                </label>
              ))}
            </fieldset>
          </aside>

          <div className={styles.results}>
            <div className={styles.resultsBar}>
              <p>Showing <strong>{visibleSuppliers.length}</strong> of <strong>120</strong> suppliers</p>
              <label>Sort by:
                <span className={styles.selectWrap}><select value={sortBy} onChange={(event) => setSortBy(event.target.value)}><option>Top Rated</option><option>Most Reviewed</option><option>A–Z</option></select><ChevronDown size={15} /></span>
              </label>
            </div>
            {notice && <div className={styles.notice} role="status">{notice}</div>}
            {visibleSuppliers.length > 0 ? (
              <div className={styles.supplierGrid}>{visibleSuppliers.map((supplier) => <SupplierCard key={supplier.name} supplier={supplier} onView={showSupplier} />)}</div>
            ) : (
              <div className={styles.emptyState}><Store size={34} /><h3>No suppliers found</h3><p>Try clearing a filter or using a broader search.</p><button type="button" onClick={resetFilters}>Reset filters</button></div>
            )}
            <nav className={styles.pagination} aria-label="Supplier pages">
              <button type="button" aria-label="Previous page" disabled={page === 1} onClick={() => setPage((current) => Math.max(1, current - 1))}><ChevronLeft size={17} /></button>
              {[1, 2, 3, 4, 5].map((number) => <button type="button" className={page === number ? styles.currentPage : ""} key={number} onClick={() => setPage(number)}>{number}</button>)}
              <button type="button" aria-label="Next page" onClick={() => setPage((current) => Math.min(5, current + 1))}><ChevronRight size={17} /></button>
            </nav>
          </div>
        </section>
      </main>

      <footer id="footer" className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div className={styles.footerIntro}><Brand inverse /><p>Fresh food &amp; beverages delivered to your door across Cambodia.</p><div><a href="#" aria-label="Facebook">f</a><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="Youtube">▶</a></div></div>
            <div><h3>Products</h3><a href="#supplier-list">Fresh Produce</a><a href="#supplier-list">Meat &amp; Seafood</a><a href="#supplier-list">Dairy &amp; Eggs</a><a href="#supplier-list">Beverages</a><a href="#supplier-list">Dry Goods</a><a href="#supplier-list">Frozen Foods</a></div>
            <div><h3>Marketplace</h3><a href="#supplier-list">All Suppliers</a><a href="#featured">Promotions</a><a href="#featured">New Arrivals</a><a href="#featured">Best Sellers</a><a href="#featured">Clearance</a></div>
            <div><h3>Support</h3><a href="#footer">Help Center</a><a href="#footer">Contact Us</a><a href="#footer">FAQs</a><a href="#footer">Live Chat</a><a href="#footer">Track Order</a></div>
            <div className={styles.contact}><h3>Contact</h3><p><MapPin /> Phnom Penh, Cambodia</p><p><Phone /> +855 23 123 456</p><p><Mail /> support@suppymatrix.kh</p><small>Accepted Payments</small><div className={styles.payments}><span>VISA</span><span>KHQR</span><span>ABA</span></div></div>
          </div>
          <div className={styles.copyright}><span>© 2026 SUPPY-MATRIX. All rights reserved.</span><div><a href="#">Privacy Policy</a><a href="#">Terms of Service</a><a href="#">Cookie Policy</a></div></div>
        </div>
      </footer>
    </div>
  );
}
