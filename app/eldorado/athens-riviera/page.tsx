import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Real Estate Investment in Athens Riviera | Greek Coastal Luxury | HAYTEM SOVEREIGN',
  description:
    'Private intelligence on Athens Riviera real estate investment, Greek coastal luxury positioning, and Attica coastal development for strategic capital allocators. Off-market opportunities in Greece\'s premier coastal corridor.',
  keywords: [
    'Athens Riviera real estate investment',
    'Greek coastal luxury',
    'Attica coastal development',
    'Greece riviera real estate',
    'off-market real estate Athens Riviera',
    'strategic real estate investment Athens Riviera',
    'capital deployment opportunities Athens Riviera',
    'institutional property investment Greece',
    'luxury real estate Greece',
    'Greece real estate investment',
    'Aegean real estate',
    'where to invest in real estate in Athens Riviera',
    'is Athens Riviera a good real estate investment',
    'best property investment opportunities in Athens Riviera',
  ],
};

const assetClasses = [
  {
    title: 'Coastal Estate Compounds',
    description:
      'Curated coastal estate positioning in Athens Riviera\'s Greek luxury corridor, where Attica coastal development meets institutional real estate investment in Greece\'s premier Aegean destination.',
  },
  {
    title: 'Marina Luxury Developments',
    description:
      'Strategic marina luxury positioning within Athens Riviera\'s coastal framework, capturing the convergence of Greek coastal infrastructure and controlled marina development in the Attica luxury corridor.',
  },
  {
    title: 'Hilltop Villa Compounds',
    description:
      'Hilltop villa positioning for Athens Riviera\'s coastal expansion, where Greek luxury development and Aegean real estate create institutional-grade residential opportunities with panoramic Mediterranean views.',
  },
  {
    title: 'Tourism Infrastructure Assets',
    description:
      'Tourism infrastructure-adjacent positioning at the intersection of Athens Riviera\'s coastal development and Greece\'s luxury tourism economy, with controlled access to strategic Aegean assets.',
  },
];

export default function AthensRivieraPage() {
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
            Athens Riviera
            <br />
            Greek coastal luxury intelligence for Attica coastal development.
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
            This is not a coastal listing. This is a discreet strategic assessment of Athens Riviera real estate investment where institutional capital positions ahead of Greece's Attica coastal development. Access is restricted to qualified capital with the capacity for luxury infrastructure positioning.
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
              Why Athens Riviera represents luxury positioning
            </p>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              Athens Riviera has established Greece as the primary Aegean luxury destination. This coastal positioning drives Attica development expansion and creates controlled opportunities for capital deployment in luxury real estate and tourism infrastructure.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              The strongest value exists in the pre-institutional layer, where Greek coastal luxury and Attica development positioning occurs before mass market recognition. These are not open developments; they are strategic assets connected to long-term capital preservation and Aegean corridor appreciation.
            </p>
          </div>

          <div style={{ background: 'rgba(255,254,244,0.02)', border: '1px solid rgba(201,168,76,0.12)', borderRadius: '24px', padding: '2rem' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.9)', marginBottom: '1rem' }}>
              Controlled access positioning
            </p>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              Luxury real estate Athens Riviera operates within a framework of controlled access. Opportunities are not publicly listed; they circulate through confidential networks where institutional property investment requires direct engagement and qualification assessment.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              The brief is simple: early positioning in the Greek coastal luxury corridor creates asymmetric returns. But access requires strategic alignment and the capacity for institutional-grade deployment. This is not retail investment; this is capital architecture.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
          <Link
            href="/mandate?city=athens-riviera"
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
            Request private access to our confidential Athens Riviera real estate intelligence and strategic positioning opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}