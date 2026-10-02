import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '../../data/categories';
import { SectionHeader } from '../common/SectionHeader';

export const ShopByCategories = () => {
  return (
    <section className="my-10 sm:my-14">
      <div className="max-w-site mx-auto px-4 sm:px-8">
        <SectionHeader
          title="Shop by Categories"
          subtitle="Explore our hand-picked curated departments for everyday luxury"
          viewAllLink="/shop"
          viewAllText="View All Categories"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {categories.slice(0, 6).map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.slug}`}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-100 border border-neutral-200/80 shadow-subtle hover:shadow-card transition-all duration-300"
            >
              {/* Category Image */}
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="w-full h-full object-cover object-center img-zoom transition-standard"
              />

              {/* Gradient Scrim for readable text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity group-hover:from-black/90" />

              {/* Bottom Label and CTA */}
              <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 text-white z-10 flex flex-col justify-end">
                <h3 className="text-sm sm:text-base font-bold tracking-tight text-white group-hover:text-[#F15A24] transition-colors leading-tight">
                  {cat.name}
                </h3>

                <div className="flex items-center gap-1 text-[11px] sm:text-xs text-neutral-300 group-hover:text-white font-medium mt-1">
                  <span>Shop Now</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-[#F15A24]" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
