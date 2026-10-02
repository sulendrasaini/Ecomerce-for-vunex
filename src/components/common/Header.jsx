import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import {
  ShoppingBag,
  Heart,
  User,
  LogOut,
  Package,
  MapPin,
  Bell,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';

export const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown on click outside
  useEffect(() => {
    const handleOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'New Arrivals', path: '/shop?filter=new' },
    { name: 'Best Sellers', path: '/shop?filter=bestsellers' },
    { name: 'Deals', path: '/shop?deals=true' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200 transition-all">
      <div className="max-w-site mx-auto px-4 sm:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
        {/* Left: Mobile hamburger & Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -ml-2 text-neutral-700 hover:text-black focus:outline-none"
            aria-label="Open mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <Link to="/" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-lg bg-[#F15A24] flex items-center justify-center text-white font-black text-lg tracking-tighter shadow-sm group-hover:bg-[#D94A16] transition-colors">
              V
            </span>
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#111111]">
              Vunex<span className="text-[#F15A24]">Trends</span>
            </span>
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-[#F15A24] ${
                  isActive ? 'text-[#F15A24] font-semibold' : 'text-neutral-700'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Center-Right: Search Input */}
        <div className="hidden sm:block flex-1 max-w-xs lg:max-w-sm">
          <SearchBar />
        </div>

        {/* Right: Wishlist, Account, Cart */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Wishlist Link */}
      {/* Wishlist Link */}
<Link
  to="/wishlist"
  className="
    relative
    w-10
    h-10
    rounded-full
    flex
    items-center
    justify-center
    hover:bg-neutral-100
    transition-all
    duration-300
  "
  aria-label="Wishlist"
>
  <Heart
    className={`
      w-5 h-5
      transition-all
      duration-300
      ${
        wishlistCount > 0
          ? "text-[#E5484D] fill-[#E5484D]"
          : "text-neutral-700 fill-transparent"
      }
    `}
  />

  {wishlistCount > 0 && (
    <span
      className="
        absolute
        -top-0.5
        -right-0.5
        min-w-[18px]
        h-[18px]
        px-1
        rounded-full
        bg-[#E5484D]
        text-white
        text-[9px]
        font-bold
        flex
        items-center
        justify-center
        border-2
        border-white
        leading-none
      "
    >
      {wishlistCount > 99 ? "99+" : wishlistCount}
    </span>
  )}
</Link>

          {/* User Account / Sign In */}
          <div ref={dropdownRef} className="relative">
            {isAuthenticated ? (
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2 p-1.5 sm:px-3 sm:py-1.5 rounded-full hover:bg-neutral-100 transition-colors border border-transparent hover:border-neutral-200"
              >
                <img
                  src={user.avatar}
                  alt={user.fullName}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-neutral-200"
                />
                <span className="hidden md:inline-block text-xs font-semibold text-neutral-800 max-w-[90px] truncate">
                  {user.fullName.split(' ')[0]}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-neutral-500 hidden md:block" />
              </button>
            ) : (
              <Link
                to="/signin"
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-neutral-800 hover:text-[#F15A24] hover:bg-neutral-50 rounded-full transition-colors"
              >
                <User className="w-4.5 h-4.5 text-neutral-600" />
                <span className="hidden sm:inline">Sign In</span>
              </Link>
            )}

            {/* Account Dropdown Menu */}
            {isAuthenticated && userDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-neutral-200/80 py-2 z-50 animate-scale-in">
                <div className="px-4 py-3 border-b border-neutral-100">
                  <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Signed in as</p>
                  <p className="text-sm font-bold text-neutral-900 truncate mt-0.5">{user.fullName}</p>
                  <p className="text-xs text-neutral-500 truncate">{user.email}</p>
                </div>

                <div className="py-1">
                  <Link
                    to="/account"
                    onClick={() => setUserDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 hover:text-[#F15A24] transition-colors"
                  >
                    <User className="w-4 h-4 text-neutral-500" />
                    <span>My Profile</span>
                  </Link>

                  <Link
                    to="/account/orders"
                    onClick={() => setUserDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 hover:text-[#F15A24] transition-colors"
                  >
                    <Package className="w-4 h-4 text-neutral-500" />
                    <span>My Orders</span>
                  </Link>

                  <Link
                    to="/wishlist"
                    onClick={() => setUserDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 hover:text-[#F15A24] transition-colors"
                  >
                    <Heart className="w-4 h-4 text-neutral-500" />
                    <span>Wishlist ({wishlistCount})</span>
                  </Link>

                  <Link
                    to="/account/addresses"
                    onClick={() => setUserDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 hover:text-[#F15A24] transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-neutral-500" />
                    <span>Saved Addresses</span>
                  </Link>

                  <Link
                    to="/account/notifications"
                    onClick={() => setUserDropdownOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 hover:text-[#F15A24] transition-colors"
                  >
                    <Bell className="w-4 h-4 text-neutral-500" />
                    <span>Notifications</span>
                  </Link>
                </div>

                <div className="border-t border-neutral-100 pt-1 mt-1">
                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      logout();
                      navigate('/');
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-xs sm:text-sm text-[#E5484D] hover:bg-red-50 transition-colors text-left"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Cart Icon & Badge */}
          <Link
            to="/cart"
            className="relative p-2.5 bg-neutral-900 text-white hover:bg-[#F15A24] rounded-full transition-all hover:scale-105 active:scale-95 shadow-sm flex items-center justify-center"
            aria-label="Shopping Cart"
          >
            <ShoppingBag className="w-4.5 h-4.5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 bg-[#F15A24] border-2 border-white text-white text-[11px] font-bold rounded-full flex items-center justify-center">
                {cartCount > 99 ? '99+' : cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Search Bar Row */}
      <div className="sm:hidden px-4 pb-3">
        <SearchBar />
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-4 py-4 space-y-3 animate-fade-in shadow-lg">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-semibold text-neutral-800 hover:text-[#F15A24] rounded-lg hover:bg-neutral-50"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-3 border-t border-neutral-100">
            <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider px-3 mb-2">
              Popular Categories
            </p>
            <div className="grid grid-cols-2 gap-1">
              {['Fashion', 'Electronics', 'Footwear', 'Beauty', 'Home Decor', 'Accessories'].map((cat) => (
                <Link
                  key={cat}
                  to={`/category/${cat.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs font-medium text-neutral-600 hover:text-[#F15A24] rounded-lg hover:bg-neutral-50"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
