import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { orderService } from '../services/orderService';
import { formatPrice, formatDate } from '../utils/formatters';
import { EmptyState } from '../components/common/EmptyState';
import { Package, Truck, ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

export const Orders = () => {
  const orders = orderService.getOrders();
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredOrders = orders.filter(o => {
    if (filterStatus === 'All') return true;
    if (filterStatus === 'Delivered') return o.status === 'Delivered';
    if (filterStatus === 'In Progress') return o.status !== 'Delivered';
    return true;
  });

  return (
    <div className="max-w-site mx-auto px-4 sm:px-8 py-8 animate-fade-in text-left">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
        <Link to="/" className="hover:text-black transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
        <Link to="/account" className="hover:text-black transition-colors">My Account</Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
        <span className="font-semibold text-neutral-900">Orders History</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight flex items-center gap-2.5">
            <Package className="w-7 h-7 text-[#F15A24]" />
            <span>My Orders</span>
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1">
            Track, return, or review past purchases
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2">
          {['All', 'Delivered', 'In Progress'].map(st => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                filterStatus === st
                  ? 'bg-[#111111] text-white shadow-xs'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {filteredOrders.length > 0 ? (
        <div className="space-y-4">
          {filteredOrders.map((order) => {
            const isDelivered = order.status === 'Delivered';

            return (
              <div
                key={order.id}
                className="bg-white rounded-3xl border border-neutral-200/80 p-5 sm:p-7 hover:shadow-card transition-all space-y-4"
              >
                {/* Order Top Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-neutral-100 text-xs text-neutral-500">
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-neutral-400">Order ID</span>
                      <strong className="text-neutral-900 font-bold text-sm">{order.id}</strong>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-neutral-400">Order Date</span>
                      <span className="text-neutral-800 font-medium">{formatDate(order.date)}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-neutral-400">Total Amount</span>
                      <span className="text-[#F15A24] font-bold text-sm">{formatPrice(order.total)}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                        isDelivered
                          ? 'bg-[#DCFCE7] text-[#15803D]'
                          : 'bg-[#FFF4EE] text-[#F15A24] border border-[#FFE0D1]'
                      }`}
                    >
                      {isDelivered && <CheckCircle2 className="w-3.5 h-3.5" />}
                      <span>{order.status}</span>
                    </span>
                  </div>
                </div>

                {/* Items in Order */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-2xl bg-neutral-50 border border-neutral-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-14 h-14 rounded-xl object-cover bg-white border border-neutral-200 flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-neutral-900 truncate">{item.title}</p>
                        <p className="text-[11px] text-neutral-500 mt-0.5">
                          {item.color} • {item.size} • Qty: {item.quantity}
                        </p>
                        <p className="text-xs font-bold text-neutral-800 mt-0.5">{formatPrice(item.price)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Actions Bottom Bar */}
                <div className="pt-3 border-t border-neutral-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <p className="text-xs text-neutral-500 font-medium flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-[#F15A24]" />
                    <span>{order.estimatedDelivery}</span>
                  </p>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Link
                      to={`/order/${order.id}`}
                      className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 text-xs font-bold text-center transition-colors"
                    >
                      Order Details
                    </Link>
                    <Link
                      to={`/order/${order.id}/track`}
                      className="flex-1 sm:flex-initial px-4 py-2 rounded-xl bg-[#111111] hover:bg-[#F15A24] text-white text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Truck className="w-3.5 h-3.5" />
                      <span>Track Order</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <EmptyState
          icon={Package}
          title="No orders found"
          description="You haven't placed any orders matching this filter yet."
          actionLink="/shop"
          actionText="Explore Trending Products"
        />
      )}
    </div>
  );
};
