import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Rating } from '../common/Rating';
import { PriceDisplay } from '../common/PriceDisplay';
import { WishlistButton } from '../common/WishlistButton';
import { useCart } from '../../context/CartContext';

export const BestSellerCard = ({ product }) => {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <div className="group bg-white rounded-2xl border border-neutral-200/80 hover:border-neutral-300 p-4 transition-all duration-200 hover:shadow-card flex flex-col sm:flex-row items-center gap-4 relative">
      {/* Top Left Bestseller Badge */}
      <span className="absolute top-3 left-3 z-10 bg-[#F5B800] text-[#111111] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
        Bestseller
      </span>

      {/* Top Right Wishlist Button */}
      <div className="absolute top-3 right-3 z-10">
        <WishlistButton product={product} size="sm" />
      </div>

      {/* Product Image */}
      <div className="w-full sm:w-40 sm:h-40 aspect-square sm:aspect-auto rounded-xl overflow-hidden bg-neutral-50 flex-shrink-0 relative">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover object-center img-zoom transition-standard"
          />
        </Link>
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0 w-full flex flex-col justify-between py-1">
        <div>
          <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
            {product.brand}
          </span>
          <Link
            to={`/product/${product.id}`}
            className="block font-bold text-sm sm:text-base text-neutral-900 group-hover:text-[#F15A24] transition-colors truncate mt-0.5 mb-1"
          >
            {product.title}
          </Link>

          <PriceDisplay
            price={product.price}
            mrp={product.mrp}
            discount={product.discount}
            size="md"
            className="mb-2"
          />

          <div className="mb-2">
            <Rating rating={product.rating} reviewCount={product.reviewCount} size="xs" />
          </div>

          <p className="text-xs text-neutral-500 line-clamp-1 mb-3">
            {product.description}
          </p>
        </div>

        {/* Action Button: Pill "Quick Add" as in NovaTrend reference */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => addToCart(product, 1)}
            className="flex-1 sm:flex-initial px-5 py-2 rounded-full bg-[#111111] hover:bg-[#F15A24] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors active:scale-95 shadow-sm"
          >
            <span>Quick Add</span>
          </button>
          <button
            onClick={() => addToCart(product, 1)}
            className="w-8 h-8 rounded-full border border-neutral-300 hover:border-black text-neutral-800 flex items-center justify-center transition-colors"
            title="Add to Cart"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
