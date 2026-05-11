import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hassaneine Haytem | HAYTEM SOVEREIGN — Global Market Architect & Private Wealth Advisor',
  description:
    'Hassaneine Haytem is a sovereign-level strategic advisor operating at the intersection of institutional advisory, private wealth architecture, and emerging Eldorado real estate intelligence. Where Capital Becomes Legacy.',

  verification: {
    other: {
      'msvalidate.01': '5ABC050A20E207A843383C6D0BDA0CA3',
    },
  },

  keywords: [
    'Hassaneine Haytem',
    'Haytem Sovereign',
    'Global Market Architect',
    'Off-Market Real Estate Advisor',
    'Family Office Real Estate Consultant',
    'Private Wealth Real Estate Advisor',
    'Sovereign Investment Consultant',
    'Emerging Eldorado Investment Intelligence',
    'Future Wealth Zones Advisor',
    'Private Capital Real Estate Strategy',
    'Pre-Market Capital Deployment Advisor',
    'FDI Catalyst Consultant',
    'UHNWI Real Estate Advisor Dubai',
    'Family Office Real Estate Dubai',
    'Luxury Off-Market Property Consultant Marrakech',
    'Trophy Asset Acquisition',
    'Strategic Real Estate Intelligence',
    'Singapore Private Capital Desk',
    'Emerging Luxury Real Estate Investment',
    'Hidden Beachfront Investment Opportunities',
    'Batumi Luxury Real Estate',
    'Porto Montenegro Investment',
    'Albania Riviera Real Estate',
  ],
  authors: [{ name: 'Hassaneine Haytem' }],
  creator: 'Hassaneine Haytem',
  publisher: 'HAYTEM SOVEREIGN',
  openGraph: {
    title: 'HAYTEM SOVEREIGN | Where Capital Becomes Legacy.',
    description:
      'Strategic early-entry capital deployment into future high-yield zones. Emerging Eldorado Investment Intelligence. Before the Market Moves.',
    type: 'website',
    locale: 'en_US',
    siteName: 'HAYTEM SOVEREIGN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HAYTEM SOVEREIGN | Where Capital Becomes Legacy.',
    description:
      'Sovereign-level strategic advisory. Private wealth architecture. Emerging Eldorado Investment Intelligence.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&family=Inter:wght@300;400;500;600&family=Montserrat:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Hassaneine Haytem',
              jobTitle: 'Global Market Architect',
              description:
                'Sovereign-level strategic advisor at the intersection of institutional advisory, private wealth architecture, and emerging Eldorado real estate intelligence.',
              worksFor: {
                '@type': 'Organization',
                name: 'HAYTEM SOVEREIGN',
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '60 Paya Lebar Road #06-28, Paya Lebar Square',
                  addressLocality: 'Singapore',
                  postalCode: '409051',
                  addressCountry: 'SG',
                },
                contactPoint: {
                  '@type': 'ContactPoint',
                  email: 'mandate@haytemsovereign.com',
                  contactType: 'Business',
                },
              },
              knowsAbout: [
                'Private Wealth Management',
                'Foreign Direct Investment',
                'Sovereign Asset Optimization',
                'Off-Market Real Estate',
                'Family Office Advisory',
                'Emerging Market Intelligence',
              ],
            }),
          }}
        />
      </head>
      <body className="grain">{children}</body>
    </html>
  );
}
