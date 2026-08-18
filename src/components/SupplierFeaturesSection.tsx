import React from 'react';
import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    Truck,
    Bell,
    Users,
    ClipboardCheck,
    CalendarClock,
    Warehouse,
    FileText
} from 'lucide-react';

interface SupplierFeaturesSectionProps {
    isDarkMode: boolean;
}

export const SupplierFeaturesSection: React.FC<SupplierFeaturesSectionProps> = ({ isDarkMode }) => {
    const features = [
        {
            icon: LayoutDashboard,
            title: 'Supplier Dashboard',
            description: 'View new orders, pending orders, orders in preparation, ready for dispatch, and delivered orders at a glance.'
        },
        {
            icon: Package,
            title: 'Product Catalogue & Stock',
            description: 'Add products, set prices, manage quantities, SKUs, MOQs, lead times, and activate/deactivate products.'
        },
        {
            icon: ShoppingCart,
            title: 'Order Management',
            description: 'Receive, review, accept, partially accept, or reject pharmacy orders with full visibility of all details.'
        },
        {
            icon: Truck,
            title: 'Dispatch & Delivery',
            description: 'Manage deliveries with courier details, driver information, tracking, and delivery status updates.'
        },
        {
            icon: ClipboardCheck,
            title: 'Stock Reservation',
            description: 'Reserve stock for accepted orders to ensure accurate inventory and reduce order failures.'
        },
        {
            icon: CalendarClock,
            title: 'Batch & Expiry Management',
            description: 'Track batch numbers, expiry dates, warehouse locations, and FEFO-oriented stock handling.'
        },
        {
            icon: Bell,
            title: 'Real-time Notifications',
            description: 'Get alerts for new orders, cancellations, low stock, and other important events.'
        },
        {
            icon: Users,
            title: 'Pharmacy Relationships',
            description: 'Build ongoing B2B relationships with pharmacy trade partners, including business and payment information.'
        },
        {
            icon: Warehouse,
            title: 'Order Lifecycle Visibility',
            description: 'Track orders from submitted → accepted → preparing → ready → dispatched → delivered.'
        },
        {
            icon: FileText,
            title: 'Audit Trail',
            description: 'Maintain a complete history of important actions like accepting, rejecting, dispatching, and stock adjustments.'
        }
    ];

    return (
        <section
            id="supplier-features"  // <-- ADD THIS ID
            className={`py-16 md:py-20 px-0 md:px-8 ${isDarkMode ? 'bg-[#161b22]' : 'bg-slate-50'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-0">
                <div className="text-center mb-12 md:mb-16">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${isDarkMode ? 'bg-[#1c2333] text-blue-400' : 'bg-blue-50 text-blue-700'
                        }`}>
                        Supplier Platform
                    </span>
                    <h2 className={`text-2xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'
                        }`}>
                        Everything You Need to Manage Pharmaceutical Supply
                    </h2>
                    <p className={`text-base md:text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-slate-600'
                        }`}>
                        A complete B2B platform designed specifically for pharmaceutical suppliers and distributors.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className={`p-5 md:p-6 rounded-none md:rounded-xl transition-all hover:shadow-lg ${isDarkMode
                                    ? 'bg-[#0d1117] border-0 md:border md:border-gray-800 hover:border-gray-700'
                                    : 'bg-white border-0 md:border md:border-gray-200 hover:shadow-xl'
                                    }`}
                            >
                                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 md:mb-4 ${isDarkMode ? 'bg-[#1c2333] text-blue-400' : 'bg-blue-50 text-blue-600'
                                    }`}>
                                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <h3 className={`text-sm md:text-lg font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'
                                    }`}>
                                    {feature.title}
                                </h3>
                                <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-400' : 'text-slate-600'
                                    }`}>
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SupplierFeaturesSection;