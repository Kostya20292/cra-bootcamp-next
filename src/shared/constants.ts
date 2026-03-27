export const API_BASE_URL = process.env.API_BASE_URL!;
export const API_KEY = process.env.API_KEY!;
export const API_KEY_HEADER = 'x-api-key';

export const API_ENDPOINTS = {
  benefits: 'benefits',
  tasks: 'tasks',
  multiply: 'multiply',
  form: 'form',
} as const;

export const DEFAULT_LOCALE = 'en';
export const SUPPORTED_LOCALES = ['en', 'ru'] as const;

export const CONTACT_METHODS = ['telegram', 'whatsapp', 'email'] as const;

export const SOCIAL_LINKS = {
  instagram: '#',
  linkedin: '#',
  telegram: '#',
} as const;
