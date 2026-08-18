import React from 'react';
import { ArrowRight, Users, Building2, Package, Store, Handshake } from 'lucide-react';

interface SupplierCTASectionProps {
    isDarkMode: boolean;
    onJoinNetwork: () => void;
}

export const SupplierCTASection: React.FC<SupplierCTASectionProps> = ({ isDarkMode, onJoinNetwork }) => {
    return (
        <section className={`py-16 md:py-20 px-0 md:px-8 ${isDarkMode ? 'bg-[#0d1117]' : 'bg-white'
            }`}>
            <div className="max-w-5xl mx-auto px-4 md:px-0">
                <div className={`relative overflow-hidden rounded-none md:rounded-3xl p-8 md:p-12 text-center ${isDarkMode
                    ? 'bg-gradient-to-br from-[#1c2333] to-[#0d1117] border-0 md:border md:border-gray-800'
                    : 'bg-gradient-to-br from-blue-900 to-[#003366]'
                    }`}>
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-48 md:w-64 h-48 md:h-64 bg-blue-400/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        {/* Icons instead of emojis */}
                        <div className="flex justify-center gap-3 md:gap-4 mb-6">
                            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-blue-900/30' : 'bg-white/10'
                                }`}>
                                <Package className={`w-6 h-6 md:w-7 md:h-7 ${isDarkMode ? 'text-blue-400' : 'text-white'
                                    }`} />
                            </div>
                            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-emerald-900/30' : 'bg-white/10'
                                }`}>
                                <Store className={`w-6 h-6 md:w-7 md:h-7 ${isDarkMode ? 'text-emerald-400' : 'text-white'
                                    }`} />
                            </div>
                            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-purple-900/30' : 'bg-white/10'
                                }`}>
                                <Handshake className={`w-6 h-6 md:w-7 md:h-7 ${isDarkMode ? 'text-purple-400' : 'text-white'
                                    }`} />
                            </div>
                        </div>

                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                            Ready to Join the Pharmienta Supplier Network?
                        </h2>

                        <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto mb-6 md:mb-8">
                            Connect your pharmaceutical business with pharmacies across the network.
                            Start receiving orders digitally and grow your business.
                        </p>

                        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                            <button
                                onClick={onJoinNetwork}
                                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white text-[#003366] rounded-lg hover:bg-blue-50 transition-colors font-semibold text-sm md:text-lg"
                            >
                                Become a Supplier
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                            </button>
                            <button className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-colors font-semibold text-sm md:text-lg">
                                Contact Sales
                            </button>
                        </div>

                        <div className="grid grid-cols-3 gap-3 md:gap-4 mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/20 max-w-xs md:max-w-md mx-auto">
                            <div className="text-center">
                                <Users className="w-5 h-5 md:w-6 md:h-6 text-blue-300 mx-auto mb-2" />
                                <p className="text-white font-semibold text-sm md:text-base">500+</p>
                                <p className="text-blue-200 text-xs md:text-sm">Suppliers</p>
                            </div>
                            <div className="text-center">
                                <Building2 className="w-5 h-5 md:w-6 md:h-6 text-blue-300 mx-auto mb-2" />
                                <p className="text-white font-semibold text-sm md:text-base">2,000+</p>
                                <p className="text-blue-200 text-xs md:text-sm">Pharmacies</p>
                            </div>
                            <div className="text-center">
                                <Package className="w-5 h-5 md:w-6 md:h-6 text-blue-300 mx-auto mb-2" />
                                <p className="text-white font-semibold text-sm md:text-base">50K+</p>
                                <p className="text-blue-200 text-xs md:text-sm">Orders</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupplierCTASection;