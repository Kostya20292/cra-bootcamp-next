import type { Metadata } from 'next';
import 'normalize.css';
import 'modern-css-reset';
import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'CRA Bootcamp',
  description: 'CPA landing page',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
