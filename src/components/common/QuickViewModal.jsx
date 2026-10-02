import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ShoppingBag, Heart, Check, ExternalLink } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { Rating } from './Rating';
import { PriceDisplay } from './PriceDisplay';
import { QuantitySelector } from './QuantitySelector';

export const QuickViewModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();

  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]?.name || null);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.images[0]);

  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor, selectedSize);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-neutral-100 relative animate-scale-in max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-neutral-100 flex items-center justify-center text-neutral-600 hover:text-black transition-colors shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Product Images */}
        <div className="md:w-1/2 p-6 bg-neutral-50 flex flex-col justify-between">
          <div className="aspect-square rounded-2xl overflow-hidden bg-white border border-neutral-200/60 mb-4 flex items-center justify-center">
            <img
              src={activeImage}
              alt={product.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
          {product.images?.length > 1 && (
            <div className="flex gap-2 justify-center">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImage === img ? 'border-[#F15A24] scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Details & Purchase Form */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <span className="text-xs font-semibold text-[#F15A24] uppercase tracking-wider">
              {product.brand}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 mt-1 mb-2 leading-snug">
              {product.title}
            </h3>

            <div className="flex items-center gap-3 mb-4">
              <Rating rating={product.rating} reviewCount={product.reviewCount} />
              <span className="text-xs text-neutral-300">•</span>
              <span className="text-xs text-[#22A06B] font-medium">{product.delivery}</span>
            </div>

            <PriceDisplay
              price={product.price}
              mrp={product.mrp}
              discount={product.discount}
              size="lg"
              className="mb-4"
            />

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-5 line-clamp-3">
              {product.description}
            </p>

            {/* Color selection */}
            {product.colors?.length > 0 && (
              <div className="mb-4">
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                  Color: <span className="text-neutral-900 font-normal capitalize">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      title={color.name}
                      style={{ backgroundColor: color.hex }}
                      className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedColor === color.name ? 'border-[#F15A24] scale-110 shadow-sm' : 'border-neutral-200'
                      }`}
                    >
                      {selectedColor === color.name && (
                        <Check className={`w-3.5 h-3.5 ${color.hex === '#FFFFFF' || color.hex === '#FAFAFA' || color.hex === '#EDE8E1' ? 'text-black' : 'text-white'}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size selection */}
            {product.sizes?.length > 0 && (
              <div className="mb-5">
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                  Size: <span className="text-neutral-900 font-normal">{selectedSize}</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                        selectedSize === size
                          ? 'border-[#F15A24] bg-[#FFF4EE] text-[#F15A24] font-semibold'
                          : 'border-neutral-200 text-neutral-700 hover:border-neutral-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-neutral-100 space-y-3">
            <div className="flex items-center gap-3">
              <QuantitySelector quantity={quantity} onChange={setQuantity} />

              <button
                onClick={handleAddToCart}
                className="flex-1 h-10 sm:h-11 rounded-full bg-[#111111] hover:bg-[#F15A24] text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors active:scale-98 shadow-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full border flex items-center justify-center transition-all ${
                  wishlisted
                    ? 'border-[#E5484D] bg-red-50 text-[#E5484D]'
                    : 'border-neutral-200 hover:border-neutral-400 text-neutral-700'
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-4.5 h-4.5 ${wishlisted ? 'fill-[#E5484D]' : ''}`} />
              </button>
            </div>

            <Link
              to={`/product/${product.id}`}
              onClick={onClose}
              className="inline-flex items-center justify-center gap-1.5 w-full text-center text-xs font-semibold text-neutral-500 hover:text-[#F15A24] transition-colors pt-1"
            >
              <span>View full product details & specifications</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
