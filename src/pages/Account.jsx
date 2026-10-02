import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useWishlist } from '../context/WishlistContext';
import { orderService } from '../services/orderService';
import { formatPrice, formatDate } from '../utils/formatters';
import {
  User,
  Package,
  Heart,
  MapPin,
  Bell,
  Ticket,
  Clock,
  LogOut,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Edit2
} from 'lucide-react';

export const Account = () => {
  const { user, logout, updateProfile } = useAuth();
  const { wishlistCount } = useWishlist();
  const navigate = useNavigate();

  const orders = orderService.getOrders();
  const recentOrder = orders[0];

  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: user?.fullName || 'Alex Vance',
    email: user?.email || 'alex.vance@novatrend.com',
    phone: user?.phone || '+1 (555) 382-9012'
  });

  const handleProfileSave = (e) => {
    e.preventDefault();
    updateProfile(profileData);
    setIsEditing(false);
  };

  const navLinks = [
    { label: 'My Profile', icon: User, path: '/account', active: true },
    { label: 'My Orders', icon: Package, path: '/account/orders', count: orders.length },
    { label: 'Wishlist', icon: Heart, path: '/wishlist', count: wishlistCount },
    { label: 'Saved Addresses', icon: MapPin, path: '/account/addresses', count: user?.addresses?.length },
    { label: 'Notifications', icon: Bell, path: '/account/notifications', count: user?.notifications?.filter(n => !n.read).length },
  ];

  return (
    <div className="max-w-site mx-auto px-4 sm:px-8 py-8 animate-fade-in text-left">
      {/* Account Header Banner */}
      <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 rounded-3xl p-6 sm:p-8 text-white mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm border border-neutral-700/80">
        <div className="flex items-center gap-4">
          <img
            src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
            alt={user?.fullName}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-white/20 shadow-md"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black">{user?.fullName}</h1>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F15A24] px-2 py-0.5 rounded-full text-white">
                Member
              </span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">{user?.email}</p>
            <p className="text-[11px] text-neutral-400 mt-1">Customer since {user?.memberSince || '2025'}</p>
          </div>
        </div>

        <button
          onClick={() => {
            logout();
            navigate('/');
          }}
          className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-2 transition-colors border border-white/10"
        >
          <LogOut className="w-3.5 h-3.5 text-[#E5484D]" />
          <span>Sign Out</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Navigation (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-white rounded-2xl border border-neutral-200/80 divide-y divide-neutral-100 overflow-hidden shadow-xs">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`flex items-center justify-between p-4 text-xs sm:text-sm font-semibold transition-colors ${
                    item.active
                      ? 'bg-[#FFF4EE] text-[#F15A24]'
                      : 'text-neutral-700 hover:bg-neutral-50 hover:text-black'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-neutral-500" />
                    <span>{item.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.count !== undefined && item.count > 0 && (
                      <span className="w-5 h-5 rounded-full bg-neutral-100 text-neutral-700 text-[10px] font-bold flex items-center justify-center">
                        {item.count}
                      </span>
                    )}
                    <ChevronRight className="w-4 h-4 text-neutral-400" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="p-4 rounded-2xl bg-[#FFF4EE] border border-[#FFE0D1] space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#F15A24]">
              <ShieldCheck className="w-4 h-4" />
              <span>NovaTrend Priority Perks</span>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Enjoy 30-day extended returns, VIP concierge chat support, and automatic free delivery on orders over $75.
            </p>
          </div>
        </div>

        {/* Right Content: Profile Info & Quick Order Overview (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Profile Overview Card */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-neutral-200/80 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900">
                  Profile Information
                </h3>
                <p className="text-xs text-neutral-500 mt-0.5">Manage your personal profile and account credentials</p>
              </div>
              <button
                type="button"
                onClick={() => setIsEditing(!isEditing)}
                className="text-xs font-bold text-[#F15A24] hover:underline flex items-center gap-1.5"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
              </button>
            </div>

            {isEditing ? (
              <form onSubmit={handleProfileSave} className="space-y-4 max-w-lg">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={profileData.fullName}
                    onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
                    className="w-full h-10 px-3 text-xs bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-[#F15A24]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    className="w-full h-10 px-3 text-xs bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-[#F15A24]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    className="w-full h-10 px-3 text-xs bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-[#F15A24]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#F15A24] text-white text-xs font-bold shadow-sm"
                >
                  Save Changes
                </button>
              </form>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                  <span className="text-neutral-400 font-semibold block mb-1 uppercase tracking-wider text-[10px]">Full Name</span>
                  <p className="font-bold text-neutral-900 text-sm">{user?.fullName}</p>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                  <span className="text-neutral-400 font-semibold block mb-1 uppercase tracking-wider text-[10px]">Email</span>
                  <p className="font-bold text-neutral-900 text-sm truncate">{user?.email}</p>
                </div>
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-100">
                  <span className="text-neutral-400 font-semibold block mb-1 uppercase tracking-wider text-[10px]">Phone</span>
                  <p className="font-bold text-neutral-900 text-sm">{user?.phone || '+1 (555) 382-9012'}</p>
                </div>
              </div>
            )}
          </div>

          {/* Recent Order Preview */}
          {recentOrder && (
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-neutral-200/80 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                <div className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-[#F15A24]" />
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900">
                    Latest Order ({recentOrder.id})
                  </h3>
                </div>
                <Link
                  to="/account/orders"
                  className="text-xs font-bold text-[#F15A24] hover:underline"
                >
                  View All Orders &rarr;
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-100">
                <div className="flex items-center gap-4">
                  <img
                    src={recentOrder.items[0]?.image}
                    alt=""
                    className="w-14 h-14 rounded-xl object-cover border border-neutral-200"
                  />
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#DCFCE7] text-[#15803D] uppercase tracking-wider mb-1">
                      {recentOrder.status}
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-neutral-900">{recentOrder.items[0]?.title}</p>
                    <p className="text-[11px] text-neutral-500">Ordered on {formatDate(recentOrder.date)} • {recentOrder.items.length} items</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    to={`/order/${recentOrder.id}`}
                    className="px-4 py-2 rounded-xl bg-white border border-neutral-200 text-xs font-bold text-neutral-800 hover:border-black transition-colors"
                  >
                    View Details
                  </Link>
                  <Link
                    to={`/order/${recentOrder.id}/track`}
                    className="px-4 py-2 rounded-xl bg-[#111111] hover:bg-[#F15A24] text-white text-xs font-bold transition-colors"
                  >
                    Track Order
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
