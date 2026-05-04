'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const filters = [
  { cat: 'Legal & Security', items: ['Legal & Title Security', 'Off-Market Pricing Integrity', 'Regulatory Exposure Review', 'Developer Credibility Assessment'] },
  { cat: 'Political & Economic', items: ['Political Stability', 'Jurisdictional Momentum', 'Tax Optimization Relevance', 'Currency & Sovereign Risk'] },
  { cat: 'Liquidity & Exit', items: ['Liquidity Pathway Analysis', 'Exit Strategy Validation', 'Capital Appreciation Horizon', 'Cross-Border Mobility'] },
  { cat: 'Market Intelligence', items: ['Rental Yield Sustainability', 'Tourism Expansion Logic', 'Infrastructure Catalyst Review', 'Luxury Corridor Formation'] },
  { cat: 'Institutional Demand', items: ['Family Office Migration Potential', 'Residency-by-Investment Relevance', 'Branded Residence Potential', 'Future Institutional Demand'] },
  { cat: 'Asset Premium Signals', items: ['Marina & Waterfront Scarcity', 'Hospitality Asset Pipeline', 'Private Island Jurisdiction Status', 'Golden Visa Ecosystem Strength'] },
];

export default function AcquisitionFramework() {
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
      className="section-padding section-dark texture-overlay"
      ref={ref}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div className="sovereign-container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.p
            className="section-label"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '1.5rem' }}
          >
            VII — Acquisition Framework
          </motion.p>

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
              marginBottom: '2rem',
            }}
          >
            Strategic Acquisition
            <br />
            <span className="gold-text">Framework.</span>
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
              maxWidth: '680px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Every opportunity passes through strict multi-layer filters before entering the
            HAYTEM SOVEREIGN advisory universe. Scarcity builds trust. Availability destroys prestige.
            Only assets passing all criteria receive mandate consideration.
          </motion.p>
        </div>

        {/* Framework grid */}
        <div style={{ display: 'grid', gridTemplateColumns: isDesktop ? 'repeat(3, 1fr)' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {filters.map((filter, i) => (
            <motion.div
              key={filter.cat}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * i + 0.4 }}
              style={{
                background: '#0E0E0E',
                border: '1px solid #1E1E1E',
                padding: '2rem',
                position: 'relative',
              }}
            >
              {/* Category label */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid rgba(42,42,42,0.8)',
                }}
              >
                <div style={{ width: '4px', height: '20px', background: 'linear-gradient(180deg, #C9A84C, #8B6914)', flexShrink: 0 }} />
                <h3
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.65rem',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#C9A84C',
                  }}
                >
                  {filter.cat}
                </h3>
              </div>

              {/* Filter items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {filter.items.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.875rem',
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                      <rect x="5.5" y="0.5" width="7.07" height="7.07" transform="rotate(45 5.5 0.5)" stroke="#C9A84C" strokeOpacity="0.5" strokeWidth="0.75" />
                      <rect x="5.5" y="2.5" width="4.24" height="4.24" transform="rotate(45 5.5 2.5)" fill="#C9A84C" fillOpacity="0.25" />
                    </svg>
                    <span
                      style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '0.9rem',
                        fontWeight: 300,
                        color: 'rgba(245, 240, 232, 0.55)',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Framework statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2px', backgroundColor: 'rgba(42,42,42,0.2)' }}
        >
          {[
            { label: 'Filters Applied', value: '20+' },
            { label: 'Due Diligence Layers', value: '6' },
            { label: 'Average Mandate Duration', value: 'Long-Term' },
            { label: 'Acceptance Rate', value: 'Selective' },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: '#0A0A0A',
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
                {stat.value}
              </div>
              <p className="micro-label">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
