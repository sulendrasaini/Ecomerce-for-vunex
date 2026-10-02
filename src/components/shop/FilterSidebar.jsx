import React from 'react';
import { categories } from '../../data/categories';
import { brands } from '../../data/brands';
import { X, RotateCcw, Check } from 'lucide-react';

export const FilterSidebar = ({
  selectedCategory,
  onSelectCategory,
  selectedBrands,
  onToggleBrand,
  priceRange,
  onChangePriceRange,
  selectedRating,
  onSelectRating,
  selectedDiscount,
  onSelectDiscount,
  inStockOnly,
  onToggleInStock,
  onResetFilters,
  activeFilterCount,
  isMobileDrawer = false,
  onCloseMobile = () => {}
}) => {
  return (
    <aside className="w-full space-y-6 text-left">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-sm sm:text-base text-neutral-900 tracking-tight">
            Filters
          </h3>
          {activeFilterCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-[#F15A24] text-white text-[10px] font-bold flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {activeFilterCount > 0 && (
            <button
              onClick={onResetFilters}
              className="text-xs font-semibold text-[#F15A24] hover:text-[#D94A16] flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
          {isMobileDrawer && (
            <button
              onClick={onCloseMobile}
              className="p-1 text-neutral-400 hover:text-black rounded-lg"
              aria-label="Close filters"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* 1. Category Filter */}
      <div className="space-y-2.5">
        <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
          Category
        </h4>
        <div className="space-y-1 text-xs">
          <button
            onClick={() => onSelectCategory('all')}
            className={`w-full text-left px-2.5 py-1.5 rounded-lg font-medium transition-colors ${
              selectedCategory === 'all' || !selectedCategory
                ? 'bg-[#FFF4EE] text-[#F15A24] font-bold'
                : 'text-neutral-600 hover:bg-neutral-100'
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.slug)}
              className={`w-full text-left px-2.5 py-1.5 rounded-lg font-medium transition-colors flex items-center justify-between ${
                selectedCategory === cat.slug
                  ? 'bg-[#FFF4EE] text-[#F15A24] font-bold'
                  : 'text-neutral-600 hover:bg-neutral-100'
              }`}
            >
              <span>{cat.name}</span>
              <span className="text-[10px] text-neutral-400">{cat.itemCount.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 2. Price Range Filter */}
      <div className="space-y-2.5 pt-4 border-t border-neutral-100">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
            Price Range
          </h4>
          <span className="text-xs font-bold text-[#F15A24]">
            Up to ${priceRange}
          </span>
        </div>
        <input
          type="range"
          min="20"
          max="700"
          step="10"
          value={priceRange}
          onChange={(e) => onChangePriceRange(Number(e.target.value))}
          className="w-full accent-[#F15A24] cursor-pointer"
        />
        <div className="flex justify-between text-[11px] text-neutral-400 font-medium">
          <span>$20</span>
          <span>$350</span>
          <span>$700+</span>
        </div>
      </div>

      {/* 3. Brands Checkboxes */}
      <div className="space-y-2.5 pt-4 border-t border-neutral-100">
        <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
          Brand
        </h4>
        <div className="space-y-1.5 max-h-44 overflow-y-auto pr-1">
          {brands.map((brand) => {
            const isChecked = selectedBrands.includes(brand.name);
            return (
              <label
                key={brand.id}
                onClick={() => onToggleBrand(brand.name)}
                className="flex items-center gap-2.5 text-xs text-neutral-700 hover:text-black cursor-pointer py-0.5 select-none"
              >
                <div
                  className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                    isChecked ? 'bg-[#F15A24] border-[#F15A24] text-white' : 'border-neutral-300 bg-white'
                  }`}
                >
                  {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span>{brand.name}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* 4. Minimum Rating Filter */}
      <div className="space-y-2.5 pt-4 border-t border-neutral-100">
        <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
          Customer Rating
        </h4>
        <div className="space-y-1">
          {[4, 4.5, 3].map((stars) => (
            <button
              key={stars}
              onClick={() => onSelectRating(selectedRating === stars ? null : stars)}
              className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                selectedRating === stars
                  ? 'bg-[#FFF4EE] text-[#F15A24] font-bold'
                  : 'text-neutral-600 hover:bg-neutral-100'
              }`}
            >
              <span>{stars}★ & above</span>
              {selectedRating === stars && <Check className="w-3.5 h-3.5 text-[#F15A24]" />}
            </button>
          ))}
        </div>
      </div>

      {/* 5. Discount Filter */}
      <div className="space-y-2.5 pt-4 border-t border-neutral-100">
        <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
          Minimum Discount
        </h4>
        <div className="grid grid-cols-2 gap-1.5 text-xs">
          {[10, 20, 30, 40].map((disc) => (
            <button
              key={disc}
              onClick={() => onSelectDiscount(selectedDiscount === disc ? null : disc)}
              className={`py-1.5 px-2 rounded-lg border text-center transition-all ${
                selectedDiscount === disc
                  ? 'border-[#F15A24] bg-[#FFF4EE] text-[#F15A24] font-bold'
                  : 'border-neutral-200 text-neutral-700 hover:border-neutral-300'
              }`}
            >
              {disc}% or more
            </button>
          ))}
        </div>
      </div>

      {/* 6. Availability Checkbox */}
      <div className="pt-4 border-t border-neutral-100">
        <label
          onClick={onToggleInStock}
          className="flex items-center gap-2.5 text-xs font-semibold text-neutral-800 cursor-pointer select-none"
        >
          <div
            className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
              inStockOnly ? 'bg-[#22A06B] border-[#22A06B] text-white' : 'border-neutral-300 bg-white'
            }`}
          >
            {inStockOnly && <Check className="w-3 h-3 stroke-[3]" />}
          </div>
          <span>In Stock Only</span>
        </label>
      </div>

      {isMobileDrawer && (
        <div className="pt-6">
          <button
            onClick={onCloseMobile}
            className="w-full py-3 rounded-full bg-[#F15A24] text-white font-bold text-xs shadow-md"
          >
            Apply Filters
          </button>
        </div>
      )}
    </aside>
  );
};
