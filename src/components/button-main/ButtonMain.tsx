import type { ButtonHTMLAttributes } from 'react';
import styles from './ButtonMain.module.scss';

type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonMainProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
}

const ButtonMain = ({
  children,
  size = 'sm',
  className,
  type = 'button',
  ...rest
}: ButtonMainProps) => (
  <button
    className={[styles.button, styles[size], className].filter(Boolean).join(' ')}
    type={type}
    {...rest}
  >
    <span className={styles.face}>{children}</span>
  </button>
);

export type { ButtonMainProps, ButtonSize };
export default ButtonMain;
