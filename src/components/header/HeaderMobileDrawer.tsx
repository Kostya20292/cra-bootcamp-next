'use client';

import clsx from 'clsx';
import type { PointerEvent, TransitionEvent } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './Header.module.scss';
import NavAction from '../nav-action/NavAction';
import HeaderLogo from './HeaderLogo';
import HeaderSectionsLinks from './HeaderSectionsLinks';
import SocialMediaBlock from '../social-media/SocialMediaBlock';
import HeaderLocaleButtons from './HeaderLocaleButtons';

const TRANSITION_MS = 300;

const HeaderMobileDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const openRafIdRef = useRef<number | null>(null);
  const closeTimeoutIdRef = useRef<number | null>(null);

  const clearCloseTimeout = useCallback(() => {
    if (closeTimeoutIdRef.current === null) return;
    window.clearTimeout(closeTimeoutIdRef.current);
    closeTimeoutIdRef.current = null;
  }, []);

  const clearOpenRaf = useCallback(() => {
    if (openRafIdRef.current === null) return;
    window.cancelAnimationFrame(openRafIdRef.current);
    openRafIdRef.current = null;
  }, []);

  const unmountDrawer = useCallback(() => {
    clearCloseTimeout();
    setIsMounted(false);
  }, [clearCloseTimeout]);

  const scheduleUnmount = useCallback(() => {
    clearCloseTimeout();
    closeTimeoutIdRef.current = window.setTimeout(() => {
      setIsMounted(false);
      closeTimeoutIdRef.current = null;
    }, TRANSITION_MS);
  }, [clearCloseTimeout]);

  const handleOpen = useCallback(() => {
    clearCloseTimeout();
    clearOpenRaf();
    setIsMounted(true);
    openRafIdRef.current = window.requestAnimationFrame(() => {
      setIsOpen(true);
    });
  }, [clearCloseTimeout, clearOpenRaf]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    scheduleUnmount();
  }, [scheduleUnmount]);

  useEffect(
    () => () => {
      clearOpenRaf();
      clearCloseTimeout();
    },
    [clearCloseTimeout, clearOpenRaf],
  );

  useEffect(() => {
    if (!isMounted) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      handleClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleClose, isMounted]);

  const handleOverlayPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  const handleDrawerTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.propertyName !== 'transform') return;
    if (isOpen) return;

    unmountDrawer();
  };

  return (
    <>
      <NavAction as="button" type="button" aria-label="Open menu" onClick={handleOpen}>
        Меню
      </NavAction>

      {typeof document !== 'undefined' &&
        isMounted &&
        createPortal(
          <div
            className={styles.overlay}
            role="presentation"
            onPointerDown={handleOverlayPointerDown}
          >
            <div
              className={clsx(styles.drawer, isOpen && styles.open)}
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              onPointerDown={(event) => event.stopPropagation()}
              onTransitionEnd={handleDrawerTransitionEnd}
            >
              <div>
                <HeaderLogo onLogoClick={handleClose} />
                <button
                  type="button"
                  className={styles.close_btn}
                  onClick={handleClose}
                  aria-label="Close menu"
                >
                  Х
                </button>
              </div>
              <ul className={styles.drawer_nav}>
                <HeaderSectionsLinks size="large" onNavigate={handleClose} />
                <div className={styles.socials}>
                  <SocialMediaBlock variant="icons" />
                </div>
                <HeaderLocaleButtons size="large" onLanguageChange={handleClose} />
              </ul>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default HeaderMobileDrawer;
