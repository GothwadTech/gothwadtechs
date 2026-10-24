import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { ClientOrderSuite } from './ClientOrderSuite';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl overflow-hidden my-8">
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0494f4] text-white flex items-center justify-center font-bold">
              <Sparkles className="w-4 h-4 fill-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                Project Order & Quote Estimator
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Direct engagement with our 12-member engineering team
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Close Order Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 max-h-[80vh] overflow-y-auto">
          <ClientOrderSuite
            initialService={initialService}
            isModal={true}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  );
};
