import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  image?: string;
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface NewsItem {
  category: string;
  date: string;
  title: string;
  description: string;
  image: string;
}