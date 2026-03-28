'use client';

import ArrowIcon from '@/components/icons/ArrowIcon';
import styles from './Footer.module.scss';

interface SocialLink {
  label: string;
  href: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  { label: 'Instagram', href: '#' },
  { label: 'Telegram', href: '#' },
  { label: 'LinkedIn', href: '#' },
];

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <nav aria-label="Social media links">
        <ul className={styles.socialsList}>
          {SOCIAL_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                className={styles.socialLink}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className={styles.scrollToTop}
        type="button"
        onClick={handleScrollToTop}
        aria-label="Scroll to top"
      >
        <span className={styles.scrollToTopLabel}>Scroll to Top</span>
        <ArrowIcon className={styles.arrowIcon} />
      </button>
    </footer>
  );
};

export default Footer;
