import React from 'react';
import {
  Star,
  Quote,
  CheckCircle2,
  Building2,
  MapPin,
  TrendingUp,
  Users,
  Store
} from 'lucide-react';
import { PHARMACY_TESTIMONIALS, SUPPLIER_TESTIMONIALS, STATS, TRUSTED_PARTNERS } from '../data/landingData';

interface TestimonialsSectionProps {
  isDarkMode?: boolean;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ isDarkMode = false }) => {
  return (
    <section id="testimonials" className={`py-20 md:py-28 relative transition-colors duration-200 ${isDarkMode ? 'bg-[#0d1117]' : 'bg-slate-100/70'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight mb-5 ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
            Trusted by Pharmacies & Suppliers Across{' '}
            <span className="text-[#2ea043]">Kenya</span>
          </h2>

          <p className={`text-base sm:text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
            Hear from pharmacy owners, superintendents, and pharmaceutical suppliers transforming their workflows with the Pharmienta ecosystem.
          </p>
        </div>

        {/* Live Impact Statistics Counters - NO BORDERS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={`p-6 rounded-3xl text-center shadow-md group hover:shadow-xl transition-all ${isDarkMode ? 'bg-[#161b22]' : 'bg-white'
                }`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading mb-2 group-hover:scale-105 transition-transform flex items-center justify-center gap-0.5">
                <span className="bg-gradient-to-r from-[#003366] via-blue-600 to-[#B30000] bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-[#2ea043] text-2xl sm:text-3xl font-bold">{stat.suffix}</span>
              </div>
              <p className={`text-xs sm:text-sm font-bold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Pharmacy Testimonials Section */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-[#1c2333] text-blue-400' : 'bg-blue-50 text-blue-700'
              }`}>
              <Store className="w-4 h-4" />
              Pharmacy Testimonials
              <span className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                ({PHARMACY_TESTIMONIALS.length})
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {PHARMACY_TESTIMONIALS.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                isDarkMode={isDarkMode}
                type="pharmacy"
              />
            ))}
          </div>
        </div>

        {/* Supplier Testimonials Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${isDarkMode ? 'bg-[#1c2333] text-emerald-400' : 'bg-emerald-50 text-emerald-700'
              }`}>
              <Building2 className="w-4 h-4" />
              Supplier Testimonials
              <span className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                ({SUPPLIER_TESTIMONIALS.length})
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {SUPPLIER_TESTIMONIALS.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                isDarkMode={isDarkMode}
                type="supplier"
              />
            ))}
          </div>
        </div>

        {/* Partner Logos Strip - NO BORDERS */}
        <div className={`pt-8 text-center ${isDarkMode ? 'border-t border-slate-800' : 'border-t border-slate-200/80'
          }`}>
          <p className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-6">
            Trusted by Community & Dispensing Chemists Across Kenya
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {TRUSTED_PARTNERS.map((partner, p) => (
              <div
                key={p}
                className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 shadow-xs ${isDarkMode ? 'bg-[#161b22] text-slate-300' : 'bg-white text-slate-700'
                  }`}
              >
                <Building2 className="w-4 h-4 text-[#003366] dark:text-blue-400" />
                <span>{partner}</span>
              </div>
            ))}
          </div>

          {/* Supplier Network Note */}
          <div className={`mt-6 p-4 rounded-xl text-center text-sm ${isDarkMode ? 'bg-[#161b22] border border-slate-800' : 'bg-white border border-slate-200'
            }`}>
            <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
              <span className="font-bold text-[#003366] dark:text-blue-400">Pharmienta Supplier Network:</span>
              {' '}Join the growing network of pharmaceutical suppliers connecting with pharmacies across Kenya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonial Card Component
interface TestimonialCardProps {
  testimonial: any;
  isDarkMode: boolean;
  type: 'pharmacy' | 'supplier';
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, isDarkMode, type }) => {
  const typeColors = type === 'pharmacy'
    ? { bg: 'bg-blue-100 dark:bg-blue-950/60', text: 'text-blue-800 dark:text-blue-300' }
    : { bg: 'bg-emerald-100 dark:bg-emerald-950/60', text: 'text-emerald-800 dark:text-emerald-300' };

  return (
    <div
      className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 ${isDarkMode ? 'bg-[#161b22]' : 'bg-white'
        }`}
    >
      <div>
        {/* Rating & Quote Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {[...Array(testimonial.rating)].map((_, r) => (
              <Star key={r} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <div className={`px-2.5 py-1 rounded-lg text-xs font-bold ${typeColors.bg} ${typeColors.text}`}>
            {type === 'pharmacy' ? 'Pharmacy' : 'Supplier'}
          </div>
        </div>

        {/* Quote Text */}
        <p className={`text-sm sm:text-base leading-relaxed italic mb-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
          "{testimonial.quote}"
        </p>
      </div>

      <div>
        {/* Impact Metric Pill */}
        <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 text-xs font-bold shadow-xs">
          <TrendingUp className="w-3.5 h-3.5 text-[#2ea043]" />
          <span>{testimonial.impactMetric}</span>
        </div>

        {/* Author Info */}
        <div className={`flex items-center gap-3 pt-4 ${isDarkMode ? 'border-t border-slate-800' : 'border-t border-slate-100'
          }`}>
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover shadow-sm shrink-0"
            referrerPolicy="no-referrer"
          />
          <div>
            <div className="flex items-center gap-2">
              <h4 className={`text-sm font-bold font-heading ${isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                {testimonial.name}
              </h4>
              {testimonial.verified && (
                <CheckCircle2 className="w-4 h-4 text-[#2ea043] shrink-0" title="Verified" />
              )}
            </div>
            <p className="text-xs text-slate-400">{testimonial.role}</p>
            <p className="text-xs text-[#003366] dark:text-blue-400 font-medium flex items-center gap-1 mt-0.5">
              <MapPin className="w-3 h-3 text-slate-400" />
              <span>{testimonial.pharmacyName} ({testimonial.location})</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};