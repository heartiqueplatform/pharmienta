import React, { useState, useEffect } from 'react';
import {
  Activity,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  Phone,
  Gift,
  PlayCircle,
  Building2,
  Store,
  Users
} from 'lucide-react';

interface NavbarProps {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
  onNavigate?: (page: 'home' | 'about' | 'privacy' | 'terms') => void;
  isDarkMode?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrial, onOpenDemo, onNavigate, isDarkMode = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showRoleSelector, setShowRoleSelector] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Why Us', href: '#problem' },
    { label: 'Features', href: '#features' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Owner Dashboard', href: '#bi-brain' },
    { label: 'Suppliers', href: '#supplier' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About Us', href: '#about', page: 'about' as const },
    { label: 'FAQ', href: '#faq' }
  ];

  const handleRoleSelect = (role: 'pharmacy' | 'supplier') => {
    setShowRoleSelector(false);
    if (role === 'pharmacy') {
      onOpenTrial();
    } else if (role === 'supplier') {
      window.open('https://pharmienta-suppliers.vercel.app/', '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      {/* Top Notification Announcement Bar */}
      <div id="announcement-bar" className="bg-gradient-to-r from-[#003366] via-[#004080] to-[#B30000] text-xs md:text-sm py-2.5 px-4 text-center text-white font-medium flex flex-col sm:flex-row items-center justify-center gap-2 shadow-sm border-b border-white/10">
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <span className="text-white/95">
            <strong className="text-white">Pioneer Kenyan Launch:</strong> First 50 pharmacies get <strong className="text-white">12 Months 100% Free</strong>! Only <span className="text-yellow-300 font-bold">14</span> slots remaining.
          </span>
        </div>
        <button
          id="btn-claim-pioneer-top"
          onClick={() => setShowRoleSelector(true)}
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all text-xs font-bold cursor-pointer whitespace-nowrap"
        >
          Claim Slot
        </button>
      </div>

      {/* Main Navigation Bar */}
      <header
        id="main-navbar"
        className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled
          ? isDarkMode
            ? 'bg-[#0d1117]/95 backdrop-blur-md shadow-xl py-3'
            : 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : isDarkMode
            ? 'bg-[#0d1117]/80 backdrop-blur-sm py-4'
            : 'bg-white/80 backdrop-blur-sm py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => onNavigate ? onNavigate('home') : window.location.hash = ''}
            className="flex items-center gap-3 group cursor-pointer text-left"
            id="brand-logo-link"
          >
            <div className="w-11 h-11 rounded-full overflow-hidden shadow-md shadow-[#003366]/20 group-hover:scale-105 transition-transform ring-2 ring-[#003366]/10 group-hover:ring-[#003366]/30 flex-shrink-0">
              <img
                src="/pwa-192x192.png"
                alt="Pharmienta Pro"
                className="w-full h-full object-cover"
              />
            </div>
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
              <span className={`text-[8px] tracking-wider font-none ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif" }}>
                Oriented To Care • Kenya
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className={`hidden lg:flex items-center gap-7 text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (link.page && onNavigate) {
                    e.preventDefault();
                    onNavigate(link.page);
                  }
                }}
                className={`transition-colors duration-150 py-1 ${isDarkMode ? 'hover:text-white' : 'hover:text-[#003366] font-semibold'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="btn-nav-trial"
              onClick={() => setShowRoleSelector(true)}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-6 py-2.5 rounded-full shadow-lg shadow-[#003366]/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer relative overflow-hidden border-2 border-white/30"
            >
              <span className="absolute inset-0 rounded-full overflow-hidden">
                <span className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-amber-400 via-yellow-400 to-yellow-300"></span>
                <span className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-white via-gray-50 to-gray-100"></span>
                <span className="absolute left-1/2 top-0 w-[3px] h-full bg-gray-500/40 transform -translate-x-1/2 shadow-sm"></span>
                <span className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-full"></span>
              </span>
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span className="text-gray-800 font-bold tracking-wide">Get Started</span>
                <ArrowRight className="w-3.5 h-3.5 text-gray-700" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="btn-mobile-trial"
              onClick={() => setShowRoleSelector(true)}
              className="text-xs font-bold text-white bg-[#B30000] px-3 py-1.5 rounded-lg sm:hidden cursor-pointer"
            >
              Get Started
            </button>
            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl cursor-pointer ${isDarkMode ? 'bg-[#21262d] text-slate-300' : 'bg-slate-100 text-slate-700'}`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className={`lg:hidden px-6 py-5 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-200 ${isDarkMode ? 'bg-[#161b22] text-slate-200' : 'bg-white text-slate-800'}`}
          >
            <div className="grid grid-cols-2 gap-2 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (link.page && onNavigate) {
                      e.preventDefault();
                      onNavigate(link.page);
                    }
                  }}
                  className={`px-3 py-2 rounded-lg transition-colors ${isDarkMode ? 'text-slate-300 hover:bg-[#21262d]' : 'text-slate-700 hover:bg-slate-100'}`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className={`pt-3 flex flex-col gap-2.5 ${isDarkMode ? 'border-t border-slate-800' : 'border-t border-slate-100'}`}>
              <button
                id="btn-mobile-drawer-trial"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowRoleSelector(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#003366] to-[#B30000] text-white font-bold text-sm shadow-md cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-yellow-300" />
                Get Started
              </button>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2">
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                <span>Need quick help? WhatsApp 0704 473 503</span>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Role Selector Overlay - Smart Modal */}
      {showRoleSelector && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowRoleSelector(false);
          }}
        >
          <div className={`relative max-w-md w-full rounded-2xl shadow-2xl p-8 animate-in zoom-in-95 duration-200 ${isDarkMode ? 'bg-[#161b22] border border-gray-800' : 'bg-white'
            }`}>
            {/* Close button */}
            <button
              onClick={() => setShowRoleSelector(false)}
              className={`absolute top-3 right-3 p-1.5 rounded-lg transition-colors ${isDarkMode ? 'hover:bg-[#21262d] text-gray-400' : 'hover:bg-gray-100 text-gray-500'
                }`}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="flex justify-center mb-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#003366] to-[#B30000] flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Get Started with Pharmienta
              </h2>
              <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                Choose your role to begin
              </p>
            </div>

            {/* Role options */}
            <div className="space-y-3">
              {/* Pharmacy Option */}
              <button
                onClick={() => handleRoleSelect('pharmacy')}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all hover:shadow-lg ${isDarkMode
                  ? 'border-gray-700 hover:border-blue-500 hover:bg-[#1c2333]'
                  : 'border-gray-200 hover:border-blue-500 hover:bg-blue-50'
                  }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${isDarkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'
                  }`}>
                  <Store className="w-6 h-6" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    I'm a Pharmacy
                  </h3>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                    Manage pharmacy operations, order stock, and grow your business
                  </p>
                </div>
                <ArrowRight className={`w-5 h-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
              </button>

              {/* Supplier Option */}
              <button
                onClick={() => handleRoleSelect('supplier')}
                className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all hover:shadow-lg ${isDarkMode
                  ? 'border-gray-700 hover:border-emerald-500 hover:bg-[#1c2333]'
                  : 'border-gray-200 hover:border-emerald-500 hover:bg-emerald-50'
                  }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${isDarkMode ? 'bg-emerald-900/30 text-emerald-400' : 'bg-emerald-100 text-emerald-600'
                  }`}>
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    I'm a Supplier
                  </h3>
                  <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`}>
                    Receive orders, manage stock, and fulfil pharmacy orders digitally
                  </p>
                </div>
                <ArrowRight className={`w-5 h-5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
              </button>

              {/* Divider */}
              <div className="relative my-4">
                <div className={`absolute inset-0 flex items-center ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className={`w-full border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}></div>
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className={`px-3 ${isDarkMode ? 'bg-[#161b22] text-gray-500' : 'bg-white text-gray-500'}`}>
                    Or continue as
                  </span>
                </div>
              </div>

              {/* Demo Option */}
              {/*
              <button
                onClick={onOpenDemo}
                className={`w-full flex items-center justify-center gap-2 p-3 rounded-xl text-sm font-medium transition-colors ${isDarkMode
                  ? 'text-gray-400 hover:text-white hover:bg-[#21262d]'
                  : 'text-gray-600 hover:text-slate-900 hover:bg-gray-100'
                  }`}
              >
                <PlayCircle className="w-4 h-4 text-emerald-500" />
                Watch Interactive Demo
              </button>
              */}
            </div>

            {/* Footer */}
            <p className={`text-center text-xs mt-6 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              By continuing, you agree to our{' '}
              <button
                onClick={() => {
                  setShowRoleSelector(false);
                  if (onNavigate) onNavigate('terms');
                }}
                className={`underline hover:text-blue-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
              >
                Terms of Service
              </button>
              {' '}and{' '}
              <button
                onClick={() => {
                  setShowRoleSelector(false);
                  if (onNavigate) onNavigate('privacy');
                }}
                className={`underline hover:text-blue-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
              >
                Privacy Policy
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  );
};