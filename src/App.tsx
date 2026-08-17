import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { FeaturesSection } from './components/FeaturesSection';
import { BenefitsSection } from './components/BenefitsSection';
import { BiShowcaseSection } from './components/BiShowcaseSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FreeTrialModal } from './components/FreeTrialModal';
import { DemoModal } from './components/DemoModal';
import { CookieBanner } from './components/CookieBanner';
import { WhatsAppFloatingWidget } from './components/WhatsAppFloatingWidget';
import { AboutPage } from './pages/AboutPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

export type CurrentPageView = 'home' | 'about' | 'privacy' | 'terms';

export default function App() {
  const [currentPage, setCurrentPage] = useState<CurrentPageView>(() => {
    const hash = window.location.hash.toLowerCase();
    if (hash === '#about') return 'about';
    if (hash === '#privacy') return 'privacy';
    if (hash === '#terms') return 'terms';
    return 'home';
  });

  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  
  // Default is LIGHT MODE as requested
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('pharmienta_theme') === 'dark';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#about') {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#privacy') {
        setCurrentPage('privacy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#terms') {
        setCurrentPage('terms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#home' || hash === '' || hash.startsWith('#features') || hash.startsWith('#pricing') || hash.startsWith('#bi-brain') || hash.startsWith('#problem') || hash.startsWith('#benefits') || hash.startsWith('#faq') || hash.startsWith('#testimonials')) {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('pharmienta_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('pharmienta_theme', 'light');
    }
  }, [isDarkMode]);

  const handleToggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleOpenTrial = () => {
    // Open the direct Vercel live app in new tab or trigger modal
    window.open('https://pharmienta.vercel.app/', '_blank', 'noopener,noreferrer');
  };

  const handleOpenTrialModal = () => {
    setIsTrialModalOpen(true);
  };

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleNavigate = (page: CurrentPageView) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render standalone pages if selected
  if (currentPage === 'about') {
    return <AboutPage onNavigateHome={() => handleNavigate('home')} isDarkMode={isDarkMode} />;
  }

  if (currentPage === 'privacy') {
    return <PrivacyPage onNavigateHome={() => handleNavigate('home')} isDarkMode={isDarkMode} />;
  }

  if (currentPage === 'terms') {
    return <TermsPage onNavigateHome={() => handleNavigate('home')} isDarkMode={isDarkMode} />;
  }

  return (
    <div className={`min-h-screen font-sans selection:bg-[#003366] selection:text-white flex flex-col justify-between transition-colors duration-200 ${
      isDarkMode ? 'bg-[#0d1117] text-[#c9d1d9]' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Navigation */}
      <Navbar 
        onOpenTrial={handleOpenTrial} 
        onOpenDemo={handleOpenDemo}
        onNavigate={handleNavigate}
        isDarkMode={isDarkMode}
      />

      {/* 10 Required Sections in Order */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <HeroSection 
          onOpenTrial={handleOpenTrial} 
          onOpenDemo={handleOpenDemo}
          isDarkMode={isDarkMode}
        />

        {/* Section 2: Problem Statement */}
        <ProblemSection 
          onOpenTrial={handleOpenTrial} 
          isDarkMode={isDarkMode}
        />

        {/* Section 3: Features Showcase */}
        <FeaturesSection 
          onOpenTrial={handleOpenTrial} 
          isDarkMode={isDarkMode}
        />

        {/* Section 4: Benefits Section */}
        <BenefitsSection 
          onOpenTrial={handleOpenTrial} 
          isDarkMode={isDarkMode}
        />

        {/* Section 5: Business Intelligence Showcase */}
        <BiShowcaseSection 
          onOpenTrial={handleOpenTrial} 
          onOpenDemo={handleOpenDemo} 
          isDarkMode={isDarkMode}
        />

        {/* Section 6: Testimonials & Trust */}
        <TestimonialsSection 
          isDarkMode={isDarkMode}
        />

        {/* Section 7: Pricing Section */}
        <PricingSection 
          onOpenTrial={handleOpenTrial} 
          isDarkMode={isDarkMode}
        />

        {/* Section 8: FAQ Section */}
        <FaqSection 
          isDarkMode={isDarkMode}
        />

        {/* Section 9: CTA Section */}
        <CtaSection 
          onOpenTrial={handleOpenTrial} 
          isDarkMode={isDarkMode}
        />
      </main>

      {/* Section 10: Footer (with discrete dark mode toggle & real links) */}
      <Footer 
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
        onNavigate={handleNavigate}
      />

      {/* Interactive Modals & Widgets */}
      <FreeTrialModal 
        isOpen={isTrialModalOpen} 
        onClose={() => setIsTrialModalOpen(false)}
        isDarkMode={isDarkMode}
      />

      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
        onOpenTrial={handleOpenTrial}
        isDarkMode={isDarkMode}
      />

      <CookieBanner isDarkMode={isDarkMode} />
      <WhatsAppFloatingWidget />
    </div>
  );
}

