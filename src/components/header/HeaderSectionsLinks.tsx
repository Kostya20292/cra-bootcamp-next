'use client';

import clsx from 'clsx';
import styles from './Header.module.scss';
import NavAction, { type NavActionSize } from '../nav-action/NavAction';

const NAVIGATION_ITEMS = [
  { label: 'MAIN', section: 'main' },
  { label: 'TEAM', section: 'team' },
  { label: 'BENEFITS', section: 'benefits' },
  { label: 'JOIN US', section: 'joinUs' },
] as const;

type HeaderSection = (typeof NAVIGATION_ITEMS)[number]['section'];

interface HeaderSectionsProps {
  className?: string;
  excludeMain?: boolean;
  onNavigate?: (section: HeaderSection) => void;
  size?: NavActionSize;
}

const HeaderSectionsLinks = ({ className, excludeMain, onNavigate, size }: HeaderSectionsProps) => (
  <>
    {NAVIGATION_ITEMS.filter(({ section }) => !(excludeMain && section === 'main')).map(
      ({ label, section }) => (
      <li className={clsx(styles.section, className)} key={section}>
        <NavAction as="button" type="button" size={size} onClick={() => onNavigate?.(section)}>
          {label}
        </NavAction>
      </li>
      ),
    )}
  </>
);

export default HeaderSectionsLinks;
