import {
  Leaf,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  Share2,
} from "lucide-react";

const columns = [
  {
    title: "Products",
    links: [
      "Fresh Produce",
      "Meat & Seafood",
      "Dairy & Eggs",
      "Beverages",
      "Dry Goods",
      "Frozen Foods",
    ],
  },
  {
    title: "Marketplace",
    links: [
      "All Suppliers",
      "Promotions",
      "New Arrivals",
      "Best Sellers",
      "Clearance",
    ],
  },
  {
    title: "Support",
    links: ["Help Center", "Contact Us", "FAQs", "Live Chat", "Track Order"],
  },
];

// Note: lucide-react v1 dropped brand/logo icons (Facebook, Instagram, Twitter, etc.)
// to avoid trademark issues, so we use neutral contact-style icons instead.
const socialIcons = [MessageCircle, Send, Share2];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr] gap-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white">
                <Leaf className="h-5 w-5" />
              </span>
              <span className="leading-none">
                <span className="block text-base font-extrabold text-white">
                  SUPPY
                </span>
                <span className="block text-[9px] font-semibold tracking-[0.2em] text-accent">
                  MATRIX
                </span>
              </span>
            </div>
            <p className="mt-4 text-sm max-w-xs">
              Fresh food &amp; beverages delivered to your door across
              Cambodia.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {socialIcons.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5 text-sm">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                Phnom Penh, Cambodia
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                +855 23 123 456
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                support@suppymatrix.kh
              </li>
            </ul>
            <h4 className="text-sm font-semibold text-white mt-5 mb-3">
              Accepted Payments
            </h4>
            <div className="flex items-center gap-2">
              {["KHQR", "Visa", "ABA"].map((p) => (
                <span
                  key={p}
                  className="rounded-md bg-white/10 px-2.5 py-1.5 text-[10px] font-semibold text-white/80"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© 2026 SUPPY-MATRIX. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
