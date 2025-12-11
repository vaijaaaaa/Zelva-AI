import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingModel {
  title: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}
