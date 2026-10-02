import React from 'react';
import { Link } from 'react-router-dom';
import { brands } from '../../data/brands';
import { SectionHeader } from '../common/SectionHeader';
import { ArrowRight } from 'lucide-react';

export const PopularBrands = () => {
  return (
    <section className="my-10 sm:my-14 bg-neutral-50 py-10 rounded-3xl border border-neutral-200/60">
      <div className="max-w-site mx-auto px-4 sm:px-8">
        <SectionHeader
          title="Featured Global Brands"
          subtitle="Direct partnerships with top global manufacturers for authentic products"
          viewAllLink="/shop"
          viewAllText="Explore All Brands"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={`/shop?brand=${encodeURIComponent(brand.name)}`}
              className="group bg-white p-5 rounded-2xl border border-neutral-200/80 hover:border-[#F15A24] flex flex-col items-center justify-center text-center transition-all duration-200 hover:shadow-card hover:-translate-y-0.5"
            >
              <span className="text-lg sm:text-xl font-black text-neutral-800 tracking-wider group-hover:text-[#F15A24] transition-colors">
                {brand.logoText}
              </span>
              <span className="text-[11px] font-semibold text-[#F15A24] mt-1">
                {brand.discountText}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
