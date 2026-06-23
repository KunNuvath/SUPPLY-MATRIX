export type Product = {
  id: string;
  name: string;
  supplier: string;
  image: string;
  price: number;
  oldPrice?: number;
  priceKhr: number;
  tag?: { label: string; tone: "organic" | "new" | "halal" | "freerange" };
  badge?: { label: string; tone: "discount" | "new" };
  stock: "In Stock" | "Low Stock";
  bundle?: string;
};

export const products: Product[] = [
  {
    id: "cherry-tomatoes",
    name: "Organic Cherry Tomatoes",
    supplier: "GreenFarm KH · 500g pack",
    image:
      "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500&q=80",
    price: 2.5,
    oldPrice: 2.94,
    priceKhr: 10250,
    tag: { label: "Organic", tone: "organic" },
    badge: { label: "-15%", tone: "discount" },
    stock: "In Stock",
  },
  {
    id: "river-prawns",
    name: "Wild-Caught River Prawns",
    supplier: "Mekong Fresh · 1kg",
    image:
      "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=500&q=80",
    price: 8.9,
    priceKhr: 36490,
    badge: { label: "NEW", tone: "new" },
    stock: "Low Stock",
    bundle: "3 for $24",
  },
  {
    id: "kampong-rice",
    name: "Kampot Kampong Chhang Rice",
    supplier: "Rice Kingdom · 5kg bag",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80",
    price: 6.2,
    oldPrice: 6.89,
    priceKhr: 25420,
    tag: { label: "Organic", tone: "organic" },
    badge: { label: "-10%", tone: "discount" },
    stock: "In Stock",
  },
  {
    id: "robusta-beans",
    name: "Single-Origin Robusta Beans",
    supplier: "Cambodian Brew Co. · 250g",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500&q=80",
    price: 7.5,
    priceKhr: 30750,
    badge: { label: "NEW", tone: "new" },
    stock: "In Stock",
  },
  {
    id: "free-range-eggs",
    name: "Free-Range Eggs",
    supplier: "Happy Hen Farm · 10 pieces",
    image:
      "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=500&q=80",
    price: 3.2,
    priceKhr: 13120,
    tag: { label: "Free-Range", tone: "freerange" },
    stock: "In Stock",
    bundle: "2 trays for $5.80",
  },
  {
    id: "pad-thai-set",
    name: "Pad Thai Noodles Set",
    supplier: "AsiaKitchen · 400g pack",
    image:
      "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=500&q=80",
    price: 4.1,
    oldPrice: 5.12,
    priceKhr: 16810,
    tag: { label: "Halal", tone: "halal" },
    badge: { label: "-20%", tone: "discount" },
    stock: "In Stock",
  },
  {
    id: "baby-spinach",
    name: "Fresh Baby Spinach",
    supplier: "GreenFarm KH · 200g bag",
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&q=80",
    price: 1.8,
    priceKhr: 7380,
    tag: { label: "Organic", tone: "organic" },
    stock: "In Stock",
  },
  {
    id: "fish-sauce",
    name: "Fish Sauce Premium",
    supplier: "Kampot Gold · 700ml bottle",
    image:
      "https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?w=500&q=80",
    price: 3.6,
    oldPrice: 3.79,
    priceKhr: 14760,
    badge: { label: "-5%", tone: "discount" },
    stock: "In Stock",
  },
];

export const suppliers = [
  {
    name: "GreenFarm Cambodia",
    type: "Local Farm",
    location: "Siem Reap",
    tags: ["Fresh Produce", "Organic"],
    rating: 4.8,
    reviews: 234,
  },
  {
    name: "Mekong Fresh Co.",
    type: "Wholesale Importer",
    location: "Phnom Penh",
    tags: ["Meat & Seafood", "Frozen"],
    rating: 4.6,
    reviews: 178,
  },
  {
    name: "Cambodian Brew Co.",
    type: "Beverage Supplier",
    location: "Battambang",
    tags: ["Coffee", "Tea", "Beverages"],
    rating: 4.9,
    reviews: 312,
  },
  {
    name: "Rice Kingdom KH",
    type: "Local Farm",
    location: "Kampong Chhang",
    tags: ["Dry Goods", "Rice", "Organic"],
    rating: 4.7,
    reviews: 145,
  },
];
