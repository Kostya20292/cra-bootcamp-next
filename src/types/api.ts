export type ContactMethod = 'telegram' | 'whatsapp' | 'email';

export interface ContactFormRequest {
  name?: string;
  method: ContactMethod;
  contact: string;
}

export interface ContactFormResponse {
  message: string;
}
