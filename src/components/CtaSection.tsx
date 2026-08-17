import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Gift, 
  Mail, 
  Check
} from 'lucide-react';

interface CtaSectionProps {
  onOpenTrial: () => void;
  isDarkMode?: boolean;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenTrial, isDarkMode = false }) => {
  const [quickEmail, setQuickEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickEmail) return;
    setSubmitted(true);
  };

  return (
    <section id="cta-section" className={`py-20 md:py-28 relative overflow-hidden transition-colors duration-200 ${
      isDarkMode ? 'bg-[#0d1117]' : 'bg-white'
    }`}>
      {/* Background Gradients */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-3xl pointer-events-none ${
        isDarkMode ? 'bg-[#003366]/20' : 'bg-blue-100/50'
      }`} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Card - Mobile Edge-to-Edge, 0 Borders */}
        <div className={`-mx-4 sm:mx-0 w-[calc(100%+2rem)] sm:w-full rounded-none sm:rounded-3xl shadow-2xl overflow-hidden ${
          isDarkMode ? 'bg-[#161b22]' : 'bg-[#003366]'
        }`}>
          <div className="p-8 sm:p-12 lg:p-16 text-center">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-6 shadow-xs">
              <Gift className="w-4 h-4 text-emerald-400" />
              <span>Pioneer Free 12-Month Access Pass</span>
            </div>

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
                <div className={`flex flex-col sm:flex-row items-center gap-2 p-2 rounded-2xl shadow-lg ${
                  isDarkMode ? 'bg-[#21262d]' : 'bg-white'
                }`}>
                  <div className="relative w-full">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="input-cta-quick-email"
                      type="text"
                      required
                      placeholder="Enter phone or email (e.g. 0704473503)"
                      value={quickEmail}
                      onChange={(e) => setQuickEmail(e.target.value)}
                      className={`w-full pl-10 pr-3 py-3 bg-transparent text-sm focus:outline-none ${
                        isDarkMode ? 'text-white placeholder-slate-500' : 'text-slate-900 placeholder-slate-400'
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
                onClick={onOpenTrial}
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
  );
};

