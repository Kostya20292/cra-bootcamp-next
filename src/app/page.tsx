'use client';

import { useState } from 'react';
import FeedbackModal from '@/components/feedback-modal/FeedbackModal';

const Home = () => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <main>
      <button type="button" onClick={() => setIsFeedbackOpen(true)}>
        Open feedback
      </button>
      <FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
    </main>
  );
};

export default Home;
