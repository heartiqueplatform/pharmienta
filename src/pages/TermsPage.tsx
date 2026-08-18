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
  Mail,
  Building2,
  Store
} from 'lucide-react';

interface PageProps {
  onNavigateHome: () => void;
  isDarkMode?: boolean;
}

export const TermsPage: React.FC<PageProps> = ({ onNavigateHome, isDarkMode = false }) => {
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#0d1117] text-[#c9d1d9]' : 'bg-slate-50 text-slate-800'}`}>
      {/* Top Header - Fixed overflow issue */}
      <header className={`sticky top-0 z-30 border-b backdrop-blur-md ${isDarkMode ? 'bg-[#0d1117]/90 border-slate-800' : 'bg-white/90 border-slate-200'
        }`}>
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2.5 sm:py-4 flex items-center justify-between gap-2">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2 sm:gap-3 cursor-pointer group flex-shrink-0"
          >
            {/* Perfect Circle PWA Icon */}
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden shadow-md shadow-[#003366]/20 group-hover:scale-105 transition-transform ring-2 ring-[#003366]/10 group-hover:ring-[#003366]/30 flex-shrink-0">
              <img
                src="/pwa-192x192.png"
                alt="Pharmienta Pro"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-left min-w-0">
              <div className="flex items-center gap-0 font-bold text-base sm:text-xl" style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif" }}>
                <span className="text-[#003366] group-hover:text-blue-600 transition-colors tracking-tight">Pharm</span>
                <span className="text-[#B30000] group-hover:text-red-600 transition-colors tracking-tight">ienta</span>
                <span className="inline-flex items-center justify-center ml-0.5 sm:ml-1 flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" />
                  </svg>
                </span>
              </div>
              <span className="text-[7px] sm:text-[8px] text-slate-400  tracking-wider font-none truncate" style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif" }}>
                Oriented To Care
              </span>
            </div>
          </button>

          <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
            <button
              onClick={onNavigateHome}
              className={`inline-flex items-center gap-1 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs font-semibold transition-all ${isDarkMode ? 'bg-[#21262d] text-slate-300 hover:text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
            >
              <ArrowLeft className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span className="hidden xs:inline">Back</span>
            </button>

            <a
              href="https://pharmienta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs font-bold text-white bg-[#003366] hover:bg-[#002244] shadow-md transition-all whitespace-nowrap"
            >
              <span className="hidden xs:inline">Launch App</span>
              <span className="xs:hidden">App</span>
              <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10">
        {/* Title Header */}
        <div className="text-center space-y-3">
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
            Terms of Service
          </h1>

          <p className="text-xs text-slate-400">
            Last Revised: August 2024 • Applicable to Pharmienta Ecosystem Platforms & Services in Kenya
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

        {/* Ecosystem Note */}
        <div className={`p-4 rounded-xl text-sm ${isDarkMode ? 'bg-emerald-900/10 border border-emerald-900/30' : 'bg-emerald-50 border border-emerald-200'
          }`}>
          <div className="flex items-center gap-2 mb-1">
            <Building2 className={`w-4 h-4 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'}`} />
            <span className={`font-semibold ${isDarkMode ? 'text-emerald-300' : 'text-emerald-700'}`}>
              Two Platforms, One Ecosystem
            </span>
          </div>
          <p className={`text-xs ${isDarkMode ? 'text-emerald-200/80' : 'text-emerald-600'}`}>
            These Terms of Service apply to both <strong>Pharmienta Pharmacy</strong> (the pharmacy management platform) and <strong>Pharmienta Supplier</strong> (the supplier platform). Users of either platform agree to these terms governing their use of the Pharmienta ecosystem.
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
              By accessing or using any Pharmienta platform, you certify that you are operating an authorized community pharmacy, retail chemist, clinical dispensary, pharmaceutical distribution business, or related healthcare facility in accordance with the Laws of Kenya and relevant directives of the Pharmacy and Poisons Board (PPB).
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#003366] dark:text-blue-400 font-heading">
              2. Account Security & Credentials
            </h3>
            <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
              Pharmacy owners, administrators, and supplier representatives are responsible for maintaining the confidentiality of staff login credentials, pins, and passwords. Any action conducted under an authorized user account (including dispensing, returns processing, price overrides, or order fulfillment) will be recorded in the immutable audit log.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#003366] dark:text-blue-400 font-heading">
              3. Service Level Agreement (SLA) & Cloud Uptime
            </h3>
            <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
              We strive to provide 99.9% cloud availability for all Pharmienta platforms. Scheduled system updates are performed outside standard Kenyan operating hours (typically 01:00 to 03:00 EAT). The pharmacy platform features local offline resilience to ensure counter sales continue uninterrupted even during temporary internet downtime.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#003366] dark:text-blue-400 font-heading">
              4. Order Transactions & Platform Use
            </h3>
            <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
              <strong>Pharmienta Pharmacy</strong> is used to manage pharmacy operations and place orders with suppliers. <strong>Pharmienta Supplier</strong> is used to receive and fulfill those orders. Both platforms are intended for legitimate pharmaceutical supply chain activities. Users agree not to use the platforms for unauthorized, fraudulent, or illegal transactions.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>Pharmacies are responsible for verifying supplier product quality and authenticity upon delivery.</li>
              <li>Suppliers are responsible for accurate product listings, pricing, and stock availability.</li>
              <li>Disputes between pharmacies and suppliers regarding orders are the responsibility of the parties involved.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#003366] dark:text-blue-400 font-heading">
              5. Clinical Responsibility & Professional Judgment
            </h3>
            <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
              Pharmienta platforms are inventory management, point-of-sale, supply chain, and business intelligence tools. They do not replace the professional clinical judgment, prescription verification, dosage evaluation, or patient counseling duties of a licensed pharmacist or pharmaceutical technologist.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#003366] dark:text-blue-400 font-heading">
              6. Customer Support & Resolution
            </h3>
            <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
              All active users receive priority support via dedicated Kenyan phone and WhatsApp channels:
            </p>
            <div className={`p-4 rounded-2xl space-y-1 ${isDarkMode ? 'bg-[#0d1117]' : 'bg-slate-50'}`}>
              <p><strong>Pharmienta Customer Success Desk</strong></p>
              <p>WhatsApp / Call: <a href="tel:0717517371" className="text-[#003366] dark:text-blue-400 font-bold hover:underline">0704 473 503</a></p>
              <p>Email: <a href="mailto:pharmienta@gmail.com" className="text-[#003366] dark:text-blue-400 font-bold hover:underline">pharmienta@gmail.com</a></p>
              <p>Support Hours: Monday to Saturday, 7:00 AM – 10:00 PM EAT</p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#003366] dark:text-blue-400 font-heading">
              7. Data Protection & Compliance
            </h3>
            <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
              Pharmienta complies with the Kenya Data Protection Act (2019). All personal and business data is handled in accordance with our Privacy Policy. Suppliers receive only order-specific information from pharmacies, and pharmacy pricing and margin data remain confidential.
            </p>
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