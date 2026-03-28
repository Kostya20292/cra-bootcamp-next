'use client';

import clsx from 'clsx';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { submitFeedbackAction } from '@/actions/feedback';
import SnakeMark from '@/components/icons/SnakeMark';
import { getFeedbackTexts } from '@/locales/feedback';
import type { FeedbackFormSubmitData, Step } from '@/types/feedback';
import FeedbackForm from './FeedbackForm';
import FeedbackSuccess from './FeedbackSuccess';
import styles from './FeedbackModal.module.scss';

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'textarea:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale?: 'en' | 'ru';
}

const FeedbackModal = ({ isOpen, onClose, locale = 'en' }: FeedbackModalProps) => {
  const texts = getFeedbackTexts(locale);
  const titleId = useId();
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState<Step>('form');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const resetAndClose = useCallback(() => {
    setStep('form');
    setError(null);
    setSubmitting(false);
    onClose();
  }, [onClose]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const frame = requestAnimationFrame(() => {
      if (step === 'form') {
        nameInputRef.current?.focus();
        return;
      }
      dialogRef.current?.querySelector<HTMLElement>(`.${styles.submit}`)?.focus();
    });
    return () => cancelAnimationFrame(frame);
  }, [isOpen, step]);

  const getTabbable = useCallback(() => {
    const root = dialogRef.current;
    if (!root) return [];

    return Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
      (el) => el.tabIndex !== -1,
    );
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        resetAndClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const tabbables = getTabbable();
      if (tabbables.length === 0) return;

      const first = tabbables[0];
      const last = tabbables[tabbables.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }
        return;
      }

      if (document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [getTabbable, isOpen, resetAndClose]);

  const handleOverlayPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      resetAndClose();
    }
  };

  const handleFormSubmit = useCallback(
    async (data: FeedbackFormSubmitData) => {
      setError(null);
      setSubmitting(true);
      try {
        const result = await submitFeedbackAction(data);

        if (result.success) {
          setStep('success');
          return;
        }

        setError(texts[result.errorType ?? 'requestFailed']);
      } catch {
        setError(texts.requestFailed);
      } finally {
        setSubmitting(false);
      }
    },
    [texts],
  );

  if (!mounted || !isOpen) return null;

  const dialogLabel = step === 'form' ? texts.formTitle : texts.successTitle;

  return createPortal(
    <div className={styles.overlay} role="presentation" onPointerDown={handleOverlayPointerDown}>
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <h2 id={titleId} className={styles.visuallyHidden}>
          {dialogLabel}
        </h2>
        <button
          type="button"
          className={styles.close}
          onClick={resetAndClose}
          aria-label={texts.close}
        >
          <span className={styles.closeMark} aria-hidden="true">
            X
          </span>
        </button>
        <div className={clsx(styles.inner, styles.innerForm)}>
          <SnakeMark className={styles.mark} />
          {step === 'form' ? (
            <FeedbackForm
              ref={nameInputRef}
              texts={texts}
              onSubmit={handleFormSubmit}
              submitting={submitting}
              error={error}
            />
          ) : (
            <FeedbackSuccess texts={texts} onDone={resetAndClose} />
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default FeedbackModal;
