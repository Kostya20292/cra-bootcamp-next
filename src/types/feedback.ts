import type { ContactMethod } from '@/types/api';

export type { ContactMethod };

export type Step = 'form' | 'success';

export interface FeedbackFormSubmitData {
  name: string;
  method: ContactMethod;
  contact: string;
}

export interface FeedbackModalTexts {
  hintBefore: string;
  hintAfter: string;
  namePlaceholder: string;
  contactMethodLabel: string;
  contactPlaceholder: string;
  submit: string;
  successTitleLine1: string;
  successTitleLine2: string;
  successLine1: string;
  successLine2: string;
  done: string;
  close: string;
  formTitle: string;
  successTitle: string;
  selectPlaceholder: string;
  telegram: string;
  whatsapp: string;
  email: string;
  requestFailed: string;
  networkError: string;
}
