import React, { useState } from 'react';
import { 
  X, 
  Play, 
  Smartphone, 
  CheckCircle2, 
  Sparkles, 
  ShoppingBag,
  ArrowRight,
  RefreshCw,
  TrendingUp
} from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTrial: () => void;
  isDarkMode?: boolean;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, onOpenTrial, isDarkMode = false }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [phone, setPhone] = useState('0712345678');
  const [stkStatus, setStkStatus] = useState<'idle' | 'sending' | 'confirmed'>('idle');

  if (!isOpen) return null;

  const handleSimulatePayment = () => {
    setStkStatus('sending');
    setTimeout(() => {
      setStkStatus('confirmed');
      setStep(3);
    }, 1600);
  };

  const handleResetDemo = () => {
    setStep(1);
    setStkStatus('idle');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className={`relative w-full max-w-3xl rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[92vh] overflow-y-auto ${
        isDarkMode ? 'bg-[#161b22]' : 'bg-white'
      }`}>
        {/* Close Button */}
        <button
          id="btn-close-demo-modal"
          onClick={onClose}
          className={`absolute top-5 right-5 p-2 rounded-full transition-colors cursor-pointer ${
            isDarkMode ? 'bg-[#21262d] text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-500 hover:text-slate-900'
          }`}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#003366] dark:bg-blue-950/60 dark:text-blue-300 text-xs font-bold w-fit mb-3 shadow-xs">
          <Play className="w-3 h-3 fill-[#003366] dark:fill-blue-400" />
          <span>Interactive POS Counter Demo</span>
        </div>

        <h3 className={`text-2xl font-bold font-heading mb-1 ${
          isDarkMode ? 'text-white' : 'text-slate-900'
        }`}>
          Experience Pharmienta Pro in Action
        </h3>
        <p className="text-xs text-slate-400 mb-6">
          See how smooth it is to dispense, auto-deduct stock math, and complete transactions in seconds.
        </p>

        {/* 3 Steps Stepper */}
        <div className="grid grid-cols-3 gap-2 mb-6 text-xs">
          <button
            onClick={() => setStep(1)}
            className={`p-3 rounded-2xl text-left transition-all cursor-pointer shadow-xs ${
              step === 1 
                ? 'bg-[#003366] text-white' 
                : isDarkMode ? 'bg-[#21262d] text-slate-400' : 'bg-slate-100 text-slate-600'
            }`}
          >
            <span className="font-bold block">1. Counter POS</span>
            <span className="text-[10px] opacity-80">Auto-stock deduction</span>
          </button>
          <button
            onClick={() => setStep(2)}
            className={`p-3 rounded-2xl text-left transition-all cursor-pointer shadow-xs ${
              step === 2 
                ? 'bg-[#003366] text-white' 
                : isDarkMode ? 'bg-[#21262d] text-slate-400' : 'bg-slate-100 text-slate-600'
            }`}
          >
            <span className="font-bold block">2. M-Pesa / Cash</span>
            <span className="text-[10px] opacity-80">Instant till check</span>
          </button>
          <button
            onClick={() => setStep(3)}
            className={`p-3 rounded-2xl text-left transition-all cursor-pointer shadow-xs ${
              step === 3 
                ? 'bg-[#003366] text-white' 
                : isDarkMode ? 'bg-[#21262d] text-slate-400' : 'bg-slate-100 text-slate-600'
            }`}
          >
            <span className="font-bold block">3. Live Receipt</span>
            <span className="text-[10px] opacity-80">Auto stock updated</span>
          </button>
        </div>

        {/* Step 1: Simulated POS Cart */}
        {step === 1 && (
          <div className={`space-y-4 rounded-2xl p-5 animate-in fade-in duration-200 ${
            isDarkMode ? 'bg-[#0d1117]' : 'bg-slate-50'
          }`}>
            <div className={`flex items-center justify-between pb-3 text-xs ${
              isDarkMode ? 'border-b border-slate-800' : 'border-b border-slate-200'
            }`}>
              <span className={`font-bold flex items-center gap-1.5 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                <ShoppingBag className="w-4 h-4 text-[#003366] dark:text-blue-400" />
                Active Counter Basket #8849
              </span>
              <span className="text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded-lg text-[11px] font-bold">
                Dispenser: Sarah W.
              </span>
            </div>

            <div className="space-y-2">
              <div className={`p-3 rounded-2xl flex items-center justify-between text-xs shadow-xs ${
                isDarkMode ? 'bg-[#161b22]' : 'bg-white'
              }`}>
                <div>
                  <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Augmentin 625mg Tabs</p>
                  <p className="text-[10px] text-slate-400">Batch #AG902 • Exp: 12/2026 • 1 Pack (Stock: 14 &rarr; 13)</p>
                </div>
                <div className="text-right">
                  <p className={`font-mono font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>KES 1,850.00</p>
                  <span className="text-[10px] text-[#2ea043] font-bold">In Stock</span>
                </div>
              </div>

              {/* Generic Switch / Suggestion Prompt */}
              <div className="p-3.5 rounded-2xl bg-blue-100/70 dark:bg-blue-950/40 text-xs shadow-xs">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#003366] dark:text-blue-400 shrink-0" />
                  <div>
                    <p className="font-bold text-[#003366] dark:text-blue-300">💡 Higher Margin Alternative Available</p>
                    <p className="text-[10px] text-slate-600 dark:text-slate-300">Co-Amoxiclav 625mg (Local Quality): Saves patient KES 450 while yielding 22% higher profit.</p>
                  </div>
                </div>
              </div>

              <div className={`p-3 rounded-2xl flex items-center justify-between text-xs shadow-xs ${
                isDarkMode ? 'bg-[#161b22]' : 'bg-white'
              }`}>
                <div>
                  <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Panadol Extra 10s</p>
                  <p className="text-[10px] text-slate-400">Batch #PN331 • 2 Strips (Stock: 80 &rarr; 78)</p>
                </div>
                <div className="text-right">
                  <p className={`font-mono font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>KES 240.00</p>
                  <span className="text-[10px] text-[#2ea043] font-bold">In Stock</span>
                </div>
              </div>
            </div>

            <div className={`pt-3 flex items-center justify-between ${
              isDarkMode ? 'border-t border-slate-800' : 'border-t border-slate-200'
            }`}>
              <div>
                <p className="text-xs text-slate-400 font-medium">Total Counter Bill</p>
                <p className={`text-2xl font-black font-heading ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>KES 2,090.00</p>
              </div>
              <button
                id="btn-demo-proceed-to-payment"
                onClick={() => setStep(2)}
                className="px-6 py-3 rounded-xl font-bold bg-[#003366] hover:bg-[#002244] text-white text-xs shadow-md transition-colors cursor-pointer flex items-center gap-2"
              >
                <span>Proceed to Payment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: M-Pesa STK Push Simulation */}
        {step === 2 && (
          <div className={`space-y-4 rounded-2xl p-5 animate-in fade-in duration-200 ${
            isDarkMode ? 'bg-[#0d1117]' : 'bg-slate-50'
          }`}>
            <div className={`flex items-center justify-between pb-3 text-xs ${
              isDarkMode ? 'border-b border-slate-800' : 'border-b border-slate-200'
            }`}>
              <span className={`font-bold flex items-center gap-1.5 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                <Smartphone className="w-4 h-4 text-[#2ea043]" />
                Customer Mobile Payment Prompt
              </span>
              <span className="text-slate-400 font-bold">Total: KES 2,090.00</span>
            </div>

            <div className="max-w-md mx-auto py-4 space-y-4">
              <div>
                <label className={`block text-xs font-bold mb-1 ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  Customer M-Pesa Number:
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full px-3.5 py-3 rounded-2xl font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#003366] shadow-xs ${
                    isDarkMode ? 'bg-[#161b22] text-white' : 'bg-white text-slate-900'
                  }`}
                />
              </div>

              {stkStatus === 'sending' && (
                <div className="p-4 rounded-2xl bg-emerald-100 dark:bg-emerald-950/40 text-center space-y-2">
                  <div className="w-6 h-6 border-2 border-[#2ea043] border-t-transparent rounded-full animate-spin mx-auto" />
                  <p className="text-xs font-bold text-emerald-900 dark:text-emerald-300">
                    Payment prompt received on {phone}... Simulating confirmation.
                  </p>
                </div>
              )}

              {stkStatus === 'idle' && (
                <button
                  id="btn-demo-send-stk"
                  onClick={handleSimulatePayment}
                  className="w-full py-3.5 rounded-xl font-bold bg-[#2ea043] hover:bg-emerald-600 text-white text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Simulate Instant Confirmation</span>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Verified Digital Receipt */}
        {step === 3 && (
          <div className={`space-y-4 rounded-2xl p-5 animate-in fade-in duration-200 ${
            isDarkMode ? 'bg-[#0d1117]' : 'bg-slate-50'
          }`}>
            <div className={`flex items-center justify-between pb-3 text-xs ${
              isDarkMode ? 'border-b border-slate-800' : 'border-b border-slate-200'
            }`}>
              <span className="font-bold text-[#2ea043] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                Payment Received • Stock Auto-Deducted
              </span>
              <span className="text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded text-[11px] font-bold">
                Shift Logged
              </span>
            </div>

            {/* Receipt Preview */}
            <div className="p-6 rounded-2xl bg-white text-slate-900 max-w-sm mx-auto font-mono text-[11px] shadow-xl space-y-2">
              <div className="text-center pb-2 border-b border-dashed border-slate-300">
                <p className="font-bold text-sm text-slate-900">AMANI HEALTH PHARMACY</p>
                <p className="text-[10px] text-slate-600">Westlands Branch, Nairobi</p>
              </div>

              <div className="py-2 space-y-1.5">
                <div className="flex justify-between">
                  <span>1x Augmentin 625mg</span>
                  <span className="font-bold">1,850.00</span>
                </div>
                <div className="flex justify-between">
                  <span>2x Panadol Extra</span>
                  <span className="font-bold">240.00</span>
                </div>
              </div>

              <div className="pt-2 border-t border-dashed border-slate-300 space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span>TOTAL PAID:</span>
                  <span>KES 2,090.00</span>
                </div>
                <div className="text-[10px] text-slate-500 font-normal">
                  <p>Ref: TXN-88921-KL</p>
                  <p>Inventory sync: Instant (Cloud OK)</p>
                </div>
              </div>
            </div>

            <div className={`flex flex-wrap items-center justify-between gap-3 pt-3 ${
              isDarkMode ? 'border-t border-slate-800' : 'border-t border-slate-200'
            }`}>
              <button
                onClick={handleResetDemo}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-700 dark:hover:text-white cursor-pointer font-semibold"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Restart Simulation</span>
              </button>

              <button
                id="btn-demo-claim-free"
                onClick={() => {
                  onClose();
                  onOpenTrial();
                }}
                className="px-6 py-3 rounded-xl font-bold bg-[#003366] hover:bg-[#002244] text-white text-xs shadow-md transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Claim 12-Month Free License</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
