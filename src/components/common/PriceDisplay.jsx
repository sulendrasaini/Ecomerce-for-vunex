import React from 'react';
import { formatPrice } from '../../utils/formatters';

export const PriceDisplay = ({ price, mrp, discount, size = 'md', className = '' }) => {
  const isLarge = size === 'lg';
  const isSmall = size === 'sm';

  return (
    <div className={`flex items-baseline gap-2 flex-wrap ${className}`}>
      <span className={`font-bold text-[#161616] tracking-tight ${isLarge ? 'text-2xl sm:text-3xl' : isSmall ? 'text-sm' : 'text-base sm:text-lg'}`}>
        {formatPrice(price)}
      </span>

      {mrp && mrp > price && (
        <span className={`line-through text-neutral-400 font-normal ${isLarge ? 'text-base' : 'text-xs sm:text-sm'}`}>
          {formatPrice(mrp)}
        </span>
      )}

      {discount && discount > 0 && (
        <span className="text-xs font-semibold text-[#F15A24]">
          {discount}% off
        </span>
      )}
    </div>
  );
};
