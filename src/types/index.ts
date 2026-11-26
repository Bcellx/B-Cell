/**
 * Core type definitions for iFix Pro & Store
 * Architecture designed for easy AI inspection, data grounding, and type-safe UI rendering.
 */

export type BrandType = 'Apple' | 'Samsung' | 'Xiaomi' | 'Oppo' | 'Vivo' | 'Realme' | 'Infinix' | 'Lainnya';

export type DiagnosticKey = 'lcd' | 'battery' | 'matot' | 'camera' | 'water';

export interface DiagnosticItem {
  id: DiagnosticKey;
  label: string;
  badge: string;
  title: string;
  description: string;
  symptoms: string[];
  estimatedTime: string;
  warranty: string;
  startingPrice: number;
  imageUrl: string;
  recommendedPart: string;
}

export interface ServiceOffering {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  startingPrice: number;
  warrantyText: string;
  highlights: string[];
  iconName: 'smartphone' | 'battery-charging' | 'cpu' | 'terminal' | 'camera' | 'sparkles' | 'banknote';
  badge?: string;
  isWide?: boolean;
}

export interface SmartphoneProduct {
  id: string;
  name: string;
  brand: BrandType;
  condition: 'Baru Segel' | 'Ex Resmi iBox' | 'Second Mulus' | 'Like New';
  price: number;
  originalPrice?: number;
  storage: string;
  batteryHealth?: string;
  specs: string[];
  imageUrl: string;
  isAvailable: boolean;
  warrantyNote: string;
}

export interface PriceEstimateOption {
  brand: BrandType;
  issue: string;
  basePriceIphone: number;
  basePriceAndroid: number;
  warrantyDays: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'layanan' | 'biaya' | 'garansi' | 'pengiriman';
}

export interface TestimonialItem {
  id: string;
  customerName: string;
  device: string;
  repairType: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface BookingFormData {
  customerName: string;
  phoneNumber: string;
  brand: BrandType;
  phoneModel: string;
  repairType: string;
  damageDescription: string;
  urgency: 'Biasa' | 'Express 30 Menit' | 'Konsultasi Dulu';
}
