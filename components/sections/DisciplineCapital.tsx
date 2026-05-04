'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const principles = [
  { n: '01', title: 'Preservation Before Expansion', body: 'Capital preservation precedes return optimization. Every mandate begins with a rigorous downside assessment before upside is explored.' },
  { n: '02', title: 'Risk-Adjusted Opportunity Selection', body: 'Not every opportunity merits deployment. Strategic filtering ensures capital enters only where the risk-reward geometry is asymmetrical in our favor.' },
  { n: '03', title: 'Strategic Entry, Disciplined Exit', body: 'Entry precision creates legacy. Exit discipline protects it. Neither is negotiable within the HAYTEM SOVEREIGN framework.' },
  { n: '04', title: 'Jurisdictional Intelligence', body: 'Legal architecture, political stability, fiscal environment, and capital mobility are assessed before any territory enters the advisory universe.' },
  { n: '05', title: 'Asset-Backed Capital Deployment', body: 'We deploy into tangible, sovereign-grade assets with intrinsic long-term value — never into speculative vehicles or narrative-driven opportunities.' },
  { n: '06', title: 'Legacy-Oriented Investment Decisions', body: 'Every acquisition is evaluated through a multigenerational lens. We build for succession, not merely for returns.' },
  { n: '07', title: 'First-Mover Advantage with Institutional Discipline', body: 'We move before the market — but with the rigor of institutional-grade analysis. Early entry is not a gamble. It is a calculated strategic position.' },
  { n: '08', title: 'Pre-Market Positioning Without Speculation', body: 'Asymmetrical advantage comes from intelligence, not speculation. We identify structural catalysts before they become public narrative.' },
];

export default function DisciplineCapital() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="section-padding section-graphite texture-overlay"
      ref={ref}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Decorative vertical line */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '1px',
          background: 'linear-gradient(180deg, transparent 0%, rgba(201,168,76,0.08) 30%, rgba(201,168,76,0.08) 70%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      <div className="sovereign-container">
        {/* Header */}
        <div className="grid-2col" style={{ gap: '4rem', alignItems: 'end', marginBottom: '5rem' }}>
          <div>
            <motion.p
              className="section-label"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              style={{ marginBottom: '1.5rem' }}
            >
              VI — Capital Discipline
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
              }}
            >
              The Discipline
              <br />
              <span className="gold-text">of Capital.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.05rem',
                fontWeight: 300,
                lineHeight: 1.6,
                color: 'rgba(245, 240, 232, 0.5)',
                letterSpacing: '0.02em',
              }}
            >
              Capital without discipline is not investment. It is exposure. HAYTEM SOVEREIGN
              operates within a rigorous framework where protected upside, institutional-grade
              discipline, and asymmetrical advantage define every mandate.
            </p>
          </motion.div>
        </div>

        {/* Principles */}
        <div>
          {principles.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 * i + 0.4 }}
              className="grid-principle-row"
              style={{
                gap: '2rem',
                padding: '2rem 0',
                borderBottom: '1px solid rgba(42,42,42,0.7)',
                alignItems: 'start',
              }}
            >
              <div
                className="grid-principle-num"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '2.5rem',
                  fontWeight: 300,
                  color: 'rgba(201,168,76,0.15)',
                  lineHeight: 1,
                }}
              >
                {p.n}
              </div>

              <h3
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.2rem',
                  fontWeight: 400,
                  color: '#F5F0E8',
                  letterSpacing: '0.02em',
                  lineHeight: 1.3,
                }}
              >
                {p.title}
              </h3>

              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  lineHeight: 1.65,
                  color: 'rgba(245, 240, 232, 0.45)',
                  letterSpacing: '0.02em',
                }}
              >
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom — key terms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{
            marginTop: '4rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            justifyContent: 'center',
          }}
        >
          {['Protected Upside', 'Strategic Yield Optimization', 'Institutional-Grade Discipline', 'Asymmetrical Advantage', 'Timing Intelligence', 'Capital Preservation Architecture'].map((term) => (
            <span
              key={term}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1rem',
                fontStyle: 'italic',
                fontWeight: 300,
                color: 'rgba(201,168,76,0.5)',
                padding: '0.5rem 1.25rem',
                border: '1px solid rgba(201,168,76,0.1)',
              }}
            >
              {term}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
