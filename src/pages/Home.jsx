import React from 'react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../components/home/HeroSection';
import { TrustStrip } from '../components/common/TrustStrip';
import { ShopByCategories } from '../components/home/ShopByCategories';
import { DealsSection } from '../components/home/DealsSection';
import { DualPromoBanners } from '../components/home/DualPromoBanners';
import { TrendingTabs } from '../components/home/TrendingTabs';
import { EditorialCollection } from '../components/home/EditorialCollection';
import { PopularBrands } from '../components/home/PopularBrands';
import { RecentlyViewedSection } from '../components/home/RecentlyViewedSection';
import { CustomerBenefits } from '../components/home/CustomerBenefits';
import { Newsletter } from '../components/home/Newsletter';
import { SectionHeader } from '../components/common/SectionHeader';
import { ProductGrid } from '../components/product/ProductGrid';
import { BestSellerCard } from '../components/product/BestSellerCard';
import { productService } from '../services/productService';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Home = () => {
  const allProducts = productService.getAll();
  const newArrivals = productService.getNewArrivals(16);
  const bestSellers = productService.getBestsellers(8);
  const electronicsDeals = allProducts.filter(p => p.category === 'electronics').slice(0, 8);
  const beautyEssentials = allProducts.filter(p => p.category === 'beauty').slice(0, 8);
  const homeLifestyle = allProducts.filter(p => p.category === 'home-decor').slice(0, 8);
  const recommended = allProducts.slice(12, 28); // 16 products 4x4

  return (
    <div className="space-y-4 sm:space-y-8 animate-fade-in">
      {/* 4. Hero Section */}
      <HeroSection />

      {/* 5. Trust / Service Strip */}
      <TrustStrip />

      {/* 6. Shop by Categories */}
      <ShopByCategories />

      {/* 7. Deals of the Day (8-12 products + Live Timer) */}
      <DealsSection />

      {/* 8. Promotional Banner: Mid-Season Flash */}
      <section className="my-10 sm:my-14">
        <div className="max-w-site mx-auto px-4 sm:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-neutral-900 to-neutral-800 p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden border border-neutral-700/80">
            <div className="space-y-2 text-left z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F15A24] text-white text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                Member Exclusive
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                Extra 15% Off With Code: <span className="text-[#F15A24]">WELCOME15</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-lg">
                Applied automatically at checkout for new registered members on orders above $60.
              </p>
            </div>
            <Link
              to="/shop"
              className="px-6 py-3 rounded-full bg-white hover:bg-neutral-100 text-neutral-950 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all flex-shrink-0 z-10 active:scale-95"
            >
              <span>Explore Deals</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. New Arrivals (16 products, exactly 4 x 4 on desktop!) */}
      <section className="my-10 sm:my-14">
        <div className="max-w-site mx-auto px-4 sm:px-8">
          <SectionHeader
            title="New Arrivals"
            subtitle="The latest arrivals fresh from our curated global design studios"
            viewAllLink="/shop?filter=new"
            viewAllText="View All New Arrivals"
          />
          <ProductGrid products={newArrivals} columns={4} />
        </div>
      </section>

      {/* 10. Fashion Collection Banner */}
      <section className="my-10 sm:my-14">
        <div className="max-w-site mx-auto px-4 sm:px-8">
          <div className="relative rounded-3xl overflow-hidden min-h-[260px] sm:min-h-[320px] bg-neutral-900 flex items-center justify-between p-8 sm:p-12 text-white">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80"
              alt="Fashion Editorial"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div className="relative z-10 space-y-3 max-w-md text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F15A24]">
                The Minimalist Wardrobe
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Refined Staples For Every Season
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                480 GSM French terry cotton, relaxed silhouettes, and neutral earthy tones crafted for longevity.
              </p>
              <div className="pt-2">
                <Link
                  to="/category/fashion"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F15A24] hover:bg-[#D94A16] text-white text-xs sm:text-sm font-bold transition-all shadow-md group"
                >
                  <span>Shop Apparel</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Best Sellers (8-12 products with distinct BestSellerCard layout!) */}
      <section className="my-10 sm:my-14">
        <div className="max-w-site mx-auto px-4 sm:px-8">
          <SectionHeader
            title="Best Sellers"
            subtitle="Our most loved, highest reviewed customer favorites of all time"
            viewAllLink="/shop?filter=bestsellers"
            viewAllText="View All Best Sellers"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
            {bestSellers.map(product => (
              <BestSellerCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 12. Electronics Deals (8-10 products) */}
      <section className="my-10 sm:my-14 bg-neutral-50 py-10 sm:py-12 rounded-3xl border border-neutral-200/60">
        <div className="max-w-site mx-auto px-4 sm:px-8">
          <SectionHeader
            title="Best of Electronics & Audio"
            subtitle="Industry-leading noise cancelation, high-res acoustics, and wearables"
            viewAllLink="/category/electronics"
            viewAllText="View All Electronics"
          />
          <ProductGrid products={electronicsDeals} columns={4} />
        </div>
      </section>

      {/* 13. Dual Promotional Banners (NovaTrend Flash Sale + Summer 2026 Collection) */}
      <DualPromoBanners />

      {/* 14. Trending Products with Category Filter Tabs (12-16 products) */}
      <TrendingTabs />

      {/* 15. Beauty & Personal Care */}
      <section className="my-10 sm:my-14">
        <div className="max-w-site mx-auto px-4 sm:px-8">
          <SectionHeader
            title="Beauty & Clean Skincare"
            subtitle="Botanical serums, multi-weight hyaluronic acid, and luxury fragrances"
            viewAllLink="/category/beauty"
            viewAllText="View Beauty Collection"
          />
          <ProductGrid products={beautyEssentials} columns={4} />
        </div>
      </section>

      {/* 16. Featured Collection (Mixed Editorial Layout) */}
      <EditorialCollection />

      {/* 17. Home & Lifestyle */}
      <section className="my-10 sm:my-14">
        <div className="max-w-site mx-auto px-4 sm:px-8">
          <SectionHeader
            title="Home Living & Interior Accents"
            subtitle="Hand-thrown stoneware ceramics, ambient sculptural lighting, and cozy throws"
            viewAllLink="/category/home-decor"
            viewAllText="View Home Collection"
          />
          <ProductGrid products={homeLifestyle} columns={4} />
        </div>
      </section>

      {/* 18. Recommended For You (16 products, 4 x 4 on desktop!) */}
      <section className="my-10 sm:my-14">
        <div className="max-w-site mx-auto px-4 sm:px-8">
          <SectionHeader
            title="Recommended For You"
            subtitle="Personalized suggestions tuned to your browsing taste and wishlist"
            viewAllLink="/shop"
            viewAllText="Explore More"
          />
          <ProductGrid products={recommended} columns={4} />
        </div>
      </section>

      {/* 19. Popular Brands */}
      <PopularBrands />

      {/* 20. Recently Viewed */}
      <RecentlyViewedSection />

      {/* 21. Customer Benefits */}
      <CustomerBenefits />

      {/* 22. Newsletter */}
      <Newsletter />
    </div>
  );
};
