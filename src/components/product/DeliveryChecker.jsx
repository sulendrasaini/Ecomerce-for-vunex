import React, { useState } from 'react';
import { MapPin, CheckCircle2, Clock, Truck } from 'lucide-react';

export const DeliveryChecker = () => {
  const [pincode, setPincode] = useState('98101');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = (e) => {
    e.preventDefault();
    if (!pincode.trim() || pincode.trim().length < 4) {
      setStatus({ success: false, message: 'Please enter a valid 5 or 6 digit pincode/zip.' });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (pincode.startsWith('00') || pincode.startsWith('999')) {
        setStatus({
          success: false,
          message: 'Currently delivery is not available for this remote region.'
        });
      } else {
        setStatus({
          success: true,
          estimatedDate: 'Friday, Oct 05',
          shippingType: 'Free Standard & Express Available',
          cod: 'Cash on Delivery Available'
        });
      }
    }, 400);
  };

  return (
    <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80">
      <div className="flex items-center gap-2 text-xs font-bold text-neutral-800 uppercase tracking-wider mb-2">
        <MapPin className="w-3.5 h-3.5 text-[#F15A24]" />
        <span>Check Delivery & Pincode Availability</span>
      </div>

      <form onSubmit={handleCheck} className="flex gap-2">
        <input
          type="text"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          placeholder="Enter Pincode / Zip Code"
          maxLength={8}
          className="flex-1 h-9 px-3 text-xs bg-white border border-neutral-300 rounded-lg outline-none focus:border-[#F15A24] focus:ring-2 focus:ring-[#F15A24]/10 font-medium"
        />
        <button
          type="submit"
          disabled={loading}
          className="h-9 px-4 rounded-lg bg-[#111111] hover:bg-[#F15A24] text-white text-xs font-semibold transition-colors disabled:opacity-50"
        >
          {loading ? 'Checking...' : 'Check'}
        </button>
      </form>

      {status && (
        <div className="mt-3 pt-3 border-t border-neutral-200/60 animate-fade-in text-xs">
          {status.success ? (
            <div className="space-y-1 text-neutral-700">
              <div className="flex items-center gap-1.5 text-[#22A06B] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Delivery guaranteed by {status.estimatedDate}</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-500">
                <Truck className="w-3.5 h-3.5 text-neutral-400" />
                <span>{status.shippingType}</span>
              </div>
              <div className="flex items-center gap-1.5 text-neutral-500">
                <Clock className="w-3.5 h-3.5 text-neutral-400" />
                <span>{status.cod}</span>
              </div>
            </div>
          ) : (
            <p className="text-[#E5484D] font-medium">{status.message}</p>
          )}
        </div>
      )}
    </div>
  );
};
