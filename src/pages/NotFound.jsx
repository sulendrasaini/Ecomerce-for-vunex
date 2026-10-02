import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16 animate-fade-in">
      <span className="text-6xl sm:text-8xl font-black text-neutral-200 tracking-tighter">
        404
      </span>
      <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight mt-2 mb-2">
        Page Not Found
      </h1>
      <p className="text-xs sm:text-sm text-neutral-500 max-w-sm mb-6 leading-relaxed">
        The link you followed may be broken or the product page may have been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] hover:bg-[#F15A24] text-white text-xs sm:text-sm font-bold transition-all shadow-sm active:scale-98"
      >
        <Home className="w-4 h-4" />
        <span>Return to Homepage</span>
      </Link>
    </div>
  );
};
