import React, { useState } from 'react';
import { Badge } from '../common/Badge';
import { WishlistButton } from '../common/WishlistButton';

export const ProductGallery = ({ images = [], product }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentImg = images[activeIndex] || images[0];

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-4">
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex sm:flex-col gap-2.5 overflow-x-auto sm:overflow-y-auto no-scrollbar sm:w-20 flex-shrink-0">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 bg-neutral-50 ${
                activeIndex === idx
                  ? 'border-[#F15A24] ring-2 ring-[#F15A24]/10 shadow-sm'
                  : 'border-neutral-200/80 hover:border-neutral-300 opacity-80 hover:opacity-100'
              }`}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </button>
          ))}
        </div>
      )}

      {/* Main Image Stage */}
      <div className="relative flex-1 aspect-square rounded-3xl overflow-hidden bg-neutral-50 border border-neutral-200/80 group">
        <img
          src={currentImg}
          alt={product?.title || 'Product'}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
          {product?.badge && (
            <Badge variant="orange" size="sm">
              {product.badge}
            </Badge>
          )}
          {product?.discount > 0 && (
            <Badge variant="sale" size="sm">
              Save {product.discount}%
            </Badge>
          )}
        </div>

        {/* Wishlist Button */}
        {product && (
          <div className="absolute top-4 right-4 z-10">
            <WishlistButton product={product} size="md" />
          </div>
        )}
      </div>
    </div>
  );
};
