import React from 'react';
import {
  Activity,
  Mail,
  Phone,
  MapPin,
  Globe,
  ShieldCheck,
  Moon,
  Sun,
  Building2,
  Store
} from 'lucide-react';

interface FooterProps {
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
  onNavigate?: (page: 'home' | 'about' | 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ isDarkMode = false, onToggleDarkMode, onNavigate }) => {
  return (
    <footer id="footer" className={`text-xs sm:text-sm transition-colors duration-200 ${isDarkMode ? 'bg-[#090d12] text-slate-400' : 'bg-slate-900 text-slate-300'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => onNavigate ? onNavigate('home') : window.location.hash = ''}
              className="flex items-center gap-3 cursor-pointer text-left"
            >
              {/* PWA Icon - Perfect Circle */}
              <div className="w-9 h-9 rounded-full overflow-hidden shadow-md shadow-[#003366]/20 ring-2 ring-[#003366]/10 flex-shrink-0">
                <img
                  src="/pwa-192x192.png"
                  alt="Pharmienta"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Brand Name - Connected with no spacing */}
              <div className="flex flex-col">
                <div className="flex items-center gap-0 font-bold text-xl" style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif" }}>
                  <span className="text-[#003366] group-hover:text-blue-600 transition-colors tracking-tight">Pharm</span>
                  <span className="text-[#B30000] group-hover:text-red-600 transition-colors tracking-tight">ienta</span>
                  <span className="inline-flex items-center justify-center ml-1">
                    <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" />
                    </svg>
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold" style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif" }}>
                  Oriented To Care • Kenya
                </span>
              </div>
            </button>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm" style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif" }}>
              The complete ecosystem for Kenyan pharmacies and pharmaceutical suppliers.
              Manage pharmacy operations, place orders, receive orders, and fulfill stock — all connected through the Pharmienta network.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-medium">
              <div className="flex items-center gap-1.5 text-[#2ea043]">
                <ShieldCheck className="w-4 h-4" />
                <button
                  onClick={() => onNavigate ? onNavigate('privacy') : window.location.hash = '#privacy'}
                  className="hover:underline cursor-pointer text-slate-400 hover:text-white transition-colors"
                >
                  Kenya DPA 2019 Compliant
                </button>
              </div>
              <span className="text-slate-600">•</span>
              <div className="flex items-center gap-1.5 text-blue-400">
                <Store className="w-4 h-4" />
                <span className="text-slate-400">Pharmacy</span>
              </div>
              <span className="text-slate-600">+</span>
              <div className="flex items-center gap-1.5 text-emerald-400">
                <Building2 className="w-4 h-4" />
                <span className="text-slate-400">Supplier</span>
              </div>
            </div>
          </div>

          {/* Col 2: Platform Links - Pharmacy */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading flex items-center gap-2">
              <Store className="w-3.5 h-3.5 text-blue-400" />
              Pharmacy
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#features" className="hover:text-white transition-colors">Auto-Stock Deduction</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Customer Request Book</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Return Flow Restocking</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Staff Shift Audit</a></li>
              <li><a href="#bi-brain" className="hover:text-white transition-colors">Owner Mobile Dashboard</a></li>
              <li><a href="https://pharmienta.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#2ea043] font-bold transition-colors">Launch Pharmacy App &rarr;</a></li>
            </ul>
          </div>

          {/* Col 3: Supplier Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading flex items-center gap-2">
              <Building2 className="w-3.5 h-3.5 text-emerald-400" />
              Supplier
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#supplier" className="hover:text-white transition-colors">Supplier Dashboard</a></li>
              <li><a href="#supplier" className="hover:text-white transition-colors">Receive Orders</a></li>
              <li><a href="#supplier" className="hover:text-white transition-colors">Stock Management</a></li>
              <li><a href="#supplier" className="hover:text-white transition-colors">Order Fulfillment</a></li>
              <li><a href="#supplier" className="hover:text-white transition-colors">Delivery Tracking</a></li>
              <li><a href="https://pharmienta-suppliers.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 font-bold transition-colors">Launch Supplier App &rarr;</a></li>
            </ul>
          </div>

          {/* Col 4: Company & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Company & Legal
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate ? onNavigate('about') : window.location.hash = '#about'}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Pharmienta
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate ? onNavigate('privacy') : window.location.hash = '#privacy'}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Privacy Policy & DPA
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate ? onNavigate('terms') : window.location.hash = '#terms'}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Terms of Service & SLA
                </button>
              </li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pioneer 12-Month Free Plan</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Pharmacy Owner Guide</a></li>
            </ul>
          </div>

          {/* Col 5: Contact & Kenya Office */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Nairobi Operations Office
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Westlands Commercial Hub, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:0704473503" className="hover:text-white font-bold transition-colors">0704 473 503 (Call & WhatsApp)</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-rose-400 shrink-0" />
                <a href="mailto:pharmienta@gmail.com" className="hover:text-white font-bold transition-colors">pharmienta@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="https://pharmienta.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">pharmienta.vercel.app</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright & Hidden Dark Mode Switch */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© 2024 Pharmienta Kenya. All rights reserved.</span>
            <span>•</span>
            <span className="text-slate-400">"Oriented To Care"</span>
            <span>•</span>
            <span className="text-slate-500">Pharmacy + Supplier Ecosystem</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => onNavigate ? onNavigate('privacy') : window.location.hash = '#privacy'}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate ? onNavigate('terms') : window.location.hash = '#terms'}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onNavigate ? onNavigate('about') : window.location.hash = '#about'}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              About Us
            </button>

            {/* Discrete / Not easy to find Dark Mode Toggle */}
            {onToggleDarkMode && (
              <button
                id="btn-theme-toggle-discrete"
                onClick={onToggleDarkMode}
                title="System Display Mode"
                aria-label="Toggle system view"
                className="opacity-30 hover:opacity-100 transition-opacity p-1 text-slate-400 hover:text-slate-200 cursor-pointer"
              >
                {isDarkMode ? (
                  <Sun className="w-3.5 h-3.5" />
                ) : (
                  <Moon className="w-3.5 h-3.5" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};