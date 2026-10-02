import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Flame } from 'lucide-react';
import { productService } from '../../services/productService';
import { DealProductCard } from '../product/DealProductCard';

export const DealsSection = () => {
  const deals = productService.getDeals(8);

  // Live countdown timer state (e.g. 14 hours 28 mins left)
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 28,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDigit = (num) => String(num).padStart(2, '0');

  return (
    <section className="my-10 sm:my-14 bg-[#FFF7F2] py-8 sm:py-12 rounded-3xl border border-[#FFE0D1]/80">
      <div className="max-w-site mx-auto px-4 sm:px-8">
        {/* Header with Live Countdown */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8 pb-4 border-b border-[#FFE0D1]">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#F15A24] text-white flex items-center justify-center shadow-sm">
              <Flame className="w-5 h-5 fill-white" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#111111] tracking-tight">
                Deals of the Day
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                Limited-time discounts refreshed every 24 hours. Don't miss out!
              </p>
            </div>
          </div>

          {/* Countdown Clock Box */}
          <div className="flex items-center gap-2 self-start sm:self-auto bg-white px-3.5 py-2 rounded-2xl border border-[#FFE0D1] shadow-xs">
            <Clock className="w-4 h-4 text-[#F15A24]" />
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Ends in:</span>
            <div className="flex items-center gap-1 font-mono font-bold text-xs sm:text-sm text-[#111111]">
              <span className="bg-neutral-100 px-1.5 py-0.5 rounded text-[#F15A24]">{formatDigit(timeLeft.hours)}h</span>
              <span>:</span>
              <span className="bg-neutral-100 px-1.5 py-0.5 rounded text-[#F15A24]">{formatDigit(timeLeft.minutes)}m</span>
              <span>:</span>
              <span className="bg-neutral-100 px-1.5 py-0.5 rounded text-[#F15A24]">{formatDigit(timeLeft.seconds)}s</span>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {deals.map(product => (
            <DealProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <Link
            to="/shop?deals=true"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F15A24] hover:bg-[#D94A16] text-white text-xs sm:text-sm font-bold transition-all shadow-md shadow-[#F15A24]/20 group"
          >
            <span>View All Today's Deals</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
