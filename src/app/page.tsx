'use client';

import { useState } from 'react';
import FeedbackModal from '@/components/feedback-modal/FeedbackModal';
import ButtonMain from '@/components/button-main/ButtonMain';
import Footer from '@/components/footer/Footer';

const Home = () => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <main>
      <button type="button" onClick={() => setIsFeedbackOpen(true)}>
        Open feedback
      </button>
      <FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
      <ButtonMain size="lg">Click me</ButtonMain>
      <ButtonMain size="md">Click me</ButtonMain>
      <ButtonMain size="sm">Click me</ButtonMain>
      <Footer />
    </main>
  );
};

export default Home;
