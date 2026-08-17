import React, { useState, useEffect } from 'react';
import {
  Activity,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  Phone,
  Gift,
  PlayCircle
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
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About Us', href: '#about', page: 'about' as const },
    { label: 'FAQ', href: '#faq' }
  ];

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
          onClick={onOpenTrial}
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
          {/* Brand Logo */}
          <button
            onClick={() => onNavigate ? onNavigate('home') : window.location.hash = ''}
            className="flex items-center gap-3 group cursor-pointer text-left"
            id="brand-logo-link"
          >
            {/* Perfect Circle PWA Icon */}
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
              <span className={`text-[10px] tracking-wider uppercase font-semibold ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`} style={{ fontFamily: "'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif" }}>
                Oriented To Care • Kenya
              </span>
            </div>
          </button>
          {/* Desktop Navigation Links */}
          <nav className={`hidden lg:flex items-center gap-7 text-sm font-medium ${isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
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
            {/*
  <button
    id="btn-nav-demo"
    onClick={onOpenDemo}
    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl transition-all cursor-pointer ${isDarkMode
        ? 'text-slate-300 hover:text-white bg-[#21262d] hover:bg-[#30363d]'
        : 'text-slate-700 hover:text-[#003366] bg-slate-100 hover:bg-slate-200 shadow-xs'
      }`}
  >
    <PlayCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
    Watch Demo
  </button>
  */}
            <button
              id="btn-nav-trial"
              onClick={onOpenTrial}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-6 py-2.5 rounded-full shadow-lg shadow-[#003366]/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer relative overflow-hidden border-2 border-white/30"
            >
              {/* Capsule body */}
              <span className="absolute inset-0 rounded-full overflow-hidden">
                {/* Left half - Golden/yellow */}
                <span className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-amber-400 via-yellow-400 to-yellow-300"></span>
                {/* Right half - Off white */}
                <span className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-white via-gray-50 to-gray-100"></span>
                {/* Dividing line with shadow effect */}
                <span className="absolute left-1/2 top-0 w-[3px] h-full bg-gray-500/40 transform -translate-x-1/2 shadow-sm"></span>
                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-full"></span>
              </span>

              {/* Content overlay */}
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span className="text-gray-800 font-bold tracking-wide">Start Free Trial</span>
                <ArrowRight className="w-3.5 h-3.5 text-gray-700" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="btn-mobile-trial"
              onClick={onOpenTrial}
              className="text-xs font-bold text-white bg-[#B30000] px-3 py-1.5 rounded-lg sm:hidden cursor-pointer"
            >
              Free Trial
            </button>
            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl cursor-pointer ${isDarkMode ? 'bg-[#21262d] text-slate-300' : 'bg-slate-100 text-slate-700'
                }`}
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
            className={`lg:hidden px-6 py-5 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-200 ${isDarkMode ? 'bg-[#161b22] text-slate-200' : 'bg-white text-slate-800'
              }`}
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
                  className={`px-3 py-2 rounded-lg transition-colors ${isDarkMode ? 'text-slate-300 hover:bg-[#21262d]' : 'text-slate-700 hover:bg-slate-100'
                    }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className={`pt-3 flex flex-col gap-2.5 ${isDarkMode ? 'border-t border-slate-800' : 'border-t border-slate-100'}`}>
              <button
                id="btn-mobile-drawer-demo"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm cursor-pointer ${isDarkMode ? 'bg-[#21262d] text-slate-200' : 'bg-slate-100 text-slate-800'
                  }`}
              >
                <PlayCircle className="w-4 h-4 text-emerald-500" />
                Watch 2-Min Interactive Demo
              </button>
              <button
                id="btn-mobile-drawer-trial"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrial();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#003366] to-[#B30000] text-white font-bold text-sm shadow-md cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-yellow-300" />
                Start 12 Months Free Trial
              </button>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2">
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                <span>Need quick help? WhatsApp 0704 473 503</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

