import React from 'react';
import {
  Activity,
  ArrowLeft,
  ExternalLink,
  FileCheck2,
  ShieldAlert,
  Sparkles,
  Clock,
  CheckCircle,
  HelpCircle,
  Phone,
  Mail
} from 'lucide-react';

interface PageProps {
  onNavigateHome: () => void;
  isDarkMode?: boolean;
}

export const TermsPage: React.FC<PageProps> = ({ onNavigateHome, isDarkMode = false }) => {
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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
        {/* Title Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#003366] dark:bg-blue-950/60 dark:text-blue-300 text-xs font-bold shadow-xs">
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>Standard User Agreement</span>
          </div>

          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
            Terms of Service
          </h1>

          <p className="text-xs text-slate-400">
            Last Revised: August 2024 • Applicable to Pharmienta Pro Platform & Services in Kenya
          </p>
        </div>

        {/* Pioneer Guarantee Callout */}
        <div className={`p-6 sm:p-8 rounded-3xl shadow-lg border-l-4 border-[#003366] dark:border-blue-400 ${isDarkMode ? 'bg-[#161b22]' : 'bg-white'
          }`}>
          <div className="flex items-center gap-2 mb-2 font-bold text-[#003366] dark:text-blue-400">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <h2 className="text-lg font-heading">The 12-Month Pioneer License Terms</h2>
          </div>
          <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Kenyan community chemists onboarded during our Pioneer Program receive a full 12-Month subscription at <strong>KES 0 (100% Free)</strong>. There are no hidden setup fees, cancellation penalties, or forced automatic credit card billings. After 12 months, users may continue on our affordable standard subscription (KES 299/mo or KES 2,990/yr) or export their data at zero cost.
          </p>
        </div>

        {/* Detailed Terms */}
        <div className={`p-8 rounded-3xl shadow-xl space-y-8 text-xs sm:text-sm leading-relaxed ${isDarkMode ? 'bg-[#161b22]' : 'bg-white'
          }`}>
          {/* Section 1 */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#003366] dark:text-blue-400 font-heading">
              1. Acceptance of Terms & Eligibility
            </h3>
            <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
              By accessing or using Pharmienta Pro, you certify that you are operating an authorized community pharmacy, retail chemist, clinical dispensary, or related healthcare facility in accordance with the Laws of Kenya and relevant directives of the Pharmacy and Poisons Board (PPB).
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#003366] dark:text-blue-400 font-heading">
              2. Account Security & Dispenser Credentials
            </h3>
            <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
              Pharmacy owners and administrators are responsible for maintaining the confidentiality of staff login pins and passwords. Any action conducted under an authorized user account (including dispensing, returns processing, and price overrides) will be recorded in the immutable audit log.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#003366] dark:text-blue-400 font-heading">
              3. Service Level Agreement (SLA) & 99.9% Cloud Uptime
            </h3>
            <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
              We strive to provide 99.9% cloud availability. Scheduled system updates are performed outside standard Kenyan operating hours (typically 01:00 to 03:00 EAT). The system also features local offline resilience to ensure counter sales continue uninterrupted even during temporary internet downtime.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#003366] dark:text-blue-400 font-heading">
              4. Clinical Responsibility & Prescription Verification
            </h3>
            <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
              Pharmienta Pro is an inventory management, point-of-sale, and business intelligence tool. It does not replace the professional clinical judgment, prescription verification, dosage evaluation, or patient counseling duties of a licensed pharmacist or pharmaceutical technologist.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#003366] dark:text-blue-400 font-heading">
              5. Customer Support & Resolution
            </h3>
            <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
              All active users receive priority support via dedicated Kenyan phone and WhatsApp channels:
            </p>
            <div className={`p-4 rounded-2xl space-y-1 ${isDarkMode ? 'bg-[#0d1117]' : 'bg-slate-50'}`}>
              <p><strong>Pharmienta Customer Success Desk</strong></p>
              <p>WhatsApp / Call: <a href="tel:0704473503" className="text-[#003366] dark:text-blue-400 font-bold hover:underline">0704 473 503</a></p>
              <p>Email: <a href="mailto:pharmienta@gmail.com" className="text-[#003366] dark:text-blue-400 font-bold hover:underline">pharmienta@gmail.com</a></p>
              <p>Support Hours: Monday to Saturday, 7:00 AM – 10:00 PM EAT</p>
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
