import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { productService } from '../services/productService';
import { ProductGrid } from '../components/product/ProductGrid';
import { SortBar } from '../components/shop/SortBar';
import { EmptyState } from '../components/common/EmptyState';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const CategoryPage = () => {
  const { slug } = useParams();
  const currentCategory = categories.find(c => c.slug === slug) || categories[0];

  const [activeSubcategory, setActiveSubcategory] = useState('All');
  const [sortBy, setSortBy] = useState('popularity');

  const categoryProducts = useMemo(() => {
    let list = productService.getByCategory(slug);

    if (activeSubcategory !== 'All') {
      list = list.filter(p => p.subcategory?.toLowerCase().includes(activeSubcategory.toLowerCase()));
    }

    switch (sortBy) {
      case 'newest':
        list.sort((a, b) => (b.badge === 'New' ? 1 : 0) - (a.badge === 'New' ? 1 : 0));
        break;
      case 'price-asc':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      case 'popularity':
      default:
        list.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
    }

    return list;
  }, [slug, activeSubcategory, sortBy]);

  return (
    <div className="max-w-site mx-auto px-4 sm:px-8 py-6 sm:py-8 animate-fade-in text-left">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
        <Link to="/" className="hover:text-black transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
        <Link to="/shop" className="hover:text-black transition-colors">Categories</Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
        <span className="font-semibold text-neutral-900">{currentCategory.name}</span>
      </nav>

      {/* Hero Category Banner */}
      <div className="relative rounded-3xl overflow-hidden min-h-[220px] sm:min-h-[280px] bg-neutral-950 text-white p-6 sm:p-10 flex flex-col justify-end mb-8 shadow-card border border-neutral-800">
        <img
          src={currentCategory.bannerImage || currentCategory.image}
          alt={currentCategory.name}
          className="absolute inset-0 w-full h-full object-cover opacity-45 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

        <div className="relative z-10 space-y-2 max-w-xl">
          <span className="text-xs font-bold text-[#F15A24] tracking-widest uppercase">
            Curated Department
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            {currentCategory.name}
          </h1>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
            {currentCategory.tagline}. Handpicked items tested for performance, durability, and contemporary design.
          </p>
        </div>
      </div>

      {/* Subcategory Pills */}
      {currentCategory.subcategories?.length > 0 && (
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6">
          <button
            onClick={() => setActiveSubcategory('All')}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              activeSubcategory === 'All'
                ? 'bg-[#111111] text-white shadow-sm'
                : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
            }`}
          >
            All {currentCategory.name}
          </button>
          {currentCategory.subcategories.map((sub) => (
            <button
              key={sub}
              onClick={() => setActiveSubcategory(sub)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeSubcategory === sub
                  ? 'bg-[#111111] text-white shadow-sm'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
              }`}
            >
              {sub}
            </button>
          ))}
        </div>
      )}

      {/* Sort Bar */}
      <SortBar
        totalResults={categoryProducts.length}
        startIndex={0}
        endIndex={categoryProducts.length}
        currentSort={sortBy}
        onSortChange={setSortBy}
        onOpenMobileFilters={() => {}}
        activeFilterCount={0}
      />

      {/* Product Grid */}
      {categoryProducts.length > 0 ? (
        <ProductGrid products={categoryProducts} columns={4} />
      ) : (
        <EmptyState
          title={`No products in "${activeSubcategory}" yet`}
          description="Check out other departments or browse our full catalogue."
          actionLink="/shop"
          actionText="Browse Full Shop"
        />
      )}
    </div>
  );
};
