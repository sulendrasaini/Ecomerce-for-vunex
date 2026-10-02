import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { formatPrice } from '../../utils/formatters';

export const HeroSection = () => {
  // Mini floating cards mirroring the NovaTrend reference image
  const floatingCards = [
    {
      id: 'prod-02',
      name: 'Air Max 270',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80',
      position: 'top-3 left-4 sm:-left-6'
    },
    {
      id: 'prod-04',
      name: 'Smart Watch',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80',
      position: 'top-8 right-2 sm:-right-4'
    },
    {
      id: 'prod-03',
      name: 'Wireless Headphones',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80',
      position: 'bottom-20 left-2 sm:-left-8'
    },
    {
      id: 'prod-05',
      name: 'Water Bottle',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=300&q=80',
      position: 'bottom-6 right-6 sm:right-0'
    }
  ];

  return (
    <section className="relative overflow-hidden bg-[#F7F7F7] rounded-3xl my-4 sm:my-6 border border-neutral-200/70">
      <div className="max-w-site mx-auto px-6 sm:px-12 py-10 sm:py-16 min-h-[520px] lg:min-h-[580px] flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content (approx 45%) */}
        <div className="w-full lg:w-[45%] space-y-6 z-10 text-left">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF4EE] border border-[#FFE0D1] text-[#F15A24] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 fill-[#F15A24]" />
            <span>TRENDING NOW</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-black text-[#111111] leading-[1.08] tracking-tight">
            Discover Products <br className="hidden sm:inline" />
            <span className="text-[#F15A24]">You'll Love</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-lg font-normal">
            Shop the latest trending products curated for modern lifestyles. Elevate your wardrobe, audio experience, and daily essentials with guaranteed quality.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <Link
              to="/shop"
              className="px-7 py-3.5 rounded-full bg-[#F15A24] hover:bg-[#D94A16] text-white text-sm sm:text-base font-bold flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-[#F15A24]/20 active:scale-98 group"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/shop?filter=featured"
              className="px-6 py-3.5 rounded-full bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 text-sm sm:text-base font-semibold transition-all hover:border-neutral-400"
            >
              Explore Collection
            </Link>
          </div>

          {/* Social Proof Avatars */}
          <div className="flex items-center gap-3.5 pt-4 border-t border-neutral-200/60">
            <div className="flex -space-x-2.5">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                alt=""
                className="w-9 h-9 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                alt=""
                className="w-9 h-9 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80"
                alt=""
                className="w-9 h-9 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"
                alt=""
                className="w-9 h-9 rounded-full border-2 border-white object-cover"
              />
            </div>
            <div className="text-xs text-neutral-600">
              <span className="font-bold text-neutral-900">Loved by 50,000+</span> customers worldwide
            </div>
          </div>
        </div>

        {/* Right Visual (approx 55%) with Floating Cards */}
        <div className="w-full lg:w-[55%] relative flex items-center justify-center min-h-[380px] sm:min-h-[460px]">
          {/* Decorative Warm Shapes behind model */}
          <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-[#F15A24]/20 via-[#F15A24]/10 to-transparent blur-2xl pointer-events-none" />
          <div className="absolute -bottom-8 -right-8 w-60 h-60 rounded-full bg-[#F5B800]/15 blur-3xl pointer-events-none" />

          {/* Model Visual */}
          <div className="relative w-72 sm:w-[380px] lg:w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80 z-0">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80"
              alt="NovaTrend Fashion Collection"
              className="w-full h-full object-cover object-top"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* 4 Floating Product Cards */}
          {floatingCards.map((card) => (
            <Link
              key={card.id}
              to={`/product/${card.id}`}
              className={`absolute ${card.position} z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 shadow-floating border border-neutral-100 flex items-center gap-3 hover:scale-105 transition-all duration-200 group max-w-[190px]`}
            >
              <img
                src={card.image}
                alt={card.name}
                className="w-11 h-11 rounded-xl object-cover bg-neutral-100 flex-shrink-0"
              />
              <div className="min-w-0 pr-1">
                <p className="text-xs font-bold text-neutral-900 group-hover:text-[#F15A24] truncate transition-colors">
                  {card.name}
                </p>
                <p className="text-xs font-extrabold text-[#F15A24]">
                  {formatPrice(card.price)}
                </p>
              </div>
            </Link>
          ))}

          {/* Carousel Dot Indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
            <span className="w-5 h-2 rounded-full bg-[#F15A24]" />
            <span className="w-2 h-2 rounded-full bg-white/80 shadow-xs" />
            <span className="w-2 h-2 rounded-full bg-white/80 shadow-xs" />
          </div>
        </div>
      </div>
    </section>
  );
};
