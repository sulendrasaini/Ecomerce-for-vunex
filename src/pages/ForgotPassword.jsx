import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../components/auth/AuthLayout';
import { AuthInput } from '../components/auth/AuthInput';
import { useToast } from '../context/ToastContext';
import { ArrowLeft, CheckCircle2, Mail } from 'lucide-react';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { addToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      addToast('Please enter a valid email address.', 'error');
      return;
    }
    setSubmitted(true);
    addToast('Password reset instructions sent to your email.', 'success');
  };

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Enter the email associated with your account and we will send you a reset link."
      quote="Security and ease of access tailored for your peace of mind."
    >
      {submitted ? (
        <div className="space-y-4 text-center py-4">
          <div className="w-12 h-12 rounded-full bg-emerald-50 text-[#22A06B] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-neutral-900">Check Your Email</h3>
          <p className="text-xs text-neutral-500 leading-relaxed max-w-xs mx-auto">
            We've sent password reset instructions to <strong>{email}</strong>. Please follow the instructions to securely reset your password.
          </p>
          <div className="pt-2">
            <Link
              to="/signin"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F15A24] hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Sign In</span>
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <AuthInput
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. alex@example.com"
            required
          />

          <button
            type="submit"
            className="w-full h-11 rounded-full bg-[#111111] hover:bg-[#F15A24] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-sm active:scale-98"
          >
            <Mail className="w-4 h-4" />
            <span>Send Reset Link</span>
          </button>

          <p className="text-center text-xs text-neutral-500 pt-2">
            Remembered your credentials?{' '}
            <Link to="/signin" className="font-bold text-[#F15A24] hover:underline">
              Sign In
            </Link>
          </p>
        </form>
      )}
    </AuthLayout>
  );
};
