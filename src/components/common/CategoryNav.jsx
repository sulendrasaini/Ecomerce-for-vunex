import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { categories } from '../../data/categories';
import { MegaMenu } from './MegaMenu';
import { ChevronDown, Sparkles } from 'lucide-react';

export const CategoryNav = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  return (
    <div
      className="relative bg-white border-b border-neutral-100 hidden md:block"
      onMouseLeave={() => setShowMegaMenu(false)}
    >
      <div className="max-w-site mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between text-xs sm:text-sm">
          {/* Mega menu trigger */}
          <div
            className="relative py-3"
            onMouseEnter={() => setShowMegaMenu(true)}
          >
            <button
              className={`flex items-center gap-1.5 font-bold transition-colors ${
                showMegaMenu ? 'text-[#F15A24]' : 'text-neutral-900 hover:text-[#F15A24]'
              }`}
            >
              <span>All Categories</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showMegaMenu ? 'rotate-180 text-[#F15A24]' : ''}`} />
            </button>
          </div>

          {/* Individual Category links */}
          <nav className="flex items-center gap-6 overflow-x-auto no-scrollbar py-3">
            {categories.slice(0, 7).map((cat) => (
              <NavLink
                key={cat.id}
                to={`/category/${cat.slug}`}
                className={({ isActive }) =>
                  `whitespace-nowrap font-medium transition-colors ${
                    isActive ? 'text-[#F15A24] font-semibold' : 'text-neutral-600 hover:text-neutral-900'
                  }`
                }
              >
                {cat.name}
              </NavLink>
            ))}

            <NavLink
              to="/shop?deals=true"
              className="whitespace-nowrap font-semibold text-[#F15A24] flex items-center gap-1 hover:text-[#D94A16] transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Deals & Offers</span>
            </NavLink>
          </nav>
        </div>
      </div>

      {showMegaMenu && <MegaMenu onClose={() => setShowMegaMenu(false)} />}
    </div>
  );
};
