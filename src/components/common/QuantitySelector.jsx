import React from 'react';
import { Minus, Plus } from 'lucide-react';

export const QuantitySelector = ({ quantity, onChange, min = 1, max = 10, size = 'md' }) => {
  const isSmall = size === 'sm';

  const handleDecrement = (e) => {
    e.stopPropagation();
    if (quantity > min) {
      onChange(quantity - 1);
    }
  };

  const handleIncrement = (e) => {
    e.stopPropagation();
    if (quantity < max) {
      onChange(quantity + 1);
    }
  };

  return (
    <div className={`inline-flex items-center rounded-lg border border-neutral-300 bg-white ${isSmall ? 'h-8' : 'h-10'}`}>
      <button
        type="button"
        onClick={handleDecrement}
        disabled={quantity <= min}
        className={`flex items-center justify-center text-neutral-600 hover:text-black hover:bg-neutral-100 disabled:opacity-30 disabled:hover:bg-transparent rounded-l-md transition-colors ${
          isSmall ? 'w-7 h-full' : 'w-9 h-full'
        }`}
        aria-label="Decrease quantity"
      >
        <Minus className={isSmall ? 'w-3 h-3' : 'w-3.5 h-3.5'} />
      </button>

      <span className={`flex items-center justify-center font-semibold text-neutral-900 select-none ${
        isSmall ? 'w-8 text-xs' : 'w-10 text-sm'
      }`}>
        {quantity}
      </span>

      <button
        type="button"
        onClick={handleIncrement}
        disabled={quantity >= max}
        className={`flex items-center justify-center text-neutral-600 hover:text-black hover:bg-neutral-100 disabled:opacity-30 disabled:hover:bg-transparent rounded-r-md transition-colors ${
          isSmall ? 'w-7 h-full' : 'w-9 h-full'
        }`}
        aria-label="Increase quantity"
      >
        <Plus className={isSmall ? 'w-3 h-3' : 'w-3.5 h-3.5'} />
      </button>
    </div>
  );
};
