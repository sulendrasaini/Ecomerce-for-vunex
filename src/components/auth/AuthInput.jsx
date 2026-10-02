import React from 'react';

export const AuthInput = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  autoComplete
}) => {
  return (
    <div className="space-y-1.5 text-left">
      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider">
        {label} {required && <span className="text-[#E5484D]">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`w-full h-11 px-3.5 text-xs sm:text-sm bg-neutral-50 hover:bg-neutral-100/50 focus:bg-white border rounded-xl outline-none transition-all placeholder:text-neutral-400 font-medium ${
          error
            ? 'border-[#E5484D] focus:ring-2 focus:ring-[#E5484D]/10'
            : 'border-neutral-200 focus:border-[#F15A24] focus:ring-2 focus:ring-[#F15A24]/10'
        }`}
      />
      {error && (
        <p className="text-[11px] text-[#E5484D] font-medium animate-fade-in">
          {error}
        </p>
      )}
    </div>
  );
};
