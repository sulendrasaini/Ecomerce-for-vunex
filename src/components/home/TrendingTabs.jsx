import React, { useState } from 'react';
import { productService } from '../../services/productService';
import { ProductGrid } from '../product/ProductGrid';
import { SectionHeader } from '../common/SectionHeader';

export const TrendingTabs = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Categories' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'electronics', label: 'Electronics' },
    { id: 'footwear', label: 'Footwear' },
    { id: 'beauty', label: 'Beauty' },
    { id: 'home-decor', label: 'Home Decor' }
  ];

  const trendingProducts = productService.getTrending(activeTab, 12);

  return (
    <section className="my-10 sm:my-14">
      <div className="max-w-site mx-auto px-4 sm:px-8">
        <SectionHeader
          title="Trending Products"
          subtitle="Top picks receiving the highest customer love and rave reviews this week"
          viewAllLink={`/shop?filter=trending${activeTab !== 'all' ? `&category=${activeTab}` : ''}`}
          viewAllText="View All Trending"
        />

        {/* Tab Filters */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-[#111111] text-white shadow-sm'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <ProductGrid products={trendingProducts} columns={4} />
      </div>
    </section>
  );
};
