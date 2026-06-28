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
  category: string;
  certifications?: ("organic" | "halal" | "freerange" | "nongmo")[];
  origin: string;
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
    category: "vegetables",
    certifications: ["organic"],
    origin: "Kandal",
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
    category: "meat-seafood",
    certifications: [],
    origin: "Kampot",
  },
  {
    id: "kampong-rice",
    name: "Kampong Chhang Jasmine Rice",
    supplier: "Rice Kingdom · 5 kg bag",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500&q=80",
    price: 6.2,
    oldPrice: 6.89,
    priceKhr: 25420,
    tag: { label: "Organic", tone: "organic" },
    badge: { label: "-10%", tone: "discount" },
    stock: "In Stock",
    category: "dry-goods",
    certifications: ["organic"],
    origin: "Kampong Chhang",
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
    category: "beverages",
    certifications: ["organic"],
    origin: "Mondulkiri",
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
    bundle: "2 trays for $5.00",
    category: "dairy-eggs",
    certifications: ["freerange"],
    origin: "Takeo",
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
    category: "dry-goods",
    certifications: ["halal"],
    origin: "Phnom Penh",
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
    category: "vegetables",
    certifications: ["organic"],
    origin: "Kandal",
  },
  {
    id: "fish-sauce",
    name: "Fish Sauce Premium",
    supplier: "Kampot Gold · 700ml bottle",
    image:
      "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=500&q=80",
    price: 3.8,
    oldPrice: 3.99,
    priceKhr: 14760,
    badge: { label: "-5%", tone: "discount" },
    stock: "In Stock",
    category: "condiments-sauces",
    certifications: ["nongmo"],
    origin: "Kampot",
  },
  {
    id: "dragon-fruit",
    name: "Fresh Dragon Fruit",
    supplier: "Mekong Farms · 1kg",
    image:
      "https://images.unsplash.com/photo-1527324688151-0e627063f2b1?w=500&q=80",
    price: 3.9,
    priceKhr: 15990,
    tag: { label: "Organic", tone: "organic" },
    stock: "In Stock",
    category: "fruits",
    certifications: ["organic"],
    origin: "Siem Reap",
  },
  {
    id: "whole-milk",
    name: "Whole Milk UHT",
    supplier: "Angkor Dairy · 1L carton",
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&q=80",
    price: 2.2,
    priceKhr: 9020,
    tag: { label: "Halal", tone: "halal" },
    stock: "In Stock",
    bundle: "6 for $12",
    category: "dairy-eggs",
    certifications: ["halal"],
    origin: "Phnom Penh",
  },
  {
    id: "chicken-breast",
    name: "Frozen Chicken Breast",
    supplier: "Mekong Fresh · 1kg",
    image:
      "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500&q=80",
    price: 5.5,
    oldPrice: 6.25,
    priceKhr: 22550,
    tag: { label: "Halal", tone: "halal" },
    badge: { label: "-12%", tone: "discount" },
    stock: "In Stock",
    category: "frozen-foods",
    certifications: ["halal"],
    origin: "Battambang",
  },
  {
    id: "black-pepper",
    name: "Kampot Black Pepper",
    supplier: "Kampot Gold · 100g",
    image:
      "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=500&q=80",
    price: 4.8,
    priceKhr: 19680,
    tag: { label: "Organic", tone: "organic" },
    badge: { label: "NEW", tone: "new" },
    stock: "Low Stock",
    category: "condiments-sauces",
    certifications: ["organic"],
    origin: "Kampot",
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
  {
    name: "Happy Hen Farm",
    type: "Poultry Farm",
    location: "Takeo",
    tags: ["Poultry", "Eggs"],
    rating: 4.8,
    reviews: 98,
  },
  {
    name: "Kampot Gold",
    type: "Spice & Condiments",
    location: "Kampot",
    tags: ["Spices", "Sauces", "Organic"],
    rating: 4.9,
    reviews: 156,
  },
];
