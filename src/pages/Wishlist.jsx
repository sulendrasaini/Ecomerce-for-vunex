import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { EmptyState } from '../components/common/EmptyState';
import { PriceDisplay } from '../components/common/PriceDisplay';
import { Rating } from '../components/common/Rating';
import { Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist, wishlistCount } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (product) => {
    addToCart(product, 1);
    removeFromWishlist(product.id);
  };

  return (
    <div className="max-w-site mx-auto px-4 sm:px-8 py-8 animate-fade-in text-left">
      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-neutral-200 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight flex items-center gap-2.5">
            <Heart className="w-7 h-7 text-[#E5484D] fill-[#E5484D]" />
            <span>My Wishlist</span>
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1">
            {wishlistCount} {wishlistCount === 1 ? 'saved item' : 'saved items'} ready for checkout
          </p>
        </div>

        {wishlistCount > 0 && (
          <button
            onClick={clearWishlist}
            className="text-xs font-semibold text-neutral-500 hover:text-[#E5484D] transition-colors"
          >
            Clear Wishlist
          </button>
        )}
      </div>

      {wishlistCount > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {wishlistItems.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border border-neutral-200/80 p-3.5 flex flex-col justify-between hover:shadow-card transition-all relative"
            >
              {/* Remove button */}
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-white/90 hover:bg-neutral-100 flex items-center justify-center text-neutral-400 hover:text-[#E5484D] transition-colors shadow-xs"
                title="Remove from wishlist"
                aria-label="Remove from wishlist"
              >
                <Trash2 className="w-4 h-4" />
              </button>

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

              {/* Product Info */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                    {product.brand}
                  </span>
                  <Link
                    to={`/product/${product.id}`}
                    className="block font-semibold text-xs sm:text-sm text-neutral-900 group-hover:text-[#F15A24] truncate mt-0.5 mb-1.5 transition-colors"
                  >
                    {product.title}
                  </Link>
                  <Rating rating={product.rating} reviewCount={product.reviewCount} size="xs" />
                </div>

                <div className="pt-3 border-t border-neutral-100 mt-3 space-y-2.5">
                  <PriceDisplay
                    price={product.price}
                    mrp={product.mrp}
                    discount={product.discount}
                    size="sm"
                  />

                  <button
                    onClick={() => handleMoveToCart(product)}
                    className="w-full py-2 rounded-full bg-[#111111] hover:bg-[#F15A24] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors active:scale-95 shadow-xs"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Move to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState
          icon={Heart}
          title="Your wishlist is empty"
          description="Save items you love by tapping the heart icon on any product to easily find them later."
          actionLink="/shop"
          actionText="Discover Products"
        />
      )}
    </div>
  );
};
