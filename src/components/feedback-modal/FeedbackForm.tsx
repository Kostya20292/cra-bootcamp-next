'use client';

import clsx from 'clsx';
import { forwardRef, useId, useRef, useState, type FormEvent } from 'react';
import type { ContactMethod, FeedbackFormSubmitData, FeedbackModalTexts } from '@/types/feedback';
import MethodSelect from './MethodSelect';
import styles from './FeedbackModal.module.scss';

interface FeedbackFormProps {
  texts: FeedbackModalTexts;
  onSubmit: (data: FeedbackFormSubmitData) => void;
  submitting: boolean;
  error: string | null;
}

const FeedbackForm = forwardRef<HTMLInputElement, FeedbackFormProps>(
  ({ texts, onSubmit, submitting, error }, nameInputRef) => {
    const [name, setName] = useState('');
    const [method, setMethod] = useState<ContactMethod | ''>('');
    const [contact, setContact] = useState('');
    const [isContactFocused, setIsContactFocused] = useState(false);
    const [isMethodOpen, setIsMethodOpen] = useState(false);
    const methodTriggerRef = useRef<HTMLButtonElement>(null);
    const baseId = useId();
    const nameId = `${baseId}-name`;
    const contactId = `${baseId}-contact`;
    const methodListId = `${baseId}-method-list`;
    const methodLabelId = `${baseId}-method-label`;

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!method) {
        methodTriggerRef.current?.focus();
        return;
      }

      onSubmit({
        name: name.trim(),
        method,
        contact: contact.trim(),
      });
    };

    const handleMethodToggle = () => {
      setIsMethodOpen((prev) => !prev);
    };

    const handleMethodClose = () => {
      setIsMethodOpen(false);
    };

    const contactControlClasses = clsx(
      styles.input,
      styles.contactInput,
      contact === '' && !isContactFocused && styles.contactInputMuted,
    );

    return (
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.fields}>
          <p className={styles.hint}>
            {texts.hintBefore}
            <span className={styles.asterisk} aria-hidden="true">
              *
            </span>
            {texts.hintAfter}
          </p>
          <div className={clsx(styles.fieldShell, styles.fieldName)}>
            <label htmlFor={nameId} className={styles.visuallyHidden}>
              {texts.namePlaceholder}
            </label>
            <input
              ref={nameInputRef}
              id={nameId}
              className={styles.input}
              name="name"
              type="text"
              autoComplete="name"
              placeholder={texts.namePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <MethodSelect
            ref={methodTriggerRef}
            value={method}
            onChange={setMethod}
            isOpen={isMethodOpen}
            onToggle={handleMethodToggle}
            onClose={handleMethodClose}
            texts={texts}
            methodLabelId={methodLabelId}
            methodListId={methodListId}
          />
          <div className={clsx(styles.fieldShell, styles.fieldContact)}>
            <label htmlFor={contactId} className={styles.visuallyHidden}>
              {texts.contactPlaceholder}
              <span className={styles.asterisk} aria-hidden="true">
                *
              </span>
            </label>
            <div className={styles.contactControl}>
              <input
                id={contactId}
                className={contactControlClasses}
                name="contact"
                type="text"
                required
                autoComplete="off"
                placeholder={
                  contact === '' && isContactFocused ? texts.contactPlaceholder : undefined
                }
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                onFocus={() => setIsContactFocused(true)}
                onBlur={() => setIsContactFocused(false)}
                aria-required="true"
              />
              {contact === '' && !isContactFocused && (
                <span className={styles.contactHint} aria-hidden="true">
                  <span className={styles.contactHintText}>{texts.contactPlaceholder}</span>
                  <span className={styles.contactStar}>*</span>
                </span>
              )}
            </div>
          </div>
        </div>
        {error && (
          <p className={styles.error} role="alert">
            {error}
          </p>
        )}
        <button
          type="submit"
          className={styles.submit}
          disabled={submitting}
          aria-busy={submitting}
        >
          {texts.submit}
        </button>
      </form>
    );
  },
);

FeedbackForm.displayName = 'FeedbackForm';

export default FeedbackForm;
