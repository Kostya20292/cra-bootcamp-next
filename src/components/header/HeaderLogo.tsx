'use client';

import clsx from 'clsx';
import styles from './Header.module.scss';
import LogoIcon from '../icons/LogoIcon';

interface HeaderLogoProps {
  className?: string;
  onLogoClick?: () => void;
}

const HeaderLogo = ({ onLogoClick, className }: HeaderLogoProps) => (
  <button
    type="button"
    className={clsx(styles.logo, className)}
    aria-label="Go to first screen"
    onClick={onLogoClick}
  >
    <LogoIcon />
  </button>
);

export default HeaderLogo;
