'use client';

import styles from './Header.module.scss';
import HeaderLogo from './HeaderLogo';
import useViewport from '@/hooks/useViewport';
import { MIN_WIDTH_TABLET } from '@/shared/constants';
import HeaderMobileDrawer from './HeaderMobileDrawer';
import HeaderSectionsLinks from './HeaderSectionsLinks';
import HeaderLocaleButtons from './HeaderLocaleButtons';
import { Container } from '../container/Container';

const Header = () => {
  const width = useViewport();

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header_inner}>
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
        </div>
      </Container>
    </header>
  );
};

export default Header;
