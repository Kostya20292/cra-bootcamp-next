export interface BenefitsResponse {
  title: string;
  description: string;
  benefits: string[];
}

export interface TaskTile {
  title: string;
  text: string;
}

export interface TasksResponse {
  description: string;
  tiles: TaskTile[];
}

export interface MultiplyStep {
  step_1: string;
  step_2: string;
}

export interface MultiplyItem {
  title: string;
  steps: MultiplyStep;
}

export type MultiplyResponse = MultiplyItem[];

export type ContactMethod = 'telegram' | 'whatsapp' | 'email';

export interface ContactFormRequest {
  name?: string;
  method: ContactMethod;
  contact: string;
}

export interface ContactFormResponse {
  message: string;
}
