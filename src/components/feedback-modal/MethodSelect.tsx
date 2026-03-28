'use client';

import clsx from 'clsx';
import { forwardRef, useEffect, useRef, useState } from 'react';
import SelectChevron from '@/components/icons/SelectChevron';
import { getMethodLabel, METHOD_VALUES } from '@/locales/feedback';
import type { ContactMethod, FeedbackModalTexts } from '@/types/feedback';
import styles from './FeedbackModal.module.scss';

interface MethodSelectProps {
  value: ContactMethod | '';
  onChange: (value: ContactMethod) => void;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  texts: FeedbackModalTexts;
  methodLabelId: string;
  methodListId: string;
}

const MethodSelect = forwardRef<HTMLButtonElement, MethodSelectProps>(
  (
    { value, onChange, isOpen, onToggle, onClose, texts, methodLabelId, methodListId },
    triggerRef,
  ) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const [prevIsOpen, setPrevIsOpen] = useState(false);

    if (isOpen !== prevIsOpen) {
      setPrevIsOpen(isOpen);
      setHighlightedIndex(isOpen ? Math.max(0, METHOD_VALUES.indexOf(value as ContactMethod)) : -1);
    }

    const getOptionId = (index: number) => `${methodListId}-option-${index}`;

    useEffect(() => {
      if (!isOpen) return;

      const handlePointerDown = (event: PointerEvent) => {
        if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
          onClose();
        }
      };

      document.addEventListener('pointerdown', handlePointerDown);
      return () => document.removeEventListener('pointerdown', handlePointerDown);
    }, [isOpen, onClose]);

    const handleSelect = (item: ContactMethod) => {
      onChange(item);
      onClose();
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (!isOpen) {
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === ' ') {
          event.preventDefault();
          onToggle();
        }
        return;
      }

      switch (event.key) {
        case 'ArrowDown': {
          event.preventDefault();
          setHighlightedIndex((prev) =>
            prev < METHOD_VALUES.length - 1 ? prev + 1 : 0,
          );
          break;
        }
        case 'ArrowUp': {
          event.preventDefault();
          setHighlightedIndex((prev) =>
            prev > 0 ? prev - 1 : METHOD_VALUES.length - 1,
          );
          break;
        }
        case 'Home': {
          event.preventDefault();
          setHighlightedIndex(0);
          break;
        }
        case 'End': {
          event.preventDefault();
          setHighlightedIndex(METHOD_VALUES.length - 1);
          break;
        }
        case 'Enter':
        case ' ': {
          event.preventDefault();
          if (highlightedIndex >= 0) {
            handleSelect(METHOD_VALUES[highlightedIndex]);
          }
          break;
        }
        case 'Escape': {
          event.preventDefault();
          event.nativeEvent.stopImmediatePropagation();
          onClose();
          break;
        }
        default:
          break;
      }
    };

    const activeDescendant =
      isOpen && highlightedIndex >= 0 ? getOptionId(highlightedIndex) : undefined;

    const triggerClasses = clsx(
      styles.methodField,
      styles.fieldShellSelect,
      styles.fieldMethod,
      isOpen && styles.methodFieldOpen,
    );

    const chevronClasses = clsx(styles.selectIcon, isOpen && styles.selectIconOpen);

    return (
      <div ref={rootRef} className={triggerClasses}>
        <span id={methodLabelId} className={styles.visuallyHidden}>
          {texts.contactMethodLabel}
          <span className={styles.asterisk} aria-hidden="true">
            *
          </span>
        </span>
        <button
          ref={triggerRef}
          type="button"
          role="combobox"
          className={styles.methodOpenTrigger}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={isOpen ? methodListId : undefined}
          aria-labelledby={methodLabelId}
          aria-activedescendant={activeDescendant}
          onClick={onToggle}
          onKeyDown={handleKeyDown}
        >
          <span className={styles.methodTriggerInner}>
            {value === '' ? (
              <span className={styles.methodTriggerPlaceholder}>
                {texts.selectPlaceholder}
                <span className={styles.selectRequiredMark} aria-hidden="true">
                  *
                </span>
              </span>
            ) : (
              <span className={styles.methodTriggerValue}>{getMethodLabel(value, texts)}</span>
            )}
          </span>
          <SelectChevron className={chevronClasses} />
        </button>
        {isOpen && (
          <div className={styles.methodListDrop}>
            <div className={styles.methodDivider} aria-hidden="true" />
            <ul
              id={methodListId}
              role="listbox"
              className={styles.methodList}
              aria-labelledby={methodLabelId}
            >
              {METHOD_VALUES.map((item, index) => (
                <li
                  key={item}
                  id={getOptionId(index)}
                  role="option"
                  aria-selected={value === item}
                  className={clsx(
                    styles.methodOption,
                    value === item && styles.methodOptionSelected,
                    highlightedIndex === index && styles.methodOptionHighlighted,
                  )}
                  onMouseDown={(event) => event.preventDefault()}
                  onMouseEnter={() => setHighlightedIndex(index)}
                  onClick={() => handleSelect(item)}
                >
                  {getMethodLabel(item, texts)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
);

MethodSelect.displayName = 'MethodSelect';

export default MethodSelect;
