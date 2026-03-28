'use client';

import Image from 'next/image';
import { useState, type KeyboardEvent } from 'react';

import ButtonMain from '@/components/button-main/ButtonMain';
import FeedbackModal from '@/components/feedback-modal/FeedbackModal';
import Footer from '@/components/footer/Footer';
import ArrowIcon from '@/components/icons/ArrowIcon';

import bgGrid from '@/assets/img/bg/bg-grid.svg';
import logo from '@/assets/icons/logo.svg';
import snakeWithUs from '@/assets/img/snake/snake-with-us.png';

import styles from './MultiplyWithUsSection.module.scss';

interface MultiplyPanel {
  tabLabel: string;
  ctaLabel: string;
  step1: string;
  step2: string;
}

const MULTIPLY_PANELS: readonly MultiplyPanel[] = [
  {
    tabLabel: 'For Media Buyers',
    ctaLabel: 'Join the team',
    step1:
      'Got experience with sweepstakes and large ad budgets? Looking for a team where you can grow and scale without limits?',
    step2:
      'Multiply your profits with MULTICPA — we provide the budget, all the tools and high profit shares',
  },
  {
    tabLabel: 'For Businesses',
    ctaLabel: 'Partner up',
    step1:
      'Experienced solo buyer or running a whole team? Need a reliable partner program with fast onboarding in sweepstakes and full support?',
    step2:
      'Work with MULTICPA — you run the traffic, we handle everything else. From infrastructure and tech support to funnels, creatives, and expert guidance',
  },
  {
    tabLabel: 'For Partners',
    ctaLabel: 'Launch now',
    step1:
      'Need real customers — not theories on how to get them? Have a budget, but no traffic team, creatives, or strategy?',
    step2:
      "Contact MULTICPA — we'll build everything from the ground up, drive traffic, and deliver leads in any niche",
  },
];

const MultiplyWithUsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const active = MULTIPLY_PANELS[activeIndex] ?? MULTIPLY_PANELS[0];

  const handleSelectTab = (index: number) => {
    setActiveIndex(index);
  };

  const handlePillKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleSelectTab(index);
    }
  };

  return (
    <>
      <section className={styles.section} aria-labelledby="multiply-with-us-title">
        <h2 id="multiply-with-us-title" className={styles.visuallyHidden}>
          Multiply with us
        </h2>
        <div className={styles.bg} aria-hidden>
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

          <p className={styles.eyebrowDesktop} aria-hidden="true">
            Multiply with us
          </p>

          <div className={styles.mainStack}>
            <div className={styles.topRow}>
              <div className={styles.leftRail}>
                <div className={styles.pills} role="group" aria-label="Audience segments">
                  {MULTIPLY_PANELS.map((panel, index) => {
                    const isActive = index === activeIndex;
                    return (
                      <button
                        key={panel.tabLabel}
                        type="button"
                        aria-pressed={isActive}
                        className={isActive ? styles.pillActive : styles.pillOutline}
                        onClick={() => handleSelectTab(index)}
                        onKeyDown={(e) => handlePillKeyDown(e, index)}
                      >
                        <span className={styles.pillLabel}>{panel.tabLabel}</span>
                        <ArrowIcon className={styles.pillArrow} aria-hidden />
                      </button>
                    );
                  })}
                </div>

                <div className={styles.snakeWrap} aria-hidden>
                  <Image
                    src={snakeWithUs}
                    alt=""
                    width={1212}
                    height={738}
                    className={styles.snakeImg}
                    sizes="(min-width: 1024px) 631px, 100vw"
                  />
                </div>
              </div>

              <article className={styles.infoCard} aria-live="polite">
                <div className={styles.infoInner}>
                  <p className={styles.infoLead}>{active.step1}</p>
                  <div className={styles.dividerArrow} aria-hidden>
                    <ArrowIcon className={styles.dividerIcon} />
                  </div>
                  <p className={styles.infoBody}>{active.step2}</p>
                  <div className={styles.dividerArrow} aria-hidden>
                    <ArrowIcon className={styles.dividerIcon} />
                  </div>
                  <ButtonMain
                    type="button"
                    size="md"
                    className={styles.joinButton}
                    onClick={() => setIsFeedbackOpen(true)}
                  >
                    {active.ctaLabel}
                  </ButtonMain>
                </div>
              </article>
            </div>

            <p className={styles.eyebrowMobile} aria-hidden="true">
              Multiply with us
            </p>

            <div className={styles.footerRow}>
              <div className={styles.footerSlot}>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
    </>
  );
};

export default MultiplyWithUsSection;
