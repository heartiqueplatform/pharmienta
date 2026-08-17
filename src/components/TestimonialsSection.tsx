import React from 'react';
import {
  Star,
  Quote,
  CheckCircle2,
  Building2,
  MapPin,
  TrendingUp,
  Users
} from 'lucide-react';
import { TESTIMONIALS, STATS, TRUSTED_PARTNERS } from '../data/landingData';

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
            Trusted by Pharmacists Across{' '}
            <span className="text-[#2ea043]">Kenya</span>
          </h2>

          <p className={`text-base sm:text-lg ${isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
            Hear from pharmacy owners, superintendents, and dispensing chemists transforming their daily counter workflows.
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

        {/* Testimonials Cards Grid - NO BORDERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
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
                  <Quote className={`w-6 h-6 ${isDarkMode ? 'text-slate-700' : 'text-slate-300'}`} />
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
                        <CheckCircle2 className="w-4 h-4 text-[#2ea043] shrink-0" title="Verified Kenyan Chemist" />
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
          ))}
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
        </div>
      </div>
    </section>
  );
};

