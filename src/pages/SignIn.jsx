import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AuthLayout } from '../components/auth/AuthLayout';
import { AuthInput } from '../components/auth/AuthInput';
import { PasswordInput } from '../components/auth/PasswordInput';
import { ArrowRight, Sparkles } from 'lucide-react';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/account';

  const validate = () => {
    const errs = {};
    if (!email) {
      errs.email = 'Email address is required.';
    } else if (!email.includes('@')) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!password) {
      errs.password = 'Password is required.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!validate()) return;

    setLoading(true);
    const res = await login(email, password, rememberMe);
    setLoading(false);

    if (res.success) {
      navigate(from, { replace: true });
    }
  };

  const handleDemoLogin = async () => {
    setEmail('alex.vance@novatrend.com');
    setPassword('password123');
    setLoading(true);
    const res = await login('alex.vance@novatrend.com', 'password123', true);
    setLoading(false);
    if (res.success) {
      navigate(from, { replace: true });
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Enter your credentials to access your orders, wishlist, and member benefits."
      quote="Simplicity is about subtracting the obvious and adding the meaningful."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Quick Demo Login Pill */}
        <button
          type="button"
          onClick={handleDemoLogin}
          className="w-full py-2.5 px-4 rounded-xl bg-[#FFF4EE] border border-[#FFE0D1] hover:bg-[#F15A24] hover:text-white text-[#F15A24] text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Quick 1-Click Demo Login (Alex Vance)</span>
        </button>

        <AuthInput
          label="Email Address"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors({ ...errors, email: null });
          }}
          placeholder="e.g. alex.vance@novatrend.com"
          error={errors.email}
          required
          autoComplete="email"
        />

        <PasswordInput
          label="Password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (errors.password) setErrors({ ...errors, password: null });
          }}
          placeholder="Enter your password"
          error={errors.password}
          required
        />

        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center gap-2 text-neutral-600 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="accent-[#F15A24] rounded"
            />
            <span>Remember me</span>
          </label>

          <Link
            to="/forgot-password"
            className="font-semibold text-[#F15A24] hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full h-11 rounded-full bg-[#111111] hover:bg-[#F15A24] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm active:scale-98 disabled:opacity-50"
        >
          <span>{loading ? 'Authenticating...' : 'Sign In'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <p className="text-center text-xs text-neutral-500 pt-3">
          Don't have an account yet?{' '}
          <Link to="/signup" className="font-bold text-[#F15A24] hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};
