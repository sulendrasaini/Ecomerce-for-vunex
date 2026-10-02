import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { productService } from '../services/productService';
import { FilterSidebar } from '../components/shop/FilterSidebar';
import { SortBar } from '../components/shop/SortBar';
import { ProductGrid } from '../components/product/ProductGrid';
import { EmptyState } from '../components/common/EmptyState';
import { ChevronLeft, ChevronRight, SlidersHorizontal, X } from 'lucide-react';

const PRODUCTS_PER_PAGE = 20;

export const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Search and filter initial values from URL query parameters
  const queryParam = searchParams.get('q') || '';
  const categoryParam = searchParams.get('category') || 'all';
  const brandParam = searchParams.get('brand') || '';
  const filterParam = searchParams.get('filter') || '';
  const dealsParam = searchParams.get('deals') === 'true';

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedBrands, setSelectedBrands] = useState(brandParam ? [brandParam] : []);
  const [priceRange, setPriceRange] = useState(700);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedDiscount, setSelectedDiscount] = useState(dealsParam ? 20 : null);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState('popularity');
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Sync state if URL changes
  useEffect(() => {
    if (categoryParam) setSelectedCategory(categoryParam);
    if (brandParam) setSelectedBrands([brandParam]);
    if (dealsParam) setSelectedDiscount(20);
  }, [categoryParam, brandParam, dealsParam]);

  // Handle toggles
  const handleToggleBrand = (brandName) => {
    setSelectedBrands(prev =>
      prev.includes(brandName) ? prev.filter(b => b !== brandName) : [...prev, brandName]
    );
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedBrands([]);
    setPriceRange(700);
    setSelectedRating(null);
    setSelectedDiscount(null);
    setInStockOnly(false);
    setCurrentPage(1);
    setSearchParams({});
  };

  // Count active filters
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (selectedCategory && selectedCategory !== 'all') count++;
    if (selectedBrands.length > 0) count += selectedBrands.length;
    if (priceRange < 700) count++;
    if (selectedRating !== null) count++;
    if (selectedDiscount !== null) count++;
    if (inStockOnly) count++;
    return count;
  }, [selectedCategory, selectedBrands, priceRange, selectedRating, selectedDiscount, inStockOnly]);

  // Master product filtering logic
  const filteredProducts = useMemo(() => {
    let list = productService.getAll();

    // Text search query
    if (queryParam.trim()) {
      const q = queryParam.toLowerCase().trim();
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.subcategory?.toLowerCase().includes(q)
      );
    }

    // Special quick filters
    if (filterParam === 'new') {
      list = list.filter(p => p.badge?.toLowerCase().includes('new') || p.id.endsWith('1') || p.id.endsWith('7'));
    } else if (filterParam === 'bestsellers') {
      list = list.filter(p => p.bestseller);
    } else if (filterParam === 'trending') {
      list = list.filter(p => p.trending);
    } else if (filterParam === 'featured') {
      list = list.filter(p => p.featured);
    }

    // Category filter
    if (selectedCategory && selectedCategory !== 'all') {
      list = list.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    // Brands filter
    if (selectedBrands.length > 0) {
      list = list.filter(p => selectedBrands.includes(p.brand));
    }

    // Price range
    list = list.filter(p => p.price <= priceRange);

    // Rating
    if (selectedRating) {
      list = list.filter(p => p.rating >= selectedRating);
    }

    // Discount
    if (selectedDiscount) {
      list = list.filter(p => p.discount >= selectedDiscount);
    }

    // In Stock Only
    if (inStockOnly) {
      list = list.filter(p => p.stock > 0);
    }

    // Sorting
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
  }, [queryParam, filterParam, selectedCategory, selectedBrands, priceRange, selectedRating, selectedDiscount, inStockOnly, sortBy]);

  // Pagination calculation
  const totalResults = filteredProducts.length;
  const totalPages = Math.ceil(totalResults / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <div className="max-w-site mx-auto px-4 sm:px-8 py-6 sm:py-8 animate-fade-in">
      {/* Page Title & Breadcrumb */}
      <div className="mb-6 text-left">
        <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
          {queryParam ? `Search Results for "${queryParam}"` : selectedCategory !== 'all' ? `${selectedCategory.toUpperCase()} COLLECTION` : 'Explore Catalogue'}
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 mt-1 font-normal">
          Showing authentic high-grade products backed by official manufacturer warranties.
        </p>
      </div>

      <div className="flex gap-8">
        {/* Desktop Filter Sidebar (Left) */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24 bg-white p-5 rounded-2xl border border-neutral-200/80 shadow-xs">
            <FilterSidebar
              selectedCategory={selectedCategory}
              onSelectCategory={(cat) => { setSelectedCategory(cat); setCurrentPage(1); }}
              selectedBrands={selectedBrands}
              onToggleBrand={handleToggleBrand}
              priceRange={priceRange}
              onChangePriceRange={(val) => { setPriceRange(val); setCurrentPage(1); }}
              selectedRating={selectedRating}
              onSelectRating={(r) => { setSelectedRating(r); setCurrentPage(1); }}
              selectedDiscount={selectedDiscount}
              onSelectDiscount={(d) => { setSelectedDiscount(d); setCurrentPage(1); }}
              inStockOnly={inStockOnly}
              onToggleInStock={() => { setInStockOnly(!inStockOnly); setCurrentPage(1); }}
              onResetFilters={handleResetFilters}
              activeFilterCount={activeFilterCount}
            />
          </div>
        </div>

        {/* Product Grid Area (Right) */}
        <div className="flex-1 min-w-0">
          {/* Top Sort & Count Bar */}
          <SortBar
            totalResults={totalResults}
            startIndex={startIndex}
            endIndex={endIndex}
            currentSort={sortBy}
            onSortChange={setSortBy}
            onOpenMobileFilters={() => setMobileFiltersOpen(true)}
            activeFilterCount={activeFilterCount}
          />

          {/* Active Filter Tags */}
          {activeFilterCount > 0 && (
            <div className="flex items-center gap-2 flex-wrap mb-4">
              <span className="text-xs text-neutral-400 font-semibold uppercase">Active:</span>
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFF4EE] text-[#F15A24] text-xs font-semibold">
                  {selectedCategory}
                  <button onClick={() => setSelectedCategory('all')}><X className="w-3 h-3" /></button>
                </span>
              )}
              {selectedBrands.map(b => (
                <span key={b} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFF4EE] text-[#F15A24] text-xs font-semibold">
                  {b}
                  <button onClick={() => handleToggleBrand(b)}><X className="w-3 h-3" /></button>
                </span>
              ))}
              {selectedRating && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFF4EE] text-[#F15A24] text-xs font-semibold">
                  {selectedRating}★ & above
                  <button onClick={() => setSelectedRating(null)}><X className="w-3 h-3" /></button>
                </span>
              )}
              {selectedDiscount && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFF4EE] text-[#F15A24] text-xs font-semibold">
                  {selectedDiscount}%+ Off
                  <button onClick={() => setSelectedDiscount(null)}><X className="w-3 h-3" /></button>
                </span>
              )}
              {priceRange < 700 && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFF4EE] text-[#F15A24] text-xs font-semibold">
                  &lt; ${priceRange}
                  <button onClick={() => setPriceRange(700)}><X className="w-3 h-3" /></button>
                </span>
              )}
            </div>
          )}

          {/* Product Grid or Empty State */}
          {paginatedProducts.length > 0 ? (
            <ProductGrid products={paginatedProducts} columns={4} />
          ) : (
            <EmptyState
              title="No products match your filters"
              description="Try adjusting your price range, clearing selected brands, or removing category constraints."
              actionLink="/shop"
              actionText="Reset All Filters"
            />
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12 pt-8 border-t border-neutral-200">
              <button
                disabled={currentPage === 1}
                onClick={() => {
                  setCurrentPage(prev => Math.max(1, prev - 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-9 h-9 rounded-xl border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-black hover:bg-neutral-100 disabled:opacity-30 disabled:hover:bg-transparent"
                aria-label="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {[...Array(totalPages)].map((_, idx) => {
                const pageNum = idx + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => {
                      setCurrentPage(pageNum);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-9 h-9 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                      currentPage === pageNum
                        ? 'bg-[#111111] text-white shadow-sm'
                        : 'border border-neutral-200 text-neutral-700 hover:bg-neutral-100'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                disabled={currentPage === totalPages}
                onClick={() => {
                  setCurrentPage(prev => Math.min(totalPages, prev + 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-9 h-9 rounded-xl border border-neutral-200 flex items-center justify-center text-neutral-600 hover:text-black hover:bg-neutral-100 disabled:opacity-30 disabled:hover:bg-transparent"
                aria-label="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filters Drawer Modal */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end bg-black/60 backdrop-blur-xs animate-fade-in">
          <div
            className="w-full max-w-xs sm:max-w-sm bg-white h-full p-6 overflow-y-auto shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <FilterSidebar
              selectedCategory={selectedCategory}
              onSelectCategory={(cat) => { setSelectedCategory(cat); setCurrentPage(1); }}
              selectedBrands={selectedBrands}
              onToggleBrand={handleToggleBrand}
              priceRange={priceRange}
              onChangePriceRange={(val) => { setPriceRange(val); setCurrentPage(1); }}
              selectedRating={selectedRating}
              onSelectRating={(r) => { setSelectedRating(r); setCurrentPage(1); }}
              selectedDiscount={selectedDiscount}
              onSelectDiscount={(d) => { setSelectedDiscount(d); setCurrentPage(1); }}
              inStockOnly={inStockOnly}
              onToggleInStock={() => { setInStockOnly(!inStockOnly); setCurrentPage(1); }}
              onResetFilters={handleResetFilters}
              activeFilterCount={activeFilterCount}
              isMobileDrawer={true}
              onCloseMobile={() => setMobileFiltersOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};
