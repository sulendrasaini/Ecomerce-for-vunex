import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Bell, Check, ChevronRight } from 'lucide-react';

export const Notifications = () => {
  const { user, markNotificationsAsRead } = useAuth();
  const notifications = user?.notifications || [];

  return (
    <div className="max-w-site mx-auto px-4 sm:px-8 py-8 animate-fade-in text-left">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
        <Link to="/" className="hover:text-black transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
        <Link to="/account" className="hover:text-black transition-colors">Account</Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
        <span className="font-semibold text-neutral-900">Notifications</span>
      </nav>

      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-neutral-200 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight flex items-center gap-2.5">
            <Bell className="w-7 h-7 text-[#F15A24]" />
            <span>Notification Center</span>
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1">
            Stay updated with your order statuses, member sales, and newly issued discount coupons.
          </p>
        </div>

        {notifications.length > 0 && (
          <button
            onClick={markNotificationsAsRead}
            className="px-4 py-2 rounded-full border border-neutral-200 hover:border-black text-xs font-bold text-neutral-700 transition-colors flex items-center gap-1.5"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Mark All as Read</span>
          </button>
        )}
      </div>

      {notifications.length > 0 ? (
        <div className="max-w-2xl space-y-3">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                notif.read
                  ? 'bg-white border-neutral-200/80 text-neutral-600'
                  : 'bg-[#FFF4EE]/40 border-[#FFE0D1] text-neutral-900 shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-sm text-neutral-900 flex items-center gap-2">
                  {!notif.read && <span className="w-2 h-2 rounded-full bg-[#F15A24]" />}
                  <span>{notif.title}</span>
                </h3>
                <span className="text-[11px] text-neutral-400 font-medium">{notif.time}</span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed pl-4">
                {notif.message}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-neutral-400 text-sm">
          No notifications yet.
        </div>
      )}
    </div>
  );
};
