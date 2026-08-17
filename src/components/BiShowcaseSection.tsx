import React, { useState } from 'react';
import biDashboardImage from '../assets/images/bi_dashboard_1786965792464.jpg';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';
import {
  TrendingUp,
  BarChart3,
  Smartphone,
  PieChart as PieIcon,
  Layers,
  Clock,
  Pill,
  ShieldCheck,
  Calendar,
  DollarSign,
  ArrowUpRight,
  ClipboardList,
  RefreshCw,
  Zap,
  CheckCircle2,
  AlertTriangle,
  ChevronRight
} from 'lucide-react';

interface BiShowcaseSectionProps {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
  isDarkMode?: boolean;
}

// Hourly & Daily Sales Trend Data
const HOURLY_SALES_DATA = [
  { label: '08:00', sales: 4200, profit: 1550, transactions: 8 },
  { label: '09:00', sales: 8600, profit: 3180, transactions: 14 },
  { label: '10:00', sales: 13400, profit: 4950, transactions: 21 },
  { label: '11:00', sales: 18900, profit: 7000, transactions: 29 },
  { label: '12:00', sales: 24500, profit: 9100, transactions: 38 }, // Lunch peak
  { label: '13:00', sales: 19800, profit: 7300, transactions: 31 },
  { label: '14:00', sales: 16200, profit: 6000, transactions: 24 },
  { label: '15:00', sales: 18500, profit: 6850, transactions: 28 },
  { label: '16:00', sales: 23100, profit: 8550, transactions: 36 },
  { label: '17:00', sales: 31800, profit: 11800, transactions: 49 }, // Evening peak
  { label: '18:00', sales: 38400, profit: 14200, transactions: 58 }, // Evening peak
  { label: '19:00', sales: 29500, profit: 10900, transactions: 44 },
  { label: '20:00', sales: 14200, profit: 5250, transactions: 22 },
  { label: '21:00', sales: 6800, profit: 2500, transactions: 11 }
];

const WEEKLY_SALES_DATA = [
  { label: 'Mon', sales: 118400, profit: 43800, transactions: 182 },
  { label: 'Tue', sales: 126900, profit: 46900, transactions: 196 },
  { label: 'Wed', sales: 134200, profit: 49600, transactions: 208 },
  { label: 'Thu', sales: 129800, profit: 48000, transactions: 199 },
  { label: 'Fri', sales: 168400, profit: 62300, transactions: 262 },
  { label: 'Sat', sales: 192500, profit: 71200, transactions: 298 },
  { label: 'Sun', sales: 104300, profit: 38600, transactions: 160 }
];

// Product Category Breakdown Data
const CATEGORY_DATA = [
  { name: 'Antibiotics & Anti-infectives', value: 34, amount: 51200, color: '#003366', margin: '32%' },
  { name: 'OTC Pain, Cold & Flu', value: 26, amount: 39100, color: '#2ea043', margin: '44%' },
  { name: 'Chronic (Hypertension & Diabetes)', value: 20, amount: 30100, color: '#0284c7', margin: '26%' },
  { name: 'Pediatric Syrups & Drops', value: 12, amount: 18050, color: '#f59e0b', margin: '36%' },
  { name: 'Supplements & Dermatology', value: 8, amount: 12050, color: '#B30000', margin: '48%' }
];

// Fast Moving vs Low Stock Data
const INVENTORY_INTELLIGENCE = [
  { name: 'Augmentin 625mg (14s)', category: 'Antibiotics', soldToday: 38, stockLeft: 12, status: 'Reorder Urgently', profit: 'KES 450/box' },
  { name: 'Panadol Extra 100s (Packs)', category: 'OTC Pain', soldToday: 64, stockLeft: 180, status: 'Optimal Turnover', profit: 'KES 180/box' },
  { name: 'Cetirizine 10mg (100s)', category: 'Antihistamine', soldToday: 29, stockLeft: 45, status: 'Healthy Stock', profit: 'KES 220/box' },
  { name: 'Ventolin Inhaler 100mcg', category: 'Respiratory', soldToday: 19, stockLeft: 6, status: 'Low Stock Alarm', profit: 'KES 310/pc' },
  { name: 'Metformin 500mg (100s)', category: 'Chronic Care', soldToday: 24, stockLeft: 52, status: 'Healthy Stock', profit: 'KES 260/box' }
];

