import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Grid, Heart, ShoppingBag, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export const MobileBottomNav = () => {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Categories', path: '/shop', icon: Grid },
    { name: 'Wishlist', path: '/wishlist', icon: Heart, badge: wishlistCount },
    { name: 'Cart', path: '/cart', icon: ShoppingBag, badge: cartCount },
    { name: 'Account', path: '/account', icon: User }
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-neutral-200/80 px-2 py-1.5 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `relative flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all ${
                  isActive ? 'text-[#F15A24] font-semibold' : 'text-neutral-500 hover:text-neutral-900'
                }`
              }
            >
              <div className="relative">
                <Icon className="w-5 h-5" />
                {item.badge > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-[#F15A24] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {item.badge > 9 ? '9+' : item.badge}
                  </span>
                )}
              </div>
              <span className="text-[10px] mt-1 tracking-tight">{item.name}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
