import React from 'react';
import { Award, Zap, Lock, Smile } from 'lucide-react';

export const CustomerBenefits = () => {
  const items = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Made with the finest curated materials'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick and reliable tracked shipping'
    },
    {
      icon: Lock,
      title: 'Secure Checkout',
      description: 'Your payment data is fully protected'
    },
    {
      icon: Smile,
      title: 'Customer Satisfaction',
      description: '100% satisfaction guarantee or return'
    }
  ];

  return (
    <section className="border-t border-neutral-100 py-8 sm:py-10 my-8">
      <div className="max-w-site mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-neutral-100 text-neutral-800 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-neutral-800 stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-neutral-900 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-500 mt-0.5 leading-snug">
                    {item.description}
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
