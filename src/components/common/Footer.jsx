import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ShieldCheck, ArrowRight, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#111111] text-neutral-400 pt-16 pb-12 mt-10 border-t border-neutral-800 text-xs sm:text-sm">
      <div className="max-w-site mx-auto px-4  sm:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand info (2 columns wide) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[#F15A24] flex items-center justify-center text-white font-black text-lg">
                N
              </span>
              <span className="text-2xl font-black tracking-tight text-white">
                Nova<span className="text-[#F15A24]">Trend</span>
              </span>
            </Link>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Crafting premium modern lifestyles through curated fashion essentials, industry-leading audio, smart tech, and minimalist home design.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-[#F15A24] text-white flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-[#F15A24] text-white flex items-center justify-center transition-colors" aria-label="X / Twitter">
                <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-[#F15A24] text-white flex items-center justify-center transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-[#F15A24] text-white flex items-center justify-center transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/shop?filter=new" className="hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop?filter=bestsellers" className="hover:text-white transition-colors">Best Sellers</Link></li>
              <li><Link to="/shop?deals=true" className="hover:text-white transition-colors">Deals & Offers</Link></li>
              <li><Link to="/category/fashion" className="hover:text-white transition-colors">Fashion Apparel</Link></li>
              <li><Link to="/category/electronics" className="hover:text-white transition-colors">Electronics & Audio</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Customer Support
            </h4>
            <ul className="space-y-2.5">
              <li><Link to="/account/orders" className="hover:text-white transition-colors">Track Order</Link></li>
              <li><Link to="/account" className="hover:text-white transition-colors">Help Center & FAQs</Link></li>
              <li><Link to="/account/orders" className="hover:text-white transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Shipping Information</Link></li>
              <li><Link to="/account/addresses" className="hover:text-white transition-colors">Delivery Estimator</Link></li>
              <li><Link to="/account" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              About
            </h4>
            <ul className="space-y-2.5">
              <li><Link to="/shop" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Sustainability Commitments</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Artisan Partners</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Press & Media</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Affiliate Program</Link></li>
            </ul>
          </div>

          {/* Policies & Account */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
              Legal & Account
            </h4>
            <ul className="space-y-2.5">
              <li><Link to="/signin" className="hover:text-white transition-colors">Sign In / Register</Link></li>
              <li><Link to="/account" className="hover:text-white transition-colors">My Profile</Link></li>
              <li><Link to="/wishlist" className="hover:text-white transition-colors">Saved Wishlist</Link></li>
              <li><Link to="/cart" className="hover:text-white transition-colors">Shopping Cart</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Badges, Payment Icons, Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <ShieldCheck className="w-4 h-4 text-[#22A06B]" />
            <span>256-Bit SSL Encrypted & PCI DSS Compliant Checkout</span>
          </div>

          {/* Payment Method Badges */}
          <div className="flex items-center gap-2 flex-wrap text-[10px] font-bold text-neutral-300">
            <span className="px-2.5 py-1 rounded bg-neutral-800 border border-neutral-700">VISA</span>
            <span className="px-2.5 py-1 rounded bg-neutral-800 border border-neutral-700">MASTERCARD</span>
            <span className="px-2.5 py-1 rounded bg-neutral-800 border border-neutral-700">AMEX</span>
            <span className="px-2.5 py-1 rounded bg-neutral-800 border border-neutral-700">APPLE PAY</span>
            <span className="px-2.5 py-1 rounded bg-neutral-800 border border-neutral-700">GOOGLE PAY</span>
            <span className="px-2.5 py-1 rounded bg-neutral-800 border border-neutral-700">UPI</span>
          </div>

          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} NovaTrend Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
