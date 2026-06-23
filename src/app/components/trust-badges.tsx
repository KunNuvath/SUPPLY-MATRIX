import { Truck, ShieldCheck, RotateCcw, Headphones, Smartphone } from "lucide-react";

const badges = [
  {
    icon: Truck,
    title: "Next-Day Delivery",
    subtitle: "Phnom Penh & Siem Reap",
  },
  {
    icon: ShieldCheck,
    title: "Verified Suppliers",
    subtitle: "Quality guaranteed",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    subtitle: "7-day return policy",
  },
  {
    icon: Headphones,
    title: "Live Support",
    subtitle: "Mon–Sat 7AM–9PM",
  },
  {
    icon: Smartphone,
    title: "KHQR Payments",
    subtitle: "Scan & pay instantly",
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-brand-mint border-t border-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-7">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {badges.map(({ icon: Icon, title, subtitle }) => (
            <div key={title} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-brand">
                <Icon className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-ink">{title}</p>
                <p className="text-xs text-ink/55">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
