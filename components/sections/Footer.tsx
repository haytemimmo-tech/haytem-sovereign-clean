'use client';

import Logo from '../Logo';

const navLinks = [
  { label: 'Private Wealth Architecture', href: '#advisory' },
  { label: 'Sovereign Market Engineering', href: '#advisory' },
  { label: 'Strategic Intelligence', href: '#intelligence' },
  { label: 'Emerging Eldorado Intelligence', href: '#eldorado' },
  { label: 'The Statesman', href: '#portrait' },
  { label: 'Intelligence Journal', href: '#journal' },
  { label: 'Initialize Mandate', href: '#mandate' },
];

const territories = [
  'Dubai', 'Marrakech', 'Monaco', 'Batumi', 'Porto Montenegro',
  'Luštica Bay', 'Athens Riviera', 'Bali', 'Mauritius', 'Singapore',
  'Abu Dhabi', 'Ras Al Khaimah', 'Albania Riviera', 'Buenos Aires', 'Tulum',
];

export default function Footer() {
  return (
    <footer
      style={{
        background: '#050505',
        borderTop: '1px solid rgba(42,42,42,0.8)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Gold top line */}
      <div className="gold-line" />

      {/* Main footer content */}
      <div className="sovereign-container" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
        <div className="grid-footer" style={{ gap: '5rem', marginBottom: '4rem' }}>

          {/* Brand column */}
          <div>
            <Logo size={52} />
            <div style={{ marginTop: '2rem', marginBottom: '1.5rem' }}>
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.1rem',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  color: 'rgba(232, 213, 163, 0.5)',
                  letterSpacing: '0.04em',
                  lineHeight: 1.7,
                }}
              >
                Where Capital Becomes Legacy.
              </p>
            </div>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.9rem',
                fontWeight: 300,
                lineHeight: 1.65,
                color: 'rgba(245, 240, 232, 0.3)',
                letterSpacing: '0.02em',
                maxWidth: '340px',
                marginBottom: '2rem',
              }}
            >
              Sovereign-level strategic advisory at the intersection of institutional governance,
              private wealth architecture, and emerging Eldorado investment intelligence.
            </p>

            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p className="micro-label" style={{ marginBottom: '0.5rem' }}>Private Capital Desk</p>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.72rem',
                  fontWeight: 300,
                  color: 'rgba(245, 240, 232, 0.3)',
                  lineHeight: 1.7,
                  letterSpacing: '0.03em',
                }}
              >
                60 Paya Lebar Road #06-28
                <br />
                Paya Lebar Square
                <br />
                Singapore 409051
              </p>
              <a
                href="mailto:mandate@haytemsovereign.com"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.72rem',
                  fontWeight: 400,
                  letterSpacing: '0.05em',
                  color: 'rgba(201,168,76,0.5)',
                  textDecoration: 'none',
                  marginTop: '0.5rem',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(201,168,76,0.5)')}
              >
                mandate@haytemsovereign.com
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="micro-label" style={{ marginBottom: '1.5rem' }}>Navigation</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.72rem',
                    fontWeight: 300,
                    color: 'rgba(245, 240, 232, 0.35)',
                    textDecoration: 'none',
                    letterSpacing: '0.06em',
                    transition: 'color 0.3s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'rgba(201,168,76,0.7)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245, 240, 232, 0.35)')}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Territories */}
          <div>
            <p className="micro-label" style={{ marginBottom: '1.5rem' }}>Investment Territories</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {territories.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.68rem',
                    fontWeight: 300,
                    color: 'rgba(245, 240, 232, 0.25)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="gold-line" style={{ marginBottom: '2.5rem' }} />

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '0.9rem',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'rgba(201,168,76,0.3)',
              letterSpacing: '0.04em',
              lineHeight: 1.7,
            }}
          >
            "Discretion is the first currency of power."
          </p>

          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.58rem',
              fontWeight: 300,
              color: 'rgba(245, 240, 232, 0.2)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            © {new Date().getFullYear()} HAYTEM SOVEREIGN · All Rights Reserved · Strictly Private
          </p>
        </div>

        {/* Watermark */}
        <div
          style={{
            marginTop: '3rem',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 8vw, 8rem)',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.015)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              userSelect: 'none',
              lineHeight: 1,
            }}
          >
            HAYTEM SOVEREIGN
          </p>
        </div>
      </div>
    </footer>
  );
}
