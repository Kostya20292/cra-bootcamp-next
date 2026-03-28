'use client';

import { useState } from 'react';
import FeedbackModal from '@/components/feedback-modal/FeedbackModal';
import ButtonMain from '@/components/button-main/ButtonMain';
import Footer from '@/components/footer/Footer';
import { Container } from '@/components/container/Container';

const Home = () => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  return (
    <main>
      {/* контейнер выведен для примера */}
      <Container>
        <button type="button" onClick={() => setIsFeedbackOpen(true)}>
          Open feedback
        </button>
        <FeedbackModal isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
        <ButtonMain size="lg">Click me</ButtonMain>
        <ButtonMain size="md">Click me</ButtonMain>
        <ButtonMain size="sm">Click me</ButtonMain>
      </Container>

      <Footer />
    </main>
  );
};

export default Home;
