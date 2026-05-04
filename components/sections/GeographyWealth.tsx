'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const regions = [
  {
    name: 'North Africa',
    color: '#C9A84C',
    territories: ['Marrakech', 'Tangier', 'Casablanca Marina', 'Rabat', 'Agadir'],
    insight: 'Cultural capital meets sovereign investment. North Africa is engineering its position as the Mediterranean\'s premier private wealth destination.',
  },
  {
    name: 'Adriatic Balkans',
    color: '#C9A84C',
    territories: ['Porto Montenegro', 'Luštica Bay', 'Budva', 'Vlora', 'Durrës', 'Ksamil', 'Batumi'],
    insight: 'Europe\'s last untapped marina corridor. Pre-institutional pricing with sovereign-backed development ecosystems.',
  },
  {
    name: 'Mediterranean',
    color: '#C9A84C',
    territories: ['Athens Riviera', 'Cyprus', 'Estepona', 'Marbella', 'Malta'],
    insight: 'Mature legal frameworks meeting emerging luxury corridors. Golden visa catalysts driving capital acceleration.',
  },
  {
    name: 'Indian Ocean',
    color: '#C9A84C',
    territories: ['Bali', 'Mauritius', 'Maldives', 'Cape Verde', 'Seychelles'],
    insight: 'Private island jurisdictions and branded resort ecosystems at the frontier of family office diversification.',
  },
  {
    name: 'Americas',
    color: '#C9A84C',
    territories: ['Tulum', 'Buenos Aires', 'Puerto Madero', 'Aruba', 'Panama City'],
    insight: 'The Americas harbors the next generation of beachfront wealth zones, led by institutional developers arriving ahead of global capital.',
  },
  {
    name: 'Gulf & Asia Pacific',
    color: '#C9A84C',
    territories: ['Abu Dhabi', 'Ras Al Khaimah', 'Riyadh', 'Singapore', 'Songdo'],
    insight: 'Sovereign vision meeting private capital. Gulf and Asia Pacific are engineering tomorrow\'s most liquid luxury markets today.',
  },
];

export default function GeographyWealth() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="section-padding section-dark texture-overlay"
      ref={ref}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Large decorative globe outline */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.03)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.04)',
          pointerEvents: 'none',
        }}
      />

      <div className="sovereign-container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.p
            className="section-label"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '1.5rem' }}
          >
            IV — Geographic Intelligence
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.2rem, 5vw, 5rem)',
              fontWeight: 300,
              lineHeight: 1.0,
              color: '#F5F0E8',
              marginBottom: '1.5rem',
            }}
          >
            The Geography of
            <br />
            <span className="gold-text">Future Wealth.</span>
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
              color: 'rgba(245, 240, 232, 0.55)',
              letterSpacing: '0.02em',
              maxWidth: '680px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            The greatest fortunes are rarely built inside mature markets. They are built by entering
            before institutional capital arrives. HAYTEM SOVEREIGN specializes in identifying emerging
            global Eldorados — strategic jurisdictions where luxury real estate, capital migration,
            hospitality expansion, sovereign policy, and investor demand converge before mainstream recognition.
          </motion.p>
        </div>

        {/* Core statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1px',
            backgroundColor: 'rgba(42,42,42,0.4)',
            marginBottom: '4rem',
          }}
        >
          {[
            { stat: '6', label: 'Continental Investment Corridors' },
            { stat: '40+', label: 'Emerging Eldorado Territories' },
            { stat: '15+', label: 'Years Pre-Market Intelligence' },
            { stat: '∞', label: 'First-Mover Advantage Windows' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
              style={{
                background: '#0A0A0A',
                padding: '2.5rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '3.5rem',
                  fontWeight: 300,
                  color: '#C9A84C',
                  lineHeight: 1,
                  marginBottom: '0.75rem',
                }}
              >
                {item.stat}
              </div>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.6rem',
                  fontWeight: 400,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(245, 240, 232, 0.4)',
                }}
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Region grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {regions.map((region, i) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * i + 0.6 }}
              className="sovereign-card"
              style={{ padding: '2.25rem' }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#C9A84C', flexShrink: 0 }} />
                <h3
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#C9A84C',
                  }}
                >
                  {region.name}
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {region.territories.map((t) => (
                  <span key={t} className="territory-tag">
                    {t}
                  </span>
                ))}
              </div>

              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  lineHeight: 1.65,
                  color: 'rgba(245, 240, 232, 0.45)',
                  letterSpacing: '0.02em',
                  borderTop: '1px solid rgba(42,42,42,0.8)',
                  paddingTop: '1.25rem',
                }}
              >
                {region.insight}
              </p>
            </motion.div>
          ))}

          {/* Image tile — fills orphan slot next to Gulf & Asia Pacific */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 1.2 }}
            style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%', minHeight: '280px' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/global-marina-capital-hub.png"
              alt=""
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
              }}
            />
          </motion.div>
        </div>

        {/* Principle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{ marginTop: '4rem', textAlign: 'center' }}
        >
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.7,
              color: 'rgba(201,168,76,0.7)',
              letterSpacing: '0.05em',
            }}
          >
            position capital before visibility. This is not speculation. This is strategic timing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
