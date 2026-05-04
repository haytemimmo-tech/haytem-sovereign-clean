'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const intelligenceStreams = [
  { title: 'Global Capital Flows', desc: 'Real-time tracking of sovereign fund allocation shifts, family office migration patterns, and institutional capital movement across jurisdictions.' },
  { title: 'Sovereign-Backed Development', desc: 'Monitoring government-mandated mega-developments, national vision programs, and state-sponsored luxury corridor formations worldwide.' },
  { title: 'Luxury Corridor Formation', desc: 'Early-stage identification of nascent luxury markets before branded developers, hotel flags, and institutional investors arrive.' },
  { title: 'Pre-Institutional Asset Discovery', desc: 'Off-market intelligence on trophy assets, waterfront developments, and private island portfolios before they enter formal listing processes.' },
  { title: 'Private Wealth Relocation', desc: 'Tracking UHNWI migration routes, residency-by-investment adoption, and family office hub formation across emerging jurisdictions.' },
  { title: 'Market Cycle Timing', desc: 'Proprietary analysis of market velocity, capital entry timing, and jurisdictional momentum to identify optimal deployment windows.' },
];

const dataPoints = [
  { value: '40+', label: 'Active Investment Territories Monitored' },
  { value: '6', label: 'Continental Intelligence Networks' },
  { value: '24/7', label: 'Sovereign Policy Monitoring' },
  { value: '$500B+', label: 'Capital Flows Tracked Annually' },
];

export default function GlobalIntelligence() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="section-padding section-dark texture-overlay"
      ref={ref}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* BG decorative */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '-300px',
          transform: 'translateY(-50%)',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.025) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="sovereign-container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '1.5rem' }}
        >
          IX — Global Intelligence Desk
        </motion.p>

        <div className="grid-2col" style={{ gap: '5rem', marginBottom: '5rem', alignItems: 'start' }}>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2rem, 4.5vw, 4.5rem)',
                fontWeight: 300,
                lineHeight: 1.08,
                color: '#F5F0E8',
                marginBottom: '2rem',
              }}
            >
              Global Investment
              <br />
              <span className="gold-text">Intelligence.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.05rem',
                fontWeight: 300,
                lineHeight: 1.6,
                color: 'rgba(245, 240, 232, 0.5)',
                letterSpacing: '0.02em',
              }}
            >
              HAYTEM SOVEREIGN does not simply observe markets. It identifies where the next
              wave of wealth will move before the public narrative begins. Our intelligence desk
              operates at the intersection of geopolitical analysis, capital flow monitoring,
              and on-the-ground territorial intelligence.
            </motion.p>
          </div>

          {/* Data points */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1px',
              backgroundColor: 'rgba(42,42,42,0.3)',
              alignSelf: 'start',
            }}
          >
            {dataPoints.map((dp) => (
              <div
                key={dp.label}
                style={{
                  background: '#0E0E0E',
                  padding: '2rem',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '2.5rem',
                    fontWeight: 300,
                    color: '#C9A84C',
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                  }}
                >
                  {dp.value}
                </div>
                <p className="micro-label" style={{ fontSize: '0.55rem' }}>{dp.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Intelligence streams */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(390px, 1fr))', gap: '1px', backgroundColor: 'rgba(42,42,42,0.2)' }}>
          {intelligenceStreams.map((stream, i) => (
            <motion.div
              key={stream.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * i + 0.5 }}
              style={{
                background: '#0A0A0A',
                padding: '2.5rem',
                borderTop: '2px solid transparent',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderTopColor = 'rgba(201,168,76,0.4)')}
              onMouseLeave={e => (e.currentTarget.style.borderTopColor = 'transparent')}
            >
              <div
                style={{
                  width: '32px',
                  height: '1px',
                  background: '#C9A84C',
                  marginBottom: '1.5rem',
                }}
              />
              <h3
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.2rem',
                  fontWeight: 400,
                  color: '#F5F0E8',
                  marginBottom: '1rem',
                  lineHeight: 1.3,
                }}
              >
                {stream.title}
              </h3>
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  lineHeight: 1.65,
                  color: 'rgba(245, 240, 232, 0.4)',
                  letterSpacing: '0.02em',
                }}
              >
                {stream.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
