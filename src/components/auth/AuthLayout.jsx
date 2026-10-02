import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck } from 'lucide-react';

export const AuthLayout = ({ children, title, subtitle, visualImage = 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80', quote = 'Refined modern essentials designed for conscious living.' }) => {
  return (
    <div className="min-h-[85vh] flex items-center justify-center py-8 sm:py-12 px-4">
      <div className="max-w-4xl w-full bg-white rounded-3xl border border-neutral-200 shadow-xl overflow-hidden flex flex-col md:flex-row">
        {/* Left: Lifestyle / Editorial Visual */}
        <div className="md:w-1/2 relative bg-neutral-900 text-white p-8 sm:p-10 flex flex-col justify-between overflow-hidden min-h-[300px] md:min-h-[540px]">
          {/* Background image */}
          <img
            src={visualImage}
            alt="NovaTrend Auth"
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          {/* Warm Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/60 to-[#F15A24]/30" />

          {/* Top Brand Logo */}
          <div className="relative z-10">
            <Link to="/" className="inline-flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#F15A24] flex items-center justify-center text-white font-black text-lg">
                N
              </span>
              <span className="text-2xl font-black tracking-tight text-white">
                Nova<span className="text-[#F15A24]">Trend</span>
              </span>
            </Link>
          </div>

          {/* Bottom Statement */}
          <div className="relative z-10 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#F15A24] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 fill-[#F15A24]" />
              <span>Premium Membership</span>
            </div>
            <p className="text-lg sm:text-xl font-medium text-neutral-100 leading-snug">
              "{quote}"
            </p>
            <div className="flex items-center gap-2 text-xs text-neutral-400 pt-2 border-t border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#22A06B]" />
              <span>Verified encrypted authentication</span>
            </div>
          </div>
        </div>

        {/* Right: Form Container */}
        <div className="md:w-1/2 p-6 sm:p-10 flex flex-col justify-center text-left">
          <div className="mb-6">
            <h2 className="text-2xl font-black text-neutral-900 tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xs sm:text-sm text-neutral-500 mt-1 font-normal">
                {subtitle}
              </p>
            )}
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};
