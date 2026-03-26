import type { ContactFormRequest, ContactFormResponse } from '@/types/api';

import { api } from './safeFetch';

export const submitForm = (body: ContactFormRequest) =>
  api.post<ContactFormResponse>('/form', body);
