import type { Locale } from '@/shared/constants';
import type {
  BenefitsResponse,
  ContactFormRequest,
  ContactFormResponse,
  MultiplyResponse,
  TasksResponse,
} from '@/types/api';

import { api } from './safeFetch';

export const getBenefits = (locale: Locale) => api.get<BenefitsResponse>(`/${locale}/benefits`);

export const getTasks = (locale: Locale) => api.get<TasksResponse>(`/${locale}/tasks`);

export const getMultiply = (locale: Locale) => api.get<MultiplyResponse>(`/${locale}/multiply`);

export const submitForm = (body: ContactFormRequest) =>
  api.post<ContactFormResponse>('/form', body);
