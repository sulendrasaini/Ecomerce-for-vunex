import React from 'react';
import { Link } from 'react-router-dom';
import { megaMenuGroups } from '../../data/categories';
import { ArrowRight, Sparkles } from 'lucide-react';

export const MegaMenu = ({ onClose }) => {
  return (
    <div className="absolute top-full left-0 right-0 bg-white border-b border-neutral-200 shadow-dropdown z-40 animate-fade-in">
      <div className="max-w-site mx-auto px-4 sm:px-8 py-8 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* 4 Category Groups */}
        <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {megaMenuGroups.map((group, idx) => (
            <div key={idx} className="space-y-3">
              <h3 className="text-xs font-bold text-[#161616] tracking-wider uppercase border-b border-neutral-100 pb-2">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      to={`/shop?category=${link.slug}&q=${encodeURIComponent(link.query)}`}
                      onClick={onClose}
                      className="text-xs sm:text-sm text-neutral-600 hover:text-[#F15A24] transition-colors block py-0.5"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 1 Editorial Promo Card */}
        <div className="md:col-span-1 bg-gradient-to-br from-[#FFF4EE] to-[#FFEFE5] p-5 rounded-2xl border border-[#FFE0D1] flex flex-col justify-between">
          <div>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#F15A24] uppercase tracking-wider bg-white px-2 py-0.5 rounded-full mb-3 shadow-xs">
              <Sparkles className="w-3 h-3" />
              Limited Drop
            </span>
            <h4 className="text-sm font-bold text-neutral-900 leading-snug">
              NovaTrend Spring/Summer Lookbook
            </h4>
            <p className="text-xs text-neutral-600 mt-1">
              Curated silhouettes and organic fabrics crafted for effortless modern wear.
            </p>
          </div>
          <Link
            to="/shop?category=fashion"
            onClick={onClose}
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#F15A24] hover:text-[#D94A16] group"
          >
            <span>Explore Editorial</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};
