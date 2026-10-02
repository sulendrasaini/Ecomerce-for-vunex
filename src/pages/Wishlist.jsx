import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { EmptyState } from "../components/common/EmptyState";
import { PriceDisplay } from "../components/common/PriceDisplay";
import { Rating } from "../components/common/Rating";

import {
  Heart,
  Trash2,
  ShoppingBag,
  ArrowRight,
  PackageCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const Wishlist = () => {
  const {
    wishlistItems,
    removeFromWishlist,
    clearWishlist,
    wishlistCount,
  } = useWishlist();

  const { addToCart } = useCart();

  const handleMoveToCart = (product) => {
    addToCart(product, 1);
    removeFromWishlist(product.id);
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="max-w-site mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        
        {/* =========================
            PREMIUM HEADER
        ========================== */}
        <div className="bg-white border border-neutral-200 rounded-2xl px-5 sm:px-7 py-5 sm:py-6 mb-7">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            
            <div className="flex items-start gap-4">
              <div
                className={`
                  relative
                  w-12 h-12
                  rounded-full
                  flex items-center justify-center
                  transition-all duration-300
                  ${
                    wishlistCount > 0
                      ? "bg-red-50"
                      : "bg-neutral-100"
                  }
                `}
              >
                <Heart
                  className={`
                    w-6 h-6
                    transition-all duration-300
                    ${
                      wishlistCount > 0
                        ? "text-[#E5484D] fill-[#E5484D]"
                        : "text-neutral-500"
                    }
                  `}
                />

                {wishlistCount > 0 && (
                  <span
                    className="
                      absolute
                      -top-1
                      -right-1
                      min-w-[20px]
                      h-5
                      px-1
                      rounded-full
                      bg-[#E5484D]
                      text-white
                      text-[10px]
                      font-bold
                      flex
                      items-center
                      justify-center
                      border-2
                      border-white
                    "
                  >
                    {wishlistCount > 99 ? "99+" : wishlistCount}
                  </span>
                )}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                    My Wishlist
                  </h1>

                  {wishlistCount > 0 && (
                    <span className="hidden sm:inline-flex px-2.5 py-1 rounded-full bg-red-50 text-[#E5484D] text-[10px] font-bold uppercase tracking-wide">
                      {wishlistCount} Saved
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                  {wishlistCount > 0
                    ? `${wishlistCount} ${
                        wishlistCount === 1 ? "product" : "products"
                      } saved for later`
                    : "Products you save will appear here"}
                </p>
              </div>
            </div>

            {wishlistCount > 0 && (
              <div className="flex items-center gap-3">
                <Link
                  to="/shop"
                  className="
                    hidden sm:inline-flex
                    items-center
                    gap-1.5
                    px-4
                    py-2.5
                    rounded-full
                    border
                    border-neutral-200
                    text-xs
                    font-semibold
                    text-neutral-700
                    hover:border-[#F15A24]
                    hover:text-[#F15A24]
                    transition-all
                  "
                >
                  Continue Shopping
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={clearWishlist}
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    px-4
                    py-2.5
                    rounded-full
                    bg-neutral-100
                    hover:bg-red-50
                    text-neutral-600
                    hover:text-[#E5484D]
                    text-xs
                    font-semibold
                    transition-all
                  "
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Clear Wishlist
                </button>
              </div>
            )}
          </div>
        </div>

        {/* =========================
            INFO STRIP
        ========================== */}
        {wishlistCount > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7">
            <div className="bg-white border border-neutral-200 rounded-xl px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-[#F15A24]" />
              </div>

              <div>
                <p className="text-xs font-bold text-neutral-900">
                  Saved for Later
                </p>
                <p className="text-[11px] text-neutral-500">
                  Keep your favourite products together
                </p>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-xl px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center">
                <PackageCheck className="w-4 h-4 text-[#22A06B]" />
              </div>

              <div>
                <p className="text-xs font-bold text-neutral-900">
                  Easy Shopping
                </p>
                <p className="text-[11px] text-neutral-500">
                  Move products directly to your cart
                </p>
              </div>
            </div>

            <div className="bg-white border border-neutral-200 rounded-xl px-4 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
              </div>

              <div>
                <p className="text-xs font-bold text-neutral-900">
                  Secure Checkout
                </p>
                <p className="text-[11px] text-neutral-500">
                  Protected and secure shopping experience
                </p>
              </div>
            </div>
          </div>
        )}

        {/* =========================
            WISHLIST PRODUCTS
        ========================== */}
        {wishlistCount > 0 ? (
          <>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-neutral-900">
                  Saved Products
                </h2>

                <p className="text-xs text-neutral-500 mt-0.5">
                  Prices and availability may change
                </p>
              </div>

              <Link
                to="/shop"
                className="sm:hidden flex items-center gap-1 text-xs font-semibold text-[#F15A24]"
              >
                Shop More
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div
              className="
                grid
                grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                gap-3
                sm:gap-5
                lg:gap-6
              "
            >
              {wishlistItems.map((product) => (
                <article
                  key={product.id}
                  className="
                    group
                    relative
                    bg-white
                    border
                    border-neutral-200
                    rounded-xl
                    overflow-hidden
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_12px_35px_rgba(0,0,0,0.08)]
                    hover:border-neutral-300
                  "
                >
                  {/* Product image */}
                  <div className="relative bg-[#f7f7f7] overflow-hidden aspect-square">
                    <Link
                      to={`/product/${product.id}`}
                      className="block w-full h-full"
                    >
                      <img
                        src={product.images?.[0]}
                        alt={product.title}
                        className="
                          w-full
                          h-full
                          object-cover
                          object-center
                          transition-transform
                          duration-500
                          group-hover:scale-[1.045]
                        "
                      />
                    </Link>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="
                        absolute
                        top-3
                        right-3
                        w-9
                        h-9
                        rounded-full
                        bg-white
                        shadow-sm
                        border
                        border-neutral-200
                        text-neutral-500
                        hover:bg-red-50
                        hover:border-red-100
                        hover:text-[#E5484D]
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-200
                      "
                      title="Remove from wishlist"
                      aria-label={`Remove ${product.title} from wishlist`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    {/* Badge */}
                    {product.badge && (
                      <span
                        className="
                          absolute
                          top-3
                          left-3
                          px-2.5
                          py-1
                          rounded-full
                          bg-[#111111]
                          text-white
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-wider
                        "
                      >
                        {product.badge}
                      </span>
                    )}

                    {/* Discount badge */}
                    {product.discount > 0 && (
                      <span
                        className="
                          absolute
                          bottom-3
                          left-3
                          px-2
                          py-1
                          rounded-md
                          bg-[#F15A24]
                          text-white
                          text-[9px]
                          sm:text-[10px]
                          font-bold
                        "
                      >
                        {product.discount}% OFF
                      </span>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="p-3.5 sm:p-4">
                    <span className="text-[9px] sm:text-[10px] font-bold text-neutral-400 uppercase tracking-[0.12em]">
                      {product.brand}
                    </span>

                    <Link
                      to={`/product/${product.id}`}
                      className="
                        block
                        text-xs
                        sm:text-sm
                        font-semibold
                        text-neutral-900
                        leading-5
                        mt-1
                        hover:text-[#F15A24]
                        transition-colors
                        line-clamp-2
                        min-h-[40px]
                      "
                    >
                      {product.title}
                    </Link>

                    <div className="mt-2">
                      <Rating
                        rating={product.rating}
                        reviewCount={product.reviewCount}
                        size="xs"
                      />
                    </div>

                    <div className="mt-3">
                      <PriceDisplay
                        price={product.price}
                        mrp={product.mrp}
                        discount={product.discount}
                        size="sm"
                      />
                    </div>

                    {/* Delivery / stock */}
                    <div className="mt-2 flex items-center gap-1.5">
                      <PackageCheck className="w-3.5 h-3.5 text-[#22A06B]" />

                      <span className="text-[10px] sm:text-[11px] font-medium text-[#22A06B]">
                        {product.delivery || "Free Delivery"}
                      </span>
                    </div>

                    {/* CTA */}
                    <button
                      onClick={() => handleMoveToCart(product)}
                      className="
                        mt-4
                        w-full
                        h-10
                        rounded-full
                        bg-[#111111]
                        hover:bg-[#F15A24]
                        text-white
                        text-[11px]
                        sm:text-xs
                        font-bold
                        flex
                        items-center
                        justify-center
                        gap-2
                        transition-all
                        duration-200
                        active:scale-[0.98]
                      "
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Move to Cart
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white border border-neutral-200 rounded-2xl p-5 sm:p-10">
            <EmptyState
              icon={Heart}
              title="Your wishlist is empty"
              description="Save products you love by tapping the heart icon. Your favourite products will appear here."
              actionLink="/shop"
              actionText="Discover Products"
            />
          </div>
        )}
      </div>
    </div>
  );
};