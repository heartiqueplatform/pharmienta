import React from 'react';
import { 
  ScanLine, 
  Boxes, 
  LineChart, 
  WifiOff, 
  Smartphone, 
  FileCheck2, 
  Building2, 
  Headphones,
  Check,
  Sparkles,
  ArrowRight,
  Calculator,
  RotateCcw,
  BookOpen,
  UserCheck,
  CreditCard,
  CloudCheck,
  Rocket
} from 'lucide-react';
import { FEATURES } from '../data/landingData';

interface FeaturesSectionProps {
  onOpenTrial: () => void;
  isDarkMode?: boolean;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onOpenTrial, isDarkMode = false }) => {
  const getFeatureIcon = (iconName: string) => {
    const iconClass = "w-6 h-6";
    switch (iconName) {
      case 'Calculator':
        return <Calculator className={`${iconClass} text-[#003366] dark:text-blue-400`} />;
      case 'LineChart':
        return <LineChart className={`${iconClass} text-emerald-600 dark:text-emerald-400`} />;
      case 'BookOpen':
        return <BookOpen className={`${iconClass} text-purple-600 dark:text-purple-400`} />;
      case 'RotateCcw':
        return <RotateCcw className={`${iconClass} text-amber-600 dark:text-amber-400`} />;
      case 'UserCheck':
        return <UserCheck className={`${iconClass} text-indigo-600 dark:text-indigo-400`} />;
      case 'CreditCard':
        return <CreditCard className={`${iconClass} text-[#2ea043] dark:text-[#2ea043]`} />;
      case 'CloudCheck':
        return <CloudCheck className={`${iconClass} text-cyan-600 dark:text-cyan-400`} />;
      case 'Rocket':
        return <Rocket className={`${iconClass} text-[#B30000] dark:text-red-400`} />;
      default:
        return <Sparkles className={`${iconClass} text-blue-500`} />;
    }
  };

  return (
    <section id="features" className={`py-20 md:py-28 relative transition-colors duration-200 ${
      isDarkMode ? 'bg-[#0d1117]' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#003366] dark:bg-blue-950/60 dark:text-blue-300 text-xs font-bold mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Pharmacy Ecosystem</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight mb-5 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Engineered for{' '}
            <span className="text-[#003366] dark:text-blue-400">
              Kenyan Community Chemists
            </span>
          </h2>

          <p className={`text-base sm:text-lg ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Every feature in Pharmienta Pro solves a specific daily workflow bottleneck faced by community chemists,
            retail pharmacies, and drugstores in Nairobi and across all 47 counties.
          </p>
        </div>

        {/* 8 Feature Cards Grid - NO BORDERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className={`group rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-xl ${
                isDarkMode 
                  ? 'bg-[#161b22] text-[#c9d1d9]' 
                  : 'bg-slate-50 text-slate-800'
              }`}
            >
              <div>
                {/* Card Top: Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform ${
                    isDarkMode ? 'bg-[#21262d]' : 'bg-white shadow-xs'
                  }`}>
                    {getFeatureIcon(feature.iconName)}
                  </div>
                  {feature.badge && (
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-[#003366] dark:bg-blue-950/80 dark:text-blue-300">
                      {feature.badge}
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 className={`text-lg font-bold font-heading mb-1.5 transition-colors ${
                  isDarkMode ? 'text-white group-hover:text-blue-300' : 'text-slate-900 group-hover:text-[#003366]'
                }`}>
                  {feature.title}
                </h3>
                <p className="text-xs font-bold text-[#2ea043] mb-3">
                  {feature.tagline}
                </p>

                {/* Description */}
                <p className={`text-xs leading-relaxed mb-4 ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {feature.description}
                </p>
              </div>

              {/* Card Footer Highlight */}
              {feature.highlight && (
                <div className={`pt-3 text-[11px] flex items-start gap-1.5 ${
                  isDarkMode ? 'border-t border-slate-800 text-slate-400' : 'border-t border-slate-200/80 text-slate-600'
                }`}>
                  <Check className="w-3.5 h-3.5 text-[#2ea043] shrink-0 mt-0.5" />
                  <span className="font-medium">{feature.highlight}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Feature Bottom Quick Action */}
        <div className="text-center">
          <button
            id="btn-features-get-started"
            onClick={onOpenTrial}
            className={`inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-xl transition-all shadow-md cursor-pointer ${
              isDarkMode 
                ? 'bg-[#21262d] hover:bg-[#30363d] text-white' 
                : 'bg-slate-900 hover:bg-slate-800 text-white'
            }`}
          >
            <span>Explore All Capabilities with a 12-Month Free License</span>
            <ArrowRight className="w-4 h-4 text-emerald-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

