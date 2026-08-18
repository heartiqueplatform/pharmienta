import React from 'react';
import {
    TrendingUp,
    Zap,
    Shield,
    BarChart,
    Users,
    Clock,
    CheckCircle,
    Truck,
    ArrowRight
} from 'lucide-react';

interface SupplierBenefitsSectionProps {
    isDarkMode: boolean;
    onGetStarted?: () => void;
}

export const SupplierBenefitsSection: React.FC<SupplierBenefitsSectionProps> = ({ isDarkMode, onGetStarted }) => {
    const benefits = [
        {
            icon: TrendingUp,
            title: 'Reach More Pharmacies',
            description: 'Connect with Pharmienta pharmacies looking for reliable suppliers.'
        },
        {
            icon: Zap,
            title: 'Faster Order Processing',
            description: 'Receive and process orders digitally instead of manual phone calls and WhatsApp.'
        },
        {
            icon: Shield,
            title: 'Better Stock Management',
            description: 'Know exactly what you have, what\'s reserved, and what\'s available.'
        },
        {
            icon: BarChart,
            title: 'Track Fulfillment',
            description: 'Monitor every order from acceptance to delivery with full visibility.'
        },
        {
            icon: Truck,
            title: 'Organized Deliveries',
            description: 'Manage dispatch, couriers, and delivery tracking in one place.'
        },
        {
            icon: Users,
            title: 'Stronger Pharmacy Relationships',
            description: 'Build lasting B2B relationships with transparent communication.'
        },
        {
            icon: Clock,
            title: 'Reduce Manual Work',
            description: 'Automate order management and reduce administrative overhead.'
        },
        {
            icon: CheckCircle,
            title: 'Increase Order Accuracy',
            description: 'Minimize errors with digital order management and stock validation.'
        }
    ];

    return (
        <section id="supplier-benefits" className={`py-16 md:py-20 px-0 md:px-8 ${isDarkMode ? 'bg-[#161b22]' : 'bg-slate-50'
            }`}>
            <div className="max-w-7xl mx-auto px-4 md:px-0">
                <div className="text-center mb-12 md:mb-16">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${isDarkMode ? 'bg-[#1c2333] text-blue-400' : 'bg-blue-50 text-blue-700'
                        }`}>
                        Why Join
                    </span>
                    <h2 className={`text-2xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'
                        }`}>
                        Benefits for Pharmaceutical Suppliers
                    </h2>
                    <p className={`text-base md:text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-slate-600'
                        }`}>
                        Join the digital supply network and transform how you manage pharmacy orders.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <div
                                key={index}
                                className={`p-5 md:p-6 rounded-none md:rounded-xl text-center transition-all hover:shadow-lg ${isDarkMode
                                    ? 'bg-[#0d1117] border-0 md:border md:border-gray-800 hover:border-gray-700'
                                    : 'bg-white border-0 md:border md:border-gray-200 hover:shadow-xl'
                                    }`}
                            >
                                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 ${isDarkMode ? 'bg-[#1c2333] text-blue-400' : 'bg-blue-50 text-blue-600'
                                    }`}>
                                    <Icon className="w-6 h-6 md:w-7 md:h-7" />
                                </div>
                                <h3 className={`text-sm md:text-base font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'
                                    }`}>
                                    {benefit.title}
                                </h3>
                                <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-600'
                                    }`}>
                                    {benefit.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Testimonial with CTA button instead of emoji */}
                <div className={`mt-10 md:mt-12 p-6 md:p-8 rounded-none md:rounded-xl text-center border-0 md:border-2 ${isDarkMode
                    ? 'md:border-blue-500/30 bg-blue-900/10'
                    : 'md:border-blue-200 bg-blue-50'
                    }`}>
                    <p className={`text-base md:text-lg font-medium ${isDarkMode ? 'text-white' : 'text-slate-900'
                        }`}>
                        "Pharmienta Supplier helps us process orders 3x faster and reduce stock errors by 80%."
                    </p>
                    <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-400' : 'text-slate-600'
                        }`}>
                        — Pharmaceutical Distributor, Lagos
                    </p>

                    {/* CTA Button */}
                    <div className="mt-6">
                        <button
                            onClick={onGetStarted}
                            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-[#003366] text-white rounded-lg hover:bg-[#002244] transition-colors font-semibold text-sm md:text-base"
                        >
                            Join the Supplier Network
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupplierBenefitsSection;