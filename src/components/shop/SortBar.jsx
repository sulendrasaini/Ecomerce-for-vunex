import React from 'react';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';

export const SortBar = ({
  totalResults,
  startIndex,
  endIndex,
  currentSort,
  onSortChange,
  onOpenMobileFilters,
  activeFilterCount
}) => {
  return (
    <div className="bg-white rounded-2xl border border-neutral-200/80 p-3.5 sm:p-4 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
      {/* Result Count */}
      <div className="text-xs sm:text-sm text-neutral-600 font-medium">
        Showing <span className="font-bold text-neutral-900">{totalResults > 0 ? startIndex + 1 : 0}-{Math.min(endIndex, totalResults)}</span> of <span className="font-bold text-neutral-900">{totalResults}</span> products
      </div>

      {/* Controls: Mobile filter trigger + Sort selector */}
      <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
        {/* Mobile filter button */}
        <button
          onClick={onOpenMobileFilters}
          className="lg:hidden flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold transition-colors relative"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#F15A24]" />
          <span>Filters</span>
          {activeFilterCount > 0 && (
            <span className="w-4 h-4 rounded-full bg-[#F15A24] text-white text-[10px] font-bold flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </button>

        {/* Sort Select */}
        <div className="flex items-center gap-2">
          <label htmlFor="sort-select" className="text-xs text-neutral-500 font-medium hidden md:inline-flex items-center gap-1">
            <ArrowUpDown className="w-3.5 h-3.5 text-neutral-400" />
            Sort by:
          </label>
          <select
            id="sort-select"
            value={currentSort}
            onChange={(e) => onSortChange(e.target.value)}
            className="h-9 px-3 text-xs sm:text-sm bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-xl outline-none focus:border-[#F15A24] font-semibold text-neutral-800 cursor-pointer"
          >
            <option value="popularity">Popularity</option>
            <option value="newest">Newest Arrivals</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>
    </div>
  );
};
