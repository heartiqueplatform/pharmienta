import { Feature, PainPoint, Benefit, Testimonial, FaqItem } from '../types';

export const PAIN_POINTS: PainPoint[] = [
  {
    id: 'inventory-chaos',
    title: 'Expiry Losses & Mixed-Up Expiry Dates',
    challenge: 'Managing hundreds of drug batches manually on notebooks or memory leads to expired medicines hidden behind newer stock.',
    consequence: 'Small chemists lose hard-earned cash every month throwing out expired antibiotics, syrups, and injectables.',
    pharmientaSolution: 'Automated FEFO (First-Expired, First-Out) batch tracking and proactive 30/60/90-day expiry alerts so you sell near-expiry stock first.',
    iconName: 'PackageX'
  },
  {
    id: 'missed-customer-requests',
    title: 'Lost Sales from Untracked Customer Requests',
    challenge: 'Patients ask for medicines you do not currently stock, and staff forget to tell the owner what was requested.',
    consequence: 'You miss high-demand product opportunities and keep buying dead stock while patients walk to the next chemist.',
    pharmientaSolution: 'Instant 1-click Customer Request Book at the counter that compiles most-asked medicines for your next supplier restocking order.',
    iconName: 'ClipboardList'
  },
  {
    id: 'staff-audit-leakage',
    title: 'Till Shortages & Unknown "Who Sold What"',
    challenge: 'Multiple staff members using the counter without individual accountability, manual returns, and untracked discounts.',
    consequence: 'Daily cash and M-Pesa discrepancies between till totals and actual bank money with no way to trace the error.',
    pharmientaSolution: 'Clear staff sales audit logging every item sold, returned, or discounted per staff member with shift-end reconciliation.',
    iconName: 'UserCheck'
  },
  {
    id: 'owner-blindspot',
    title: 'Owner Blindness When Away From The Shop',
    challenge: 'Needing to be physically present at the pharmacy 14 hours a day just to know sales totals and what drugs are running low.',
    consequence: 'Zero peace of mind, delayed restocking, and discovering stockouts only after a patient walks out.',
    pharmientaSolution: 'Real-time Owner Cloud Dashboard accessible from your phone anywhere with live sales, stock alerts, and zero data loss.',
    iconName: 'Smartphone'
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'auto-stock-deduction',
    title: 'Auto Real-Time Stock Calculation',
    tagline: 'Instant Inventory Deduction on Every Sale',
    description: 'The moment any tablet strip, bottle, or pack is scanned and sold at the counter, your stock count updates instantly across the system.',
    iconName: 'Boxes',
    badge: 'Real-Time Sync',
    highlight: 'Zero manual stock reconciliation needed at the end of the day.'
  },
  {
    id: 'owner-realtime-dashboard',
    title: 'Owner Live Remote Dashboard',
    tagline: 'See Every Sale in Real Time From Your Phone',
    description: 'Check daily revenue, M-Pesa vs cash collections, and best-selling items live from anywhere in Kenya on your mobile phone or laptop.',
    iconName: 'LineChart',
    badge: 'Peace of Mind',
    highlight: 'Robust cloud backup with zero data loss guarantee.'
  },
  {
    id: 'customer-request-book',
    title: 'Customer Request & Demand Book',
    tagline: 'Never Miss Medicines Patients Ask For',
    description: 'Staff can record out-of-stock or unstocked medicines with 1 tap. Automatically builds your high-demand supplier shopping list.',
    iconName: 'ClipboardList',
    badge: 'Sales Booster',
    highlight: 'Stop buying dead stock and buy only what your local patients want.'
  },
  {
    id: 'smooth-returns-flow',
    title: 'Smart Returns & Refund Flow',
    tagline: 'Auto-Recalculates Returned Items Back to Stock',
    description: 'When a patient returns an unopened medicine, the system smoothly processes the refund and immediately adds the item back to the exact batch inventory count.',
    iconName: 'RotateCcw',
    badge: 'Clean Audits',
    highlight: 'Includes audit logging of return reason and authorized staff member.'
  },
  {
    id: 'staff-audit-tracking',
    title: 'Staff Sales Audit & Shift Tracking',
    tagline: 'Know Exactly Who Sold What, When & Where',
    description: 'Individual staff accounts and counter terminal tracking. Easily see total sales, cash handled, discounts given, and cashier performance.',
    iconName: 'UserCheck',
    badge: 'Full Accountability',
    highlight: 'Eliminates register discrepancies and unauthorized price overrides.'
  },
  {
    id: 'fefo-expiry-alarms',
    title: 'FEFO Inventory & Expiry Alerts',
    tagline: 'No More Mixed-Up Expiry Dates',
    description: 'First-Expired, First-Out alerts make sure older batches are sold first. Get color-coded warnings 30, 60, and 90 days before expiry.',
    iconName: 'Clock',
    badge: 'Stop Waste',
    highlight: 'Helps you discount or return near-expiry medicines to suppliers in time.'
  },
  {
    id: 'one-day-fast-setup',
    title: '1-Day Quick & Easy Setup',
    tagline: 'Add Items Quickly & Start Dispensing Today',
    description: 'Simple and intuitive setup with pre-loaded Kenyan medicine suggestions or easy Excel import. Be fully up and running in a single afternoon.',
    iconName: 'Zap',
    badge: 'Fast Onboarding',
    highlight: 'Zero steep learning curve — cashiers learn it in 15 minutes.'
  },
  {
    id: 'mpesa-cash-reconciliation',
    title: 'M-Pesa & Cash Till Reconciliation',
    tagline: 'Clear Daily Breakdowns with Zero Leaks',
    description: 'Easily track M-Pesa Till payments alongside cash sales. Print clear thermal customer receipts and reconcile shifts in seconds.',
    iconName: 'Receipt',
    badge: 'Accurate Books',
    highlight: 'Instant thermal receipt printing compatible with 58mm & 80mm printers.'
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: 'revenue-boost',
    metric: '+35%',
    title: 'Stop Revenue Leaks & Stock More High-Demand Drugs',
    description: 'Pharmienta Pro helps community pharmacies eliminate unaccounted till shortages, prioritize high-turnover medicines via the Request Book, and boost daily counter profits.',
    detailPoints: [
      'Customer Request Book reveals exact medicines patients are seeking',
      'Real-time staff sales audit stops unauthorized price tampering and till shortages',
      'Accurate cash and M-Pesa reconciliation at the close of every shift'
    ],
    iconName: 'TrendingUp',
    badge: 'Revenue Protection'
  },
  {
    id: 'stockout-reduction',
    metric: '-80%',
    title: 'Eliminate Expiry Losses & Costly Dead Stock',
    description: 'Stop letting expired drugs hide on back shelves. FEFO tracking alerts you to dispense oldest batches first and stop buying slow non-moving drugs.',
    detailPoints: [
      'FEFO batch tracking ensures oldest stock is dispensed first',
      '30/60/90-day expiry alarms give you time to discount or return to distributors',
      'Smooth return flow restores returned items accurately back to stock'
    ],
    iconName: 'ShieldCheck',
    badge: 'Stock Protection'
  },
  {
    id: 'time-saving',
    metric: '1 Day',
    title: 'Get Running in 1 Day with Zero Technical Stress',
    description: 'No complicated IT setup or weeks of training. Add your items, set your selling prices, and let your counter staff start dispensing on day one.',
    detailPoints: [
      'Intuitive user interface that pharmacy assistants learn in 15 minutes',
      'Quick item addition with pre-configured Kenyan drug suggestions',
      'Free data import from Excel or previous software by our Nairobi team'
    ],
    iconName: 'Clock',
    badge: 'Fast Onboarding'
  },
  {
    id: 'owner-freedom',
    metric: '24/7',
    title: 'Monitor Your Pharmacy From Anywhere on Your Phone',
    description: 'Travel, attend to errands, or manage other businesses with total confidence. Your cloud dashboard shows live counter sales as they happen.',
    detailPoints: [
      'Live real-time sales feed directly on your smartphone browser',
      'Instant low-stock alerts so you order refills before shelves run dry',
      'Safe cloud architecture with automatic backup and zero data loss'
    ],
    iconName: 'Smartphone',
    badge: 'Owner Peace of Mind'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Faith Mutua, BPharm',
    role: 'Pharmacy Owner',
    pharmacyName: 'Amani Health Chemist',
    location: 'Westlands, Nairobi',
    quote: 'As an owner managing two staff, the real-time remote dashboard changed everything. I can check sales on my phone while away, and the staff sales audit shows exactly who rang each sale. The customer request book alone helped us stock 20 new fast-selling items our patients kept asking for.',
    avatar: 'https://images.unsplash.com/photo-1594824813626-d66761c77c7c?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    verified: true,
    impactMetric: 'Saved KES 350K/yr in stopped leakages'
  },
  {
    id: 'test-2',
    name: 'Pharm. Kevin Ochieng',
    role: 'Superintendent Pharmacist',
    pharmacyName: 'Lakeview Community Chemist',
    location: 'Kisumu Central',
    quote: 'Setup took us just one afternoon. We added our medicines, and my counter staff learned it in 10 minutes. The automatic stock deduction is flawless—when an item is sold, stock reduces immediately. When a patient returned an unopened pack, the return flow restored it straight back to inventory without messing our books.',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    verified: true,
    impactMetric: '1-day setup & zero inventory errors'
  },
  {
    id: 'test-3',
    name: 'Sarah Wanjiku',
    role: 'Managing Pharmacist',
    pharmacyName: 'Coastline Medicare Pharmacy',
    location: 'Nyali, Mombasa',
    quote: 'We used to throw away thousands of shillings in expired syrups and antibiotics because we couldn’t track batches. Pharmienta’s FEFO alerts make sure we dispense older batches first. Plus, the 12-month free pioneer offer was 100% genuine—no hidden fees!',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    verified: true,
    impactMetric: 'Zero expired drug write-offs in 6 months'
  },
  {
    id: 'test-4',
    name: 'Dr. Brian Kiprop',
    role: 'Chemist Director',
    pharmacyName: 'Highland Wellness Chemist',
    location: 'Eldoret Town',
    quote: 'The customer request page is pure genius. Before, staff would tell patients "hakuna" (out of stock) and forget to tell me. Now every asked-for drug is recorded with one tap. I check the list every Monday before going to the distributor. Our sales jumped 40%!',
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    verified: true,
    impactMetric: '+40% sales from stocking requested items'
  }
];

