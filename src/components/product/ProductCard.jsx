import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, ShoppingBag } from 'lucide-react';
import { WishlistButton } from '../common/WishlistButton';
import { Rating } from '../common/Rating';
import { PriceDisplay } from '../common/PriceDisplay';
import { Badge } from '../common/Badge';
import { QuickViewModal } from '../common/QuickViewModal';
import { useCart } from '../../context/CartContext';

export const ProductCard = ({ product, showDelivery = true, className = '' }) => {
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const { addToCart } = useCart();

  if (!product) return null;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <>
      <div className={`group relative bg-white rounded-2xl border border-neutral-200/80 hover:border-neutral-300 p-3 sm:p-3.5 flex flex-col justify-between transition-all duration-200 hover:shadow-card ${className}`}>
        {/* Image Area */}
        <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-neutral-50 mb-3">
          <Link to={`/product/${product.id}`} className="block w-full h-full">
            <img
              src={product.images[0]}
              alt={product.title}
              loading="lazy"
              className="w-full h-full object-cover object-center img-zoom transition-standard"
            />
          </Link>

          {/* Badges */}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10 pointer-events-none">
            {product.badge && (
              <Badge
                variant={product.badge.includes('%') ? 'sale' : product.badge === 'New' ? 'dark' : 'orange'}
                size="xs"
              >
                {product.badge}
              </Badge>
            )}
          </div>

          {/* Top Right Wishlist Button */}
          <div className="absolute top-2.5 right-2.5 z-10">
            <WishlistButton product={product} size="sm" />
          </div>

          {/* Hover Overlay: Quick View Button */}
          <div className="absolute inset-x-2.5 bottom-2.5 z-10 opacity-0 group-hover:opacity-100 transition-standard hidden sm:block">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setQuickViewOpen(true);
              }}
              className="w-full py-2 bg-white/95 backdrop-blur-sm hover:bg-white text-neutral-900 text-xs font-semibold rounded-lg shadow-md flex items-center justify-center gap-1.5 transition-colors border border-neutral-200/60"
            >
              <Eye className="w-3.5 h-3.5 text-neutral-600" />
              <span>Quick View</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-1 text-[11px] text-neutral-400 font-medium uppercase tracking-wider mb-1">
              <span>{product.brand}</span>
              <span className="text-neutral-300">•</span>
              <span className="truncate">{product.subcategory || product.category}</span>
            </div>

            <Link
              to={`/product/${product.id}`}
              className="block font-semibold text-xs sm:text-sm text-neutral-900 group-hover:text-[#F15A24] transition-colors line-clamp-1 mb-1.5"
            >
              {product.title}
            </Link>

            {/* Rating */}
            <div className="mb-2">
              <Rating rating={product.rating} reviewCount={product.reviewCount} size="xs" />
            </div>
          </div>

          {/* Price & Quick Add Button Row */}
          <div className="pt-2 border-t border-neutral-100 flex items-center justify-between gap-2 mt-auto">
            <PriceDisplay
              price={product.price}
              mrp={product.mrp}
              discount={product.discount}
              size="sm"
            />

            <button
              onClick={handleQuickAdd}
              className="w-8 h-8 rounded-full bg-neutral-900 text-white hover:bg-[#F15A24] flex items-center justify-center transition-colors shadow-xs active:scale-95 flex-shrink-0"
              title="Add to Cart"
              aria-label={`Add ${product.title} to cart`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
            </button>
          </div>

          {showDelivery && product.delivery && (
            <p className="text-[10px] text-[#22A06B] font-medium mt-1 truncate">
              {product.delivery}
            </p>
          )}
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={product}
        isOpen={quickViewOpen}
        onClose={() => setQuickViewOpen(false)}
      />
    </>
  );
};
