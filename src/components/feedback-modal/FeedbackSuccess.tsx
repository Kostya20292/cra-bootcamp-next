'use client';

import type { FeedbackModalTexts } from '@/types/feedback';
import styles from './FeedbackModal.module.scss';

interface FeedbackSuccessProps {
  texts: FeedbackModalTexts;
  onDone: () => void;
}

const FeedbackSuccess = ({ texts, onDone }: FeedbackSuccessProps) => (
  <div className={styles.form}>
    <div className={styles.successText}>
      <h3 className={styles.successTitle}>
        <span>{texts.successTitleLine1}</span>
        <br className={styles.successTitleBreak} />
        <span>{` ${texts.successTitleLine2}`}</span>
      </h3>
      <p className={styles.successBody}>
        <span className={styles.successBodyLine}>{texts.successLine1}</span>
        <br className={styles.successBodyBreak} />
        <span className={styles.successBodyLine}>{texts.successLine2}</span>
      </p>
    </div>
    <button type="button" className={styles.submit} onClick={onDone}>
      {texts.done}
    </button>
  </div>
);

export default FeedbackSuccess;
