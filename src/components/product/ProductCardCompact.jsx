import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { PriceDisplay } from '../common/PriceDisplay';
import { useCart } from '../../context/CartContext';

export const ProductCardCompact = ({ product }) => {
  const { addToCart } = useCart();

  if (!product) return null;

  return (
    <div className="group bg-white rounded-xl border border-neutral-200/80 hover:border-neutral-300 p-2.5 flex flex-col justify-between transition-all duration-200 hover:shadow-sm min-w-[170px] sm:min-w-[190px]">
      <div className="w-full aspect-square rounded-lg overflow-hidden bg-neutral-50 mb-2 relative">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover object-center img-zoom transition-standard"
          />
        </Link>
      </div>

      <div>
        <p className="text-[10px] text-neutral-400 font-medium uppercase truncate">
          {product.brand}
        </p>
        <Link
          to={`/product/${product.id}`}
          className="block text-xs font-semibold text-neutral-900 group-hover:text-[#F15A24] truncate transition-colors mb-1"
        >
          {product.title}
        </Link>
        <div className="flex items-center justify-between gap-1 pt-1 border-t border-neutral-100">
          <PriceDisplay price={product.price} mrp={product.mrp} size="sm" />
          <button
            onClick={() => addToCart(product, 1)}
            className="w-6 h-6 rounded-full bg-neutral-900 text-white hover:bg-[#F15A24] flex items-center justify-center transition-colors flex-shrink-0"
            title="Add"
          >
            <ShoppingBag className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
