import React from 'react';
import {
  PackageX,
  TrendingDown,
  Brain,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ClipboardList,
  EyeOff,
  Building2,
  Store
} from 'lucide-react';
import { PAIN_POINTS } from '../data/landingData';

interface ProblemSectionProps {
  onOpenTrial: () => void;
  isDarkMode?: boolean;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenTrial, isDarkMode = false }) => {
  const getIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 text-[#003366] dark:text-blue-400";
    switch (iconName) {
      case 'PackageX':
        return <PackageX className={iconClass} />;
      case 'ClipboardList':
        return <ClipboardList className={iconClass} />;
      case 'ShieldAlert':
        return <ShieldAlert className={iconClass} />;
      case 'EyeOff':
        return <EyeOff className={iconClass} />;
      default:
        return <AlertTriangle className={iconClass} />;
    }
  };

  return (
    <section id="problem" className={`py-20 md:py-28 transition-colors duration-200 ${isDarkMode ? 'bg-[#0d1117]' : 'bg-slate-100/70'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Logo Watermark */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          {/* Logo as subtle background watermark */}
          <div
            className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.04]"
            style={{
              backgroundImage: `url('/Pharmientapro-min.png')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight mb-5 ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
            The Challenges Facing{' '}
            <span className="text-[#003366] dark:text-blue-400">Pharmacies</span>
            {' '}&{' '}
            <span className="text-[#B30000]">Suppliers</span>
            {' '}in Kenya
          </h2>
          <p className={`text-base sm:text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
            From unmonitored medicine expiries and untracked customer requests to manual order processing and stock visibility gaps — both pharmacies and suppliers lose thousands of shillings each month.
          </p>
        </div>

        {/* Ecosystem Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-[#1c2333] text-blue-400' : 'bg-blue-50 text-blue-700'
            }`}>
            <Store className="w-4 h-4" />
            Pharmacy Challenges
          </span>
          <span className="text-slate-400 text-sm font-light">+</span>
          <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-[#1c2333] text-emerald-400' : 'bg-emerald-50 text-emerald-700'
            }`}>
            <Building2 className="w-4 h-4" />
            Supplier Challenges
          </span>
        </div>

        {/* 4 Pain Points Grid - Stacked for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {PAIN_POINTS.map((item, index) => (
            <div
              key={item.id}
              className={`group rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-md hover:shadow-xl ${isDarkMode
                ? 'bg-[#161b22] text-[#c9d1d9]'
                : 'bg-white text-slate-800'
                }`}
            >
              {/* Stacked layout: Icon on top for mobile, side by side on desktop */}
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Icon - No background, just the icon */}
                <div className="w-full md:w-12 h-12 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {getIcon(item.iconName)}
                </div>

                {/* Text - Full width on mobile */}
                <div className="space-y-3 flex-1 w-full">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-lg sm:text-xl font-bold font-heading ${isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono font-bold text-slate-400 shrink-0 ml-2">0{index + 1}</span>
                  </div>

                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                    <strong className={isDarkMode ? 'text-white' : 'text-slate-800'}>The Problem:</strong> {item.challenge}
                  </p>

                  <div className={`rounded-xl p-3.5 text-xs font-medium ${isDarkMode ? 'bg-red-950/40 text-red-300' : 'bg-red-50 text-red-800'
                    }`}>
                    <strong className="font-bold">Cost to You:</strong> {item.consequence}
                  </div>

                  <div className={`pt-2 flex items-start gap-2 text-xs font-medium ${isDarkMode ? 'text-emerald-300' : 'text-emerald-700'
                    }`}>
                    <CheckCircle2 className="w-4 h-4 text-[#2ea043] shrink-0 mt-0.5" />
                    <span><strong className="font-bold">Pharmienta Fix:</strong> {item.pharmientaSolution}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Supplier-Specific Pain Point Callout */}
        <div className={`mb-16 p-6 sm:p-8 rounded-3xl shadow-md ${isDarkMode ? 'bg-[#161b22] border border-slate-800' : 'bg-white border border-slate-200'
          }`}>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Building2 className={`w-5 h-5 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <h3 className={`text-lg font-bold font-heading ${isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                  Supplier-Specific Challenges
                </h3>
              </div>
              <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                Pharmaceutical suppliers face unique operational hurdles that impact their efficiency and profitability.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {[
                {
                  title: 'Manual Order Processing',
                  desc: 'Handling pharmacy orders via phone calls and WhatsApp creates errors and delays.'
                },
                {
                  title: 'Stock Visibility Gaps',
                  desc: 'Difficulty tracking what stock is available vs what is committed to orders.'
                },
                {
                  title: 'Batch & Expiry Management',
                  desc: 'Poor visibility into batch numbers and expiry dates leads to compliance issues.'
                },
                {
                  title: 'Delivery Coordination',
                  desc: 'Managing dispatch, couriers, and delivery tracking without a centralized system.'
                }
              ].map((item, idx) => (
                <div key={idx} className={`p-3 rounded-xl ${isDarkMode ? 'bg-[#0d1117]' : 'bg-slate-50'
                  }`}>
                  <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>{item.title}</p>
                  <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Solution Teaser Callout Banner - NO BORDERS */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-r from-[#003366] via-[#004080] to-[#B30000] p-1">
          <div className={`rounded-[23px] p-8 sm:p-10 lg:p-12 text-center max-w-4xl mx-auto backdrop-blur-xl ${isDarkMode ? 'bg-[#0d1117]/95' : 'bg-white/95'
            }`}>
            {/* Logo watermark inside banner - More visible */}
            <div
              className="absolute inset-0 opacity-[0.08] dark:opacity-[0.10]"
              style={{
                backgroundImage: `url('/Pharmientapro-min.png')`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />

            {/* Subtle gradient overlay to blend logo */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/30 dark:to-[#0d1117]/30 rounded-[23px]" />

            <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading mb-4 relative ${isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
              That's Why We Built the{' '}
              <span className="text-[#003366] dark:text-blue-400">Pharm</span>
              <span className="text-[#B30000] dark:text-red-500">ienta</span>{' '}
              <span className="block text-lg sm:text-xl font-bold text-slate-400 mt-1">Ecosystem</span>
            </h3>

            <p className={`text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed relative ${isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
              We replaced complicated generic spreadsheets and messy books with a modern, cloud-backed ecosystem.
              <span className="block mt-2">
                <span className="font-bold text-[#003366] dark:text-blue-400">Pharmienta Pharmacy</span> manages pharmacy operations while{' '}
                <span className="font-bold text-[#B30000] dark:text-red-400">Pharmienta Supplier</span> connects suppliers to fulfil orders — both working together seamlessly.
              </span>
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 relative">
              <button
                id="btn-problem-try-pharmienta"
                onClick={onOpenTrial}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#003366] to-[#B30000] hover:brightness-110 shadow-lg shadow-[#003366]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Get Started (12 Months Free)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => window.open('https://pharmienta-suppliers.vercel.app/', '_blank', 'noopener,noreferrer')}
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold transition-all cursor-pointer ${isDarkMode
                  ? 'border border-slate-700 text-slate-300 hover:bg-slate-800'
                  : 'border-2 border-[#003366] text-[#003366] hover:bg-[#003366]/5'
                  }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Supplier Platform</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};