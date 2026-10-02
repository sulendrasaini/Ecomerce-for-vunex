import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, TrendingUp, Clock, ArrowRight } from 'lucide-react';
import { productService } from '../../services/productService';
import { formatPrice } from '../../utils/formatters';
import { getStorageItem, setStorageItem } from '../../utils/storage';

const RECENT_SEARCHES_KEY = 'novatrend_recent_searches';

export const SearchBar = ({ className = '', placeholder = 'Search for products, brands and categories...' }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState(() => 
    getStorageItem(RECENT_SEARCHES_KEY, ['Air Max 270', 'Noise Canceling Headphones', 'Essential Hoodie', 'Smart Watch'])
  );

  const containerRef = useRef(null);
  const navigate = useNavigate();

  const trendingKeywords = [
    'Nike Air Max',
    'Oversized Hoodie',
    'Sony WH-1000XM5',
    'Ceramic Table Lamp',
    'Botanical Face Serum',
    'Ray-Ban Aviator'
  ];

  // Dynamic search debounce
  useEffect(() => {
    if (query.trim().length > 1) {
      const matches = productService.search(query).slice(0, 5);
      setResults(matches);
    } else {
      setResults([]);
    }
  }, [query]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (searchTerm) => {
    const finalQuery = (searchTerm || query).trim();
    if (!finalQuery) return;

    // Update recent searches
    const updated = [finalQuery, ...recentSearches.filter(s => s.toLowerCase() !== finalQuery.toLowerCase())].slice(0, 6);
    setRecentSearches(updated);
    setStorageItem(RECENT_SEARCHES_KEY, updated);

    setIsOpen(false);
    navigate(`/shop?q=${encodeURIComponent(finalQuery)}`);
  };

  const clearRecent = (e) => {
    e.stopPropagation();
    setRecentSearches([]);
    setStorageItem(RECENT_SEARCHES_KEY, []);
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearchSubmit();
        }}
        className="relative flex items-center"
      >
        <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 pointer-events-none" />
        <input
          type="text"
          value={query}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          placeholder={placeholder}
          className="w-full h-10 sm:h-10.5 pl-10 pr-9 text-xs sm:text-sm bg-neutral-50 hover:bg-neutral-100/70 focus:bg-white border border-neutral-200 focus:border-[#F15A24] rounded-full outline-none transition-all placeholder:text-neutral-400 focus:ring-2 focus:ring-[#F15A24]/10 text-neutral-900"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setResults([]);
            }}
            className="absolute right-3 text-neutral-400 hover:text-neutral-700"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </form>

      {/* Auto-suggest Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-neutral-200/80 overflow-hidden z-50 animate-scale-in text-left">
          {/* Active Search Suggestions */}
          {results.length > 0 ? (
            <div className="p-3">
              <div className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase px-3 py-1.5">
                Matching Products
              </div>
              <div className="divide-y divide-neutral-100">
                {results.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => {
                      setIsOpen(false);
                      navigate(`/product/${product.id}`);
                    }}
                    className="w-full flex items-center gap-3 p-2.5 hover:bg-neutral-50 rounded-xl transition-colors text-left group"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-12 h-12 rounded-lg object-cover bg-neutral-100 flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-[#F15A24] font-medium">{product.brand}</p>
                      <p className="text-sm font-semibold text-neutral-900 truncate group-hover:text-[#F15A24] transition-colors">
                        {product.title}
                      </p>
                      <p className="text-xs text-neutral-500 font-medium">{formatPrice(product.price)}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-300 group-hover:text-[#F15A24] group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>
              <button
                onClick={() => handleSearchSubmit()}
                className="w-full mt-2 py-2 px-3 text-center text-xs font-semibold text-[#F15A24] hover:bg-[#FFF4EE] rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <span>View all results for "{query}"</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div>
                  <div className="flex items-center justify-between px-1 mb-2">
                    <span className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-neutral-400" />
                      Recent Searches
                    </span>
                    <button
                      onClick={clearRecent}
                      className="text-[11px] text-neutral-400 hover:text-neutral-700"
                    >
                      Clear All
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {recentSearches.map((term, i) => (
                      <button
                        key={i}
                        onClick={() => handleSearchSubmit(term)}
                        className="px-3 py-1.5 rounded-full text-xs bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Trending Searches */}
              <div>
                <div className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase px-1 mb-2 flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-[#F15A24]" />
                  Trending Searches
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                  {trendingKeywords.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSearchSubmit(item)}
                      className="flex items-center gap-2 p-2 hover:bg-neutral-50 rounded-lg text-xs font-medium text-neutral-700 text-left transition-colors"
                    >
                      <Search className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{item}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
