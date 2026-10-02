import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Rating } from '../common/Rating';
import { PriceDisplay } from '../common/PriceDisplay';
import { WishlistButton } from '../common/WishlistButton';
import { useCart } from '../../context/CartContext';

export const ProductCardFeatured = ({ product, collectionLabel = 'Featured Spotlight' }) => {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <div className="group col-span-1 md:col-span-2 bg-gradient-to-br from-neutral-50 to-neutral-100/60 rounded-3xl border border-neutral-200/80 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 hover:shadow-card relative overflow-hidden">
      {/* Decorative subtle background shape */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#F15A24]/5 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="flex-1 space-y-4 z-10">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#FFF4EE] border border-[#FFE0D1] text-[#F15A24] text-xs font-bold uppercase tracking-wider">
            {collectionLabel}
          </span>
          <span className="text-xs text-neutral-400 font-semibold uppercase">{product.brand}</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight leading-tight">
          {product.title}
        </h3>

        <div className="flex items-center gap-3">
          <Rating rating={product.rating} reviewCount={product.reviewCount} size="sm" />
          <span className="text-xs text-[#22A06B] font-semibold">{product.delivery}</span>
        </div>

        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-md line-clamp-2">
          {product.description}
        </p>

        <PriceDisplay
          price={product.price}
          mrp={product.mrp}
          discount={product.discount}
          size="lg"
        />

        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={() => addToCart(product, 1)}
            className="px-6 py-3 rounded-full bg-[#111111] hover:bg-[#F15A24] text-white text-xs sm:text-sm font-bold flex items-center gap-2 transition-all active:scale-95 shadow-sm"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Add to Cart</span>
          </button>

          <Link
            to={`/product/${product.id}`}
            className="px-5 py-3 rounded-full bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-colors group"
          >
            <span>Explore Product</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Image with Wishlist Button */}
      <div className="relative w-full md:w-72 lg:w-80 aspect-square rounded-2xl overflow-hidden bg-white shadow-sm border border-neutral-200/60 flex-shrink-0 z-10">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover object-center img-zoom transition-standard"
          />
        </Link>
        <div className="absolute top-3 right-3 z-10">
          <WishlistButton product={product} />
        </div>
      </div>
    </div>
  );
};
