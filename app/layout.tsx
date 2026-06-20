import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Business App',
  description: 'Accounting & Marketing Sederhana',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
