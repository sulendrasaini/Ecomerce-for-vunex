import React from 'react';
import { productService } from '../../services/productService';
import { ProductCardCompact } from '../product/ProductCardCompact';
import { SectionHeader } from '../common/SectionHeader';

export const RecentlyViewedSection = () => {
  const viewed = productService.getRecentlyViewed();
  // If user hasn't visited any product detail pages yet, show trending suggestions
  const displayItems = viewed.length > 0 ? viewed : productService.getAll().slice(0, 8);

  return (
    <section className="my-10 sm:my-14">
      <div className="max-w-site mx-auto px-4 sm:px-8">
        <SectionHeader
          title={viewed.length > 0 ? "Recently Viewed Products" : "Based On Your Recent Activity"}
          subtitle="Quickly pick up where you left off"
          viewAllLink="/shop"
          viewAllText="View All"
        />

       <div className="flex gap-3 sm:gap-4 overflow-x-auto no-scrollbar pb-3">
  {displayItems.map((product) => (
    <div
      key={product.id}
      className="flex-none w-[180px] sm:w-[210px] md:w-[230px]"
    >
      <ProductCardCompact product={product} />
    </div>
  ))}
</div>
      </div>
    </section>
  );
};
