import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Real Estate Investment in Tulum | Mayan Riviera Luxury | HAYTEM SOVEREIGN',
  description:
    'Private intelligence on Tulum real estate investment, Mayan riviera luxury positioning, and Caribbean coastal development for strategic capital allocators. Off-market opportunities in Mexico\'s premier wellness destination.',
  keywords: [
    'Tulum real estate investment',
    'Mayan riviera luxury',
    'Caribbean coastal development',
    'Mexico luxury real estate',
    'off-market real estate Tulum',
    'strategic real estate investment Tulum',
    'capital deployment opportunities Tulum',
    'institutional property investment Mexico',
    'luxury real estate Mexico',
    'Mexico real estate investment',
    'Caribbean real estate',
    'where to invest in real estate in Tulum',
    'is Tulum a good real estate investment',
    'best property investment opportunities in Tulum',
  ],
};

const assetClasses = [
  {
    title: 'Beachfront Wellness Compounds',
    description:
      'Curated beachfront wellness positioning in Tulum\'s Mayan riviera luxury, where Caribbean coastal development meets institutional real estate investment in Mexico\'s premier wellness destination.',
  },
  {
    title: 'Jungle Estate Developments',
    description:
      'Strategic jungle estate positioning within Tulum\'s luxury framework, capturing the convergence of Mayan infrastructure and controlled estate development in the wellness corridor.',
  },
  {
    title: 'Cenote-Adjacent Properties',
    description:
      'Cenote-adjacent positioning for Tulum\'s coastal expansion, where Mexican luxury development and Caribbean real estate create institutional-grade residential opportunities with sacred water access.',
  },
  {
    title: 'Wellness Infrastructure Assets',
    description:
      'Wellness infrastructure-adjacent positioning at the intersection of Tulum\'s luxury development and Mexico\'s wellness economy, with controlled access to strategic Mayan assets.',
  },
];

export default function TulumPage() {
  return (
    <section
      className="section-padding"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #050504 0%, #0c0900 100%)',
        color: '#F5F0E8',
      }}
    >
      <div className="sovereign-container" style={{ maxWidth: '980px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <p className="section-label" style={{ color: 'rgba(201,168,76,0.85)', letterSpacing: '0.18em' }}>
            Private Intelligence Brief
          </p>

          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
              fontWeight: 400,
              lineHeight: 1.02,
              margin: '1rem 0 1.5rem',
              color: '#F5F0E8',
            }}
          >
            Tulum
            <br />
            Mayan riviera luxury intelligence for Caribbean coastal development.
          </h1>

          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.1rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.7)',
              maxWidth: '760px',
            }}
          >
            This is not a wellness listing. This is a discreet strategic assessment of Tulum real estate investment where institutional capital positions ahead of Mexico's Mayan riviera luxury development. Access is restricted to qualified capital with the capacity for wellness infrastructure positioning.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginBottom: '2.5rem' }}>
          {assetClasses.map((asset) => (
            <div
              key={asset.title}
              style={{
                background: 'rgba(255,254,244,0.03)',
                border: '1px solid rgba(201,168,76,0.14)',
                borderRadius: '24px',
                padding: '1.75rem 1.8rem',
              }}
            >
              <h2
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.4rem',
                  marginBottom: '0.75rem',
                  color: '#F5F0E8',
                }}
              >
                {asset.title}
              </h2>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
                {asset.description}
              </p>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gap: '2rem', marginBottom: '3rem' }}>
          <div style={{ background: 'rgba(255,254,244,0.02)', border: '1px solid rgba(201,168,76,0.12)', borderRadius: '24px', padding: '2rem' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.9)', marginBottom: '1rem' }}>
              Why Tulum represents wellness luxury positioning
            </p>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              Tulum has established Mexico as the primary Mayan riviera wellness destination. This luxury positioning drives Caribbean coastal development expansion and creates controlled opportunities for capital deployment in wellness real estate and tourism infrastructure.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              The strongest value exists in the pre-institutional layer, where Mayan riviera luxury and Caribbean coastal development positioning occurs before mass market recognition. These are not open developments; they are strategic assets connected to long-term capital preservation and wellness corridor appreciation.
            </p>
          </div>

          <div style={{ background: 'rgba(255,254,244,0.02)', border: '1px solid rgba(201,168,76,0.12)', borderRadius: '24px', padding: '2rem' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.9)', marginBottom: '1rem' }}>
              Controlled access positioning
            </p>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              Luxury real estate Tulum operates within a framework of controlled access. Opportunities are not publicly listed; they circulate through confidential networks where institutional property investment requires direct engagement and qualification assessment.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              The brief is simple: early positioning in the Mayan riviera wellness corridor creates asymmetric returns. But access requires strategic alignment and the capacity for institutional-grade deployment. This is not retail investment; this is capital architecture.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
          <Link
            href="/mandate?city=tulum"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '18px 40px',
              borderRadius: '999px',
              background:
                'linear-gradient(145deg, #fff3a6 0%, #f6d365 18%, #d4af37 42%, #b8860b 65%, #fff1a8 100%)',
              color: '#111',
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 600,
              fontSize: '1.15rem',
              letterSpacing: '0.28em',
              textShadow: '0 1px 0 rgba(255,255,255,0.6), 0 4px 12px rgba(0,0,0,0.5)',
              textTransform: 'uppercase',
              textDecoration: 'none',
              border: '1px solid rgba(255,236,150,0.9)',
              boxShadow:
                '0 10px 25px rgba(0,0,0,0.6), 0 0 45px rgba(212,175,55,0.65), inset 0 3px 8px rgba(255,255,255,0.7), inset 0 -6px 12px rgba(95,62,0,0.5)',
              transform: 'translateY(-4px)',
              transition: 'all 0.25s ease',
            }}
          >
            EXPRESS INTEREST
          </Link>

          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.95rem',
              lineHeight: 1.75,
              color: 'rgba(245,240,232,0.66)',
              maxWidth: '740px',
            }}
          >
            Request private access to our confidential Tulum real estate intelligence and strategic positioning opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}