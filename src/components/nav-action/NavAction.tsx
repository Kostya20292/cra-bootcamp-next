'use client';

import clsx from 'clsx';
import type { ComponentPropsWithoutRef, ElementType, ReactElement, ReactNode } from 'react';
import styles from './NavAction.module.scss';

export type NavActionSize = 'default' | 'large';

interface NavActionProps<TAs extends ElementType> {
  as?: TAs;
  children: ReactNode;
  className?: string;
  active?: boolean;
  size?: NavActionSize;
}

type NavActionComponent = <TAs extends ElementType = 'a'>(
  props: NavActionProps<TAs> & Omit<ComponentPropsWithoutRef<TAs>, keyof NavActionProps<TAs>>
) => ReactElement | null;

const NavAction: NavActionComponent = ({
  as: Component = 'a',
  children,
  className,
  active,
  size = 'default',
  ...props
}) => (
  <Component
    className={clsx(
      styles.nav_action,
      size === 'large' && styles.large,
      active && styles.active,
      className,
    )}
    {...props}
  >
    {children}
  </Component>
);

export default NavAction;
