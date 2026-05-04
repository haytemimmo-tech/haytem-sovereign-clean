import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Marrakech Intelligence | Haytem Sovereign',
  description:
    'Private intelligence briefing on Marrakech riads investment, boutique hotel Marrakech opportunities, and resort development land Morocco for strategic capital allocators.',
  keywords: [
    'Marrakech riads investment',
    'luxury riad Marrakech',
    'boutique hotel Marrakech',
    'Morocco hospitality investment',
    'resort development land Morocco',
    'Marrakech luxury real estate',
    'cultural real estate Morocco',
    'off-market hospitality assets Marrakech',
  ],
};

const assetClasses = [
  {
    title: 'Historic Riads',
    description:
      'Curated Marrakech riads investment positions in the medina and surrounding cultural districts where heritage architecture and private hospitality converge.',
  },
  {
    title: 'Boutique Hospitality Assets',
    description:
      'Select boutique hotel Marrakech openings with discreet operating structures, stable tourist demand, and a premium European-facing brand narrative.',
  },
  {
    title: 'Private Hospitality Estates',
    description:
      'Strategic private estates positioned for private hospitality, bespoke cultural retreats, and experiential residence concepts under confidential advisory.',
  },
  {
    title: 'Resort Development Land',
    description:
      'Land reserves for resort development land Morocco, anchored in proximity to Marrakech’s cultural core and direct European flight connectivity.',
  },
];

export default function MarrakechPage() {
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
            Marrakech
            <br />
            Cultural hospitality intelligence for sovereign capital.
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
            This is not a villa pitch. This is a discreet strategic assessment of Marrakech luxury real estate and Morocco hospitality investment where high-net-worth allocators access rare riads, boutique hotel Marrakech positions, private hospitality estates and resort development land Morocco ahead of the public market.
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
              Why Marrakech is strategically attractive
            </p>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              Marrakech is Morocco’s cultural capital and a premium tourism hub rooted in heritage, luxury hospitality and direct European connectivity. With direct flights from Paris, London and Madrid, the city is a high-frequency gateway for strategic capital and experiential hospitality demand.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              This is a market defined by scarcity. Curated off-market hospitality assets Marrakech is the layer where capital meets rare cultural real estate Morocco opportunities before they are visible to conventional buyers.
            </p>
          </div>

          <div style={{ background: 'rgba(255,254,244,0.02)', border: '1px solid rgba(201,168,76,0.12)', borderRadius: '24px', padding: '2rem' }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.78rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.9)', marginBottom: '1rem' }}>
              The hidden layer
            </p>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.72)', marginBottom: '1rem' }}>
              The strongest value is in the invisible layer of Marrakech luxury real estate, where historic riads and boutique hotel Marrakech assets circulate through private networks and confidential mandates. These are not open listings; they are discreet offers connected to long-term capital preservation, hospitality repositioning, and resort development land Morocco strategy.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.8, color: 'rgba(245,240,232,0.7)' }}>
              The brief is simple: access premium cultural luxury assets in a market where supply is controlled, demand is resilient and the capital window closes as soon as the opportunity becomes public.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1rem' }}>
          <Link
            href="/mandate?city=marrakech"
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
            Request private access to our confidential, curated Marrakech real estate positions and investments.
          </p>
        </div>
      </div>
    </section>
  );
}