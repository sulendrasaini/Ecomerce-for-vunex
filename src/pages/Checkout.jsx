import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { orderService } from '../services/orderService';
import { useToast } from '../context/ToastContext';
import { formatPrice } from '../utils/formatters';
import {
  CheckCircle2,
  MapPin,
  Truck,
  CreditCard,
  ShoppingBag,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Plus
} from 'lucide-react';

export const Checkout = () => {
  const { cartItems, subtotal, couponDiscount, total, clearCart } = useCart();
  const { user } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1); // 1: Address, 2: Delivery, 3: Payment, 4: Review

  // Shipping Address State
  const defaultAddr = user?.addresses?.find(a => a.isDefault) || user?.addresses?.[0] || {
    fullName: user?.fullName || 'Alex Vance',
    street: '742 Evergreen Terrace, Apt 4B',
    city: 'Seattle',
    state: 'WA',
    pincode: '98101',
    phone: user?.phone || '+1 (555) 382-9012'
  };

  const [shippingAddress, setShippingAddress] = useState(defaultAddr);
  const [isCustomAddress, setIsCustomAddress] = useState(false);

  // Delivery Option State
  const [deliveryMethod, setDeliveryMethod] = useState('standard'); // 'standard' or 'express'
  const deliveryFee = deliveryMethod === 'express' ? 9.99 : 0;

  // Payment Method State
  const [paymentMethod, setPaymentMethod] = useState('Credit / Debit Card');
  const [cardDetails, setCardDetails] = useState({
    number: '•••• •••• •••• 4242',
    name: user?.fullName || 'Alex Vance',
    expiry: '08/29',
    cvv: '•••'
  });
  const [upiId, setUpiId] = useState('alex@okaxis');

  const grandTotal = total + deliveryFee;

  const handlePlaceOrder = () => {
    const orderData = {
      items: cartItems.map(item => ({
        id: item.productId,
        title: item.product.title,
        brand: item.product.brand,
        price: item.price,
        quantity: item.quantity,
        color: item.color,
        size: item.size,
        image: item.product.images[0]
      })),
      subtotal,
      discount: couponDiscount,
      shipping: deliveryFee,
      tax: subtotal * 0.08,
      total: grandTotal,
      shippingAddress,
      paymentMethod
    };

    const newOrder = orderService.createOrder(orderData);
    clearCart();
    addToast(`Order ${newOrder.id} placed successfully!`, 'success');
    navigate(`/order/${newOrder.id}`);
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-site mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-bold text-neutral-900 mb-2">No Items to Checkout</h2>
        <p className="text-neutral-500 mb-6 text-sm">Please add some products to your cart before proceeding.</p>
        <Link to="/shop" className="px-6 py-2.5 rounded-full bg-[#111111] text-white text-xs font-semibold">
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-site mx-auto px-4 sm:px-8 py-8 animate-fade-in text-left">
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
          Secure Checkout
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 mt-1">
          Complete your purchase with guaranteed buyer protection and encrypted SSL checkout.
        </p>
      </div>

      {/* Step Progress Bar */}
      <div className="mb-10 max-w-2xl">
        <div className="flex items-center justify-between relative">
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-0.5 bg-neutral-200 -z-0" />
          
          {[
            { num: 1, label: 'Address', icon: MapPin },
            { num: 2, label: 'Delivery', icon: Truck },
            { num: 3, label: 'Payment', icon: CreditCard },
            { num: 4, label: 'Review', icon: CheckCircle2 }
          ].map((step) => {
            const Icon = step.icon;
            const isCompleted = currentStep > step.num;
            const isCurrent = currentStep === step.num;

            return (
              <div
                key={step.num}
                onClick={() => isCompleted && setCurrentStep(step.num)}
                className={`relative z-10 flex flex-col items-center bg-white px-2 cursor-pointer ${
                  isCompleted ? 'text-[#22A06B]' : isCurrent ? 'text-[#F15A24]' : 'text-neutral-400'
                }`}
              >
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all border-2 ${
                    isCompleted
                      ? 'bg-[#22A06B] border-[#22A06B] text-white'
                      : isCurrent
                      ? 'bg-[#FFF4EE] border-[#F15A24] text-[#F15A24]'
                      : 'bg-white border-neutral-300 text-neutral-400'
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold mt-1 tracking-tight">
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Steps Form Area (8 cols on lg) */}
        <div className="lg:col-span-8 space-y-6">
          {/* STEP 1: Shipping Address */}
          {currentStep === 1 && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-5 animate-fade-in">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#F15A24]" />
                  <h2 className="text-lg font-bold text-neutral-900">1. Shipping Address</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setIsCustomAddress(!isCustomAddress)}
                  className="text-xs font-bold text-[#F15A24] hover:underline flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{isCustomAddress ? 'Use Saved Address' : 'Enter New Address'}</span>
                </button>
              </div>

              {!isCustomAddress && user?.addresses?.length > 0 ? (
                <div className="space-y-3">
                  <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">Select Saved Address:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {user.addresses.map((addr) => (
                      <div
                        key={addr.id}
                        onClick={() => setShippingAddress(addr)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                          shippingAddress.id === addr.id
                            ? 'border-[#F15A24] bg-[#FFF4EE]/40 ring-2 ring-[#F15A24]/10'
                            : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-neutral-900">{addr.title || 'Address'}</span>
                          {addr.isDefault && <span className="text-[10px] bg-neutral-200 px-1.5 py-0.5 rounded font-bold">Default</span>}
                        </div>
                        <p className="text-xs font-semibold text-neutral-800">{addr.fullName}</p>
                        <p className="text-xs text-neutral-600 mt-0.5">{addr.street}</p>
                        <p className="text-xs text-neutral-600">{addr.city}, {addr.state} {addr.pincode}</p>
                        <p className="text-xs text-neutral-500 mt-1">{addr.phone}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Full Name</label>
                    <input
                      type="text"
                      value={shippingAddress.fullName}
                      onChange={(e) => setShippingAddress({ ...shippingAddress, fullName: e.target.value })}
                      className="w-full h-10 px-3 text-xs bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-[#F15A24]"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Street Address</label>
                    <input
                      type="text"
                      value={shippingAddress.street}
                      onChange={(e) => setShippingAddress({ ...shippingAddress, street: e.target.value })}
                      className="w-full h-10 px-3 text-xs bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-[#F15A24]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">City</label>
                    <input
                      type="text"
                      value={shippingAddress.city}
                      onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                      className="w-full h-10 px-3 text-xs bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-[#F15A24]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">State / Province</label>
                    <input
                      type="text"
                      value={shippingAddress.state}
                      onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value })}
                      className="w-full h-10 px-3 text-xs bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-[#F15A24]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Pincode / ZIP</label>
                    <input
                      type="text"
                      value={shippingAddress.pincode}
                      onChange={(e) => setShippingAddress({ ...shippingAddress, pincode: e.target.value })}
                      className="w-full h-10 px-3 text-xs bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-[#F15A24]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1">Mobile Number</label>
                    <input
                      type="text"
                      value={shippingAddress.phone}
                      onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value })}
                      className="w-full h-10 px-3 text-xs bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-[#F15A24]"
                    />
                  </div>
                </div>
              )}

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="px-6 py-3 rounded-full bg-[#111111] hover:bg-[#F15A24] text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-sm"
                >
                  <span>Continue to Delivery</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Delivery Options */}
          {currentStep === 2 && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-5 animate-fade-in">
              <div className="flex items-center gap-2 border-b border-neutral-100 pb-4">
                <Truck className="w-5 h-5 text-[#F15A24]" />
                <h2 className="text-lg font-bold text-neutral-900">2. Delivery Preference</h2>
              </div>

              <div className="space-y-3">
                <label
                  onClick={() => setDeliveryMethod('standard')}
                  className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                    deliveryMethod === 'standard'
                      ? 'border-[#F15A24] bg-[#FFF4EE]/40 ring-2 ring-[#F15A24]/10'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      checked={deliveryMethod === 'standard'}
                      onChange={() => setDeliveryMethod('standard')}
                      className="accent-[#F15A24]"
                    />
                    <div>
                      <p className="text-sm font-bold text-neutral-900">Standard Delivery (3-4 Business Days)</p>
                      <p className="text-xs text-neutral-500">Tracked contactless delivery by Nova Express</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#22A06B]">FREE</span>
                </label>

                <label
                  onClick={() => setDeliveryMethod('express')}
                  className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
                    deliveryMethod === 'express'
                      ? 'border-[#F15A24] bg-[#FFF4EE]/40 ring-2 ring-[#F15A24]/10'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      checked={deliveryMethod === 'express'}
                      onChange={() => setDeliveryMethod('express')}
                      className="accent-[#F15A24]"
                    />
                    <div>
                      <p className="text-sm font-bold text-neutral-900">Priority Express (Next Day / 1-2 Days)</p>
                      <p className="text-xs text-neutral-500">Express air courier with SMS delivery slot update</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-neutral-900">$9.99</span>
                </label>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="text-xs font-semibold text-neutral-500 hover:text-black"
                >
                  &larr; Back to Address
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="px-6 py-3 rounded-full bg-[#111111] hover:bg-[#F15A24] text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-sm"
                >
                  <span>Continue to Payment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Payment Method */}
          {currentStep === 3 && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-5 animate-fade-in">
              <div className="flex items-center gap-2 border-b border-neutral-100 pb-4">
                <CreditCard className="w-5 h-5 text-[#F15A24]" />
                <h2 className="text-lg font-bold text-neutral-900">3. Payment Method</h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {['Credit / Debit Card', 'UPI / QR', 'Net Banking', 'Cash on Delivery'].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setPaymentMethod(m)}
                    className={`p-3 rounded-xl border text-xs font-bold text-center transition-all ${
                      paymentMethod === m
                        ? 'border-[#F15A24] bg-[#FFF4EE] text-[#F15A24] shadow-xs'
                        : 'border-neutral-200 text-neutral-700 hover:border-neutral-300'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>

              {/* Payment Details Container */}
              <div className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-3">
                {paymentMethod === 'Credit / Debit Card' && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">Card Number</label>
                      <input
                        type="text"
                        value={cardDetails.number}
                        onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                        className="w-full h-10 px-3 text-xs bg-white border border-neutral-200 rounded-lg outline-none font-mono"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">Expiry</label>
                        <input
                          type="text"
                          value={cardDetails.expiry}
                          onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                          className="w-full h-10 px-3 text-xs bg-white border border-neutral-200 rounded-lg outline-none font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">CVV</label>
                        <input
                          type="password"
                          value={cardDetails.cvv}
                          onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                          className="w-full h-10 px-3 text-xs bg-white border border-neutral-200 rounded-lg outline-none font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'UPI / QR' && (
                  <div>
                    <label className="block text-[11px] font-bold text-neutral-700 uppercase mb-1">Virtual Payment Address (VPA)</label>
                    <input
                      type="text"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="e.g. mobile@upi or username@okhdfcbank"
                      className="w-full h-10 px-3 text-xs bg-white border border-neutral-200 rounded-lg outline-none font-medium"
                    />
                    <p className="text-[11px] text-neutral-500 mt-1">
                      A payment request will be sent to your UPI app upon placing order.
                    </p>
                  </div>
                )}

                {paymentMethod === 'Cash on Delivery' && (
                  <p className="text-xs text-neutral-600">
                    Pay with cash or card upon receiving your package at your doorstep. No extra surcharge applied.
                  </p>
                )}

                {paymentMethod === 'Net Banking' && (
                  <p className="text-xs text-neutral-600">
                    Select your preferred bank: HDFC, ICICI, SBI, Chase, Citibank, or Bank of America on the next screen.
                  </p>
                )}
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="text-xs font-semibold text-neutral-500 hover:text-black"
                >
                  &larr; Back to Delivery
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(4)}
                  className="px-6 py-3 rounded-full bg-[#111111] hover:bg-[#F15A24] text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-sm"
                >
                  <span>Review Order</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Review & Place Order */}
          {currentStep === 4 && (
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-6 animate-fade-in">
              <div className="flex items-center gap-2 border-b border-neutral-100 pb-4">
                <CheckCircle2 className="w-5 h-5 text-[#22A06B]" />
                <h2 className="text-lg font-bold text-neutral-900">4. Review & Confirm Order</h2>
              </div>

              {/* Review summary cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                  <span className="font-bold text-neutral-900 block mb-1">Delivering To:</span>
                  <p className="font-semibold text-neutral-800">{shippingAddress.fullName}</p>
                  <p className="text-neutral-600">{shippingAddress.street}</p>
                  <p className="text-neutral-600">{shippingAddress.city}, {shippingAddress.state} {shippingAddress.pincode}</p>
                  <p className="text-neutral-500 mt-1">{shippingAddress.phone}</p>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                  <span className="font-bold text-neutral-900 block mb-1">Payment & Shipping:</span>
                  <p className="text-neutral-800">Method: <strong className="font-semibold">{paymentMethod}</strong></p>
                  <p className="text-neutral-800 mt-1">Delivery: <strong className="font-semibold">{deliveryMethod === 'express' ? 'Priority Express' : 'Standard Delivery (FREE)'}</strong></p>
                  <span className="inline-block mt-2 text-[10px] text-[#22A06B] font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Buyer Protection Enabled
                  </span>
                </div>
              </div>

              {/* Items in order */}
              <div>
                <span className="font-bold text-xs text-neutral-900 uppercase tracking-wider block mb-2">Order Items ({cartItems.length}):</span>
                <div className="divide-y divide-neutral-100 max-h-48 overflow-y-auto">
                  {cartItems.map(item => (
                    <div key={item.id} className="py-2.5 flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-3">
                        <img src={item.product?.images?.[0]} alt="" className="w-10 h-10 rounded-lg object-cover" />
                        <div>
                          <p className="font-semibold text-neutral-900 truncate max-w-[200px] sm:max-w-xs">{item.product.title}</p>
                          <p className="text-neutral-400 text-[11px]">{item.color} / {item.size} × {item.quantity}</p>
                        </div>
                      </div>
                      <span className="font-bold text-neutral-900">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="text-xs font-semibold text-neutral-500 hover:text-black"
                >
                  &larr; Back to Payment
                </button>
                <button
                  type="button"
                  onClick={handlePlaceOrder}
                  className="px-8 py-3.5 rounded-full bg-[#F15A24] hover:bg-[#D94A16] text-white font-bold text-sm flex items-center gap-2 transition-all shadow-md shadow-[#F15A24]/20 active:scale-98"
                >
                  <span>Place Order • {formatPrice(grandTotal)}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Summary Sidebar (4 cols on lg) */}
        <div className="lg:col-span-4">
          <div className="bg-white p-6 rounded-3xl border border-neutral-200/80 shadow-xs space-y-4 sticky top-24">
            <h3 className="font-bold text-sm text-neutral-900 border-b border-neutral-100 pb-3">
              Checkout Summary
            </h3>

            <div className="space-y-2.5 text-xs text-neutral-600">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              {couponDiscount > 0 && (
                <div className="flex justify-between text-[#22A06B] font-semibold">
                  <span>Discount Applied</span>
                  <span>-{formatPrice(couponDiscount)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{deliveryFee === 0 ? <strong className="text-[#22A06B]">FREE</strong> : formatPrice(deliveryFee)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (8%)</span>
                <span>{formatPrice(subtotal * 0.08)}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-neutral-100 flex justify-between items-baseline font-black text-base sm:text-lg text-neutral-900">
              <span>Total</span>
              <span className="text-[#F15A24] text-xl">{formatPrice(grandTotal)}</span>
            </div>

            <div className="pt-2 text-[11px] text-neutral-400 space-y-1.5 border-t border-neutral-100">
              <div className="flex items-center gap-1.5 text-neutral-600">
                <ShieldCheck className="w-3.5 h-3.5 text-[#22A06B]" />
                <span>30-Day Money-Back Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-600">
                <Truck className="w-3.5 h-3.5 text-[#F15A24]" />
                <span>Fast Dispatched Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
