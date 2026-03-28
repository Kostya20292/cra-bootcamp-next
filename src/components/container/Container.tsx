import clsx from 'clsx';
import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
  ReactElement,
} from 'react';
import styles from './Container.module.scss';

interface ContainerProps<TAs extends ElementType> {
  as?: TAs;
}

type ContainerComponent = <TAs extends ElementType = 'div'>(
  props: PropsWithChildren<ContainerProps<TAs> & ComponentPropsWithoutRef<TAs>>
) => ReactElement | null;

export const Container: ContainerComponent = ({
  as: Component = 'div',
  className,
  children,
  ...props
}) => (
  <Component className={clsx(styles.container, className)} {...props}>
    {children}
  </Component>
);
