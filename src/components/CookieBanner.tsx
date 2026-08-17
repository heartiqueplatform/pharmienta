import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

interface CookieBannerProps {
  isDarkMode?: boolean;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ isDarkMode = false }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('pharmienta_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('pharmienta_cookie_consent', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      id="cookie-consent-banner"
      className={`fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-40 p-4 rounded-2xl shadow-2xl backdrop-blur-md text-xs space-y-3 animate-in slide-in-from-bottom-5 duration-300 ${
        isDarkMode ? 'bg-[#161b22]/95 text-slate-300' : 'bg-white/95 text-slate-700'
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className={`flex items-center gap-2 font-bold ${
          isDarkMode ? 'text-white' : 'text-slate-900'
        }`}>
          <ShieldCheck className="w-4 h-4 text-[#2ea043] shrink-0" />
          <span>Kenya Data Protection (DPA 2019)</span>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <p className={`leading-relaxed ${
        isDarkMode ? 'text-slate-400' : 'text-slate-600'
      }`}>
        We use essential cookies to provide secure offline caching, real-time analytics, and smooth checkout workflows.
      </p>

      <div className="flex items-center gap-2 pt-1">
        <button
          id="btn-cookie-accept"
          onClick={handleAccept}
          className="px-4 py-2 rounded-xl bg-[#003366] hover:bg-[#002244] text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
        >
          Accept & Continue
        </button>
        <button
          onClick={() => setVisible(false)}
          className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
            isDarkMode ? 'bg-[#21262d] text-slate-300 hover:bg-[#30363d]' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Preferences
        </button>
      </div>
    </div>
  );
};