export const STATS = [
  { label: 'Active Kenyan Pharmacies', value: 50, suffix: '+', icon: 'Building' },
  { label: 'Dispensing Accuracy', value: 99.9, suffix: '%', icon: 'CheckCircle2' },
  { label: 'Setup Time', value: 1, suffix: ' Day', icon: 'Zap' },
  { label: 'Cloud Uptime (Zero Data Loss)', value: 99.99, suffix: '%', icon: 'ShieldCheck' }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-setup',
    category: 'Setup & Security',
    question: 'How fast can I set up Pharmienta Pro for my pharmacy?',
    answer: 'You can be up and selling in a single day! Adding items is quick and straightforward with our smart search and pre-filled pharmaceutical catalog. If you already have an Excel list of your inventory or export from old software, our Nairobi team will import all your medicines and prices for free.'
  },
  {
    id: 'faq-auto-stock',
    category: 'Stock & Inventory',
    question: 'How does automatic stock calculation and deduction work?',
    answer: 'The instant a cashier rings a sale and completes the transaction, the exact quantity (e.g. 2 strips of Amoxicillin or 1 bottle of Cough Syrup) is immediately deducted from that batch in your live inventory. There is no need for manual end-of-day stock subtraction.'
  },
  {
    id: 'faq-returns',
    category: 'Stock & Inventory',
    question: 'What happens when a customer returns a medicine?',
    answer: 'Pharmienta Pro features a clean return & refund workflow. When a return is processed, the system logs the reason, notes the staff member handling it, and automatically restores the returned quantity back into your active stock count so your inventory remains 100% accurate.'
  },
  {
    id: 'faq-request-book',
    category: 'Stock & Inventory',
    question: 'How does the Customer Request Book help my chemist make more money?',
    answer: 'When a patient asks for a medicine you do not have in stock, your counter staff can log it into the Customer Request Book in 3 seconds. The system counts request frequencies and builds a prioritized shopping list for the owner, preventing you from buying slow-moving drugs and ensuring you stock what patients actually want.'
  },
  {
    id: 'faq-owner-dashboard',
    category: 'Owner Dashboard & Audits',
    question: 'Can I check my pharmacy sales when I am away from the shop?',
    answer: 'Yes! As the pharmacy owner, you can log into your secure Cloud Dashboard from any smartphone, tablet, or home computer. You can see real-time sales as they happen, check cash vs M-Pesa balances, view staff performance, and receive low-stock alerts wherever you are.'
  },
  {
    id: 'faq-staff-audit',
    category: 'Owner Dashboard & Audits',
    question: 'Can I track which staff member made a specific sale or gave a discount?',
    answer: 'Yes. Every staff member gets their own secure PIN or login. The system logs an audit trail of every sale, refund, price change, or discount along with timestamp and cashier name, stopping unauthorized price overrides and register shortages.'
  },
  {
    id: 'faq-mpesa',
    category: 'Payments & M-Pesa',
    question: 'Can I record both M-Pesa Till payments and cash sales easily?',
    answer: 'Yes. The POS cashier screen lets you switch seamlessly between Cash and M-Pesa Till/Paybill payments with instant balance calculation. At the end of the shift, the system gives you an exact breakdown of total cash collected versus M-Pesa receipts for quick reconciliation.'
  },
  {
    id: 'faq-pioneer-offer',
    category: 'Setup & Security',
    question: 'How does the 12-Month Free Pioneer Offer work?',
    answer: 'The first 50 Kenyan pharmacies that sign up get full unrestricted access to Pharmienta Pro completely FREE for an entire year (12 months). There are zero setup fees, no credit card required, and no hidden costs. After your free year, you can continue at our affordable rate of only KES 299/month or KES 2,990/year.'
  },
  {
    id: 'faq-data-safety',
    category: 'Setup & Security',
    question: 'Is my pharmacy inventory and sales data safe from loss?',
    answer: 'Yes. Pharmienta Pro uses cloud architecture with automated continuous backups. Even if your shop computer breaks, gets stolen, or suffers power failure, your inventory, sales history, and customer records are safely backed up in the cloud with zero data loss.'
  }
];

export const TRUSTED_PARTNERS = [
  'Amani Health Chemist',
  'Coastline Medicare',
  'Lakeview Community Chemist',
  'Highland Wellness Chemist',
  'Nairobi Central Pharmacy',
  'Kilimani Care Chemist'
];
