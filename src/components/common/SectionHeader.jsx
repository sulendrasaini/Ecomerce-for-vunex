import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const SectionHeader = ({
  title,
  subtitle = null,
  viewAllLink = null,
  viewAllText = 'View All',
  className = ''
}) => {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6 sm:mb-8 ${className}`}>
      <div>
        <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-[#161616] tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm sm:text-base text-neutral-500 mt-1 font-normal">
            {subtitle}
          </p>
        )}
      </div>

      {viewAllLink && (
        <Link
          to={viewAllLink}
          className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-800 hover:text-[#F15A24] transition-colors self-start sm:self-auto pt-1 sm:pt-0"
        >
          <span>{viewAllText}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-neutral-600 group-hover:text-[#F15A24]" />
        </Link>
      )}
    </div>
  );
};
