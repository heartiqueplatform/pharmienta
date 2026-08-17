import React from 'react';
import { 
  Activity, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ShieldCheck, 
  Moon, 
  Sun
} from 'lucide-react';

interface FooterProps {
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
  onNavigate?: (page: 'home' | 'about' | 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ isDarkMode = false, onToggleDarkMode, onNavigate }) => {
  return (
    <footer id="footer" className={`text-xs sm:text-sm transition-colors duration-200 ${
      isDarkMode ? 'bg-[#090d12] text-slate-400' : 'bg-slate-900 text-slate-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <button 
              onClick={() => onNavigate ? onNavigate('home') : window.location.hash = ''}
              className="flex items-center gap-3 cursor-pointer text-left"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#003366] to-[#B30000] p-0.5 flex items-center justify-center shadow-lg">
                <div className="w-full h-full bg-[#0d1117] rounded-[10px] flex items-center justify-center">
                  <Activity className="w-4 h-4 text-[#2ea043]" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 font-extrabold tracking-tight text-lg font-heading">
                  <span className="text-[#3b82f6]">PHARM</span>
                  <span className="text-[#ef4444]">IENTA</span>
                  <span className="text-[9px] uppercase font-bold px-1.5 py-0.2 rounded bg-[#2ea043]/20 text-[#2ea043]">
                    PRO
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                  Oriented To Care • Kenya
                </span>
              </div>
            </button>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The modern pharmacy management platform engineered to empower Kenyan community chemists with live stock math, customer request tracking, staff audit accountability, and real-time owner mobile dashboards.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-[#2ea043] font-medium">
              <ShieldCheck className="w-4 h-4" />
              <button 
                onClick={() => onNavigate ? onNavigate('privacy') : window.location.hash = '#privacy'} 
                className="hover:underline cursor-pointer"
              >
                Compliant with Kenya Data Protection Act 2019
              </button>
            </div>
          </div>

          {/* Col 2: Platform Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Platform
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#features" className="hover:text-white transition-colors">Auto-Stock Deduction</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Customer Request Book</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Return Flow Restocking</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Staff Shift Audit</a></li>
              <li><a href="#bi-brain" className="hover:text-white transition-colors">Owner Mobile Dashboard</a></li>
              <li><a href="https://pharmienta.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#2ea043] font-bold transition-colors">Launch Live Web App &rarr;</a></li>
            </ul>
          </div>

          {/* Col 3: Resources & Company */}
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
                  About Pharmienta Kenya
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

          {/* Col 4: Contact & Kenya Office */}
          <div className="space-y-3 lg:col-span-2">
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

