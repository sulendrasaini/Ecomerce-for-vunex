import React from 'react';
import { Star } from 'lucide-react';

export const Rating = ({ rating = 5, reviewCount = null, size = 'sm', showNumber = true }) => {
  const iconSize = size === 'xs' ? 'w-3 h-3' : size === 'md' ? 'w-4 h-4' : 'w-3.5 h-3.5';
  const textSize = size === 'xs' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-xs';

  return (
    <div className="inline-flex items-center gap-1.5">
      <div className="flex items-center text-[#F5B800]">
        {[...Array(5)].map((_, i) => {
          const filled = i < Math.floor(rating);
          const half = !filled && i < rating;
          return (
            <Star
              key={i}
              className={`${iconSize} ${filled ? 'fill-[#F5B800]' : half ? 'fill-[#F5B800]/50' : 'text-neutral-300'}`}
            />
          );
        })}
      </div>
      {showNumber && (
        <span className={`font-semibold text-neutral-800 ${textSize}`}>
          {Number(rating).toFixed(1)}
        </span>
      )}
      {reviewCount !== null && (
        <span className={`text-neutral-400 font-normal ${textSize}`}>
          ({reviewCount})
        </span>
      )}
    </div>
  );
};
