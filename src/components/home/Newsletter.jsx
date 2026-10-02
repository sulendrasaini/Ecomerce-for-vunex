import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { addToast } = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      addToast('Please enter a valid email address.', 'error');
      return;
    }
    setSubscribed(true);
    addToast('Thank you for subscribing! Your 15% discount code is WELCOME15.', 'success');
  };

  return (
    <section className="my-10 sm:my-14">
      <div className="max-w-site mx-auto px-4 sm:px-8">
        <div className="rounded-3xl bg-neutral-900 text-white p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Subtle Orange Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#F15A24]/10 blur-3xl pointer-events-none" />

          {/* Left info */}
          <div className="space-y-2 text-left z-10 max-w-lg">
            <span className="text-xs font-bold text-[#F15A24] tracking-widest uppercase">
              Stay in the loop
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Get 15% off your next purchase
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
              Sign up for members-only previews, private sale invitations, and product launch alerts.
            </p>
          </div>

          {/* Right form */}
          <div className="w-full md:w-auto z-10">
            {subscribed ? (
              <div className="flex items-center gap-2 text-sm font-semibold text-[#22A06B] bg-white/10 px-5 py-3 rounded-full border border-[#22A06B]/30">
                <CheckCircle2 className="w-4 h-4" />
                <span>Subscribed! Check your inbox for WELCOME15.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md w-full">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full h-11 pl-11 pr-4 rounded-full bg-neutral-800 text-white text-xs sm:text-sm border border-neutral-700 outline-none focus:border-[#F15A24] focus:ring-2 focus:ring-[#F15A24]/20 transition-all placeholder:text-neutral-500"
                  />
                </div>
                <button
                  type="submit"
                  className="h-11 px-6 rounded-full bg-[#F15A24] hover:bg-[#D94A16] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-colors active:scale-95 shadow-sm"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
