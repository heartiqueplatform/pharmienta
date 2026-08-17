import React, { useState } from 'react';
import {
  ChevronDown,
  HelpCircle,
  Search,
  PhoneCall
} from 'lucide-react';
import { FAQS } from '../data/landingData';

interface FaqSectionProps {
  isDarkMode?: boolean;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ isDarkMode = false }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-setup');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Stock & Inventory', 'Owner Dashboard & Audits', 'Payments & M-Pesa', 'Setup & Security'];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className={`py-20 md:py-28 relative transition-colors duration-200 ${isDarkMode ? 'bg-[#0d1117]' : 'bg-slate-100/70'
      }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">


          <h2 className={`text-3xl sm:text-4xl font-extrabold font-heading tracking-tight mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
            Everything You Need to Know
          </h2>

          <p className={`text-sm sm:text-base ${isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
            Clear answers about quick setup, auto-stock math, returns restocking, owner mobile dashboards, and cloud backup.
          </p>
        </div>

        {/* Search & Category Filter Bar - NO BORDERS */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              id="input-faq-search"
              type="text"
              placeholder="Search e.g. stock, returns, owner dashboard, M-Pesa, free pioneer..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-11 pr-4 py-3.5 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#003366] transition-all shadow-sm ${isDarkMode
                ? 'bg-[#161b22] text-white placeholder-slate-500'
                : 'bg-white text-slate-900 placeholder-slate-400'
                }`}
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-xs ${selectedCategory === cat
                  ? 'bg-[#003366] text-white shadow-sm'
                  : isDarkMode
                    ? 'bg-[#161b22] text-slate-300 hover:text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-50'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion List - NO BORDERS */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-200 overflow-hidden shadow-sm hover:shadow-md ${isDarkMode ? 'bg-[#161b22]' : 'bg-white'
                    }`}
                >
                  <button
                    id={`btn-faq-toggle-${faq.id}`}
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`text-[11px] px-2.5 py-1 rounded-lg font-bold hidden sm:inline ${isDarkMode ? 'bg-[#21262d] text-slate-300' : 'bg-slate-100 text-slate-600'
                        }`}>
                        {faq.category}
                      </span>
                      <span className={`text-base font-bold font-heading ${isDarkMode ? 'text-white' : 'text-slate-900'
                        }`}>
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#003366] dark:text-blue-400' : ''
                        }`}
                    />
                  </button>

                  {isOpen && (
                    <div className={`px-6 pb-5 pt-2 text-sm leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className={`p-8 text-center rounded-3xl shadow-sm ${isDarkMode ? 'bg-[#161b22]' : 'bg-white'
              }`}>
              <p className="text-slate-500 text-sm">No matching questions found for "{searchQuery}".</p>
              <p className="text-xs text-slate-400 mt-1">Have a specific question? WhatsApp us at 0704 473 503.</p>
            </div>
          )}
        </div>

        {/* Bottom Support Banner - NO BORDERS */}
        <div className={`mt-12 p-6 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg ${isDarkMode ? 'bg-[#161b22]' : 'bg-white'
          }`}>
          <div>
            <h4 className={`text-base font-bold font-heading ${isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
              Have a question not listed here?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Our Nairobi pharmacy support team is on call to assist you in English and Swahili.
            </p>
          </div>
          <a
            href="https://wa.me/254704473503?text=Hello%20Pharmienta%20Team%2C%20I%20have%20a%20question%20about%20the%20pharmacy%20software"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2ea043] hover:bg-[#2c973f] text-white font-bold text-xs shadow-md transition-all shrink-0"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp (0704473503)</span>
          </a>
        </div>
      </div>
    </section>
  );
};

