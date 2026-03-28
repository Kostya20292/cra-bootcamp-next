import type { ContactMethod, FeedbackModalTexts } from '@/types/feedback';
import feedbackEn from './en/feedback.json';
import feedbackRu from './ru/feedback.json';

export type FeedbackLocale = 'en' | 'ru';

const feedbackByLocale: Record<FeedbackLocale, FeedbackModalTexts> = {
  en: feedbackEn as FeedbackModalTexts,
  ru: feedbackRu as FeedbackModalTexts,
};

export const getFeedbackTexts = (locale: FeedbackLocale): FeedbackModalTexts =>
  feedbackByLocale[locale] ?? feedbackByLocale.en;

export const METHOD_VALUES: ContactMethod[] = ['telegram', 'whatsapp', 'email'];

export const getMethodLabel = (method: ContactMethod, texts: FeedbackModalTexts): string =>
  texts[method];
