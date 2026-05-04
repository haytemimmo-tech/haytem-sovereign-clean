import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Real Estate Investment in Luštica Bay | Off-Market Opportunities | HAYTEM SOVEREIGN',
  description:
    'Private intelligence on Luštica Bay real estate investment, sovereign development positioning, and institutional infrastructure for strategic capital allocators. Off-market large-scale development and government-backed opportunities.',
  keywords: [
    'Luštica Bay real estate investment',
    'sovereign development Montenegro',
    'institutional infrastructure Montenegro',
    'large-scale development Luštica Bay',
    'government-backed real estate Montenegro',
    'off-market real estate Luštica Bay',
    'strategic real estate investment Luštica Bay',
    'capital deployment opportunities Luštica Bay',
    'institutional property investment Montenegro',
    'commercial real estate Montenegro',
    'luxury real estate Montenegro',
    'Montenegro real estate investment',
    'Adriatic real estate',
    'where to invest in real estate in Luštica Bay',
    'is Luštica Bay a good real estate investment',
    'best property investment opportunities in Luštica Bay',
  ],
};

const assetClasses = [
  {
    title: 'Sovereign Infrastructure Assets',
    description:
      'Strategic sovereign development positioning in Luštica Bay, where government-backed infrastructure initiatives meet institutional capital deployment in Montenegro\'s emerging development corridor.',
  },
  {
    title: 'Large-Scale Residential Developments',
    description:
      'Large-scale residential positioning within sovereign development frameworks, capturing the convergence of institutional infrastructure and controlled residential development in Luštica Bay.',
  },
  {
    title: 'Commercial & Tourism Infrastructure',
    description:
      'Commercial infrastructure positioned for Luštica Bay\'s tourism corridor expansion, where sovereign development and international tourism demand create institutional-grade commercial opportunities.',
  },
  {
    title: 'Mixed-Use Development Portfolios',
    description:
      'Mixed-use portfolios positioned at the intersection of sovereign development positioning and Montenegro\'s emerging economy, with controlled access to large-scale development opportunities.',
  },
];

export default function LusticaBayPage() {
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
            Luštica Bay
            <br />
            Sovereign development intelligence for institutional infrastructure.
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
            This is not a development listing. This is a discreet strategic assessment of Luštica Bay real estate investment where institutional capital positions ahead of Montenegro's sovereign development corridor. Access is restricted to qualified capital with the capacity for large-scale infrastructure positioning.
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
              Why Luštica Bay represents strategic positioning
            </p>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              Luštica Bay has established Montenegro as a primary sovereign development destination. This positioning drives institutional infrastructure expansion and creates controlled opportunities for capital deployment in large-scale real estate and development projects.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              The strongest value exists in the pre-institutional layer, where sovereign development Montenegro and institutional infrastructure positioning occurs before mass market recognition. These are not open developments; they are strategic assets connected to long-term capital preservation and development corridor appreciation.
            </p>
          </div>

          <div style={{ background: 'rgba(255,254,244,0.02)', border: '1px solid rgba(201,168,76,0.12)', borderRadius: '24px', padding: '2rem' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.9)', marginBottom: '1rem' }}>
              Controlled access positioning
            </p>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              Sovereign development Montenegro operates within a framework of controlled access. Opportunities are not publicly listed; they circulate through confidential networks where institutional property investment requires direct engagement and qualification assessment.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              The brief is simple: early positioning in the sovereign development corridor creates asymmetric returns. But access requires strategic alignment and the capacity for institutional-grade deployment. This is not retail investment; this is capital architecture.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
          <Link
            href="/mandate?city=lustica-bay"
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
            Request private access to our confidential Luštica Bay real estate intelligence and strategic positioning opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}