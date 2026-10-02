import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { QuantitySelector } from '../components/common/QuantitySelector';
import { EmptyState } from '../components/common/EmptyState';
import { formatPrice } from '../utils/formatters';
import { coupons } from '../data/coupons';
import {
  Trash2,
  Heart,
  ArrowRight,
  Tag,
  Truck,
  ShieldCheck,
  CheckCircle2,
  X
} from 'lucide-react';

export const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    subtotal,
    mrpTotal,
    mrpSavings,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    couponDiscount,
    shipping,
    tax,
    total,
    cartCount,
    isFreeShipping,
    freeShippingProgress,
    amountNeededForFreeShipping
  } = useCart();

  const { addToWishlist } = useWishlist();
  const navigate = useNavigate();

  const [couponInput, setCouponInput] = useState('');

  const handleMoveToWishlist = (item) => {
    addToWishlist(item.product);
    removeFromCart(item.id);
  };

  const handleCouponSubmit = (e) => {
    e.preventDefault();
    applyCoupon(couponInput);
    setCouponInput('');
  };

  if (cartCount === 0) {
    return (
      <div className="max-w-site mx-auto px-4 sm:px-8 py-12 animate-fade-in">
        <EmptyState
          title="Your shopping cart is empty"
          description="Explore our curated collections of fashion, audio tech, and lifestyle essentials to fill it up."
          actionLink="/shop"
          actionText="Start Shopping"
        />
      </div>
    );
  }

  return (
    <div className="max-w-site mx-auto px-4 sm:px-8 py-8 animate-fade-in text-left">
      <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight mb-2">
        Shopping Cart ({cartCount} {cartCount === 1 ? 'item' : 'items'})
      </h1>
      <p className="text-xs sm:text-sm text-neutral-500 mb-8">
        Review your selections and apply promotional coupons before checking out.
      </p>

      {/* Free Shipping Progress Indicator */}
      <div className="mb-8 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80">
        <div className="flex items-center justify-between text-xs font-semibold mb-2">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-[#F15A24]" />
            {isFreeShipping ? (
              <span className="text-[#22A06B] font-bold">You qualify for FREE Worldwide Shipping!</span>
            ) : (
              <span>Add <strong className="text-[#F15A24]">{formatPrice(amountNeededForFreeShipping)}</strong> more to get FREE Shipping!</span>
            )}
          </div>
          <span className="text-neutral-500">{freeShippingProgress}%</span>
        </div>
        <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#F15A24] rounded-full transition-all duration-500"
            style={{ width: `${freeShippingProgress}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Cart Items List (8 cols on lg) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="bg-white rounded-2xl border border-neutral-200/80 divide-y divide-neutral-100 overflow-hidden shadow-xs">
            {cartItems.map((item) => (
              <div key={item.id} className="p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
                {/* Thumbnail */}
                <Link
                  to={`/product/${item.productId}`}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-neutral-50 border border-neutral-200/60 flex-shrink-0"
                >
                  <img
                    src={item.product?.images?.[0] || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80'}
                    alt={item.product?.title || ''}
                    className="w-full h-full object-cover object-center"
                  />
                </Link>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                    {item.product?.brand}
                  </span>
                  <Link
                    to={`/product/${item.productId}`}
                    className="block font-bold text-xs sm:text-sm text-neutral-900 hover:text-[#F15A24] transition-colors truncate mt-0.5"
                  >
                    {item.product?.title}
                  </Link>

                  {/* Variant info */}
                  <div className="flex items-center gap-3 text-xs text-neutral-500 mt-1">
                    {item.color && <span>Color: <strong className="text-neutral-700">{item.color}</strong></span>}
                    {item.size && <span>Size: <strong className="text-neutral-700">{item.size}</strong></span>}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="font-bold text-sm sm:text-base text-neutral-900">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                    {item.quantity > 1 && (
                      <span className="text-xs text-neutral-400">
                        ({formatPrice(item.price)} each)
                      </span>
                    )}
                  </div>
                </div>

                {/* Quantity & Actions */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-3 pt-2 sm:pt-0">
                  <QuantitySelector
                    quantity={item.quantity}
                    onChange={(qty) => updateQuantity(item.id, qty)}
                    size="sm"
                  />

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleMoveToWishlist(item)}
                      className="p-1.5 text-neutral-400 hover:text-[#F15A24] transition-colors"
                      title="Move to Wishlist"
                      aria-label="Move to Wishlist"
                    >
                      <Heart className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1.5 text-neutral-400 hover:text-[#E5484D] transition-colors"
                      title="Remove item"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center pt-2">
            <Link
              to="/shop"
              className="text-xs sm:text-sm font-semibold text-neutral-600 hover:text-[#F15A24] transition-colors"
            >
              &larr; Continue Shopping
            </Link>
          </div>
        </div>

        {/* Right: Order Summary & Coupon (4 cols on lg) */}
        <div className="lg:col-span-4 space-y-5">
          {/* Coupon Box */}
          <div className="bg-white p-5 rounded-2xl border border-neutral-200/80 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-neutral-800 uppercase tracking-wider">
              <Tag className="w-4 h-4 text-[#F15A24]" />
              <span>Apply Discount Coupon</span>
            </div>

            {appliedCoupon ? (
              <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs">
                <div>
                  <div className="flex items-center gap-1.5 text-[#22A06B] font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Coupon "{appliedCoupon.code}" Active</span>
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-0.5">
                    Saved {formatPrice(couponDiscount)} on this order
                  </p>
                </div>
                <button
                  onClick={removeCoupon}
                  className="p-1 text-neutral-400 hover:text-[#E5484D]"
                  aria-label="Remove coupon"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleCouponSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  placeholder="Enter code: e.g. SAVE10"
                  className="flex-1 h-10 px-3 uppercase text-xs bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-[#F15A24] font-semibold"
                />
                <button
                  type="submit"
                  className="h-10 px-4 rounded-xl bg-[#111111] hover:bg-[#F15A24] text-white text-xs font-bold transition-colors"
                >
                  Apply
                </button>
              </form>
            )}

            {/* Quick coupon suggestions */}
            {!appliedCoupon && (
              <div className="pt-2">
                <span className="text-[11px] text-neutral-400 block mb-1.5 font-medium">Available Offers:</span>
                <div className="flex flex-wrap gap-1.5">
                  {coupons.slice(0, 3).map(c => (
                    <button
                      key={c.code}
                      onClick={() => applyCoupon(c.code)}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-[#FFF4EE] text-[#F15A24] border border-[#FFE0D1] hover:bg-[#F15A24] hover:text-white transition-colors"
                    >
                      {c.code} ({c.title.split(' ')[0]})
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Price Breakdown */}
          <div className="bg-white p-5 rounded-2xl border border-neutral-200/80 shadow-xs space-y-3">
            <h3 className="font-bold text-sm text-neutral-900 border-b border-neutral-100 pb-3">
              Order Summary
            </h3>

            <div className="space-y-2 text-xs sm:text-sm text-neutral-600">
              <div className="flex justify-between">
                <span>Total MRP</span>
                <span>{formatPrice(mrpTotal)}</span>
              </div>

              {mrpSavings > 0 && (
                <div className="flex justify-between text-[#22A06B]">
                  <span>Product Discount</span>
                  <span>-{formatPrice(mrpSavings)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Bag Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>

              {appliedCoupon && (
                <div className="flex justify-between text-[#22A06B] font-semibold">
                  <span>Coupon Discount ({appliedCoupon.code})</span>
                  <span>-{formatPrice(couponDiscount)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Shipping Fee</span>
                <span>{isFreeShipping ? <span className="text-[#22A06B] font-bold">FREE</span> : formatPrice(shipping)}</span>
              </div>

              <div className="flex justify-between">
                <span>Estimated Tax (8%)</span>
                <span>{formatPrice(tax)}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-100 flex justify-between items-baseline font-black text-base sm:text-lg text-neutral-900">
              <span>Total Payable</span>
              <span className="text-[#F15A24] text-xl sm:text-2xl">{formatPrice(total)}</span>
            </div>

            {mrpSavings + couponDiscount > 0 && (
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 text-[11px] font-bold text-center">
                You are saving {formatPrice(mrpSavings + couponDiscount)} on this order!
              </div>
            )}

            <button
              onClick={() => navigate('/checkout')}
              className="w-full py-3.5 rounded-full bg-[#F15A24] hover:bg-[#D94A16] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-[#F15A24]/20 active:scale-98"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#22A06B]" />
              <span>Safe and Secure Payments Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
