'use client';

import clsx from 'clsx';
import { Fragment } from 'react';
import { DEFAULT_LOCALE } from '@/shared/constants';
import type { Locale } from '@/shared/constants';
import styles from './Header.module.scss';
import NavAction, { type NavActionSize } from '../nav-action/NavAction';

const LOCALE_ITEMS: Array<{ locale: Locale; label: string }> = [
  { locale: 'en', label: 'ENG' },
  { locale: 'ru', label: 'РУС' },
];

interface HeaderLocaleButtonsProps {
  className?: string;
  currentLanguage?: Locale;
  onLanguageChange?: (language: Locale) => void;
  size?: NavActionSize;
}

const HeaderLocaleButtons = ({
  className,
  currentLanguage = DEFAULT_LOCALE,
  onLanguageChange,
  size,
}: HeaderLocaleButtonsProps) => (
  <li className={clsx(styles.locale, className)}>
    {LOCALE_ITEMS.map(({ locale, label }, index) => (
      <Fragment key={locale}>
        {index > 0 ? (
          <span className={clsx(styles.localeSeparator, size === 'large' && styles.large)}>/</span>
        ) : null}

        <NavAction
          as="button"
          type="button"
          size={size}
          className={styles.locale_btn}
          onClick={() => onLanguageChange?.(locale)}
          active={currentLanguage === locale}
        >
          {label}
        </NavAction>
      </Fragment>
    ))}
  </li>
);

export default HeaderLocaleButtons;
