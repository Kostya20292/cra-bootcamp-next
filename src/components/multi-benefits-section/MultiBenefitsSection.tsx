import Image from 'next/image';

import SnakeMark from '@/components/icons/SnakeMark';

import styles from './MultiBenefitsSection.module.scss';

import bgGrid from '@/assets/img/bg/bg-grid.svg';
import snakeBenefits from '@/assets/img/snake/snake-benefits.png';
import logo from '@/assets/icons/logo.svg';

const MARQUEE_PHRASE = 'Dream big earn bigger!';

const BENEFIT_CARDS = [
  {
    desktop:
      'We take on outsourced projects across any niche — from iGaming and dating to e-commerce and recruitment',
    mobile:
      'We run outsourced traffic projects across any niche — from iGaming and dating to e-commerce and recruitment',
  },
  {
    desktop: 'We deliver what has already proven effective — many times over',
    mobile: 'We don’t learn at the client’s expense',
  },
  {
    desktop: 'We don’t learn at the client’s expense',
    mobile: 'We use what works — proven again and again',
  },
] as const;

interface MarqueeStripProps {
  className?: string;
}

const MarqueeStrip = ({ className }: MarqueeStripProps) => (
  <div className={className} aria-hidden>
    <div className={styles.marqueeInner}>
      <div className={styles.marqueeSegment}>
        <span className={styles.marqueeText}>{MARQUEE_PHRASE}</span>
        <SnakeMark className={styles.marqueeMark} />
      </div>
    </div>
  </div>
);

const MultiBenefitsSection = () => (
  <section className={styles.section} aria-labelledby="multi-benefits-heading">
    <div className={styles.bg}>
      <div className={styles.bgPatternWrap}>
        <Image src={bgGrid} alt="" fill className={styles.bgPatternImg} sizes="100vw" />
      </div>
      <div className={styles.gradient} />
    </div>

    <div className={styles.inner}>
      <header className={styles.mobileHeader}>
        <Image src={logo} alt="CPA" width={32} height={29} className={styles.mobileLogo} />
        <button type="button" className={styles.menuButton} aria-label="Open navigation menu">
          menu
        </button>
      </header>

      <p className={styles.eyebrow}>Multi-benefits</p>

      <div className={styles.row}>
        <div className={styles.copy}>
          <h2 id="multi-benefits-heading" className={styles.title}>
            <span className={styles.titleDesktop}>
              Results can only be <span className={styles.accent}>guaranteed</span> when you control
              every step
            </span>
            <span className={styles.titleLaptop}>
              <span className={styles.titleLaptopLine}>
                Results can only be <span className={styles.accent}>guaranteed</span> when you{' '}
              </span>
              <span className={styles.titleLaptopSecond}>control every step</span>
            </span>
            <span className={styles.titleMobile}>
              Results can only be <span className={styles.accent}>guaranteed</span> when you control
              every step
            </span>
          </h2>
          <p className={styles.subtitle}>
            That’s why we built a full-time in-house team and custom infrastructure – tailored for
            every task, tested daily in the sweepstakes vertical
          </p>
        </div>

        <div className={styles.visualBand}>
          <div className={styles.figure}>
            <Image
              src={snakeBenefits}
              alt=""
              width={390}
              height={390}
              className={styles.snakeImg}
              sizes="(min-width: 1440px) 390px, (min-width: 1024px) 332px, 0"
            />
          </div>

          <ul className={styles.cards}>
            {BENEFIT_CARDS.map((card, index) => (
              <li key={index} className={styles.card}>
                <p className={styles.cardTextDesktop}>{card.desktop}</p>
                <p className={styles.cardTextMobile}>{card.mobile}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.marquee}>
          <div className={styles.marqueeFrame}>
            <MarqueeStrip className={styles.marqueeTrack} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MultiBenefitsSection;
