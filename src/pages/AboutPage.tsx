import React from 'react';
import {
  Activity,
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  HeartHandshake,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Building2,
  Users,
  TrendingUp,
  Pill,
  Award
} from 'lucide-react';

interface PageProps {
  onNavigateHome: () => void;
  isDarkMode?: boolean;
}

export const AboutPage: React.FC<PageProps> = ({ onNavigateHome, isDarkMode = false }) => {
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#0d1117] text-[#c9d1d9]' : 'bg-slate-50 text-slate-800'}`}>
      {/* Top Header */}
      <header className={`sticky top-0 z-30 border-b backdrop-blur-md ${isDarkMode ? 'bg-[#0d1117]/90 border-slate-800' : 'bg-white/90 border-slate-200'
        }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Perfect Circle PWA Icon */}
            <div className="w-9 h-9 rounded-full overflow-hidden shadow-md shadow-[#003366]/20 group-hover:scale-105 transition-transform ring-2 ring-[#003366]/10 group-hover:ring-[#003366]/30 flex-shrink-0">
              <img
                src="/pwa-192x192.png"
                alt="Pharmienta Pro"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-0 font-bold text-lg leading-tight" style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif" }}>
                <span className="text-[#003366] dark:text-blue-400 tracking-tight">PHARM</span>
                <span className="text-[#B30000] dark:text-red-400 tracking-tight">IENTA</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 ml-1.5">
                  PRO
                </span>
              </div>
              <span className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold" style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif" }}>
                Oriented To Care
              </span>
            </div>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${isDarkMode ? 'bg-[#21262d] text-slate-300 hover:text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </button>

            <a
              href="https://pharmienta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#003366] hover:bg-[#002244] shadow-md transition-all"
            >
              <span>Launch App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
        {/* Page Hero */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#003366] dark:bg-blue-950/60 dark:text-blue-300 text-xs font-bold shadow-xs">
            <Building2 className="w-3.5 h-3.5" />
            <span>About Pharmienta Kenya</span>
          </div>

          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
            Empowering Kenyan Chemists With Precision & Care
          </h1>

          <p className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
            Our slogan is <strong>"Oriented To Care"</strong>. We build intelligent, zero-leakage pharmacy management technology tailored to the daily realities of Kenyan community chemists and dispensing pharmacies.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`p-6 sm:p-8 rounded-3xl shadow-lg space-y-4 ${isDarkMode ? 'bg-[#161b22]' : 'bg-white'
            }`}>
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#003366] dark:bg-blue-950/60 dark:text-blue-300 flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h2 className={`text-xl font-bold font-heading ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Our Mission
            </h2>
            <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              To eliminate medicine expiry wastage, stock discrepancies, and manual record-keeping stress for independent Kenyan community pharmacists so they can focus on patient care, clinical counseling, and sustainable business growth.
            </p>
          </div>

          <div className={`p-6 sm:p-8 rounded-3xl shadow-lg space-y-4 ${isDarkMode ? 'bg-[#161b22]' : 'bg-white'
            }`}>
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#2ea043] dark:bg-emerald-950/60 dark:text-emerald-300 flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h2 className={`text-xl font-bold font-heading ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Our Vision
            </h2>
            <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              To become East Africa’s most trusted, accessible, and pharmacist-loved digital ecosystem, uniting prescription safety, inventory intelligence, M-Pesa automated reconciliation, and remote owner oversight.
            </p>
          </div>
        </div>

        {/* What We Solve */}
        <div className={`p-8 sm:p-10 rounded-3xl shadow-xl space-y-6 ${isDarkMode ? 'bg-[#161b22]' : 'bg-white'
          }`}>
          <div className="space-y-2">
            <h2 className={`text-2xl font-bold font-heading ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Why We Built Pharmienta Pro
            </h2>
            <p className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              After engaging with dozens of community chemist owners across Nairobi, Mombasa, Nakuru, Eldoret, and Kisumu, we identified critical gaps in existing software:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            {[
              {
                title: 'High Upfront License Fees',
                desc: 'Traditional systems charge KES 40,000–80,000 upfront before you even test if it fits your counter workflow.'
              },
              {
                title: 'Broken Batch & Expiry Tracking',
                desc: 'Without automated First-Expired-First-Out (FEFO) dispensing, thousands of shillings in slow-moving medicine expire unspotted.'
              },
              {
                title: 'Lost Walk-in Demand',
                desc: 'Pharmacies lose up to 15% in revenue because staff do not record customer requests for out-of-stock items.'
              },
              {
                title: 'Till & M-Pesa Discrepancies',
                desc: 'Manual shift handovers and unverified M-Pesa codes create daily reconciliation stress between owners and dispensers.'
              }
            ].map((item, idx) => (
              <div key={idx} className={`p-4 rounded-2xl ${isDarkMode ? 'bg-[#0d1117]' : 'bg-slate-50'}`}>
                <div className="flex items-center gap-2 mb-1.5 font-bold text-[#003366] dark:text-blue-400">
                  <CheckCircle2 className="w-4 h-4 text-[#2ea043] shrink-0" />
                  <span>{item.title}</span>
                </div>
                <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our 12-Month Pioneer Commitment */}
        <div className={`p-8 sm:p-10 rounded-3xl shadow-xl space-y-6 ${isDarkMode ? 'bg-[#161b22]' : 'bg-[#003366] text-white'
          }`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-heading text-white">The Pioneer 12-Month Free Commitment</h2>
              <p className="text-xs text-emerald-200">Zero Cost • Zero Credit Card • Free Kenyan Item Import</p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-slate-200">
            We believe you should never pay for software that hasn't proven its return on investment in your own shop. That is why the first 50 Kenyan pharmacies get a <strong>100% Free 12-Month License</strong>, complete with full feature access, cloud data backups, and direct WhatsApp support.
          </p>

          <div className="pt-2">
            <a
              href="https://pharmienta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2ea043] hover:bg-[#288f3c] text-white font-bold text-sm shadow-md transition-all"
            >
              <span>Get Started On Pharmienta Pro</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Office & Direct Contact Details */}
        <div className={`p-8 rounded-3xl shadow-md space-y-6 ${isDarkMode ? 'bg-[#161b22]' : 'bg-white'
          }`}>
          <h2 className={`text-xl font-bold font-heading ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Contact Our Nairobi Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className={`p-4 rounded-2xl flex items-start gap-3 ${isDarkMode ? 'bg-[#0d1117]' : 'bg-slate-50'}`}>
              <MapPin className="w-5 h-5 text-[#003366] dark:text-blue-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Headquarters</p>
                <p className="text-xs text-slate-400 mt-1">Westlands Commercial Hub, Nairobi, Kenya</p>
              </div>
            </div>

            <div className={`p-4 rounded-2xl flex items-start gap-3 ${isDarkMode ? 'bg-[#0d1117]' : 'bg-slate-50'}`}>
              <Phone className="w-5 h-5 text-[#2ea043] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Direct Phone & WhatsApp</p>
                <a href="tel:0704473503" className="text-xs text-[#003366] dark:text-blue-400 font-bold block mt-1 hover:underline">
                  0704 473 503
                </a>
              </div>
            </div>

            <div className={`p-4 rounded-2xl flex items-start gap-3 ${isDarkMode ? 'bg-[#0d1117]' : 'bg-slate-50'}`}>
              <Mail className="w-5 h-5 text-[#B30000] shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Email Support</p>
                <a href="mailto:pharmienta@gmail.com" className="text-xs text-[#003366] dark:text-blue-400 font-bold block mt-1 hover:underline">
                  pharmienta@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`py-8 text-center text-xs border-t ${isDarkMode ? 'bg-[#090d12] border-slate-800 text-slate-500' : 'bg-slate-100 border-slate-200 text-slate-600'
        }`}>
        <p>© 2024 Pharmienta Kenya • Oriented To Care • All Rights Reserved.</p>
      </footer>
    </div>
  );
};
