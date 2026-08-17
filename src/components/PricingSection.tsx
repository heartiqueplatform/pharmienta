import React, { useState } from 'react';
import {
  Check,
  Sparkles,
  Gift,
  ArrowRight,
  ShieldCheck,
  Calculator
} from 'lucide-react';

interface PricingSectionProps {
  onOpenTrial: () => void;
  isDarkMode?: boolean;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenTrial, isDarkMode = false }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [rxVolume, setRxVolume] = useState<number>(1500); // monthly prescriptions

  // Calculate estimated savings in KES
  const estimatedExpirySaved = Math.round((rxVolume * 18));
  const estimatedLeakageSaved = Math.round((rxVolume * 22));
  const totalMonthlyBenefit = estimatedExpirySaved + estimatedLeakageSaved;

  return (
    <section id="pricing" className={`py-20 md:py-28 relative transition-colors duration-200 ${isDarkMode ? 'bg-[#0d1117]' : 'bg-white'
      }`}>
      {/* Background Lighting */}
      <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 rounded-full blur-3xl pointer-events-none ${isDarkMode ? 'bg-[#003366]/20' : 'bg-emerald-100/40'
        }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight mb-5 ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
            12 Months 100% Free for the{' '}
            <span className="text-[#2ea043]">First 50 Pharmacies</span>
          </h2>

          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
            Zero setup fees. Zero credit card required. Full unrestricted access to the entire Pharmienta Pro platform for 365 days.
          </p>
        </div>

        {/* Pricing Cards Grid - Mobile Edge-to-Edge, NO BORDERS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-5xl mx-auto mb-16">
          {/* Main Featured Card: 12-Month Free Pioneer License */}
          <div className={`lg:col-span-7 -mx-4 sm:mx-0 w-[calc(100%+2rem)] sm:w-full rounded-none sm:rounded-3xl p-6 sm:p-10 shadow-2xl relative flex flex-col justify-between ${isDarkMode ? 'bg-[#161b22]' : 'bg-[#003366] text-white'
            }`}>
            {/* Special Badge */}
            <div className="absolute top-6 right-6 bg-[#2ea043] text-white text-xs font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>14 Pioneer Slots Left</span>
            </div>

            <div>
              <div className="mb-4">
                <h3 className="text-2xl font-bold font-heading text-white">
                  Kenyan Pioneer License
                </h3>
                <p className="text-xs text-blue-200 dark:text-slate-400 mt-0.5">
                  Full System for Community Chemists & Dispensing Pharmacies
                </p>
              </div>

              {/* Price Display */}
              <div className={`my-6 p-6 rounded-2xl ${isDarkMode ? 'bg-[#0d1117]' : 'bg-white/10 backdrop-blur-md'
                }`}>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl sm:text-6xl font-black font-heading text-white">
                    KES 0
                  </span>
                  <span className="text-blue-200 dark:text-slate-400 text-sm font-bold">
                    / First 12 Months
                  </span>
                </div>
                <p className="text-xs text-emerald-300 font-bold mt-2 flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#2ea043]" /> No credit card needed • Free item import included
                </p>
              </div>

              {/* What happens after 12 months */}
              <div className={`mb-6 p-4 rounded-2xl text-xs ${isDarkMode ? 'bg-[#21262d] text-slate-300' : 'bg-white/15 text-blue-100'
                }`}>
                <strong>After your free year:</strong> Pay only <span className="font-bold text-white">KES 299/month</span> or <span className="font-bold text-white">KES 2,990/year</span>. Cancel anytime without penalty.
              </div>

              {/* Features List */}
              <p className="text-xs font-bold uppercase tracking-wider text-blue-200 dark:text-slate-400 mb-4">
                Everything Included:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-8">
                {[
                  'Live Auto-Stock Quantity Math',
                  'Owner Real-Time Dashboard',
                  'Customer Request Book',
                  'Return Flow Restocking',
                  'Staff Shift Till Audits',
                  'M-Pesa Till Reconciliation',
                  'Multi-Device Cloud Backup',
                  'WhatsApp & Phone Support',
                  'Free Excel/CSV Data Import',
                  'Unlimited Dispensers & Cashiers'
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 font-medium text-slate-100">
                    <div className="w-4 h-4 rounded-full bg-[#2ea043] text-white flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <button
              id="btn-pricing-claim-free-license"
              onClick={onOpenTrial}
              className="w-full py-4 rounded-xl text-base font-bold text-white bg-[#2ea043] hover:bg-[#288f3c] shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-amber-300" />
              <span>Claim 12-Month Free Pioneer Access</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Standard Pricing Breakdown & Subsequent Plans - Mobile Edge-to-Edge, NO BORDERS */}
          <div className={`lg:col-span-5 -mx-4 sm:mx-0 w-[calc(100%+2rem)] sm:w-full rounded-none sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl ${isDarkMode ? 'bg-[#161b22]' : 'bg-slate-50'
            }`}>
            <div>
              <h3 className={`text-xl font-bold font-heading mb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                Standard Post-Trial Pricing
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Most accessible pharmacy management software in East Africa.
              </p>

              {/* Billing Toggle */}
              <div className={`inline-flex p-1 rounded-2xl w-full mb-6 ${isDarkMode ? 'bg-[#21262d]' : 'bg-slate-200/70'
                }`}>
                <button
                  id="btn-billing-monthly"
                  onClick={() => setBillingCycle('monthly')}
                  className={`w-1/2 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${billingCycle === 'monthly'
                      ? 'bg-[#003366] text-white shadow-sm'
                      : isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                >
                  Monthly Plan
                </button>
                <button
                  id="btn-billing-yearly"
                  onClick={() => setBillingCycle('yearly')}
                  className={`w-1/2 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1 ${billingCycle === 'yearly'
                      ? 'bg-[#003366] text-white shadow-sm'
                      : isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                >
                  <span>Annual Plan</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#2ea043] text-white">Save 17%</span>
                </button>
              </div>

              {/* Price Details */}
              <div className={`p-6 rounded-2xl mb-6 text-center shadow-xs ${isDarkMode ? 'bg-[#0d1117]' : 'bg-white'
                }`}>
                <div className={`text-4xl font-black font-heading ${isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                  {billingCycle === 'yearly' ? 'KES 2,990' : 'KES 299'}
                </div>
                <p className="text-xs text-slate-400 mt-1 font-semibold">
                  {billingCycle === 'yearly' ? 'per year (less than KES 250/mo)' : 'per month, billed monthly'}
                </p>
                <p className="text-[11px] text-slate-400 mt-2">
                  *Only billed after your initial 12 free months expire.
                </p>
              </div>

              {/* Why so affordable? */}
              <div className="space-y-2 text-xs">
                <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                  Why is Pharmienta so accessible?
                </p>
                <p className={`leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Our mission is to help Kenyan community pharmacies streamline their stock and shift controls without charging tens of thousands of shillings upfront.
                </p>
              </div>
            </div>

            <div className={`pt-6 mt-6 ${isDarkMode ? 'border-t border-slate-800' : 'border-t border-slate-200'
              }`}>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <ShieldCheck className="w-4 h-4 text-[#2ea043]" />
                <span>30-Day Money-Back Guarantee After Free Year</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Pharmacy ROI Calculator Widget - NO BORDERS */}
        <div className={`max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 shadow-xl ${isDarkMode ? 'bg-[#161b22]' : 'bg-slate-50'
          }`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-blue-100 text-[#003366] flex items-center justify-center">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h4 className={`text-lg font-bold font-heading ${isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                Estimate Your Monthly Revenue Protection
              </h4>
              <p className="text-xs text-slate-400">
                Slide to see how much Pharmienta protects based on monthly dispensing volume.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-xs sm:text-sm font-bold mb-2">
                <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>
                  Monthly Prescriptions / OTC Transactions:
                </span>
                <span className="text-[#2ea043] font-mono text-base">{rxVolume.toLocaleString()} items</span>
              </div>
              <input
                id="range-roi-prescriptions"
                type="range"
                min="300"
                max="5000"
                step="100"
                value={rxVolume}
                onChange={(e) => setRxVolume(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#2ea043]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1.5 font-bold">
                <span>300 / mo (Small Chemist)</span>
                <span>2,500 / mo (Busy High Street)</span>
                <span>5,000+ / mo (Hospital / Wholesale)</span>
              </div>
            </div>

            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 ${isDarkMode ? 'border-t border-slate-800' : 'border-t border-slate-200'
              }`}>
              <div className={`p-4 rounded-2xl shadow-xs ${isDarkMode ? 'bg-[#0d1117]' : 'bg-white'
                }`}>
                <p className="text-[11px] font-semibold text-slate-400">Expiry Waste Prevented</p>
                <p className={`text-lg font-bold font-mono mt-1 ${isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                  KES {estimatedExpirySaved.toLocaleString()}<span className="text-xs font-normal text-slate-400">/mo</span>
                </p>
              </div>

              <div className={`p-4 rounded-2xl shadow-xs ${isDarkMode ? 'bg-[#0d1117]' : 'bg-white'
                }`}>
                <p className="text-[11px] font-semibold text-slate-400">Till Leakage & Errors Stopped</p>
                <p className={`text-lg font-bold font-mono mt-1 ${isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                  KES {estimatedLeakageSaved.toLocaleString()}<span className="text-xs font-normal text-slate-400">/mo</span>
                </p>
              </div>

              <div className="p-4 rounded-2xl shadow-xs bg-emerald-100 text-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-200">
                <p className="text-[11px] font-bold">Total Estimated Value</p>
                <p className="text-xl font-black text-[#2ea043] font-mono mt-1">
                  KES {totalMonthlyBenefit.toLocaleString()}<span className="text-xs font-semibold">/mo</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
