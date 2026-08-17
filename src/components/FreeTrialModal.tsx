import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Building, 
  User, 
  Mail, 
  Phone, 
  ArrowRight,
  ShieldCheck,
  Gift
} from 'lucide-react';
import { LeadSubmission } from '../types';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode?: boolean;
}

const KENYAN_COUNTIES = [
  'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Kiambu', 'Machakos', 'Uasin Gishu (Eldoret)',
  'Kajiado', 'Meru', 'Nyeri', 'Kilifi', 'Kakamega', 'Kisii', 'Kericho', 'Other County'
];

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({ isOpen, onClose, isDarkMode = false }) => {
  const [formData, setFormData] = useState<LeadSubmission>({
    pharmacyName: '',
    ownerName: '',
    email: '',
    phone: '',
    county: 'Nairobi',
    branches: '1 Branch (Community Chemist)'
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className={`relative w-full max-w-lg rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto ${
        isDarkMode ? 'bg-[#161b22]' : 'bg-white'
      }`}>
        {/* Close Button */}
        <button
          id="btn-close-trial-modal"
          onClick={handleReset}
          className={`absolute top-5 right-5 p-2 rounded-full transition-colors cursor-pointer ${
            isDarkMode ? 'bg-[#21262d] text-slate-400 hover:text-white' : 'bg-slate-100 text-slate-500 hover:text-slate-900'
          }`}
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 text-xs font-bold w-fit mb-3 shadow-xs">
              <Gift className="w-3.5 h-3.5 text-amber-500" />
              <span>12 Months Free Pioneer Program</span>
            </div>

            <h3 className={`text-2xl font-bold font-heading mb-1 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Claim Your Free 1-Year License
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Reserved for Kenyan pharmacies. No credit card required. Free inventory data import included.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className={`block text-xs font-bold mb-1.5 ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  Pharmacy / Chemist Name *
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="input-trial-pharmacy"
                    type="text"
                    required
                    placeholder="e.g. Amani Health Chemist"
                    value={formData.pharmacyName}
                    onChange={(e) => setFormData({ ...formData, pharmacyName: e.target.value })}
                    className={`w-full pl-10 pr-3 py-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#003366] transition-all shadow-xs ${
                      isDarkMode ? 'bg-[#0d1117] text-white placeholder-slate-500' : 'bg-slate-50 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-xs font-bold mb-1.5 ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  Owner / Pharmacist Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    id="input-trial-name"
                    type="text"
                    required
                    placeholder="e.g. Dr. Kevin Mutua"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    className={`w-full pl-10 pr-3 py-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#003366] transition-all shadow-xs ${
                      isDarkMode ? 'bg-[#0d1117] text-white placeholder-slate-500' : 'bg-slate-50 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-bold mb-1.5 ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Phone / WhatsApp (+254) *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="input-trial-phone"
                      type="tel"
                      required
                      placeholder="0712 345 678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full pl-10 pr-3 py-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#003366] transition-all shadow-xs ${
                        isDarkMode ? 'bg-[#0d1117] text-white placeholder-slate-500' : 'bg-slate-50 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-bold mb-1.5 ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="input-trial-email"
                      type="email"
                      required
                      placeholder="pharmacy@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full pl-10 pr-3 py-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#003366] transition-all shadow-xs ${
                        isDarkMode ? 'bg-[#0d1117] text-white placeholder-slate-500' : 'bg-slate-50 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-bold mb-1.5 ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    County Location
                  </label>
                  <select
                    id="select-trial-county"
                    value={formData.county}
                    onChange={(e) => setFormData({ ...formData, county: e.target.value })}
                    className={`w-full px-3.5 py-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#003366] shadow-xs ${
                      isDarkMode ? 'bg-[#0d1117] text-white' : 'bg-slate-50 text-slate-900'
                    }`}
                  >
                    {KENYAN_COUNTIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={`block text-xs font-bold mb-1.5 ${
                    isDarkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Scale / Branches
                  </label>
                  <select
                    id="select-trial-branches"
                    value={formData.branches}
                    onChange={(e) => setFormData({ ...formData, branches: e.target.value })}
                    className={`w-full px-3.5 py-3 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#003366] shadow-xs ${
                      isDarkMode ? 'bg-[#0d1117] text-white' : 'bg-slate-50 text-slate-900'
                    }`}
                  >
                    <option value="1 Branch (Community Chemist)">1 Branch (Single Chemist)</option>
                    <option value="2-3 Branches">2-3 Branches</option>
                    <option value="4-10 Branches (Chain)">4-10 Branches (Chain)</option>
                    <option value="Hospital Pharmacy">Hospital / Clinic Dispensary</option>
                    <option value="Wholesale Distributor">Wholesale Distributor</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 space-y-2.5">
                <a
                  id="btn-direct-launch-app"
                  href="https://pharmienta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#003366] to-[#B30000] hover:brightness-110 shadow-lg transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Launch Live App Instantly (pharmienta.vercel.app)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  id="btn-trial-form-submit"
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 rounded-xl font-semibold text-xs transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    isDarkMode ? 'bg-[#21262d] text-slate-200 hover:bg-[#30363d]' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
                      Registering Your Pharmacy Info...
                    </span>
                  ) : (
                    <span>Or submit your pharmacy info for free onboarding assistance</span>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1 font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#2ea043]" />
                <span>Zero obligation • No credit card needed • Cancel anytime</span>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#2ea043] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className={`text-2xl font-bold font-heading ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Pioneer Slot Reserved!
            </h3>

            <div className={`p-5 rounded-2xl text-left text-xs space-y-2 shadow-xs ${
              isDarkMode ? 'bg-[#0d1117] text-slate-300' : 'bg-slate-50 text-slate-700'
            }`}>
              <p className="font-bold text-[#2ea043]">
                🎉 Congratulations, {formData.ownerName || 'Doctor'}!
              </p>
              <p>
                We have registered <strong>{formData.pharmacyName || 'your pharmacy'}</strong> ({formData.county}) for the 12-Month Free Pioneer License.
              </p>
              <p className="text-slate-400">
                Our Nairobi pharmacy implementation specialist will reach out via WhatsApp at <strong>{formData.phone}</strong> within 2 business hours to share your credentials and assist with your inventory items.
              </p>
            </div>

            <div className="pt-2">
              <button
                id="btn-trial-success-close"
                onClick={handleReset}
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-colors cursor-pointer ${
                  isDarkMode ? 'bg-[#21262d] text-white hover:bg-[#30363d]' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                }`}
              >
                Back to Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

