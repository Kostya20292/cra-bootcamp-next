import { createSafeFetch } from '@asouei/safe-fetch';

import { FETCH_TIMEOUT } from '@/shared/constants';

export const api = createSafeFetch({
  baseURL: process.env.API_BASE_URL ?? '',
  headers: {
    'x-api-key': process.env.API_KEY ?? '',
  },
  timeoutMs: FETCH_TIMEOUT,
  totalTimeoutMs: FETCH_TIMEOUT,
});
