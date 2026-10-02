import React from 'react';
import { Truck, Sparkles, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AnnouncementBar = () => {
  return (
    <div className="bg-[#111111] text-white text-[11px] sm:text-xs py-2 px-4 border-b border-neutral-800">
      <div className="max-w-site mx-auto flex items-center justify-between gap-4">
        {/* Left: Free shipping highlight */}
        <div className="hidden md:flex items-center gap-2 text-neutral-300">
          <Truck className="w-3.5 h-3.5 text-[#F15A24]" />
          <span>Free Worldwide Shipping on Orders Over $75</span>
        </div>

        {/* Center: Flash sale / promo banner */}
        <div className="mx-auto flex items-center gap-2 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-[#F5B800] animate-pulse" />
          <span>Summer Flash Sale: Up to 70% Off</span>
          <Link
            to="/shop?discount=20"
            className="text-[#F15A24] font-semibold underline underline-offset-2 hover:text-white transition-colors ml-1"
          >
            Shop Now
          </Link>
        </div>

        {/* Right: Limited time alert / Quick links */}
        <div className="hidden lg:flex items-center gap-2 text-neutral-400">
          <Clock className="w-3.5 h-3.5 text-[#F15A24]" />
          <span>24/7 Priority Support & Easy 30-Day Returns</span>
        </div>
      </div>
    </div>
  );
};
