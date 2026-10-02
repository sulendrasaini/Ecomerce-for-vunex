import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { PriceDisplay } from '../common/PriceDisplay';
import { Rating } from '../common/Rating';
import { WishlistButton } from '../common/WishlistButton';
import { useCart } from '../../context/CartContext';

export const ProductCardHorizontal = ({ product }) => {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <div className="group bg-white rounded-2xl border border-neutral-200/80 hover:border-neutral-300 p-3 sm:p-4 flex items-center gap-4 transition-all duration-200 hover:shadow-card relative">
      <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-neutral-50 flex-shrink-0 relative">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover object-center img-zoom transition-standard"
          />
        </Link>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
            {product.brand}
          </span>
          <WishlistButton product={product} size="sm" />
        </div>

        <Link
          to={`/product/${product.id}`}
          className="block text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-[#F15A24] transition-colors truncate mt-0.5 mb-1"
        >
          {product.title}
        </Link>

        <div className="mb-2">
          <Rating rating={product.rating} reviewCount={product.reviewCount} size="xs" />
        </div>

        <div className="flex items-center justify-between gap-2">
          <PriceDisplay
            price={product.price}
            mrp={product.mrp}
            discount={product.discount}
            size="sm"
          />

          <button
            onClick={() => addToCart(product, 1)}
            className="px-3 py-1.5 rounded-full bg-[#111111] hover:bg-[#F15A24] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors active:scale-95"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
