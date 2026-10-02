import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { MapPin, Plus, Trash2, CheckCircle2, ChevronRight, X } from 'lucide-react';

export const SavedAddresses = () => {
  const { user, saveAddress, deleteAddress } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);
  const [newAddr, setNewAddr] = useState({
    title: 'Home',
    fullName: user?.fullName || '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    phone: user?.phone || '',
    isDefault: false
  });

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newAddr.fullName || !newAddr.street || !newAddr.city || !newAddr.pincode) return;
    saveAddress(newAddr);
    setModalOpen(false);
    setNewAddr({
      title: 'Home',
      fullName: user?.fullName || '',
      street: '',
      city: '',
      state: '',
      pincode: '',
      phone: user?.phone || '',
      isDefault: false
    });
  };

  const addresses = user?.addresses || [];

  return (
    <div className="max-w-site mx-auto px-4 sm:px-8 py-8 animate-fade-in text-left">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-neutral-500 mb-6">
        <Link to="/" className="hover:text-black transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
        <Link to="/account" className="hover:text-black transition-colors">Account</Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
        <span className="font-semibold text-neutral-900">Saved Addresses</span>
      </nav>

      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-neutral-200 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight flex items-center gap-2.5">
            <MapPin className="w-7 h-7 text-[#F15A24]" />
            <span>Saved Addresses</span>
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1">
            Manage your delivery destinations for fast one-click checkout
          </p>
        </div>

        <button
          onClick={() => setModalOpen(true)}
          className="px-5 py-2.5 rounded-full bg-[#111111] hover:bg-[#F15A24] text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Address</span>
        </button>
      </div>

      {/* Address Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {addresses.map((addr) => (
          <div
            key={addr.id}
            className={`p-6 rounded-3xl border transition-all flex flex-col justify-between ${
              addr.isDefault
                ? 'border-[#F15A24] bg-[#FFF4EE]/30 shadow-xs'
                : 'border-neutral-200/80 bg-white hover:border-neutral-300'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                  {addr.title || 'Address'}
                </span>
                {addr.isDefault ? (
                  <span className="text-[10px] font-bold text-[#F15A24] bg-white border border-[#FFE0D1] px-2 py-0.5 rounded-full">
                    Default
                  </span>
                ) : (
                  <button
                    onClick={() => saveAddress({ ...addr, isDefault: true })}
                    className="text-[11px] text-neutral-400 hover:text-black font-semibold"
                  >
                    Set as Default
                  </button>
                )}
              </div>

              <h3 className="font-bold text-sm text-neutral-900">{addr.fullName}</h3>
              <p className="text-xs text-neutral-600 mt-1 leading-relaxed">{addr.street}</p>
              <p className="text-xs text-neutral-600">{addr.city}, {addr.state} {addr.pincode}</p>
              <p className="text-xs text-neutral-500 mt-2 font-medium">Phone: {addr.phone}</p>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-end mt-4">
              <button
                onClick={() => deleteAddress(addr.id)}
                className="text-xs text-neutral-400 hover:text-[#E5484D] font-semibold flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Address Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-scale-in text-left">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-black p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-bold text-neutral-900 mb-1">Add Delivery Address</h3>
            <p className="text-xs text-neutral-500 mb-5">Please ensure your street and pincode details are accurate.</p>

            <form onSubmit={handleAddSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">Address Label</label>
                <input
                  type="text"
                  value={newAddr.title}
                  onChange={(e) => setNewAddr({ ...newAddr, title: e.target.value })}
                  placeholder="e.g. Home, Office, Beach House"
                  className="w-full h-10 px-3 text-xs bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-[#F15A24]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">Full Name</label>
                <input
                  type="text"
                  value={newAddr.fullName}
                  onChange={(e) => setNewAddr({ ...newAddr, fullName: e.target.value })}
                  className="w-full h-10 px-3 text-xs bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-[#F15A24]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">Street Address</label>
                <input
                  type="text"
                  value={newAddr.street}
                  onChange={(e) => setNewAddr({ ...newAddr, street: e.target.value })}
                  className="w-full h-10 px-3 text-xs bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-[#F15A24]"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">City</label>
                  <input
                    type="text"
                    value={newAddr.city}
                    onChange={(e) => setNewAddr({ ...newAddr, city: e.target.value })}
                    className="w-full h-10 px-3 text-xs bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-[#F15A24]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">State / Province</label>
                  <input
                    type="text"
                    value={newAddr.state}
                    onChange={(e) => setNewAddr({ ...newAddr, state: e.target.value })}
                    className="w-full h-10 px-3 text-xs bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-[#F15A24]"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">Pincode / ZIP</label>
                  <input
                    type="text"
                    value={newAddr.pincode}
                    onChange={(e) => setNewAddr({ ...newAddr, pincode: e.target.value })}
                    className="w-full h-10 px-3 text-xs bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-[#F15A24]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">Mobile Phone</label>
                  <input
                    type="text"
                    value={newAddr.phone}
                    onChange={(e) => setNewAddr({ ...newAddr, phone: e.target.value })}
                    className="w-full h-10 px-3 text-xs bg-neutral-50 border border-neutral-200 rounded-xl outline-none focus:border-[#F15A24]"
                    required
                  />
                </div>
              </div>

              <label className="flex items-center gap-2 text-xs text-neutral-700 pt-1 cursor-pointer">
                <input
                  type="checkbox"
                  checked={newAddr.isDefault}
                  onChange={(e) => setNewAddr({ ...newAddr, isDefault: e.target.checked })}
                  className="accent-[#F15A24]"
                />
                <span>Set as default delivery address</span>
              </label>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full h-11 rounded-full bg-[#111111] hover:bg-[#F15A24] text-white font-bold text-xs sm:text-sm transition-colors"
                >
                  Save Address
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
