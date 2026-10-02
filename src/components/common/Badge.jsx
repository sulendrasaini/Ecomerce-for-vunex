import React from 'react';

export const Badge = ({ children, variant = 'default', size = 'sm', className = '' }) => {
  let styleClasses = 'bg-neutral-100 text-neutral-800';

  if (variant === 'orange' || variant === 'sale') {
    styleClasses = 'bg-[#F15A24] text-white';
  } else if (variant === 'dark' || variant === 'new') {
    styleClasses = 'bg-[#111111] text-white';
  } else if (variant === 'bestseller') {
    styleClasses = 'bg-[#FEF3C7] text-[#B45309] font-medium border border-[#FDE68A]';
  } else if (variant === 'success') {
    styleClasses = 'bg-[#DCFCE7] text-[#15803D] font-medium';
  } else if (variant === 'softOrange') {
    styleClasses = 'bg-[#FFF4EE] text-[#F15A24] font-semibold border border-[#FFE0D1]';
  }

  const sizeClasses = size === 'xs' ? 'px-2 py-0.5 text-[10px]' : 'px-2.5 py-1 text-xs';

  return (
    <span className={`inline-flex items-center rounded-full font-medium tracking-wide uppercase ${sizeClasses} ${styleClasses} ${className}`}>
      {children}
    </span>
  );
};
