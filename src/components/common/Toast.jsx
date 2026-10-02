import React from 'react';
import { useToast } from '../../context/ToastContext';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  if (!toasts.length) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4">
      {toasts.map(toast => {
        let Icon = CheckCircle2;
        let colorClasses = 'bg-[#111111] text-white border-neutral-800';
        let iconColor = 'text-[#22A06B]';

        if (toast.type === 'error') {
          Icon = AlertCircle;
          iconColor = 'text-[#E5484D]';
        } else if (toast.type === 'info') {
          Icon = Info;
          iconColor = 'text-[#F15A24]';
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center justify-between gap-3 p-4 rounded-xl shadow-2xl border text-sm font-medium animate-fade-in ${colorClasses}`}
          >
            <div className="flex items-center gap-3">
              <Icon className={`w-5 h-5 flex-shrink-0 ${iconColor}`} />
              <p className="leading-snug">{toast.message}</p>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-neutral-400 hover:text-white transition-colors p-1"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
