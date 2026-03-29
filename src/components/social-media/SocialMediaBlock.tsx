'use client';

import type { ReactNode } from 'react';
import styles from './SocialMediaBlock.module.scss';
import InstagramIcon from '../icons/InstagramIcon';
import TelegramIcon from '../icons/TelegramIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import NavAction from '../nav-action/NavAction';

interface SocialLink {
  label: string;
  href: string;
  icon: ReactNode;
}

const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Instagram', href: '#', icon: <InstagramIcon /> },
  { label: 'Telegram', href: '#', icon: <TelegramIcon /> },
  { label: 'LinkedIn', href: '#', icon: <LinkedinIcon /> },
];

type SocialMediaVariant = 'icons' | 'labels';

interface SocialMediaBlockProps {
  variant?: SocialMediaVariant;
}

// TODO: добавить в футер
const SocialMediaBlock = ({ variant = 'labels' }: SocialMediaBlockProps) => (
  <ul className={styles.socials}>
    {SOCIAL_LINKS.map(({ label, href, icon }) => (
      <li key={label}>
        <NavAction href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
          {variant === 'icons' ? icon : label}
        </NavAction>
      </li>
    ))}
  </ul>
);

export default SocialMediaBlock;
