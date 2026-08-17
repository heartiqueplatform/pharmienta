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
  EyeOff
} from 'lucide-react';
import { PAIN_POINTS } from '../data/landingData';

interface ProblemSectionProps {
  onOpenTrial: () => void;
  isDarkMode?: boolean;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenTrial, isDarkMode = false }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PackageX':
        return <PackageX className="w-6 h-6 text-red-500" />;
      case 'ClipboardList':
        return <ClipboardList className="w-6 h-6 text-red-500" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-red-500" />;
      case 'EyeOff':
        return <EyeOff className="w-6 h-6 text-red-500" />;
      default:
        return <AlertTriangle className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <section id="problem" className={`py-20 md:py-28 transition-colors duration-200 ${isDarkMode ? 'bg-[#0d1117]' : 'bg-slate-100/70'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight mb-5 ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
            Running a Pharmacy Without Live System Control is{' '}
            <span className="text-[#B30000]">
              Costly & Risky
            </span>
          </h2>
          <p className={`text-base sm:text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
            Between unmonitored medicine expiries, untracked customer requests, shift till discrepancies, and zero remote visibility when you are away, pharmacy owners lose thousands of shillings each month.
          </p>
        </div>

        {/* 4 Pain Points Grid - NO BORDERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {PAIN_POINTS.map((item, index) => (
            <div
              key={item.id}
              className={`group rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-md hover:shadow-xl ${isDarkMode
                  ? 'bg-[#161b22] text-[#c9d1d9]'
                  : 'bg-white text-slate-800'
                }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-950/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {getIcon(item.iconName)}
                </div>

                <div className="space-y-3 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-lg sm:text-xl font-bold font-heading ${isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                      {item.title}
                    </h3>
                    <span className="text-xs font-mono font-bold text-slate-400">0{index + 1}</span>
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

        {/* Solution Teaser Callout Banner - NO BORDERS */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-r from-[#003366] via-[#004080] to-[#B30000] p-1">
          <div className={`rounded-[23px] p-8 sm:p-10 lg:p-12 text-center max-w-4xl mx-auto backdrop-blur-xl ${isDarkMode ? 'bg-[#0d1117]/95' : 'bg-white/95'
            }`}>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>The Transformation</span>
            </div>

            <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
              That's Why We Built <span className="text-[#003366] dark:text-blue-400">Pharm</span><span className="text-[#B30000] dark:text-red-500">ienta</span> Pro
            </h3>

            <p className={`text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
              We replaced complicated generic spreadsheets and messy books with a modern, cloud-backed pharmacy system that calculates stock instantly, secures shift audits, and lets owners track sales anywhere in real time.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                id="btn-problem-try-pharmienta"
                onClick={onOpenTrial}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#003366] to-[#B30000] hover:brightness-110 shadow-lg shadow-[#003366]/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Switch to Pharmienta (12 Months Free)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

