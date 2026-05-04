'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const intelligenceFilters = [
  'Geopolitical Stability Analysis',
  'Sovereign Policy Direction',
  'Capital Mobility Assessment',
  'Macro-Economic Trend Positioning',
  'Jurisdictional Forecasting',
  'Cross-Border Liquidity Pathways',
  'Political Risk Anticipation',
  'Currency Exposure Analysis',
  'Family Office Migration Patterns',
  'Residency-by-Investment Dynamics',
  'Tourism Infrastructure Expansion',
  'Hospitality Capital Movements',
  'Short-Term Rental Yield Pressure',
  'Marina Development Pipelines',
  'Luxury Corridor Formation',
];

export default function StrategicIntelligence() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section
      id="intelligence"
      className="section-padding section-mid texture-overlay"
      ref={ref}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Decorative large text */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '-100px',
          transform: 'translateY(-50%)',
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '18rem',
          fontWeight: 700,
          color: 'rgba(201,168,76,0.02)',
          pointerEvents: 'none',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          lineHeight: 1,
        }}
      >
        INTEL
      </div>

      <div className="sovereign-container">
        {/* Centered header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.p
            className="section-label"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '1.5rem' }}
          >
            III — Strategic Intelligence
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 5vw, 4.5rem)',
              fontWeight: 300,
              lineHeight: 1.08,
              color: '#F5F0E8',
              marginBottom: '2rem',
            }}
          >
            Strategic Intelligence
            <br />
            <span className="gold-text">Before Capital Deployment.</span>
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
            Every investment mandate is reviewed through a comprehensive intelligence framework
            before capital is committed. The objective: entering before the market moves,
            and exiting before the market reacts.
          </motion.p>
        </div>

        {/* "Before the Market Moves" statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.45 }}
          style={{
            padding: '2rem',
            border: '1px solid rgba(201,168,76,0.15)',
            background: 'rgba(201,168,76,0.03)',
            marginBottom: '4rem',
            maxWidth: '680px',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
          }}
        >
          <p className="micro-label" style={{ marginBottom: '0.75rem' }}>
            Core Intelligence Mandate
          </p>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: 300,
              color: '#C9A84C',
              letterSpacing: '0.04em',
              lineHeight: 1.2,
            }}
          >
            Before the Market Moves.
          </p>
        </motion.div>

        {/* Intelligence filters — 3-column grid */}
        <motion.p
          className="micro-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ marginBottom: '1.5rem' }}
        >
          Mandate Review Framework
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: isDesktop ? 'repeat(3, 1fr)' : '1fr', gap: '0' }}>
          {intelligenceFilters.map((filter, i) => (
            <motion.div
              key={filter}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * i + 0.5 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                padding: '0.875rem 1rem',
                borderBottom: '1px solid rgba(42,42,42,0.7)',
              }}
            >
              {/* Gold diamond */}
              <div
                style={{
                  width: '5px',
                  height: '5px',
                  background: '#C9A84C',
                  transform: 'rotate(45deg)',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '0.95rem',
                  fontWeight: 400,
                  color: 'rgba(245, 240, 232, 0.65)',
                  letterSpacing: '0.03em',
                }}
              >
                {filter}
              </span>
              <div
                style={{
                  marginLeft: 'auto',
                  width: '20px',
                  height: '1px',
                  background: 'rgba(201,168,76,0.2)',
                  flexShrink: 0,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{ marginTop: '5rem', textAlign: 'center' }}
        >
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1rem, 2.5vw, 1.8rem)',
              fontStyle: 'italic',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'rgba(201, 168, 76, 0.6)',
              letterSpacing: '0.05em',
            }}
          >
            "Private capital requires private architecture."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
