import React from 'react';
import { ProductCard } from './ProductCard';

export const ProductGrid = ({
  products = [],
  columns = 4,
  showDelivery = true,
  className = ''
}) => {
  // Column configuration
  let gridColsClass = 'grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
  if (columns === 5) {
    gridColsClass = 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5';
  } else if (columns === 3) {
    gridColsClass = 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';
  } else if (columns === 2) {
    gridColsClass = 'grid-cols-1 sm:grid-cols-2';
  }

  if (!products.length) {
    return (
      <div className="text-center py-12 text-neutral-400 text-sm">
        No products match the selected criteria.
      </div>
    );
  }

  return (
    <div className={`grid ${gridColsClass} gap-3 sm:gap-5 ${className}`}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          showDelivery={showDelivery}
        />
      ))}
    </div>
  );
};
