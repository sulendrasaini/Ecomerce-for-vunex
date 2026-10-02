import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AuthLayout } from '../components/auth/AuthLayout';
import { AuthInput } from '../components/auth/AuthInput';
import { PasswordInput } from '../components/auth/PasswordInput';
import { ArrowRight } from 'lucide-react';

export const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const { signup } = useAuth();
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!formData.email.includes('@')) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Mobile number is required.';
    }
    if (!formData.password) {
      errs.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      errs.password = 'Password must be at least 6 characters.';
    }
    if (formData.password !== formData.confirmPassword) {
      errs.confirmPassword = 'Passwords do not match.';
    }
    if (!formData.agreeTerms) {
      errs.agreeTerms = 'You must accept the terms of service.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    const res = await signup(formData);
    setLoading(false);

    if (res.success) {
      navigate('/account', { replace: true });
    }
  };

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Join NovaTrend to unlock private drops, saved addresses, and express checkout."
      quote="Design is not just what it looks like and feels like. Design is how it works."
    >
      <form onSubmit={handleSubmit} className="space-y-3.5">
        <AuthInput
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={(e) => {
            setFormData({ ...formData, fullName: e.target.value });
            if (errors.fullName) setErrors({ ...errors, fullName: null });
          }}
          placeholder="e.g. Alex Vance"
          error={errors.fullName}
          required
        />

        <AuthInput
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (errors.email) setErrors({ ...errors, email: null });
          }}
          placeholder="e.g. alex@example.com"
          error={errors.email}
          required
          autoComplete="email"
        />

        <AuthInput
          label="Mobile Phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={(e) => {
            setFormData({ ...formData, phone: e.target.value });
            if (errors.phone) setErrors({ ...errors, phone: null });
          }}
          placeholder="e.g. +1 (555) 382-9012"
          error={errors.phone}
          required
        />

        <PasswordInput
          label="Password"
          name="password"
          value={formData.password}
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
            if (errors.password) setErrors({ ...errors, password: null });
          }}
          placeholder="At least 6 characters"
          error={errors.password}
          showStrength={true}
          required
        />

        <PasswordInput
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={(e) => {
            setFormData({ ...formData, confirmPassword: e.target.value });
            if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: null });
          }}
          placeholder="Re-enter your password"
          error={errors.confirmPassword}
          required
        />

        {/* Terms Agreement Checkbox */}
        <div className="pt-1">
          <label className="flex items-start gap-2 text-xs text-neutral-600 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={formData.agreeTerms}
              onChange={(e) => {
                setFormData({ ...formData, agreeTerms: e.target.checked });
                if (errors.agreeTerms) setErrors({ ...errors, agreeTerms: null });
              }}
              className="accent-[#F15A24] rounded mt-0.5"
            />
            <span>
              I agree to the <Link to="/terms" className="text-[#F15A24] hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-[#F15A24] hover:underline">Privacy Policy</Link>.
            </span>
          </label>
          {errors.agreeTerms && (
            <p className="text-[11px] text-[#E5484D] font-medium mt-1">
              {errors.agreeTerms}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full h-11 rounded-full bg-[#111111] hover:bg-[#F15A24] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm active:scale-98 disabled:opacity-50 mt-2"
        >
          <span>{loading ? 'Creating Account...' : 'Create Account'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <p className="text-center text-xs text-neutral-500 pt-2">
          Already have an account?{' '}
          <Link to="/signin" className="font-bold text-[#F15A24] hover:underline">
            Sign In
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};
