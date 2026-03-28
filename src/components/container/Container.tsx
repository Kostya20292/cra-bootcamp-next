// ===================== Container.tsx =====================

import clsx from 'clsx';
import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Container.module.scss';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  // Контент внутри контейнера
  children: ReactNode;

  // Позволяет менять HTML-тег (для семантики)
  as?: 'div' | 'section' | 'main' | 'header' | 'footer';
}

export function Container({
  children,

  // По умолчанию div
  as: Component = 'div',
  className,
  ...props
}: ContainerProps) {
  return (
    <Component className={clsx(styles.container, className)} {...props}>
      {children}
    </Component>
  );
}

// Container отвечает только за ширину и отступы,
// не использовать для управления layout секции
