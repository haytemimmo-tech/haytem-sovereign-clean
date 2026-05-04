import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Real Estate Investment in Bali | Indonesian Luxury Paradise | HAYTEM SOVEREIGN',
  description:
    'Private intelligence on Bali real estate investment, Indonesian luxury paradise positioning, and tropical development for strategic capital allocators. Off-market opportunities in Asia\'s premier luxury destination.',
  keywords: [
    'Bali real estate investment',
    'Indonesian luxury paradise',
    'tropical development Bali',
    'Indonesia luxury real estate',
    'off-market real estate Bali',
    'strategic real estate investment Bali',
    'capital deployment opportunities Bali',
    'institutional property investment Indonesia',
    'luxury real estate Indonesia',
    'Indonesia real estate investment',
    'tropical real estate',
    'where to invest in real estate in Bali',
    'is Bali a good real estate investment',
    'best property investment opportunities in Bali',
  ],
};

const assetClasses = [
  {
    title: 'Beachfront Villa Compounds',
    description:
      'Curated beachfront villa positioning in Bali\'s Indonesian luxury paradise, where tropical development meets institutional real estate investment in Asia\'s premier destination.',
  },
  {
    title: 'Hilltop Estate Developments',
    description:
      'Strategic hilltop estate positioning within Bali\'s luxury framework, capturing the convergence of Indonesian infrastructure and controlled estate development in the tropical paradise corridor.',
  },
  {
    title: 'Marina Luxury Compounds',
    description:
      'Marina luxury positioning for Bali\'s coastal expansion, where Indonesian paradise development and tropical real estate create institutional-grade residential opportunities with Indian Ocean views.',
  },
  {
    title: 'Tourism Infrastructure Assets',
    description:
      'Tourism infrastructure-adjacent positioning at the intersection of Bali\'s luxury development and Indonesia\'s tourism economy, with controlled access to strategic tropical assets.',
  },
];

export default function BaliPage() {
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
            Bali
            <br />
            Indonesian luxury paradise intelligence for tropical development.
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
            This is not a tropical listing. This is a discreet strategic assessment of Bali real estate investment where institutional capital positions ahead of Indonesia's luxury paradise development. Access is restricted to qualified capital with the capacity for tropical infrastructure positioning.
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
              Why Bali represents paradise positioning
            </p>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              Bali has established Indonesia as the primary tropical luxury destination. This paradise positioning drives tropical development expansion and creates controlled opportunities for capital deployment in luxury real estate and tourism infrastructure.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              The strongest value exists in the pre-institutional layer, where Indonesian luxury paradise and tropical development positioning occurs before mass market recognition. These are not open developments; they are strategic assets connected to long-term capital preservation and tourism corridor appreciation.
            </p>
          </div>

          <div style={{ background: 'rgba(255,254,244,0.02)', border: '1px solid rgba(201,168,76,0.12)', borderRadius: '24px', padding: '2rem' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.9)', marginBottom: '1rem' }}>
              Controlled access positioning
            </p>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              Luxury real estate Bali operates within a framework of controlled access. Opportunities are not publicly listed; they circulate through confidential networks where institutional property investment requires direct engagement and qualification assessment.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              The brief is simple: early positioning in the Indonesian luxury paradise creates asymmetric returns. But access requires strategic alignment and the capacity for institutional-grade deployment. This is not retail investment; this is capital architecture.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
          <Link
            href="/mandate?city=bali"
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
            Request private access to our confidential Bali real estate intelligence and strategic positioning opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}