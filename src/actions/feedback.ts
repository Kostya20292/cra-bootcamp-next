'use server'

import { submitForm } from '@/api'
import type { ContactFormRequest } from '@/types/api'
import type { FeedbackFormSubmitData } from '@/types/feedback'

export interface SubmitFeedbackResult {
  success: boolean
  errorType?: 'networkError' | 'requestFailed'
}

export const submitFeedbackAction = async (
  payload: FeedbackFormSubmitData,
): Promise<SubmitFeedbackResult> => {
  const body: ContactFormRequest = {
    method: payload.method,
    contact: payload.contact,
  }

  if (payload.name) {
    body.name = payload.name
  }

  const result = await submitForm(body)

  if (result.ok) {
    return { success: true }
  }

  const isNetwork = result.error.name === 'NetworkError' || result.error.name === 'TimeoutError'

  return {
    success: false,
    errorType: isNetwork ? 'networkError' : 'requestFailed',
  }
}
