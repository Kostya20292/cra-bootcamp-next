'use client';

import styles from './Header.module.scss';
import HeaderLogo from './HeaderLogo';
import useViewport from '@/hooks/useViewport';
import { MIN_WIDTH_TABLET } from '@/shared/constants';
import HeaderMobileDrawer from './HeaderMobileDrawer';
import HeaderSectionsLinks from './HeaderSectionsLinks';
import HeaderLocaleButtons from './HeaderLocaleButtons';

const Header = () => {
  const width = useViewport();

  return (
    <header className={styles.header}>
      <HeaderLogo />
      {width !== null && width <= MIN_WIDTH_TABLET ? (
        <HeaderMobileDrawer />
      ) : (
        <nav className={styles.navigation} aria-label="Main navigation">
          <ul className={styles.navigation_list}>
            <HeaderSectionsLinks excludeMain />
            <HeaderLocaleButtons />
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
