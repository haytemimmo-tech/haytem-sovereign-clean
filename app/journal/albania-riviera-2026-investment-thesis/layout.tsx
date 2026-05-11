import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Albania Riviera 2026: The Last Pre-Institutional Mediterranean Coastline — A Family Office Investment Thesis | HAYTEM SOVEREIGN',
  description:
    'Strategic 2026 intelligence brief on Albania\'s emerging luxury real estate corridor. Vlora, Ksamil, and Durrës investment analysis for family offices, UHNWIs, and sovereign capital. Pre-institutional entry intelligence by HAYTEM SOVEREIGN.',
  keywords: [
    'Albania real estate investment',
    'Albania Riviera 2026',
    'Vlora luxury property',
    'Ksamil investment',
    'Durrës real estate',
    'family office Albania',
    'Mediterranean emerging markets',
    'pre-institutional real estate Albania',
    'Albanian coast investment thesis',
    'UHNWI Albania',
    'sovereign capital Adriatic',
    'Albania Eldorado intelligence',
  ],
  authors: [{ name: 'Hassaneine Haytem' }],
  publisher: 'HAYTEM SOVEREIGN',
  openGraph: {
    title: 'Albania Riviera 2026: The Last Pre-Institutional Mediterranean Coastline',
    description:
      'Strategic early-entry intelligence on Albania\'s emerging luxury investment corridor. Before the market moves.',
    type: 'article',
    publishedTime: '2026-05-12T00:00:00Z',
    authors: ['https://www.haytemsovereign.com/#about'],
    images: [
      {
        url: 'https://www.haytemsovereign.com/albania/albania-riviera-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Aerial view of the Albanian Riviera coastline at golden hour',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Albania Riviera 2026: A Family Office Investment Thesis',
    description: 'Pre-institutional intelligence on the last untapped Mediterranean coastline. Vlora · Ksamil · Durrës.',
    images: ['https://www.haytemsovereign.com/albania/albania-riviera-cover.jpg'],
  },
  alternates: {
    canonical: 'https://www.haytemsovereign.com/journal/albania-riviera-2026-investment-thesis',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
