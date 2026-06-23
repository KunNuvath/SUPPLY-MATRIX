import Link from "next/link";
import { Search, Heart, ShoppingCart, User, Leaf } from "lucide-react";

const navLinks = [
  { label: "Products", href: "#" },
  { label: "Suppliers", href: "#" },
  { label: "Promotions", href: "#" },
  { label: "Orders", href: "#" },
  { label: "Support", href: "#" },
];

export default function Header() {
  return (
    <header className="bg-white border-b border-black/5">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="leading-none">
            <span className="block text-lg font-extrabold tracking-tight text-brand-dark">
              SUPPY
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.2em] text-accent">
              MATRIX
            </span>
          </span>
        </Link>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-xl">
          <div className="flex w-full items-center rounded-full border border-black/10 bg-gray-50 pl-4 pr-1 py-1.5 focus-within:ring-2 focus-within:ring-brand/30">
            <Search className="h-4 w-4 text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Search for products, brands, suppliers..."
              className="w-full bg-transparent px-2.5 text-sm outline-none placeholder:text-gray-400"
            />
            <button className="shrink-0 rounded-full bg-brand px-4 py-1.5 text-sm font-medium text-white hover:bg-brand-mid transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-ink/80 shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-brand transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-5 shrink-0 ml-auto md:ml-0">
          <a
            href="#"
            className="hidden sm:flex flex-col items-center text-[11px] text-ink/70 hover:text-brand"
          >
            <Heart className="h-5 w-5" />
            Saved
          </a>
          <a
            href="#"
            className="relative flex flex-col items-center text-[11px] text-ink/70 hover:text-brand"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1.5 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-white">
              3
            </span>
            Cart
          </a>
          <Link
            href="/login"
            className="hidden sm:flex flex-col items-center text-[11px] text-ink/70 hover:text-brand"
          >
            <User className="h-5 w-5" />
            Account
          </Link>
        </div>
      </div>
    </header>
  );
}
