import React from 'react';
import { ArrowRight, Building2, Package, Truck, Users } from 'lucide-react';

interface SupplierHeroSectionProps {
    isDarkMode: boolean;
    onGetStarted: () => void;
}

export const SupplierHeroSection: React.FC<SupplierHeroSectionProps> = ({ isDarkMode, onGetStarted }) => {
    const handleLearnMore = () => {
        const featuresSection = document.getElementById('supplier-features');
        if (featuresSection) {
            const offset = 80; // Adjust for fixed header height
            const elementPosition = featuresSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        } else {
            // Fallback: try to find the section by class or scroll to supplier section
            const supplierSection = document.querySelector('#supplier');
            if (supplierSection) {
                supplierSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <section id="supplier" className={`py-16 md:py-20 px-0 md:px-8 ${isDarkMode ? 'bg-[#0d1117]' : 'bg-white'
            }`}>
            <div className="max-w-7xl mx-auto px-4 md:px-0">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'
                            }`}>
                            The Digital Supply Network Connecting
                            <span className="text-[#003366]"> Pharmacies </span>
                            with
                            <span className="text-[#003366]"> Suppliers</span>
                        </h1>

                        <p className={`text-base md:text-lg mb-8 ${isDarkMode ? 'text-gray-400' : 'text-slate-600'
                            }`}>
                            Receive pharmacy orders, manage your stock, fulfil orders and track deliveries —
                            all from one dedicated supplier platform.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={onGetStarted}
                                className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-[#003366] text-white rounded-lg hover:bg-[#002244] transition-colors font-semibold text-sm md:text-base"
                            >
                                Join the Network
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                            </button>
                            <button
                                onClick={handleLearnMore}
                                className={`inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 border-2 rounded-lg font-semibold transition-colors text-sm md:text-base ${isDarkMode
                                    ? 'border-gray-700 text-gray-300 hover:bg-gray-800'
                                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                                    }`}
                            >
                                Learn More
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-10 md:mt-12 pt-6 md:pt-8 border-t border-gray-200 dark:border-gray-800">
                            <div>
                                <p className={`text-xl md:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>500+</p>
                                <p className="text-xs md:text-sm text-gray-500">Suppliers</p>
                            </div>
                            <div>
                                <p className={`text-xl md:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>2,000+</p>
                                <p className="text-xs md:text-sm text-gray-500">Pharmacies</p>
                            </div>
                            <div>
                                <p className={`text-xl md:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>50K+</p>
                                <p className="text-xs md:text-sm text-gray-500">Orders Fulfilled</p>
                            </div>
                            <div>
                                <p className={`text-xl md:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>98%</p>
                                <p className="text-xs md:text-sm text-gray-500">On-Time Delivery</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Image/Visual */}
                    <div className="relative px-4 md:px-0">
                        <div className={`rounded-none md:rounded-2xl overflow-hidden border-0 md:border ${isDarkMode ? 'md:border-gray-800' : 'md:border-gray-200'
                            }`}>
                            <img
                                src="red-pharmacy-image.jpg"
                                alt="Pharmienta Supplier Dashboard"
                                className="w-full h-auto"
                                onError={(e) => {
                                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"%3E%3Crect width="600" height="400" fill="%23f0f4f8"/%3E%3Ctext x="300" y="200" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%2364748b"%3ESupplier Dashboard Preview%3C/text%3E%3C/svg%3E';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupplierHeroSection;