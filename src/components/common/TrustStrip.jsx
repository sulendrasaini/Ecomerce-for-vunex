import React from 'react';
import { Truck, ShieldCheck, RotateCcw, Headphones } from 'lucide-react';

export const TrustStrip = () => {
  const benefits = [
    {
      icon: Truck,
      title: 'Free Worldwide Shipping',
      subtitle: 'On all eligible orders over $75'
    },
    {
      icon: ShieldCheck,
      title: '100% Secure Payments',
      subtitle: 'Encrypted multi-layer checkout'
    },
    {
      icon: RotateCcw,
      title: 'Hassle-Free Returns',
      subtitle: '30-day money-back guarantee'
    },
    {
      icon: Headphones,
      title: '24/7 Dedicated Support',
      subtitle: 'Always here to assist anytime'
    }
  ];

  return (
    <section className="bg-white border-y border-neutral-100 py-6 sm:py-8 my-6 sm:my-10">
      <div className="max-w-site mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-neutral-100">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-3.5 sm:gap-4 ${idx !== 0 ? 'sm:pl-6' : ''} ${idx > 1 ? 'pt-4 sm:pt-0' : ''}`}
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#FFF4EE] border border-[#FFE0D1] flex items-center justify-center flex-shrink-0 text-[#F15A24]">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-neutral-900 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-neutral-500 mt-0.5 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
