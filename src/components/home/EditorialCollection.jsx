import React from 'react';
import { productService } from '../../services/productService';
import { ProductCardFeatured } from '../product/ProductCardFeatured';
import { ProductCard } from '../product/ProductCard';
import { SectionHeader } from '../common/SectionHeader';

export const EditorialCollection = () => {
  const allProducts = productService.getAll();
  // Hero featured spotlight item
  const featuredItem = allProducts.find(p => p.id === 'prod-03') || allProducts[0];
  // 4 complementary items
  const complementaryItems = allProducts.filter(p => ['prod-04', 'prod-11', 'prod-19', 'prod-43'].includes(p.id));

  return (
    <section className="my-10 sm:my-14">
      <div className="max-w-site mx-auto px-4 sm:px-8">
        <SectionHeader
          title="Curated Audio & Tech Showcase"
          subtitle="Precision engineered sound and smart ecosystem devices for modern audiophiles"
          viewAllLink="/category/electronics"
          viewAllText="Explore Electronics"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Large Editorial Card spanning 2 columns */}
          <ProductCardFeatured
            product={featuredItem}
            collectionLabel="Editor's Choice"
          />

          {/* Complementary cards */}
          {complementaryItems.slice(0, 2).map(prod => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </section>
  );
};
