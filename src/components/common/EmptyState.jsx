import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export const EmptyState = ({
  icon: Icon = ShoppingBag,
  title = 'No items found',
  description = 'Looks like there is nothing to display here yet.',
  actionLink = '/shop',
  actionText = 'Start Shopping'
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4 bg-white rounded-2xl border border-neutral-100 max-w-lg mx-auto my-8">
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#FFF4EE] border border-[#FFE0D1] flex items-center justify-center text-[#F15A24] mb-4">
        <Icon className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.5]" />
      </div>

      <h3 className="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
        {title}
      </h3>

      <p className="text-xs sm:text-sm text-neutral-500 max-w-sm mt-1 mb-6 leading-relaxed">
        {description}
      </p>

      {actionLink && (
        <Link
          to={actionLink}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] hover:bg-[#F15A24] text-white text-xs sm:text-sm font-semibold transition-all hover:scale-102 active:scale-98 shadow-sm group"
        >
          <span>{actionText}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
};
