import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Real Estate Investment in Ras Al Khaimah | Emerging Gulf Emirate | HAYTEM SOVEREIGN',
  description:
    'Private intelligence on Ras Al Khaimah real estate investment, emerging Gulf emirate positioning, and UAE development for strategic capital allocators. Off-market opportunities in the UAE\'s northern emirate.',
  keywords: [
    'Ras Al Khaimah real estate investment',
    'emerging Gulf emirate',
    'UAE development',
    'Gulf luxury real estate',
    'off-market real estate Ras Al Khaimah',
    'strategic real estate investment Ras Al Khaimah',
    'capital deployment opportunities Ras Al Khaimah',
    'institutional property investment Ras Al Khaimah',
    'luxury real estate Ras Al Khaimah',
    'Ras Al Khaimah real estate investment',
    'UAE real estate',
    'where to invest in real estate in Ras Al Khaimah',
    'is Ras Al Khaimah a good real estate investment',
    'best property investment opportunities in Ras Al Khaimah',
  ],
};

const assetClasses = [
  {
    title: 'Al Hamra Developments',
    description:
      'Curated Al Hamra positioning in Ras Al Khaimah\'s emerging Gulf emirate framework, where UAE development meets institutional real estate investment in the northern emirate.',
  },
  {
    title: 'Al Marjan Island Compounds',
    description:
      'Strategic Al Marjan Island positioning within Ras Al Khaimah\'s luxury framework, capturing the convergence of Gulf infrastructure and controlled island development in the emerging corridor.',
  },
  {
    title: 'Ras Al Khaimah Marina Properties',
    description:
      'Marina positioning for Ras Al Khaimah\'s urban expansion, where emerging Gulf emirate development and UAE real estate create institutional-grade commercial opportunities with luxury waterfront access.',
  },
  {
    title: 'Commercial Infrastructure Assets',
    description:
      'Commercial infrastructure-adjacent positioning at the intersection of Ras Al Khaimah\'s development and the Gulf\'s metropolitan economy, with controlled access to strategic UAE assets.',
  },
];

export default function RasAlKhaimahPage() {
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
            Ras Al Khaimah
            <br />
            Emerging Gulf emirate intelligence for UAE development.
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
            This is not a financial listing. This is a discreet strategic assessment of Ras Al Khaimah real estate investment where institutional capital positions ahead of emerging Gulf emirate development. Access is restricted to qualified capital with the capacity for metropolitan infrastructure positioning.
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
              Why Ras Al Khaimah represents emerging emirate positioning
            </p>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              Ras Al Khaimah has established the northern UAE as the emerging emirate destination. This metropolitan positioning drives UAE development expansion and creates controlled opportunities for capital deployment in luxury real estate and commercial infrastructure.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              The strongest value exists in the pre-institutional layer, where emerging Gulf emirate and UAE development positioning occurs before mass market recognition. These are not open developments; they are strategic assets connected to long-term capital preservation and metropolitan corridor appreciation.
            </p>
          </div>

          <div style={{ background: 'rgba(255,254,244,0.02)', border: '1px solid rgba(201,168,76,0.12)', borderRadius: '24px', padding: '2rem' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.9)', marginBottom: '1rem' }}>
              Controlled access positioning
            </p>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              Luxury real estate Ras Al Khaimah operates within a framework of controlled access. Opportunities are not publicly listed; they circulate through confidential networks where institutional property investment requires direct engagement and qualification assessment.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              The brief is simple: early positioning in the emerging Gulf emirate creates asymmetric returns. But access requires strategic alignment and the capacity for institutional-grade deployment. This is not retail investment; this is capital architecture.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
          <Link
            href="/mandate?city=ras-al-khaimah"
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
            Request private access to our confidential Ras Al Khaimah real estate intelligence and strategic positioning opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}