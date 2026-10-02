import React from 'react';

export const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl border border-neutral-200/80 p-3 sm:p-4 animate-pulse flex flex-col justify-between">
      <div className="w-full aspect-square bg-neutral-200/70 rounded-lg mb-4" />
      <div className="space-y-2">
        <div className="h-3 bg-neutral-200/70 rounded w-1/3" />
        <div className="h-4 bg-neutral-200/70 rounded w-4/5" />
        <div className="h-3 bg-neutral-200/70 rounded w-1/4" />
        <div className="flex items-center justify-between pt-2">
          <div className="h-5 bg-neutral-200/70 rounded w-1/2" />
          <div className="w-8 h-8 bg-neutral-200/70 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export const ProductGridSkeleton = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {[...Array(count)].map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
};

export const ProductDetailSkeleton = () => {
  return (
    <div className="max-w-site mx-auto px-4 sm:px-8 py-8 animate-pulse grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="aspect-square bg-neutral-200/70 rounded-2xl" />
      <div className="space-y-4">
        <div className="h-4 bg-neutral-200/70 rounded w-1/4" />
        <div className="h-8 bg-neutral-200/70 rounded w-3/4" />
        <div className="h-4 bg-neutral-200/70 rounded w-1/3" />
        <div className="h-10 bg-neutral-200/70 rounded w-1/2" />
        <div className="h-24 bg-neutral-200/70 rounded w-full" />
        <div className="h-12 bg-neutral-200/70 rounded w-full" />
      </div>
    </div>
  );
};
