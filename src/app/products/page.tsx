import type { Metadata } from "next";
import TopBar from "../components/top-bar";
import Header from "../components/header";
import Footer from "../components/footer";
import ProductsCatalog from "./products-catalog";

export const metadata: Metadata = {
  title: "All Products - Supply Matrix Marketplace",
  description: "Browse products from verified Cambodian suppliers on the Supply Matrix Marketplace.",
};

export default function ProductsPage() {
  return (
    <main className="flex-grow flex flex-col bg-white min-h-screen">
      <TopBar />
      <Header />
      <ProductsCatalog />
      <Footer />
    </main>
  );
}
