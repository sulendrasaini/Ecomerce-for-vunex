import React from 'react';
import { Heart } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';

export const WishlistButton = ({ product, className = '', size = 'md' }) => {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = isWishlisted(product?.id);

  const iconSizes = size === 'sm' ? 'w-4 h-4' : 'w-4 h-4 sm:w-4.5 sm:h-4.5';
  const buttonSizes = size === 'sm' ? 'w-8 h-8' : 'w-9 h-9 sm:w-10 sm:h-10';

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleWishlist(product);
      }}
      aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
      className={`${buttonSizes} rounded-full flex items-center justify-center transition-all bg-white/90 hover:bg-white text-neutral-700 shadow-sm border border-neutral-200/70 hover:scale-105 active:scale-95 ${className}`}
    >
      <Heart
        className={`${iconSizes} transition-colors ${
          wishlisted ? 'fill-[#E5484D] text-[#E5484D]' : 'text-neutral-600 hover:text-[#E5484D]'
        }`}
      />
    </button>
  );
};
