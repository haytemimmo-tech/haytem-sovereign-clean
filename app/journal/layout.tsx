import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Journal | Strategic Real Estate Investment Intelligence | HAYTEM SOVEREIGN',
  description:
    'Strategic investment briefings on Montenegro, Luštica Bay, Marrakech, emerging luxury destinations, private capital allocation, real estate investment, and wealth management.',
  keywords: [
    'real estate investment',
    'wealth management',
    'private capital allocation',
    'family office strategy',
    'institutional real estate advisory',
    'Montenegro real estate investment',
    'Luštica Bay investment',
    'Marrakech real estate investment',
    'Morocco World Cup 2030 real estate',
    'Adriatic luxury real estate',
    'emerging luxury destinations',
  ],
};

export default function JournalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
