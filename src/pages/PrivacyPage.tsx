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
  Phone,
  Building2,
  Store
} from 'lucide-react';

interface PageProps {
  onNavigateHome: () => void;
  isDarkMode?: boolean;
}

export const PrivacyPage: React.FC<PageProps> = ({ onNavigateHome, isDarkMode = false }) => {
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
            Privacy Policy & Data Security
          </h1>

          <p className="text-xs text-slate-400">
            Last Updated: August 2024 • Version 2.4 • Effective for all Pharmienta ecosystem users in Kenya
          </p>
        </div>

        {/* Highlight Card */}
        <div className={`p-6 sm:p-8 rounded-3xl shadow-lg border-l-4 border-[#2ea043] ${isDarkMode ? 'bg-[#161b22]' : 'bg-white'
          }`}>
          <h2 className={`text-lg font-bold mb-2 font-heading ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
            Our Core Privacy Guarantee
          </h2>
          <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Pharmienta Kenya ("we", "our", or "Pharmienta") is committed to safeguarding the proprietary commercial data, inventory logs, counter sales records, and patient prescription information processed by your pharmacy. <strong>We do not sell, rent, or monetize your pharmacy's sales data or customer records to third-party pharmaceutical manufacturers or advertisers.</strong>
          </p>
        </div>

        {/* Ecosystem Data Note */}
        <div className={`p-4 rounded-xl text-sm ${isDarkMode ? 'bg-blue-900/10 border border-blue-900/30' : 'bg-blue-50 border border-blue-200'
          }`}>
          <div className="flex items-center gap-2 mb-1">
            <ShieldCheck className={`w-4 h-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className={`font-semibold ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
              Data Protection Across the Ecosystem
            </span>
          </div>
          <p className={`text-xs ${isDarkMode ? 'text-blue-200/80' : 'text-blue-600'}`}>
            Our privacy commitment extends across both Pharmienta Pharmacy and Pharmienta Supplier platforms. Pharmacy ordering data shared with suppliers is limited to product names, quantities, and delivery requirements. Supplier pricing, margins, and internal supplier data remain confidential and are not shared with pharmacies.
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
              When you register for a 12-Month Pioneer License or use the Pharmienta ecosystem applications, we process the following categories of information:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li><strong>Pharmacy Account Data:</strong> Business name, branch locations, owner name, official phone number (e.g. 0717517371), email address, and Kenya Pharmacy & Poisons Board (PPB) premises registration number where applicable.</li>
              <li><strong>Supplier Account Data:</strong> Business name, supplier license information, contact details, product catalogue, pricing, and stock levels.</li>
              <li><strong>Inventory & Transaction Records:</strong> Medicine catalog, batch numbers, expiry dates, supplier cost prices, retail prices, sales receipts, shift handover records, and customer request book logs.</li>
              <li><strong>Order Data:</strong> Pharmacy orders placed through the system, including products, quantities, delivery information, and order status history.</li>
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
              All data transmitted between your pharmacy counter terminals, mobile owner devices, supplier portals, and our cloud servers is encrypted using bank-grade TLS 1.3 cryptographic protocols. Data at rest is encrypted using AES-256 standards with automated multi-zone cloud replication to protect against hardware failure, device theft, or local network loss.
            </p>
          </div>

          {/* Section 3 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold text-base text-[#003366] dark:text-blue-400 font-heading">
              <Server className="w-5 h-5 text-emerald-500" />
              <h3>3. Ownership of Data</h3>
            </div>
            <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
              <strong>You maintain 100% full legal ownership of your pharmacy or supplier data.</strong> You have the right at any time to export your entire drug catalog, sales ledger, customer request records, batch lists, and order history in standardized CSV / Excel format without penalty or lock-in.
            </p>
          </div>

          {/* Section 4 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold text-base text-[#003366] dark:text-blue-400 font-heading">
              <UserCheck className="w-5 h-5 text-emerald-500" />
              <h3>4. Staff Access & Role-Based Permissions</h3>
            </div>
            <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
              Pharmienta provides granular role-based access control (RBAC). Pharmacy owners can restrict cashier and dispenser accounts from viewing supplier cost margins, total gross profits, or deleting historical transaction logs. Supplier accounts have access only to their own data and orders from their connected pharmacy partners.
            </p>
          </div>

          {/* Section 5 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold text-base text-[#003366] dark:text-blue-400 font-heading">
              <ShieldCheck className="w-5 h-5 text-emerald-500" />
              <h3>5. Data Sharing Between Platforms</h3>
            </div>
            <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
              When a pharmacy places an order through Pharmienta Pharmacy, the following information is shared with the selected supplier through Pharmienta Supplier:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>Pharmacy name and delivery location</li>
              <li>Product names, quantities, and order reference</li>
              <li>Delivery instructions and preferred delivery date</li>
            </ul>
            <p className={`mt-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              <strong>Supplier data remains confidential:</strong> Supplier pricing, margins, cost prices, and internal stock levels are never shared with pharmacies through the platform.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-bold text-base text-[#003366] dark:text-blue-400 font-heading">
              <FileText className="w-5 h-5 text-emerald-500" />
              <h3>6. Contact the Data Protection Officer</h3>
            </div>
            <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
              For any questions, data access requests, or regulatory inquiries regarding Kenya Data Protection Act compliance, please contact our Data Protection Officer:
            </p>
            <div className={`p-4 rounded-2xl space-y-1 ${isDarkMode ? 'bg-[#0d1117]' : 'bg-slate-50'}`}>
              <p><strong>Pharmienta Kenya Data Office</strong></p>
              <p>Email: <a href="mailto:pharmienta@gmail.com" className="text-[#003366] dark:text-blue-400 font-bold hover:underline">pharmienta@gmail.com</a></p>
              <p>Phone / WhatsApp: <a href="tel:0717517371" className="text-[#003366] dark:text-blue-400 font-bold hover:underline">0704 473 503</a></p>
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