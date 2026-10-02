import React, { useState, useRef, useEffect } from 'react';

import {
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';

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
  ChevronDown,
  ChevronRight,
  Tag,
  Grid2X2,
} from 'lucide-react';

export const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dropdownRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setUserDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutside);

    return () =>
      document.removeEventListener('mousedown', handleOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    {
      name: 'Home',
      path: '/',
      type: 'home',
    },
    {
      name: 'Shop',
      path: '/shop',
      type: 'shop',
    },
    {
      name: 'New Arrivals',
      path: '/shop?filter=new',
      type: 'new',
    },
    {
      name: 'Best Sellers',
      path: '/shop?filter=bestsellers',
      type: 'bestsellers',
    },
    {
      name: 'Deals',
      path: '/shop?deals=true',
      type: 'deals',
    },
  ];

  const categories = [
    'Fashion',
    'Electronics',
    'Footwear',
    'Beauty',
    'Home Decor',
    'Accessories',
  ];

  const isNavActive = (type) => {
    const params = new URLSearchParams(location.search);

    switch (type) {
      case 'home':
        return location.pathname === '/';

      case 'shop':
        return (
          location.pathname === '/shop' &&
          !params.get('filter') &&
          params.get('deals') !== 'true'
        );

      case 'new':
        return (
          location.pathname === '/shop' &&
          params.get('filter') === 'new'
        );

      case 'bestsellers':
        return (
          location.pathname === '/shop' &&
          params.get('filter') === 'bestsellers'
        );

      case 'deals':
        return (
          location.pathname === '/shop' &&
          params.get('deals') === 'true'
        );

      default:
        return false;
    }
  };

  const handleLogout = () => {
    setUserDropdownOpen(false);
    setMobileMenuOpen(false);
    logout();
    navigate('/');
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-neutral-200/80">

        {/* =========================
            MOBILE HEADER
        ========================== */}
        <div className="sm:hidden bg-white">

          {/* Top Row */}
          <div className="h-[64px] px-4 flex items-center justify-between">

            {/* Left */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setMobileMenuOpen((prev) => !prev)
                }
                className={`
                  w-10 h-10
                  rounded-full
                  flex items-center justify-center
                  border
                  transition-all duration-200
                  active:scale-95
                  ${
                    mobileMenuOpen
                      ? 'bg-[#111111] border-[#111111] text-white'
                      : 'bg-white border-neutral-200 text-neutral-800'
                  }
                `}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>

              <Link
                to="/"
                className="flex items-center gap-2"
              >
                <span className="w-9 h-9 rounded-xl bg-[#F15A24] flex items-center justify-center text-white font-black text-lg shadow-sm">
                  V
                </span>

                <span className="text-[19px] font-black tracking-[-0.04em] text-[#111111]">
                  Vunex
                  <span className="text-[#F15A24]">
                    Trends
                  </span>
                </span>
              </Link>
            </div>

            {/* Right */}
            <div className="flex items-center gap-1.5">

              {/* Wishlist */}
              <Link
                to="/wishlist"
                className="relative w-10 h-10 rounded-full flex items-center justify-center hover:bg-neutral-100 transition-all"
                aria-label="Wishlist"
              >
                <Heart
                  className={`
                    w-5 h-5
                    transition-all duration-300
                    ${
                      wishlistCount > 0
                        ? 'text-[#E5484D] fill-[#E5484D]'
                        : 'text-neutral-700 fill-transparent'
                    }
                  `}
                />

                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-[#E5484D] border-2 border-white text-white text-[8px] font-black flex items-center justify-center leading-none">
                    {wishlistCount > 99
                      ? '99+'
                      : wishlistCount}
                  </span>
                )}
              </Link>

              {/* Account */}
              {isAuthenticated ? (
                <Link
                  to="/account"
                  className="w-7 h-7 rounded-full overflow-hidden bg-neutral-50 border border-neutral-200 flex items-center justify-center"
                  aria-label="Account"
                >
                  {user?.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user?.fullName || 'User'}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-5 h-5 text-neutral-700" />
                  )}
                </Link>
              ) : (
                <Link
                  to="/signin"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-neutral-100"
                  aria-label="Sign In"
                >
                  <User className="w-5 h-5 text-neutral-700" />
                </Link>
              )}

              {/* Cart */}
              <Link
                to="/cart"
                className="relative w-7 h-7 rounded-full bg-[#111111] text-white flex items-center justify-center active:scale-95 transition-transform"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-[18px] h-[18px]" />

                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-[#F15A24] border-2 border-white text-white text-[9px] font-black rounded-full flex items-center justify-center">
                    {cartCount > 99
                      ? '99+'
                      : cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Search */}
          <div className="px-4 pb-3">
            <div className="rounded-xl bg-[#F6F6F6] border border-neutral-200 overflow-hidden focus-within:border-[#F15A24]/50 focus-within:bg-white transition-all">
              <SearchBar />
            </div>
          </div>
        </div>

        {/* =========================
            DESKTOP / TABLET HEADER
        ========================== */}
        <div className="hidden sm:flex max-w-site mx-auto px-4 sm:px-8 h-20 items-center justify-between gap-4">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-2 group"
            >
              <span className="w-8 h-8 rounded-lg bg-[#F15A24] flex items-center justify-center text-white font-black text-lg tracking-tighter shadow-sm group-hover:bg-[#D94A16] transition-colors">
                V
              </span>

              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#111111]">
                Vunex
                <span className="text-[#F15A24]">
                  Trends
                </span>
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isNavActive(link.type);

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`
                    relative
                    px-3.5 py-2.5
                    rounded-lg
                    text-sm
                    font-semibold
                    transition-all
                    duration-200
                    ${
                      active
                        ? 'text-[#F15A24] bg-orange-50/70'
                        : 'text-neutral-700 hover:text-[#F15A24] hover:bg-neutral-50'
                    }
                  `}
                >
                  {link.name}

                  <span
                    className={`
                      absolute
                      left-1/2
                      -translate-x-1/2
                      bottom-0
                      h-[2px]
                      rounded-full
                      bg-[#F15A24]
                      transition-all
                      duration-300
                      ${
                        active
                          ? 'w-5 opacity-100'
                          : 'w-0 opacity-0'
                      }
                    `}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Search */}
          <div className="hidden sm:block flex-1 max-w-xs lg:max-w-sm">
            <SearchBar />
          </div>

          {/* Right */}
          <div className="flex items-center gap-2 sm:gap-4">

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative w-10 h-10 rounded-full flex items-center justify-center hover:bg-neutral-100 transition-all duration-300"
              aria-label="Wishlist"
            >
              <Heart
                className={`
                  w-5 h-5
                  transition-all duration-300
                  ${
                    wishlistCount > 0
                      ? 'text-[#E5484D] fill-[#E5484D]'
                      : 'text-neutral-700 fill-transparent'
                  }
                `}
              />

              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-[#E5484D] text-white text-[9px] font-bold flex items-center justify-center border-2 border-white leading-none">
                  {wishlistCount > 99
                    ? '99+'
                    : wishlistCount}
                </span>
              )}
            </Link>

            {/* Account */}
            <div
              ref={dropdownRef}
              className="relative"
            >
              {isAuthenticated ? (
                <button
                  onClick={() =>
                    setUserDropdownOpen(
                      !userDropdownOpen
                    )
                  }
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
                  <span className="hidden sm:inline">
                    Sign In
                  </span>
                </Link>
              )}

              {/* Dropdown */}
              {isAuthenticated &&
                userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-neutral-200/80 py-2 z-50">

                    <div className="px-4 py-3 border-b border-neutral-100">
                      <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                        Signed in as
                      </p>

                      <p className="text-sm font-bold text-neutral-900 truncate mt-0.5">
                        {user.fullName}
                      </p>

                      <p className="text-xs text-neutral-500 truncate">
                        {user.email}
                      </p>
                    </div>

                    <div className="py-1">
                      <Link
                        to="/account"
                        onClick={() =>
                          setUserDropdownOpen(false)
                        }
                        className="flex items-center gap-3 px-4 py-2.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 hover:text-[#F15A24]"
                      >
                        <User className="w-4 h-4 text-neutral-500" />
                        My Profile
                      </Link>

                      <Link
                        to="/account/orders"
                        onClick={() =>
                          setUserDropdownOpen(false)
                        }
                        className="flex items-center gap-3 px-4 py-2.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 hover:text-[#F15A24]"
                      >
                        <Package className="w-4 h-4 text-neutral-500" />
                        My Orders
                      </Link>

                      <Link
                        to="/wishlist"
                        onClick={() =>
                          setUserDropdownOpen(false)
                        }
                        className="flex items-center gap-3 px-4 py-2.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 hover:text-[#F15A24]"
                      >
                        <Heart className="w-4 h-4 text-neutral-500" />
                        Wishlist ({wishlistCount})
                      </Link>

                      <Link
                        to="/account/addresses"
                        onClick={() =>
                          setUserDropdownOpen(false)
                        }
                        className="flex items-center gap-3 px-4 py-2.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 hover:text-[#F15A24]"
                      >
                        <MapPin className="w-4 h-4 text-neutral-500" />
                        Saved Addresses
                      </Link>

                      <Link
                        to="/account/notifications"
                        onClick={() =>
                          setUserDropdownOpen(false)
                        }
                        className="flex items-center gap-3 px-4 py-2.5 text-xs sm:text-sm text-neutral-700 hover:bg-neutral-50 hover:text-[#F15A24]"
                      >
                        <Bell className="w-4 h-4 text-neutral-500" />
                        Notifications
                      </Link>
                    </div>

                    <div className="border-t border-neutral-100 pt-1 mt-1">
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-xs sm:text-sm text-[#E5484D] hover:bg-red-50 text-left"
                      >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
            </div>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative p-2.5 bg-neutral-900 text-white hover:bg-[#F15A24] rounded-full transition-all hover:scale-105 active:scale-95 shadow-sm flex items-center justify-center"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-4.5 h-4.5" />

              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 bg-[#F15A24] border-2 border-white text-white text-[11px] font-bold rounded-full flex items-center justify-center">
                  {cartCount > 99
                    ? '99+'
                    : cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* =========================
          MOBILE BACKDROP
      ========================== */}
      <div
        className={`
          sm:hidden
          fixed inset-0 z-40
          bg-black/35
          backdrop-blur-[2px]
          transition-opacity duration-300
          ${
            mobileMenuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }
        `}
        onClick={() =>
          setMobileMenuOpen(false)
        }
      />

      {/* =========================
          MOBILE DRAWER
      ========================== */}
      <aside
        className={`
          sm:hidden
          fixed
          left-0
          top-0
          bottom-0
          z-50
          w-[90%]
          max-w-[360px]
          bg-white
          shadow-[20px_0_60px_rgba(0,0,0,0.16)]
          transition-transform
          duration-300
          ease-out
          flex
          flex-col
          ${
            mobileMenuOpen
              ? 'translate-x-0'
              : '-translate-x-full'
          }
        `}
      >
        {/* Drawer Header */}
        <div className="px-5 h-[72px] flex items-center justify-between border-b border-neutral-100">
          <Link
            to="/"
            onClick={() =>
              setMobileMenuOpen(false)
            }
            className="flex items-center gap-2"
          >
            <span className="w-9 h-9 rounded-xl bg-[#F15A24] flex items-center justify-center text-white font-black text-lg">
              V
            </span>

            <span className="text-xl font-black tracking-tight text-[#111111]">
              Vunex
              <span className="text-[#F15A24]">
                Trends
              </span>
            </span>
          </Link>

          <button
            type="button"
            onClick={() =>
              setMobileMenuOpen(false)
            }
            className="w-10 h-10 rounded-full bg-neutral-100 text-neutral-700 flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto px-4 py-5">

          {/* =========================
              PROFILE CARD
          ========================== */}
          {isAuthenticated ? (
            <Link
              to="/account"
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="
                mb-6
                px-4
                py-4
                rounded-2xl
                bg-[#FAFAFA]
                border
                border-neutral-200
                flex
                items-center
                gap-4
                shadow-[0_4px_14px_rgba(0,0,0,0.04)]
              "
            >
              <div className="w-14 h-14 rounded-full overflow-hidden bg-white border border-neutral-200 flex-shrink-0 shadow-sm">
                {user?.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user?.fullName || 'User'}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <User className="w-6 h-6 text-neutral-600" />
                  </div>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-medium text-neutral-500">
                  Welcome back
                </p>

                <p className="text-[15px] font-bold text-neutral-900 truncate mt-0.5">
                  {user?.fullName}
                </p>

                <p className="text-[11px] text-neutral-500 truncate mt-0.5">
                  {user?.email}
                </p>
              </div>

              <div className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-neutral-500" />
              </div>
            </Link>
          ) : (
            <div className="mb-6 px-4 py-4 rounded-2xl bg-[#FFF8F4] border border-[#F15A24]/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-orange-100 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-[#F15A24]" />
                </div>

                <div className="flex-1">
                  <p className="text-[15px] font-bold text-neutral-900">
                    Welcome to VunexTrends
                  </p>

                  <p className="text-[11px] text-neutral-500 mt-1 leading-relaxed">
                    Sign in to manage orders, wishlist and saved addresses.
                  </p>
                </div>
              </div>

              <Link
                to="/signin"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className="mt-4 h-11 rounded-xl bg-[#111111] hover:bg-[#F15A24] text-white flex items-center justify-center text-[13px] font-bold transition-colors"
              >
                Sign In / Register
              </Link>
            </div>
          )}

          {/* =========================
              SHOP NAVIGATION
          ========================== */}
          <div className="mb-7">
            <div className="flex items-center justify-between px-1 mb-3">
              <p className="text-[11px] font-black uppercase tracking-[0.14em] text-neutral-400">
                Shop
              </p>

              <span className="text-[10px] font-semibold text-[#F15A24]">
                Explore
              </span>
            </div>

            <div className="rounded-2xl border border-neutral-200 overflow-hidden bg-white shadow-[0_4px_14px_rgba(0,0,0,0.035)]">
              {navLinks.map((link, index) => {
                const active =
                  isNavActive(link.type);

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() =>
                      setMobileMenuOpen(false)
                    }
                    className={`
                      relative
                      min-h-[54px]
                      px-4
                      flex
                      items-center
                      justify-between
                      text-[13px]
                      font-semibold
                      transition-all
                      ${
                        index !== navLinks.length - 1
                          ? 'border-b border-neutral-100'
                          : ''
                      }
                      ${
                        active
                          ? 'bg-[#FFF5F0] text-[#F15A24]'
                          : 'text-neutral-800 active:bg-neutral-50'
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`
                          w-2 h-2
                          rounded-full
                          ${
                            active
                              ? 'bg-[#F15A24]'
                              : 'bg-neutral-200'
                          }
                        `}
                      />

                      <span>
                        {link.name}
                      </span>
                    </div>

                    <ChevronRight
                      className={`
                        w-4 h-4
                        ${
                          active
                            ? 'text-[#F15A24]'
                            : 'text-neutral-400'
                        }
                      `}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* =========================
              CATEGORIES
          ========================== */}
          <div className="mb-7">
            <div className="flex items-center gap-2 px-1 mb-3">
              <Grid2X2 className="w-4 h-4 text-[#F15A24]" />

              <p className="text-[11px] font-black uppercase tracking-[0.14em] text-neutral-400">
                Popular Categories
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  to={`/category/${cat
                    .toLowerCase()
                    .replace(/\s+/g, '-')}`}
                  onClick={() =>
                    setMobileMenuOpen(false)
                  }
                  className="
                    min-h-[46px]
                    px-3.5
                    rounded-xl
                    bg-[#F7F7F7]
                    border
                    border-neutral-200
                    flex
                    items-center
                    justify-between
                    gap-2
                    text-[12px]
                    font-semibold
                    text-neutral-700
                    active:border-[#F15A24]/30
                    active:text-[#F15A24]
                    transition-all
                  "
                >
                  <span className="truncate">
                    {cat}
                  </span>

                  <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
                </Link>
              ))}
            </div>
          </div>

          {/* =========================
              MY SHOPPING
          ========================== */}
          <div className="mb-6">
            <p className="px-1 mb-3 text-[11px] font-black uppercase tracking-[0.14em] text-neutral-400">
              My Shopping
            </p>

            <div className="rounded-2xl border border-neutral-200 overflow-hidden bg-white">

              <Link
                to="/wishlist"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className="min-h-[52px] px-4 flex items-center justify-between border-b border-neutral-100 active:bg-neutral-50"
              >
                <div className="flex items-center gap-3">
                  <Heart
                    className={`
                      w-[18px]
                      h-[18px]
                      ${
                        wishlistCount > 0
                          ? 'text-[#E5484D] fill-[#E5484D]'
                          : 'text-neutral-500'
                      }
                    `}
                  />

                  <span className="text-[13px] font-semibold text-neutral-800">
                    Wishlist
                  </span>
                </div>

                <span className="text-[11px] font-bold text-neutral-500">
                  {wishlistCount}
                </span>
              </Link>

              <Link
                to="/cart"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className="min-h-[52px] px-4 flex items-center justify-between border-b border-neutral-100 active:bg-neutral-50"
              >
                <div className="flex items-center gap-3">
                  <ShoppingBag className="w-[18px] h-[18px] text-neutral-500" />

                  <span className="text-[13px] font-semibold text-neutral-800">
                    Shopping Cart
                  </span>
                </div>

                <span className="text-[11px] font-bold text-neutral-500">
                  {cartCount}
                </span>
              </Link>

              {isAuthenticated && (
                <Link
                  to="/account/orders"
                  onClick={() =>
                    setMobileMenuOpen(false)
                  }
                  className="min-h-[52px] px-4 flex items-center justify-between active:bg-neutral-50"
                >
                  <div className="flex items-center gap-3">
                    <Package className="w-[18px] h-[18px] text-neutral-500" />

                    <span className="text-[13px] font-semibold text-neutral-800">
                      My Orders
                    </span>
                  </div>

                  <ChevronRight className="w-4 h-4 text-neutral-300" />
                </Link>
              )}
            </div>
          </div>

          {/* Deal Card */}
          <Link
            to="/shop?deals=true"
            onClick={() =>
              setMobileMenuOpen(false)
            }
            className="p-4 rounded-2xl bg-[#111111] text-white flex items-center justify-between overflow-hidden relative"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-1.5 text-[#F15A24]">
                <Tag className="w-4 h-4" />

                <span className="text-[10px] font-black uppercase tracking-wider">
                  Special Offers
                </span>
              </div>

              <p className="text-[14px] font-bold mt-1">
                Explore today's deals
              </p>

              <p className="text-[11px] text-neutral-400 mt-0.5">
                Limited-time savings
              </p>
            </div>

            <div className="relative z-10 w-10 h-10 rounded-full bg-[#F15A24] flex items-center justify-center">
              <ChevronRight className="w-4 h-4" />
            </div>

            <div className="absolute -right-5 -bottom-8 w-24 h-24 rounded-full bg-[#F15A24]/15" />
          </Link>
        </div>

        {/* Logout */}
        {isAuthenticated && (
          <div className="px-4 py-4 border-t border-neutral-100 bg-[#FAFAFA]">
            <button
              type="button"
              onClick={handleLogout}
              className="w-full h-11 rounded-xl flex items-center justify-center gap-2 bg-white border border-neutral-200 text-[#E5484D] text-xs font-bold active:bg-red-50"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        )}
      </aside>
    </>
  );
};