// Top Customer Request Book (Lost Demand Captured)
const CUSTOMER_REQUESTS = [
  { drug: 'Azithromycin 500mg 3s', count: 14, estValue: 'KES 8,400', reason: 'High Local Prescription Demand', action: 'Add to Supplier Order' },
  { drug: 'Salbutamol Nebules 2.5mg', count: 9, estValue: 'KES 6,300', reason: 'Repeated Walk-in Inquiries', action: 'Approved by Pharmacist' },
  { drug: 'Eye Drops Chloramphenicol', count: 7, estValue: 'KES 2,450', reason: 'Out of Stock since Friday', action: 'Restock Batch' },
  { drug: 'Pregnacare Plus 56s', count: 6, estValue: 'KES 13,200', reason: 'Maternal Clinic Nearby', action: 'High Margin Item' }
];

export const BiShowcaseSection: React.FC<BiShowcaseSectionProps> = ({ onOpenTrial, isDarkMode = false }) => {
  const [timeRange, setTimeRange] = useState<'today' | 'week'>('today');
  const [activeTab, setActiveTab] = useState<'sales-trajectory' | 'category-breakdown' | 'tenders' | 'requests'>('sales-trajectory');

  const currentSalesData = timeRange === 'today' ? HOURLY_SALES_DATA : WEEKLY_SALES_DATA;
  const totalSalesFormatted = timeRange === 'today' ? 'KES 267,900' : 'KES 974,500';
  const totalProfitFormatted = timeRange === 'today' ? 'KES 99,130' : 'KES 360,400';
  const totalUnitsFormatted = timeRange === 'today' ? '412 Units' : '1,505 Units';

  return (
    <section id="bi-brain" className={`py-16 md:py-24 relative overflow-hidden transition-colors duration-200 ${isDarkMode ? 'bg-[#0d1117]' : 'bg-slate-50/70'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#003366] dark:bg-blue-950/60 dark:text-blue-300 text-xs font-bold mb-4 shadow-xs">
            <BarChart3 className="w-3.5 h-3.5 text-[#003366] dark:text-blue-400" />
            <span className="uppercase tracking-wider">Business Intelligence & Real-Time Analytics</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading tracking-tight mb-4 ${isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
            Smart Business Intelligence for Pharmacy Owners
          </h2>

          <p className={`text-base sm:text-lg max-w-2xl mx-auto ${isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
            Get a clear, automated summary of your daily counter sales, gross profit margins, fast-selling medicines, and shift reconciliation in real time.
          </p>
        </div>

        {/* Live BI Control Panel Container - Edge to Edge on Mobile, 0 Borders */}
        <div className={`-mx-4 sm:mx-0 w-[calc(100%+2rem)] sm:w-full rounded-none sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl ${isDarkMode ? 'bg-[#161b22]' : 'bg-white'
          }`}>

          {/* Top Control Bar: Filters & Live Status */}
          <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 ${isDarkMode ? 'border-b border-slate-800' : 'border-b border-slate-100'
            }`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#003366] text-white flex items-center justify-center shrink-0 shadow-md">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className={`text-lg font-bold font-heading ${isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                    Live Pharmacy Intelligence Hub
                  </h3>

                </div>
                <p className="text-xs text-slate-400">
                  Westlands Community Chemist • Terminal #01 & #02 Active
                </p>
              </div>
            </div>

            {/* Timeframe & Branch Selector */}
            <div className="flex items-center gap-2 self-start md:self-auto">
              <div className={`inline-flex p-1 rounded-xl ${isDarkMode ? 'bg-[#21262d]' : 'bg-slate-100'
                }`}>
                <button
                  id="btn-bi-range-today"
                  onClick={() => setTimeRange('today')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${timeRange === 'today'
                      ? 'bg-[#003366] text-white shadow-xs'
                      : isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                >
                  Today (Live Hourly)
                </button>
                <button
                  id="btn-bi-range-week"
                  onClick={() => setTimeRange('week')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${timeRange === 'week'
                      ? 'bg-[#003366] text-white shadow-xs'
                      : isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                    }`}
                >
                  This Week Summary
                </button>
              </div>
            </div>
          </div>

          {/* Key Executive Summary KPIs Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
            <div className={`p-4 sm:p-5 rounded-2xl shadow-xs ${isDarkMode ? 'bg-[#0d1117]' : 'bg-slate-50'
              }`}>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span className="font-semibold">Gross Revenue</span>
                <span className="text-[#2ea043] font-bold flex items-center gap-0.5">
                  <TrendingUp className="w-3 h-3" /> +19.2%
                </span>
              </div>
              <p className={`text-xl sm:text-2xl lg:text-3xl font-black font-heading ${isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                {totalSalesFormatted}
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                {timeRange === 'today' ? 'From 187 completed sales' : 'Across 1,505 prescription receipts'}
              </p>
            </div>

            <div className={`p-4 sm:p-5 rounded-2xl shadow-xs ${isDarkMode ? 'bg-[#0d1117]' : 'bg-slate-50'
              }`}>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span className="font-semibold">Est. Gross Margin</span>
                <span className="text-[#003366] dark:text-blue-400 font-bold">37.0%</span>
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl font-black font-heading text-[#2ea043]">
                {totalProfitFormatted}
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                Direct counter profit after cost
              </p>
            </div>

            <div className={`p-4 sm:p-5 rounded-2xl shadow-xs ${isDarkMode ? 'bg-[#0d1117]' : 'bg-slate-50'
              }`}>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span className="font-semibold">Units Dispensed</span>
                <span className="text-blue-500 font-bold">FEFO Batch</span>
              </div>
              <p className={`text-xl sm:text-2xl lg:text-3xl font-black font-heading ${isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                {totalUnitsFormatted}
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                Instant stock count deduction
              </p>
            </div>

            <div className={`p-4 sm:p-5 rounded-2xl shadow-xs ${isDarkMode ? 'bg-[#0d1117]' : 'bg-slate-50'
              }`}>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span className="font-semibold">M-Pesa Till vs Cash</span>
                <span className="text-emerald-500 font-bold">Reconciled</span>
              </div>
              <p className={`text-xl sm:text-2xl lg:text-3xl font-black font-heading ${isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                78% <span className="text-xs font-normal text-slate-400">M-Pesa</span>
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                KES 0 till discrepancy detected
              </p>
            </div>
          </div>

          {/* Tab Navigation for BI Views */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <button
              id="btn-bi-view-trajectory"
              onClick={() => setActiveTab('sales-trajectory')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${activeTab === 'sales-trajectory'
                  ? 'bg-[#003366] text-white shadow-md'
                  : isDarkMode ? 'bg-[#21262d] text-slate-300 hover:text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Sales & Profit Trajectory</span>
            </button>

            <button
              id="btn-bi-view-category"
              onClick={() => setActiveTab('category-breakdown')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${activeTab === 'category-breakdown'
                  ? 'bg-[#003366] text-white shadow-md'
                  : isDarkMode ? 'bg-[#21262d] text-slate-300 hover:text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
            >
              <PieIcon className="w-4 h-4" />
              <span>Category & Profit Pie Chart</span>
            </button>

            <button
              id="btn-bi-view-tenders"
              onClick={() => setActiveTab('tenders')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${activeTab === 'tenders'
                  ? 'bg-[#003366] text-white shadow-md'
                  : isDarkMode ? 'bg-[#21262d] text-slate-300 hover:text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Fast-Movers & Stock Status</span>
            </button>

            <button
              id="btn-bi-view-requests"
              onClick={() => setActiveTab('requests')}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${activeTab === 'requests'
                  ? 'bg-[#B30000] text-white shadow-md'
                  : isDarkMode ? 'bg-[#21262d] text-slate-300 hover:text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
            >
              <ClipboardList className="w-4 h-4" />
              <span>Customer Request Book Demand</span>
            </button>
          </div>

          {/* Active BI Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

            {/* Main Interactive Chart Box (8 Cols) */}
            <div className="lg:col-span-8">

              {/* TAB 1: Sales & Margin Trajectory Area Chart */}
              {activeTab === 'sales-trajectory' && (
                <div className={`p-4 sm:p-6 rounded-2xl shadow-xs ${isDarkMode ? 'bg-[#0d1117]' : 'bg-slate-50'
                  }`}>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                    <div>
                      <h4 className={`text-base font-bold font-heading ${isDarkMode ? 'text-white' : 'text-slate-900'
                        }`}>
                        {timeRange === 'today' ? 'Hourly Sales & Profit Progression' : 'Weekly Counter Revenue Trajectory'}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {timeRange === 'today' ? 'Peak customer footfall between 12:00-13:00 and 17:00-19:30' : 'Strongest dispensing velocity on Friday and Saturday'}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-semibold">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-[#003366] dark:bg-blue-400" />
                        <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>Gross Sales (KES)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-[#2ea043]" />
                        <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>Net Profit (KES)</span>
                      </div>
                    </div>
                  </div>

                  {/* Recharts Area Chart Component */}
                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={currentSalesData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                        <defs>
                          <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#003366" stopOpacity={0.4} />
                            <stop offset="95%" stopColor="#003366" stopOpacity={0.0} />
                          </linearGradient>
                          <linearGradient id="profitGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#2ea043" stopOpacity={0.4} />
                            <stop offset="95%" stopColor="#2ea043" stopOpacity={0.0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#21262d' : '#e2e8f0'} vertical={false} />
                        <XAxis
                          dataKey="label"
                          stroke={isDarkMode ? '#8b949e' : '#64748b'}
                          fontSize={11}
                          tickLine={false}
                        />
                        <YAxis
                          stroke={isDarkMode ? '#8b949e' : '#64748b'}
                          fontSize={11}
                          tickLine={false}
                          tickFormatter={(val) => `${val / 1000}k`}
                        />
                        <Tooltip
                          content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                              return (
                                <div className={`p-3 rounded-xl shadow-xl text-xs space-y-1 ${isDarkMode ? 'bg-[#161b22] text-white border border-slate-700' : 'bg-white text-slate-900 border border-slate-200'
                                  }`}>
                                  <p className="font-bold text-slate-400">{label}</p>
                                  <p className="font-bold text-[#003366] dark:text-blue-400">
                                    Sales: KES {Number(payload[0]?.value).toLocaleString()}
                                  </p>
                                  <p className="font-bold text-[#2ea043]">
                                    Profit: KES {Number(payload[1]?.value).toLocaleString()}
                                  </p>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="sales"
                          stroke="#003366"
                          strokeWidth={2.5}
                          fillOpacity={1}
                          fill="url(#salesGrad)"
                        />
                        <Area
                          type="monotone"
                          dataKey="profit"
                          stroke="#2ea043"
                          strokeWidth={2}
                          fillOpacity={1}
                          fill="url(#profitGrad)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Highlight Rush Hours Banner */}
                  <div className={`mt-4 p-3 rounded-xl flex items-center justify-between text-xs ${isDarkMode ? 'bg-[#161b22] text-slate-300' : 'bg-white text-slate-700'
                    }`}>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#003366] dark:text-blue-400 shrink-0" />
                      <span><strong>Key Insight:</strong> 42% of revenue is generated during the evening rush (17:00 - 19:30).</span>
                    </div>
                    <span className="font-bold text-[#2ea043] hidden sm:inline">Shift Staff Ready</span>
                  </div>
                </div>
              )}

              {/* TAB 2: Category & Profit Pie / Donut Chart */}
              {activeTab === 'category-breakdown' && (
                <div className={`p-4 sm:p-6 rounded-2xl shadow-xs ${isDarkMode ? 'bg-[#0d1117]' : 'bg-slate-50'
                  }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className={`text-base font-bold font-heading ${isDarkMode ? 'text-white' : 'text-slate-900'
                        }`}>
                        Revenue & Margin by Therapeutic Category
                      </h4>
                      <p className="text-xs text-slate-400">
                        See which medicine categories drive your highest cash flow and gross profits.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    {/* Recharts Pie Chart (5 Cols) */}
                    <div className="md:col-span-5 h-64 flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={CATEGORY_DATA}
                            cx="50%"
                            cy="50%"
                            innerRadius={55}
                            outerRadius={85}
                            paddingAngle={3}
                            dataKey="value"
                          >
                            {CATEGORY_DATA.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip
                            content={({ active, payload }) => {
                              if (active && payload && payload.length) {
                                const data = payload[0].payload;
                                return (
                                  <div className={`p-2.5 rounded-xl shadow-lg text-xs space-y-1 ${isDarkMode ? 'bg-[#161b22] text-white' : 'bg-white text-slate-900'
                                    }`}>
                                    <p className="font-bold">{data.name}</p>
                                    <p className="text-slate-400">Share: {data.value}% (KES {data.amount.toLocaleString()})</p>
                                    <p className="font-bold text-[#2ea043]">Margin: {data.margin}</p>
                                  </div>
                                );
                              }
                              return null;
                            }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>

                    {/* Category Legend & Margin Table (7 Cols) */}
                    <div className="md:col-span-7 space-y-2 text-xs">
                      {CATEGORY_DATA.map((cat, idx) => (
                        <div
                          key={idx}
                          className={`p-2.5 rounded-xl flex items-center justify-between ${isDarkMode ? 'bg-[#161b22]' : 'bg-white'
                            }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
                            <div>
                              <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{cat.name}</p>
                              <p className="text-[11px] text-slate-400">KES {cat.amount.toLocaleString()} ({cat.value}%)</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 font-bold text-[11px]">
                              {cat.margin} Margin
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: Fast-Movers & Stock Intelligence */}
              {activeTab === 'tenders' && (
                <div className={`p-4 sm:p-6 rounded-2xl shadow-xs space-y-3 ${isDarkMode ? 'bg-[#0d1117]' : 'bg-slate-50'
                  }`}>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className={`text-base font-bold font-heading ${isDarkMode ? 'text-white' : 'text-slate-900'
                        }`}>
                        High-Turnover Fast Movers & Re-Order Radar
                      </h4>
                      <p className="text-xs text-slate-400">
                        Tracks sales velocity and alerts you before stock runs out.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    {INVENTORY_INTELLIGENCE.map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${item.stockLeft < 15
                            ? isDarkMode ? 'bg-red-950/30 text-red-200' : 'bg-red-50 text-red-900'
                            : isDarkMode ? 'bg-[#161b22] text-slate-200' : 'bg-white text-slate-800'
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${item.stockLeft < 15 ? 'bg-red-100 text-[#B30000]' : 'bg-blue-100 text-[#003366]'
                            }`}>
                            <Pill className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="font-bold text-sm">{item.name}</p>
                            <p className="text-[11px] text-slate-400">
                              {item.category} • Sold today: <strong>{item.soldToday} packs</strong> • Stock left: <strong>{item.stockLeft}</strong>
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 self-end sm:self-auto">
                          <span className="text-[11px] text-slate-400 font-mono">{item.profit}</span>
                          <span className={`px-2.5 py-1 rounded-md font-bold text-[10px] ${item.stockLeft < 15
                              ? 'bg-[#B30000] text-white'
                              : 'bg-[#2ea043] text-white'
                            }`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: Customer Request Book Demand */}
              {activeTab === 'requests' && (
                <div className={`p-4 sm:p-6 rounded-2xl shadow-xs space-y-3 ${isDarkMode ? 'bg-[#0d1117]' : 'bg-slate-50'
                  }`}>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className={`text-base font-bold font-heading ${isDarkMode ? 'text-white' : 'text-slate-900'
                        }`}>
                        Customer Request Book (Captured Unstocked Demand)
                      </h4>
                      <p className="text-xs text-slate-400">
                        Staff log unstocked drugs with 1 click at counter. Automatically compiles your next distributor order.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    {CUSTOMER_REQUESTS.map((req, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${isDarkMode ? 'bg-[#161b22]' : 'bg-white'
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 font-bold text-xs">
                            {req.count}x
                          </div>
                          <div>
                            <p className={`font-bold text-sm ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{req.drug}</p>
                            <p className="text-[11px] text-slate-400">{req.reason}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 self-end sm:self-auto">
                          <span className="font-bold text-[#2ea043]">{req.estValue} est. sales</span>
                          <span className="px-2.5 py-1 rounded-md bg-blue-100 text-[#003366] dark:bg-blue-950/60 dark:text-blue-300 font-bold text-[10px]">
                            {req.action}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className={`p-3 rounded-xl flex items-center justify-between text-xs ${isDarkMode ? 'bg-blue-950/40 text-blue-200' : 'bg-blue-50 text-[#003366]'
                    }`}>
                    <span>💡 <strong>Owner Insight:</strong> Stocking these 4 requested items will add ~KES 30,350 to your monthly gross turnover.</span>
                  </div>
                </div>
              )}
            </div>

            {/* Right Side: Visual Dashboard Card & Phone Live Link (4 Cols) */}
            <div className="lg:col-span-4 space-y-4">

              {/* Mobile Phone Mockup Preview Card */}
              <div className={`p-5 rounded-2xl shadow-sm space-y-4 ${isDarkMode ? 'bg-[#0d1117]' : 'bg-slate-50'
                }`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-[#003366] dark:text-blue-400" />
                    <span className={`text-xs font-bold font-heading ${isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                      Owner Phone View
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">Anywhere 24/7</span>
                </div>

                <div className={`p-3.5 rounded-xl space-y-2 text-xs ${isDarkMode ? 'bg-[#161b22]' : 'bg-white shadow-xs'
                  }`}>
                  <div className="flex justify-between items-center text-slate-400 text-[11px]">
                    <span>Westlands Chemist Till</span>
                    <span className="text-[#2ea043] font-bold">● Active</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className={`text-xl font-bold font-heading ${isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                      KES 267,900
                    </span>
                    <span className="text-[11px] text-[#2ea043] font-semibold">+18.4%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#2ea043] h-full rounded-full" style={{ width: '84%' }} />
                  </div>
                  <p className="text-[10px] text-slate-400 pt-1">
                    84% of daily target reached (KES 320,000 target)
                  </p>
                </div>

                {/* Shift Reconciliation Summary */}
                <div className={`p-3.5 rounded-xl space-y-2 text-xs ${isDarkMode ? 'bg-[#161b22]' : 'bg-white shadow-xs'
                  }`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#2ea043]" />
                      Shift Audit Check
                    </span>
                    <span className="text-[10px] text-slate-400">Cashier: Dr. Mercy</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>Expected Cash: KES 58,400</span>
                    <span className="text-[#2ea043] font-bold">100% Balanced</span>
                  </div>
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>M-Pesa STK Collections:</span>
                    <span className="font-bold text-[#003366] dark:text-blue-300">KES 209,500</span>
                  </div>
                </div>

                {/* Action Button */}
                <button
                  id="btn-bi-claim-access"
                  onClick={onOpenTrial}
                  className="w-full py-3 rounded-xl bg-[#003366] hover:bg-[#002244] text-white text-xs font-bold shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-300" />
                  <span>Access Smart Dashboard 12-Mo Free</span>
                </button>
              </div>

              {/* Real-Time Guarantee Note */}
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 text-xs">
                <CheckCircle2 className="w-4 h-4 text-[#2ea043] shrink-0 mt-0.5" />
                <p className="text-[11px] leading-relaxed">
                  <strong>Zero IT headache:</strong> Numbers calculate automatically the moment a cashier enters a sale or return.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
