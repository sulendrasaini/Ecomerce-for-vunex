import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export const DualPromoBanners = () => {
  return (
    <section className="my-10 sm:my-14">
      <div className="max-w-site mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {/* Left Banner: Vibrant Orange Flash Sale */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#F15A24] via-[#FA6E38] to-[#FF8C5A] p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card">
            {/* Left Content */}
            <div className="space-y-4 z-10 w-full sm:w-3/5 text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider">
                Flash Sale
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-tight">
                Up To 70% Off
              </h3>

              {/* Countdown timer blocks matching NovaTrend reference image */}
              <div className="flex items-center gap-2 font-mono text-center">
                <div className="bg-white/20 backdrop-blur-sm px-2.5 py-1.5 rounded-lg min-w-[46px]">
                  <span className="block text-base font-black">02</span>
                  <span className="block text-[9px] uppercase tracking-wider text-white/80">Days</span>
                </div>
                <span className="font-bold">:</span>
                <div className="bg-white/20 backdrop-blur-sm px-2.5 py-1.5 rounded-lg min-w-[46px]">
                  <span className="block text-base font-black">15</span>
                  <span className="block text-[9px] uppercase tracking-wider text-white/80">Hours</span>
                </div>
                <span className="font-bold">:</span>
                <div className="bg-white/20 backdrop-blur-sm px-2.5 py-1.5 rounded-lg min-w-[46px]">
                  <span className="block text-base font-black">45</span>
                  <span className="block text-[9px] uppercase tracking-wider text-white/80">Mins</span>
                </div>
                <span className="font-bold">:</span>
                <div className="bg-white/20 backdrop-blur-sm px-2.5 py-1.5 rounded-lg min-w-[46px]">
                  <span className="block text-base font-black">30</span>
                  <span className="block text-[9px] uppercase tracking-wider text-white/80">Secs</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/shop?deals=true"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#F15A24] hover:bg-neutral-100 text-xs sm:text-sm font-bold transition-all shadow-sm active:scale-95 group"
                >
                  <span>Shop Sale Now</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Sneaker Visual Right */}
            <div className="w-48 sm:w-56 aspect-square relative z-10 flex-shrink-0 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80"
                alt="Flash Sale Sneakers"
                className="w-full h-auto object-contain filter drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Right Banner: Sleek Dark Summer Collection */}
          <div className="relative rounded-3xl overflow-hidden bg-[#111111] p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card border border-neutral-800">
            {/* Left Content */}
            <div className="space-y-4 z-10 w-full sm:w-3/5 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F15A24]/20 border border-[#F15A24]/30 text-[#F15A24] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                New Collection
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-tight">
                Summer 2026
              </h3>

              <p className="text-xs sm:text-sm text-neutral-400 max-w-xs leading-relaxed">
                Discover the latest trending silhouettes, breathable fabrics and fresh technical styles.
              </p>

              <div className="pt-2">
                <Link
                  to="/shop?category=fashion"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-neutral-900 hover:bg-[#F15A24] hover:text-white text-xs sm:text-sm font-bold transition-all shadow-sm active:scale-95 group"
                >
                  <span>Shop Collection</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Model Visual Right */}
            <div className="w-48 sm:w-56 h-56 rounded-2xl overflow-hidden relative z-10 flex-shrink-0 border border-neutral-800">
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
                alt="Summer 2026 Collection"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
