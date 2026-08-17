export interface Feature {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  badge?: string;
  highlight?: string;
}

export interface PainPoint {
  id: string;
  title: string;
  challenge: string;
  consequence: string;
  pharmientaSolution: string;
  iconName: string;
}

export interface Benefit {
  id: string;
  metric: string;
  title: string;
  description: string;
  detailPoints: string[];
  iconName: string;
  badge: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  pharmacyName: string;
  location: string;
  quote: string;
  avatar: string;
  rating: number;
  verified: boolean;
  impactMetric: string;
}

export interface FaqItem {
  id: string;
  category: 'Stock & Inventory' | 'Owner Dashboard & Audits' | 'Payments & M-Pesa' | 'Setup & Security';
  question: string;
  answer: string;
}

export interface LeadSubmission {
  pharmacyName: string;
  ownerName: string;
  email: string;
  phone: string;
  county: string;
  branches: string;
}
