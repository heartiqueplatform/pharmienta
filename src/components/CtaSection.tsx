import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Gift,
  Mail,
  Check,
  X,
  Sparkles,
  Store,
  Building2,
  // PlayCircle  // Commented out - not using demo
} from 'lucide-react';

interface CtaSectionProps {
  onOpenTrial: () => void;
  isDarkMode?: boolean;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenTrial, isDarkMode = false }) => {
  const [quickEmail, setQuickEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showRoleSelector, setShowRoleSelector] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickEmail) return;
    // Show role selector instead of just submitting
    setShowRoleSelector(true);
  };

  const handleRoleSelect = (role: 'pharmacy' | 'supplier') => {
    setShowRoleSelector(false);
    if (role === 'pharmacy') {
      // Pass the email to the trial modal if needed
      onOpenTrial();
    } else if (role === 'supplier') {
      window.open('https://pharmienta-suppliers.vercel.app/', '_blank', 'noopener,noreferrer');
    }
  };

  const handleStartFreeClick = () => {
    setShowRoleSelector(true);
  };

  return (
    <>
      <section id="cta-section" className={`py-20 md:py-28 relative overflow-hidden transition-colors duration-200 ${isDarkMode ? 'bg-[#0d1117]' : 'bg-white'
        }`}>
        {/* Background Gradients */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-3xl pointer-events-none ${isDarkMode ? 'bg-[#003366]/20' : 'bg-blue-100/50'
          }`} />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Card - Mobile Edge-to-Edge, 0 Borders */}
          <div className={`-mx-4 sm:mx-0 w-[calc(100%+2rem)] sm:w-full rounded-none sm:rounded-3xl shadow-2xl overflow-hidden ${isDarkMode ? 'bg-[#161b22]' : 'bg-[#003366]'
            }`}>
            <div className="p-8 sm:p-12 lg:p-16 text-center">

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight mb-5 leading-tight text-white">
                Ready to Upgrade Your{' '}
                <span className="text-[#38bdf8]">
                  Kenyan Chemist?
                </span>
              </h2>

              <p className="text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed text-slate-200">
                Join 50+ forward-thinking pharmacy owners who have eliminated manual inventory guesswork, stopped register leakages, and track their daily sales on their phones.
              </p>

              {/* Quick Capture Email Box or Button */}
              {!submitted ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
                  <div className={`flex flex-col sm:flex-row items-center gap-2 p-2 rounded-2xl shadow-lg ${isDarkMode ? 'bg-[#21262d]' : 'bg-white'
                    }`}>
                    <div className="relative w-full">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        id="input-cta-quick-email"
                        type="text"
                        required
                        placeholder="Enter phone or email (e.g. 0717517371)"
                        value={quickEmail}
                        onChange={(e) => setQuickEmail(e.target.value)}
                        className={`w-full pl-10 pr-3 py-3 bg-transparent text-sm focus:outline-none ${isDarkMode ? 'text-white placeholder-slate-500' : 'text-slate-900 placeholder-slate-400'
                          }`}
                      />
                    </div>
                    <button
                      id="btn-cta-quick-submit"
                      type="submit"
                      className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#2ea043] hover:bg-[#288f3c] text-white text-sm font-bold shadow-md transition-all cursor-pointer"
                    >
                      <span>Start Free</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="max-w-md mx-auto mb-8 p-4 rounded-2xl bg-emerald-950/80 text-emerald-200 text-sm flex items-center justify-center gap-2 font-bold shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-[#2ea043] shrink-0" />
                  <span>Thank you! We will reach out to schedule your 12-Month free onboarding.</span>
                </div>
              )}

              {/* Alternative detailed modal launcher */}
              <div className="mb-8">
                <button
                  id="btn-cta-full-form-open"
                  onClick={handleStartFreeClick}
                  className="text-xs text-blue-200 hover:text-white underline font-bold cursor-pointer"
                >
                  Or fill pharmacy details for instant priority setup &rarr;
                </button>
              </div>

              {/* Trust Checklist Badges */}
              <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs pt-6 border-t border-white/10 text-slate-300 font-semibold">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#2ea043]" />
                  <span>12 Months 100% Free</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#2ea043]" />
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#2ea043]" />
                  <span>Free Data Import Support</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#2ea043]" />
                  <span>Kenya DPA 2019 Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Selector Overlay - Smart Modal */}
      {showRoleSelector && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowRoleSelector(false);
          }}
        >
          <div className={`relative max-w-md w-full rounded-2xl shadow-2xl p-8 animate-in zoom-in-95 duration-200 ${isDarkMode ? 'bg-[#161b22] border border-gray-800' : 'bg-white'
            }`}>
            {/* Close button */}
            <button
              onClick={() => setShowRoleSelector(false)}
              className={`absolute top-3 right-3 p-1.5 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-[#21262d] text-gray-400' : 'hover:bg-gray-100 text-gray-500'
                }`}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="flex justify-center mb-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#003366] to-[#B30000] flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Get Started with Pharmienta
              </h2>
              <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                Choose your role to begin your free journey
              </p>
              {quickEmail && (
                <p className={`text-xs mt-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  We'll use <span className="font-medium">{quickEmail}</span> for your account
                </p>
              )}
            </div>

            {/* Role options */}
            <div className="space-y-3">
              {/* Pharmacy Option */}
              <button
                onClick={() => handleRoleSelect('pharmacy')}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all hover:shadow-lg ${isDarkMode
                  ? 'border-gray-700 hover:border-blue-500 hover:bg-[#1c2333]'
                  : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
                  }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'
                  }`}>
                  <Store className="w-6 h-6" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    I'm a Pharmacy
                  </h3>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                    Manage pharmacy operations, order stock, and grow your business
                  </p>
                </div>
                <ArrowRight className={`w-5 h-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
              </button>

              {/* Supplier Option */}
              <button
                onClick={() => handleRoleSelect('supplier')}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all hover:shadow-lg ${isDarkMode
                  ? 'border-gray-700 hover:border-emerald-500 hover:bg-[#1c2333]'
                  : 'border-gray-200 hover:border-emerald-500 hover:bg-emerald-50'
                  }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${isDarkMode ? 'bg-emerald-900/30 text-emerald-400' : 'bg-emerald-100 text-emerald-600'
                  }`}>
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    I'm a Supplier
                  </h3>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                    Receive orders, manage stock, and fulfil pharmacy orders digitally
                  </p>
                </div>
                <ArrowRight className={`w-5 h-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
              </button>

              {/* Divider */}
              <div className="relative my-4">
                <div className={`absolute inset-0 flex items-center ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className={`w-full border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className={`px-3 ${isDarkMode ? 'bg-[#161b22] text-gray-500' : 'bg-white text-gray-500'}`}>
                    Or
                  </span>
                </div>
              </div>

              {/* Watch Demo Option - COMMENTED OUT - NOT IN USE */}
              {/*
              <button
                onClick={() => {
                  setShowRoleSelector(false);
                  onOpenTrial();
                }}
                className={`w-full flex items-center justify-center gap-2 p-3 rounded-xl text-sm font-medium transition-colors ${
                  isDarkMode
                    ? 'text-gray-400 hover:text-white hover:bg-[#21262d]'
                    : 'text-gray-600 hover:text-slate-900 hover:bg-gray-100'
                }`}
              >
                <PlayCircle className="w-4 h-4 text-emerald-500" />
                Watch Interactive Demo
              </button>
              */}

              {/* Special Offer Badge */}
              <div className={`mt-4 p-3 rounded-xl text-center text-xs ${isDarkMode ? 'bg-yellow-900/20 text-yellow-400 border border-yellow-900/30' : 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                }`}>
                <span className="font-bold">🎉 Pioneer Offer:</span> First 50 pharmacies get 12 months FREE!
              </div>
            </div>

            {/* Footer */}
            <p className={`text-center text-xs mt-6 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              By continuing, you agree to our{' '}
              <button
                onClick={() => {
                  setShowRoleSelector(false);
                  // Navigate to terms if available
                  const termsLink = document.querySelector('a[href="#terms"]');
                  if (termsLink) (termsLink as HTMLAnchorElement).click();
                }}
                className={`underline hover:text-blue-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
              >
                Terms of Service
              </button>
              {' '}and{' '}
              <button
                onClick={() => {
                  setShowRoleSelector(false);
                  const privacyLink = document.querySelector('a[href="#privacy"]');
                  if (privacyLink) (privacyLink as HTMLAnchorElement).click();
                }}
                className={`underline hover:text-blue-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
              >
                Privacy Policy
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  );
};