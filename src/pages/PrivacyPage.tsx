import React from 'react';
import {
  Activity,
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  Lock,
  Server,
  FileText,
  UserCheck,
  Database,
  Mail,
  Phone
} from 'lucide-react';

interface PageProps {
  onNavigateHome: () => void;
  isDarkMode?: boolean;
}

export const PrivacyPage: React.FC<PageProps> = ({ onNavigateHome, isDarkMode = false }) => {
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
              <div className="flex items-center gap-1 font-extrabold text-lg font-heading leading-tight">
                <span className="text-[#003366] dark:text-blue-400">PHARM</span>
                <span className="text-[#B30000] dark:text-red-400">IENTA</span>
                <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                  PRO
                </span>
              </div>
              <span className="text-[9px] text-slate-400 uppercase tracking-widest font-semibold">Oriented To Care</span>
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 text-xs font-bold shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Kenya Data Protection Act 2019 Compliant</span>
          </div>

          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
            Privacy Policy & Data Security
          </h1>

          <p className="text-xs text-slate-400">
            Last Updated: August 2024 • Version 2.4 • Effective for all Pharmienta Pro users in Kenya
          </p>
        </div>

        {/* Highlight Card */}
        <div className={`p-6 sm:p-8 rounded-3xl shadow-lg border-l-4 border-[#2ea043] ${isDarkMode ? 'bg-[#161b22]' : 'bg-white'
          }`}>
          <h2 className={`text-lg font-bold mb-2 font-heading ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Our Core Privacy Guarantee
          </h2>
          <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Pharmienta Kenya ("we", "our", or "Pharmienta Pro") is committed to safeguarding the proprietary commercial data, inventory logs, counter sales records, and patient prescription information processed by your pharmacy. <strong>We do not sell, rent, or monetize your pharmacy's sales data or customer records to third-party pharmaceutical manufacturers or advertisers.</strong>
          </p>
        </div>

        {/* Detailed Sections */}
        <div className={`p-8 rounded-3xl shadow-xl space-y-8 text-xs sm:text-sm leading-relaxed ${isDarkMode ? 'bg-[#161b22]' : 'bg-white'
          }`}>
          {/* Section 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold text-base text-[#003366] dark:text-blue-400 font-heading">
              <Database className="w-5 h-5 text-emerald-500" />
              <h3>1. Information We Collect</h3>
            </div>
            <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
              When you register for a 12-Month Pioneer License or use the Pharmienta Pro application, we process the following categories of information:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li><strong>Pharmacy Account Data:</strong> Business name, branch locations, owner name, official phone number (e.g. 0704473503), email address, and Kenya Pharmacy & Poisons Board (PPB) premises registration number where applicable.</li>
              <li><strong>Inventory & Transaction Records:</strong> Medicine catalog, batch numbers, expiry dates, supplier cost prices, retail prices, sales receipts, shift handover records, and customer request book logs.</li>
              <li><strong>M-Pesa Reconciliation Data:</strong> Transaction reference codes and confirmation amounts collected through Safaricom Till or Paybill numbers to ensure zero-discrepancy shift audits.</li>
              <li><strong>System Logs & Diagnostics:</strong> Browser type, IP addresses, timestamped login events, and audit logs to track staff operations and prevent internal shrinkage.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold text-base text-[#003366] dark:text-blue-400 font-heading">
              <Lock className="w-5 h-5 text-emerald-500" />
              <h3>2. Data Encryption & Cloud Security Standards</h3>
            </div>
            <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
              All data transmitted between your pharmacy counter terminals, mobile owner devices, and our cloud servers is encrypted using bank-grade TLS 1.3 cryptographic protocols. Data at rest is encrypted using AES-256 standards with automated multi-zone cloud replication to protect against hardware failure, device theft, or local network loss.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold text-base text-[#003366] dark:text-blue-400 font-heading">
              <Server className="w-5 h-5 text-emerald-500" />
              <h3>3. Ownership of Pharmacy Data</h3>
            </div>
            <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
              <strong>You maintain 100% full legal ownership of your pharmacy's database.</strong> You have the right at any time to export your entire drug catalog, sales ledger, customer request records, and batch lists in standardized CSV / Excel format without penalty or lock-in.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold text-base text-[#003366] dark:text-blue-400 font-heading">
              <UserCheck className="w-5 h-5 text-emerald-500" />
              <h3>4. Staff Access & Role-Based Permissions</h3>
            </div>
            <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
              Pharmienta Pro provides granular role-based access control (RBAC). Pharmacy owners can restrict cashier and dispenser accounts from viewing supplier cost margins, total gross profits, or deleting historical transaction logs.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold text-base text-[#003366] dark:text-blue-400 font-heading">
              <FileText className="w-5 h-5 text-emerald-500" />
              <h3>5. Contact the Data Protection Officer</h3>
            </div>
            <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
              For any questions, data access requests, or regulatory inquiries regarding Kenya Data Protection Act compliance, please contact our Data Protection Officer:
            </p>
            <div className={`p-4 rounded-2xl space-y-1 ${isDarkMode ? 'bg-[#0d1117]' : 'bg-slate-50'}`}>
              <p><strong>Pharmienta Kenya Data Office</strong></p>
              <p>Email: <a href="mailto:pharmienta@gmail.com" className="text-[#003366] dark:text-blue-400 font-bold hover:underline">pharmienta@gmail.com</a></p>
              <p>Phone / WhatsApp: <a href="tel:0704473503" className="text-[#003366] dark:text-blue-400 font-bold hover:underline">0704 473 503</a></p>
              <p>Address: Westlands Commercial Center, Nairobi, Kenya</p>
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
