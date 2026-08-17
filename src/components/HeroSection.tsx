import React from 'react';
import heroImage from '../assets/images/hero_pharmacy_1786965778095.jpg';
import {
  Sparkles,
  Play,
  ArrowRight,
  ShieldCheck,
  CloudCheck,
  Smartphone,
  PackageCheck,
  Star,
  CheckCircle2,
  Activity,
  Zap,
  TrendingUp,
  RotateCcw,
  BookOpen
} from 'lucide-react';

interface HeroSectionProps {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
  isDarkMode?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTrial, onOpenDemo, isDarkMode = false }) => {
  return (
    <section
      id="hero"
      className={`relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 transition-colors duration-200 ${isDarkMode
        ? 'bg-gradient-to-b from-[#0d1117] via-[#0b1528] to-[#0d1117]'
        : 'bg-gradient-to-b from-slate-50 via-sky-50/50 to-slate-50'
        }`}
    >
      {/* Background Decorative Mesh & Subtle Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none overflow-hidden">
        <div className={`absolute top-10 left-1/4 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-[#003366]/40' : 'bg-blue-200/40'
          }`} />
        <div className={`absolute top-24 right-1/4 w-80 h-80 rounded-full blur-3xl ${isDarkMode ? 'bg-[#B30000]/25' : 'bg-red-200/30'
          }`} />
      </div>



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

        {/* Hero Main Headline - Clean Typography, No Cheesy Gradients */}
        <div className="text-center max-w-4xl mx-auto mb-8 relative">
          {/* Gradient accent bar with image blend */}
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-[#003366]/5 via-transparent to-[#B30000]/5 dark:from-[#003366]/10 dark:via-transparent dark:to-[#B30000]/10" />

          <div
            className="absolute inset-0 -z-10 rounded-2xl opacity-[0.03] dark:opacity-[0.04]"
            style={{
              backgroundImage: `url('/Pharmientapro-min.png')`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />

          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-[1.15] mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
            Take Complete Control of Your Pharmacy with{' '}
            <span className="text-[#003366] dark:text-blue-400">
              Pharmienta Pro
            </span>
          </h1>

          <p className={`text-lg sm:text-xl font-normal leading-relaxed max-w-3xl mx-auto ${isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
            The fast, accurate pharmacy management system designed for Kenyan chemists.
            Automate <strong className={isDarkMode ? 'text-white' : 'text-slate-900'}>real-time stock calculation</strong>, track <strong className={isDarkMode ? 'text-white' : 'text-slate-900'}>customer requests</strong>, manage <strong className={isDarkMode ? 'text-white' : 'text-slate-900'}>returns & restocking</strong>, and monitor your entire pharmacy live from your phone.
          </p>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            id="btn-hero-start-free-trial"
            onClick={onOpenTrial}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-[#003366] hover:bg-[#002244] shadow-lg transition-all cursor-pointer group"
          >
            <Sparkles className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform" />
            <span>Start 12-Month Free Trial</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          {/*
          <button
            id="btn-hero-watch-demo"
            onClick={onOpenDemo}
            className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-semibold transition-all cursor-pointer shadow-sm ${isDarkMode
              ? 'bg-[#161b22] hover:bg-[#21262d] text-slate-200'
              : 'bg-white hover:bg-slate-100 text-slate-800'
              }`}
          >
            <Play className="w-4 h-4 fill-emerald-600 text-emerald-600 dark:fill-emerald-400 dark:text-emerald-400" />
            <span>Watch 2-Min Interactive Demo</span>
          </button>
          */}
        </div>

        {/* Trust Indicators Bar */}
        <div className={`flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs sm:text-sm mb-12 pt-4 max-w-3xl mx-auto ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>4.9/5</span>
            <span>(50+ Kenyan Chemists)</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#2ea043]" />
            <span>No Credit Card Required</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#2ea043]" />
            <span>Setup Ready in 1 Day</span>
          </div>
        </div>

        {/* Hero Visual Mockup Container - Edge-to-Edge, 0 Borders */}
        <div className={`relative mx-auto max-w-5xl -mx-4 sm:mx-auto w-[calc(100%+2rem)] sm:w-full rounded-none sm:rounded-2xl p-0 overflow-hidden shadow-2xl ${isDarkMode ? 'bg-[#161b22]' : 'bg-white'
          }`}>
          <div className="relative rounded-none overflow-hidden">
            {/* Top Mockup Window Header */}
            <div className={`px-4 py-3 flex items-center justify-between border-b ${isDarkMode ? 'bg-[#0d1117] border-slate-800' : 'bg-slate-100 border-slate-200'
              }`}>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
                <span className={`ml-2 text-xs font-mono font-bold hidden sm:inline ${isDarkMode ? 'text-slate-400' : 'text-slate-700'
                  }`}>
                  Pharmienta Pro • Live Counter POS & Inventory
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100 dark:bg-emerald-950/60 dark:text-emerald-300 px-2.5 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Sync
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#003366] bg-blue-100 dark:bg-blue-950/60 dark:text-blue-300 px-2.5 py-0.5 rounded-full hidden md:inline-flex">
                  <Smartphone className="w-3 h-3" />
                  Owner Mobile View
                </span>
              </div>
            </div>

            {/* Hero Image - Edge to Edge, 0 Borders */}
            <div className="relative group">
              <img
                src={heroImage}
                alt="Modern Kenyan Pharmacy powered by Pharmienta Pro POS and Management System"
                className="w-full h-auto object-cover max-h-[560px]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

