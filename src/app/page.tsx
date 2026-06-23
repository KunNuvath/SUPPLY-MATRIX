import TopBar from "./components/top-bar";
import Header from "./components/header";
import Hero from "./components/hero";
import TrustBadges from "./components/trust-badges";
import Categories from "./components/categories";
import PromoBanners from "./components/promo-banners";
import FeaturedProducts from "./components/featured-products";
import TopSuppliers from "./components/top-suppliers";
import AppBanner from "./components/app-banner";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex-1 bg-white">
      <TopBar />
      <Header />
      <Hero />
      <TrustBadges />
      <Categories />
      <PromoBanners />
      <FeaturedProducts />
      <TopSuppliers />
      <AppBanner />
      <Footer />
    </main>
  );
}