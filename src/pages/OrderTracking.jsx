import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { orderService } from '../services/orderService';
import { formatPrice } from '../utils/formatters';
import {
  Truck,
  CheckCircle2,
  Clock,
  Package,
  MapPin,
  ChevronRight,
  ShieldCheck,
  Copy
} from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const OrderTracking = () => {
  const { id } = useParams();
  const { addToast } = useToast();
  const order = orderService.getOrderById(id);

  if (!order) {
    return (
      <div className="max-w-site mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-bold text-neutral-900 mb-2">Tracking Not Found</h2>
        <p className="text-neutral-500 mb-6 text-sm">Please verify the order ID and try again.</p>
        <Link to="/account/orders" className="px-6 py-2.5 rounded-full bg-[#111111] text-white text-xs font-semibold">
          Back to Orders
        </Link>
      </div>
    );
  }

  const copyTracking = () => {
    navigator.clipboard?.writeText(order.trackingNumber);
    addToast('Tracking number copied to clipboard!', 'info');
  };

  return (
    <div className="max-w-site mx-auto px-4 sm:px-8 py-8 animate-fade-in text-left">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
        <Link to="/" className="hover:text-black transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
        <Link to="/account/orders" className="hover:text-black transition-colors">Orders</Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
        <Link to={`/order/${order.id}`} className="hover:text-black transition-colors">Order #{order.id}</Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
        <span className="font-semibold text-neutral-900">Live Tracking</span>
      </nav>

      {/* Header */}
      <div className="bg-white rounded-3xl border border-neutral-200/80 p-6 sm:p-8 shadow-xs mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F15A24]">
              <Truck className="w-4 h-4" />
              <span>Real-Time Shipment Progress</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight mt-1">
              Tracking #{order.id}
            </h1>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              Carrier: <strong>{order.carrier}</strong> • {order.estimatedDelivery}
            </p>
          </div>

          <div className="flex items-center gap-2 bg-neutral-50 px-4 py-2 rounded-2xl border border-neutral-200">
            <span className="text-xs font-mono font-bold text-neutral-800">{order.trackingNumber}</span>
            <button
              onClick={copyTracking}
              className="p-1 text-neutral-400 hover:text-black transition-colors"
              title="Copy tracking number"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Timeline Checkpoints (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-3xl border border-neutral-200/80 p-6 sm:p-8 shadow-xs">
            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-6">
              Milestone Checkpoints
            </h3>

            {/* Vertical Timeline */}
            <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-neutral-200">
              {order.timeline.map((step, idx) => {
                const isCompleted = step.completed;

                return (
                  <div key={idx} className="relative">
                    {/* Node Dot */}
                    <div
                      className={`absolute -left-6 sm:-left-8 top-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center border-2 transition-all ${
                        isCompleted
                          ? 'bg-[#22A06B] border-white text-white shadow-sm'
                          : 'bg-white border-neutral-300 text-neutral-300'
                      }`}
                    >
                      {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Clock className="w-3 h-3" />}
                    </div>

                    {/* Step details */}
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h4 className={`text-sm font-bold ${isCompleted ? 'text-neutral-900' : 'text-neutral-400'}`}>
                          {step.status}
                        </h4>
                        <span className={`text-[11px] font-medium ${isCompleted ? 'text-[#F15A24] font-semibold' : 'text-neutral-400'}`}>
                          {step.date}
                        </span>
                      </div>
                      <p className={`text-xs mt-1 leading-relaxed ${isCompleted ? 'text-neutral-600' : 'text-neutral-400'}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Destination & Package Preview (4 cols) */}
        <div className="lg:col-span-4 space-y-5">
          <div className="bg-white p-6 rounded-3xl border border-neutral-200/80 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-neutral-800 uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-[#F15A24]" />
              <span>Destination Address</span>
            </div>
            <p className="text-xs font-bold text-neutral-900">{order.shippingAddress.fullName}</p>
            <p className="text-xs text-neutral-600">{order.shippingAddress.street}</p>
            <p className="text-xs text-neutral-600">{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.pincode}</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-neutral-200/80 shadow-xs space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-neutral-800 uppercase tracking-wider">
              <Package className="w-4 h-4 text-[#F15A24]" />
              <span>Package Contents ({order.items.length})</span>
            </div>
            <div className="divide-y divide-neutral-100 max-h-48 overflow-y-auto">
              {order.items.map((it, idx) => (
                <div key={idx} className="py-2 flex items-center justify-between text-xs">
                  <span className="font-semibold text-neutral-800 truncate max-w-[180px]">{it.title}</span>
                  <span className="text-neutral-500 font-bold">Qty: {it.quantity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
