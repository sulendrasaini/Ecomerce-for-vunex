import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export const PasswordInput = ({
  label = 'Password',
  name = 'password',
  value,
  onChange,
  placeholder = '••••••••',
  error,
  required = false,
  showStrength = false
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // Simple password strength calculation
  const getStrength = (pass) => {
    if (!pass) return 0;
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;
    return score;
  };

  const strength = showStrength ? getStrength(value) : 0;
  const strengthLabels = ['Weak', 'Fair', 'Good', 'Strong'];
  const strengthColors = ['bg-[#E5484D]', 'bg-[#F5B800]', 'bg-[#2F80ED]', 'bg-[#22A06B]'];

  return (
    <div className="space-y-1.5 text-left">
      <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider">
        {label} {required && <span className="text-[#E5484D]">*</span>}
      </label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full h-11 pl-3.5 pr-10 text-xs sm:text-sm bg-neutral-50 hover:bg-neutral-100/50 focus:bg-white border rounded-xl outline-none transition-all placeholder:text-neutral-400 font-medium ${
            error
              ? 'border-[#E5484D] focus:ring-2 focus:ring-[#E5484D]/10'
              : 'border-neutral-200 focus:border-[#F15A24] focus:ring-2 focus:ring-[#F15A24]/10'
          }`}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 p-1"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4 text-neutral-500" />}
        </button>
      </div>

      {showStrength && value && (
        <div className="pt-1 space-y-1">
          <div className="flex gap-1 h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
            {[0, 1, 2, 3].map((step) => (
              <div
                key={step}
                className={`flex-1 transition-all duration-300 ${
                  step < strength ? strengthColors[strength - 1] : 'bg-transparent'
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] text-neutral-500 font-semibold">
            Strength: {strengthLabels[Math.max(0, strength - 1)] || 'Too short'}
          </span>
        </div>
      )}

      {error && (
        <p className="text-[11px] text-[#E5484D] font-medium animate-fade-in">
          {error}
        </p>
      )}
    </div>
  );
};
