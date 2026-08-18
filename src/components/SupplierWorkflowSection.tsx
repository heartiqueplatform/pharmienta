import React from 'react';
import {
    ShoppingCart,
    CheckCircle,
    Package,
    Truck,
    ClipboardCheck,
    ArrowRight,
    Store,
    Building2
} from 'lucide-react';

interface SupplierWorkflowSectionProps {
    isDarkMode: boolean;
}

export const SupplierWorkflowSection: React.FC<SupplierWorkflowSectionProps> = ({ isDarkMode }) => {
    const steps = [
        {
            icon: ShoppingCart,
            title: 'Pharmacy Places Order',
            description: 'A pharmacy using Pharmienta orders stock from your catalogue.',
            color: 'blue'
        },
        {
            icon: CheckCircle,
            title: 'Supplier Receives & Reviews',
            description: 'You receive the order and review products, quantities, and delivery details.',
            color: 'green'
        },
        {
            icon: ClipboardCheck,
            title: 'Accept or Reject',
            description: 'Accept the full order, partially accept, or reject based on stock availability.',
            color: 'purple'
        },
        {
            icon: Package,
            title: 'Prepare & Pack',
            description: 'Prepare the order, manage batch numbers, and reserve stock.',
            color: 'orange'
        },
        {
            icon: Truck,
            title: 'Dispatch & Deliver',
            description: 'Dispatch with delivery details, courier info, and tracking.',
            color: 'red'
        }
    ];

    return (
        <section className={`py-16 md:py-20 px-0 md:px-8 ${isDarkMode ? 'bg-[#0d1117]' : 'bg-white'
            }`}>
            <div className="max-w-7xl mx-auto px-4 md:px-0">
                <div className="text-center mb-12 md:mb-16">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${isDarkMode ? 'bg-[#1c2333] text-blue-400' : 'bg-blue-50 text-blue-700'
                        }`}>
                        How It Works
                    </span>
                    <h2 className={`text-2xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'
                        }`}>
                        Simple Order Fulfillment Workflow
                    </h2>
                    <p className={`text-base md:text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-slate-600'
                        }`}>
                        From pharmacy order to successful delivery — streamlined for pharmaceutical suppliers.
                    </p>
                </div>

                <div className="relative">
                    {/* Connection line */}
                    <div className={`hidden lg:block absolute top-1/2 left-[8%] right-[8%] h-0.5 -translate-y-1/2 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                        }`}></div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 relative">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const colorMap = {
                                blue: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
                                green: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
                                purple: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
                                orange: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
                                red: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
                            };

                            return (
                                <div key={index} className="relative">
                                    <div className="flex flex-col items-center text-center">
                                        <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-3 md:mb-4 ${colorMap[step.color as keyof typeof colorMap]
                                            }`}>
                                            <Icon className="w-6 h-6 md:w-8 md:h-8" />
                                        </div>
                                        <div className={`absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-bold ${isDarkMode ? 'bg-[#161b22] text-gray-400' : 'bg-white text-gray-600'
                                            }`}>
                                            {index + 1}
                                        </div>
                                        <h3 className={`text-sm md:text-base font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'
                                            }`}>
                                            {step.title}
                                        </h3>
                                        <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-600'
                                            }`}>
                                            {step.description}
                                        </p>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 text-gray-400" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Pharmacy-Supplier Connection - No emojis */}
                <div className={`mt-10 md:mt-16 p-6 md:p-8 rounded-none md:rounded-2xl border-0 md:border ${isDarkMode ? 'md:border-gray-800 bg-[#161b22]' : 'md:border-gray-200 bg-slate-50'
                    }`}>
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                        <div>
                            <h3 className={`text-lg md:text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'
                                }`}>
                                Two Sides, One Connected Network
                            </h3>
                            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-600'
                                }`}>
                                Pharmacies use Pharmienta Pharmacy to manage their operations and place orders.
                                Suppliers use Pharmienta Supplier to receive, manage, and fulfil those orders.
                                The two applications communicate seamlessly through the Pharmienta backend.
                            </p>
                        </div>
                        <div className="flex items-center justify-center gap-3 md:gap-4">
                            {/* Pharmacy */}
                            <div className="text-center">
                                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto ${isDarkMode ? 'bg-blue-900/30' : 'bg-blue-100'
                                    }`}>
                                    <Store className={`w-8 h-8 md:w-10 md:h-10 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'
                                        }`} />
                                </div>
                                <p className={`text-sm font-medium mt-2 ${isDarkMode ? 'text-white' : 'text-slate-900'
                                    }`}>
                                    Pharmacy
                                </p>
                                <p className="text-xs text-gray-500">Places Order</p>
                            </div>

                            {/* Connection Arrow */}
                            <div className="flex-1 flex items-center gap-2">
                                <div className={`h-0.5 flex-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
                                    }`}></div>
                                <div className={`text-xl md:text-2xl ${isDarkMode ? 'text-blue-400' : 'text-blue-500'
                                    }`}>⟷</div>
                                <div className={`h-0.5 flex-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'
                                    }`}></div>
                            </div>

                            {/* Supplier */}
                            <div className="text-center">
                                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto ${isDarkMode ? 'bg-emerald-900/30' : 'bg-emerald-100'
                                    }`}>
                                    <Building2 className={`w-8 h-8 md:w-10 md:h-10 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-600'
                                        }`} />
                                </div>
                                <p className={`text-sm font-medium mt-2 ${isDarkMode ? 'text-white' : 'text-slate-900'
                                    }`}>
                                    Supplier
                                </p>
                                <p className="text-xs text-gray-500">Fulfills Order</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupplierWorkflowSection;