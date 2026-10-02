import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { orderService } from '../services/orderService';
import { formatPrice, formatDate } from '../utils/formatters';
import {
  Package,
  Truck,
  MapPin,
  CreditCard,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Printer
} from 'lucide-react';

export const OrderDetails = () => {
  const { id } = useParams();
  const order = orderService.getOrderById(id);

  if (!order) {
    return (
      <div className="max-w-site mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-bold text-neutral-900 mb-2">Order Not Found</h2>
        <p className="text-neutral-500 mb-6 text-sm">We could not locate the details for this order ID.</p>
        <Link to="/account/orders" className="px-6 py-2.5 rounded-full bg-[#111111] text-white text-xs font-semibold">
          Back to Orders
        </Link>
      </div>
    );
  }

  const isDelivered = order.status === 'Delivered';

  return (
    <div className="max-w-site mx-auto px-4 sm:px-8 py-8 animate-fade-in text-left">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
        <Link to="/" className="hover:text-black transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
        <Link to="/account/orders" className="hover:text-black transition-colors">My Orders</Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
        <span className="font-semibold text-neutral-900">Order #{order.id}</span>
      </nav>

      {/* Header with Status and Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200 mb-8">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
              Order {order.id}
            </h1>
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold ${
                isDelivered
                  ? 'bg-[#DCFCE7] text-[#15803D]'
                  : 'bg-[#FFF4EE] text-[#F15A24] border border-[#FFE0D1]'
              }`}
            >
              {order.status}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1">
            Placed on {formatDate(order.date)} • Tracking: <strong className="font-mono text-neutral-800">{order.trackingNumber}</strong>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-xl bg-white border border-neutral-300 hover:border-black text-neutral-800 text-xs font-bold flex items-center gap-1.5 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Invoice</span>
          </button>

          <Link
            to={`/order/${order.id}/track`}
            className="px-5 py-2 rounded-xl bg-[#F15A24] hover:bg-[#D94A16] text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <Truck className="w-4 h-4" />
            <span>Track Live Package</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Ordered Items (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-3xl border border-neutral-200/80 p-6 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider border-b border-neutral-100 pb-3">
              Items In This Order ({order.items.length})
            </h3>

            <div className="divide-y divide-neutral-100">
              {order.items.map((item, idx) => (
                <div key={idx} className="py-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 rounded-xl object-cover bg-neutral-50 border border-neutral-200"
                    />
                    <div>
                      <span className="text-[10px] font-bold text-neutral-400 uppercase">{item.brand}</span>
                      <p className="text-sm font-bold text-neutral-900">{item.title}</p>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        Color: {item.color} • Size: {item.size} • Qty: {item.quantity}
                      </p>
                    </div>
                  </div>

                  <span className="font-bold text-sm text-neutral-900">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery & Shipping Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-neutral-200/80 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-800 uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-[#F15A24]" />
                <span>Shipping Address</span>
              </div>
              <p className="text-xs font-bold text-neutral-900">{order.shippingAddress.fullName}</p>
              <p className="text-xs text-neutral-600">{order.shippingAddress.street}</p>
              <p className="text-xs text-neutral-600">{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.pincode}</p>
              <p className="text-xs text-neutral-500 mt-1">Phone: {order.shippingAddress.phone}</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-neutral-200/80 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-800 uppercase tracking-wider">
                <CreditCard className="w-4 h-4 text-[#F15A24]" />
                <span>Payment & Carrier</span>
              </div>
              <p className="text-xs text-neutral-800">
                Payment: <strong className="font-semibold">{order.paymentMethod}</strong>
              </p>
              <p className="text-xs text-neutral-800">
                Status: <span className="text-[#22A06B] font-bold">{order.paymentStatus}</span>
              </p>
              <p className="text-xs text-neutral-800 mt-1">
                Carrier: <strong className="font-semibold">{order.carrier}</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Invoice Summary (4 cols) */}
        <div className="lg:col-span-4">
          <div className="bg-white p-6 rounded-3xl border border-neutral-200/80 shadow-xs space-y-4 sticky top-24">
            <h3 className="font-bold text-sm text-neutral-900 border-b border-neutral-100 pb-3">
              Payment Summary
            </h3>

            <div className="space-y-2.5 text-xs text-neutral-600">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span>{formatPrice(order.subtotal)}</span>
              </div>
              {order.discount > 0 && (
                <div className="flex justify-between text-[#22A06B] font-semibold">
                  <span>Discount</span>
                  <span>-{formatPrice(order.discount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{order.shipping === 0 ? <strong className="text-[#22A06B]">FREE</strong> : formatPrice(order.shipping)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>{formatPrice(order.tax)}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-100 flex justify-between items-baseline font-black text-base text-neutral-900">
              <span>Total Paid</span>
              <span className="text-[#F15A24] text-xl">{formatPrice(order.total)}</span>
            </div>

            <div className="pt-2 text-[11px] text-neutral-400 space-y-1.5 border-t border-neutral-100">
              <div className="flex items-center gap-1.5 text-neutral-600">
                <ShieldCheck className="w-3.5 h-3.5 text-[#22A06B]" />
                <span>Verified Official Receipt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
