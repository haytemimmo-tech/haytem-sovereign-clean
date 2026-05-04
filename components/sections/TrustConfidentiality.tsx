'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const pillars = [
  { icon: '◈', title: 'Sovereign-Level Confidentiality', desc: 'Every mandate, every client, every transaction operates under absolute discretion. Information is never shared, referenced, or disclosed.' },
  { icon: '◈', title: 'Institutional Access', desc: 'Access to opportunities invisible to the public market. Built through 15+ years of relationships spanning sovereign funds, family offices, and private developers.' },
  { icon: '◈', title: 'Global Reach', desc: 'A network spanning 40+ countries and 6 continents — from North African capitals to Adriatic marina corridors, Gulf sovereign desks to Asian wealth hubs.' },
  { icon: '◈', title: 'Cross-Border Intelligence', desc: 'Proprietary intelligence on capital flows, policy shifts, and market formation across emerging jurisdictions — before they become public knowledge.' },
  { icon: '◈', title: 'Private Mandate Discipline', desc: 'Selective engagement model. Active mandates are limited to ensure absolute focus, undivided intelligence, and complete strategic alignment.' },
  { icon: '◈', title: 'Protected Opportunity Access', desc: 'Off-market assets, pre-construction pricing, and pre-institutional positions are available exclusively through trusted mandate relationships.' },
];

const metrics = [
  { value: '15+', label: 'Years of Institutional Experience' },
  { value: '6', label: 'Continental Advisory Reach' },
  { value: '100%', label: 'Mandate Confidentiality Rate' },
  { value: '40+', label: 'Active Investment Territories' },
  { value: 'A+', label: 'Fiduciary Standard' },
  { value: '∞', label: 'Discretion, Always' },
];

export default function TrustConfidentiality() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="section-padding section-graphite texture-overlay"
      ref={ref}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div className="sovereign-container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '1.5rem' }}
        >
          XI — Trust Architecture
        </motion.p>

        <div className="grid-2col" style={{ gap: '5rem', marginBottom: '5rem', alignItems: 'end' }}>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.2rem, 4.5vw, 4.5rem)',
              fontWeight: 300,
              lineHeight: 1.08,
              color: '#F5F0E8',
            }}
          >
            Trust & Confidentiality
            <br />
            <span className="gold-text">Architecture.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                '"Discretion precedes opportunity."',
                '"Confidentiality is non-negotiable."',
                '"Access is protected by design."',
              ].map((quote) => (
                <p
                  key={quote}
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.1rem',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    lineHeight: 1.7,
                    color: 'rgba(201,168,76,0.65)',
                    letterSpacing: '0.04em',
                    paddingLeft: '1.5rem',
                    borderLeft: '1px solid rgba(201,168,76,0.2)',
                  }}
                >
                  {quote}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1px',
            backgroundColor: 'rgba(42,42,42,0.3)',
            marginBottom: '4rem',
          }}
        >
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i + 0.5 }}
              style={{
                background: '#141414',
                padding: '2rem 1.5rem',
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
                {m.value}
              </div>
              <p className="micro-label" style={{ fontSize: '0.55rem', lineHeight: 1.4 }}>
                {m.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pillar grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i + 0.6 }}
              className="sovereign-card"
              style={{ padding: '2.25rem' }}
            >
              <div
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.5rem',
                  color: 'rgba(201,168,76,0.5)',
                  marginBottom: '1.25rem',
                }}
              >
                {pillar.icon}
              </div>
              <h3
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.2rem',
                  fontWeight: 400,
                  color: '#F5F0E8',
                  marginBottom: '0.875rem',
                  lineHeight: 1.3,
                }}
              >
                {pillar.title}
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
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
