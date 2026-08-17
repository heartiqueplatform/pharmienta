import React from 'react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  RotateCcw,
  BookOpen
} from 'lucide-react';
import { BENEFITS } from '../data/landingData';

interface BenefitsSectionProps {
  onOpenTrial: () => void;
  isDarkMode?: boolean;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ onOpenTrial, isDarkMode = false }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-8 h-8 text-[#003366] dark:text-blue-400" />;
      case 'BookOpen':
        return <BookOpen className="w-8 h-8 text-purple-600 dark:text-purple-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-[#2ea043] dark:text-emerald-400" />;
      case 'Zap':
        return <Zap className="w-8 h-8 text-amber-500 dark:text-amber-400" />;
      default:
        return <Sparkles className="w-8 h-8 text-emerald-500" />;
    }
  };

  return (
    <section id="benefits" className={`py-20 md:py-28 relative transition-colors duration-200 ${
      isDarkMode ? 'bg-[#0d1117]' : 'bg-slate-100/60'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 text-xs font-bold mb-4 shadow-xs">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Proven Business Impact</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight mb-5 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Why Pharmacy Owners Choose{' '}
            <span className="text-[#003366] dark:text-blue-400">Pharm</span><span className="text-[#B30000] dark:text-red-500">ienta</span>
          </h2>

          <p className={`text-base sm:text-lg ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Real metrics from independent community chemists and retail pharmacy dispensaries running Pharmienta Pro.
          </p>
        </div>

        {/* Alternating Benefit Rows */}
        <div className="space-y-16 lg:space-y-24">
          {BENEFITS.map((benefit, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={benefit.id}
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } items-center gap-10 lg:gap-16`}
              >
                {/* Visual / Metric Card Column - Mobile Edge-to-Edge, 0 Borders */}
                <div className="w-full lg:w-1/2">
                  <div className={`relative -mx-4 sm:mx-0 w-[calc(100%+2rem)] sm:w-full rounded-none sm:rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden group ${
                    isDarkMode ? 'bg-[#161b22]' : 'bg-white'
                  }`}>
                    {/* Background subtle glow circle */}
                    <div className={`absolute -top-10 -right-10 w-48 h-48 rounded-full blur-3xl group-hover:scale-125 transition-transform ${
                      isDarkMode ? 'bg-[#003366]/40' : 'bg-blue-100/60'
                    }`} />
                    
                    <div className="relative z-10 flex flex-col justify-between h-full">
                      <div className="flex items-center justify-between mb-8">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-md ${
                          isDarkMode ? 'bg-[#21262d]' : 'bg-slate-50'
                        }`}>
                          {getIcon(benefit.iconName)}
                        </div>
                        <span className={`px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                          isDarkMode ? 'bg-[#21262d] text-slate-300' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {benefit.badge}
                        </span>
                      </div>

                      <div className="space-y-2 mb-6">
                        <span className={`text-5xl sm:text-6xl lg:text-7xl font-black font-heading tracking-tight ${
                          isDarkMode ? 'text-white' : 'text-[#003366]'
                        }`}>
                          {benefit.metric}
                        </span>
                        <p className="text-xs uppercase font-bold tracking-widest text-[#2ea043]">
                          Measurable Outcome
                        </p>
                      </div>

                      {/* Small Live Status Bar */}
                      <div className={`p-3.5 rounded-xl flex items-center justify-between text-xs font-medium ${
                        isDarkMode ? 'bg-[#0d1117] text-slate-400' : 'bg-slate-50 text-slate-600'
                      }`}>
                        <span>Kenyan Chemist Benchmark</span>
                        <span className="font-bold text-[#2ea043]">Verified in Practice</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Details Column */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-400">
                    <span className="w-6 h-[2px] bg-[#003366]" />
                    PILLAR 0{index + 1}
                  </div>

                  <h3 className={`text-2xl sm:text-3xl font-bold font-heading leading-snug ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {benefit.title}
                  </h3>

                  <p className={`text-base leading-relaxed ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {benefit.description}
                  </p>

                  {/* Bullet Checklist */}
                  <ul className="space-y-3 pt-2">
                    {benefit.detailPoints.map((point, pIdx) => (
                      <li key={pIdx} className={`flex items-start gap-3 text-sm ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        <CheckCircle2 className="w-5 h-5 text-[#2ea043] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <button
                      id={`btn-benefit-trial-${benefit.id}`}
                      onClick={onOpenTrial}
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#003366] dark:text-blue-400 hover:underline transition-colors group cursor-pointer"
                    >
                      <span>See how this applies to your pharmacy</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

