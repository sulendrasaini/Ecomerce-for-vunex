import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, ShoppingBag } from 'lucide-react';
import { PriceDisplay } from '../common/PriceDisplay';
import { Rating } from '../common/Rating';
import { WishlistButton } from '../common/WishlistButton';
import { useCart } from '../../context/CartContext';

export const DealProductCard = ({ product }) => {
  const { addToCart } = useCart();

  if (!product) return null;

  // Mock progress percentage for deal claim
  const claimedPercent = Math.min(95, 45 + ((product.id.charCodeAt(product.id.length - 1) * 7) % 50));

  return (
    <div className="group bg-white rounded-2xl border border-neutral-200/80 hover:border-[#F15A24]/40 p-3.5 flex flex-col justify-between transition-all duration-200 hover:shadow-card relative">
      {/* Top Left Discount Tag */}
      <div className="absolute top-2.5 left-2.5 z-10">
        <span className="bg-[#E5484D] text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm">
          <Flame className="w-3 h-3 fill-white" />
          {product.discount}% OFF
        </span>
      </div>

      {/* Top Right Wishlist */}
      <div className="absolute top-2.5 right-2.5 z-10">
        <WishlistButton product={product} size="sm" />
      </div>

      {/* Product Image */}
      <div className="w-full aspect-square rounded-xl overflow-hidden bg-neutral-50 mb-3 relative">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover object-center img-zoom transition-standard"
          />
        </Link>
      </div>

      {/* Info */}
      <div>
        <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
          {product.brand}
        </div>

        <Link
          to={`/product/${product.id}`}
          className="block font-semibold text-xs sm:text-sm text-neutral-900 group-hover:text-[#F15A24] transition-colors truncate mb-1"
        >
          {product.title}
        </Link>

        <div className="mb-2">
          <Rating rating={product.rating} reviewCount={product.reviewCount} size="xs" />
        </div>

        <PriceDisplay
          price={product.price}
          mrp={product.mrp}
          discount={product.discount}
          size="sm"
          className="mb-3"
        />

        {/* Claimed progress bar (Flipkart-inspired deal feature!) */}
        <div className="space-y-1 mb-3">
          <div className="flex items-center justify-between text-[10px] font-medium text-neutral-500">
            <span>Claimed: {claimedPercent}%</span>
            <span className="text-[#E5484D] font-semibold">{product.stock} items left</span>
          </div>
          <div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#F15A24] to-[#E5484D] rounded-full transition-all duration-500"
              style={{ width: `${claimedPercent}%` }}
            />
          </div>
        </div>

        <button
          onClick={() => addToCart(product, 1)}
          className="w-full py-2 rounded-xl bg-[#FFF4EE] hover:bg-[#F15A24] text-[#F15A24] hover:text-white border border-[#FFE0D1] hover:border-transparent text-xs font-bold transition-all duration-150 flex items-center justify-center gap-1.5 active:scale-98"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Grab Deal</span>
        </button>
      </div>
    </div>
  );
};
