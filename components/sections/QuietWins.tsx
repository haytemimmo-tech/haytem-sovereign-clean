'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const categories = [
  {
    type: 'Sovereign Advisory',
    title: 'Strategic Market Repositioning',
    desc: 'Engineering the investment narrative for an emerging jurisdiction, attracting $2.4B in new FDI flows within 24 months of mandate execution.',
    detail: 'North Africa · Institutional Capital · Sovereign-Level',
  },
  {
    type: 'Private Capital Deployment',
    title: 'Pre-Institutional Asset Acquisition',
    desc: 'Identifying and securing a trophy waterfront development portfolio in a Balkan emerging market 18 months before the corridor achieved international visibility.',
    detail: 'Mediterranean Balkans · Family Office · Off-Market',
  },
  {
    type: 'Trophy Asset Mandate',
    title: 'Confidential Acquisition — Monaco Corridor',
    desc: 'Brokering a private off-market acquisition of a prestigious estate for a Gulf sovereign-linked family at a significant pre-market premium to comparable public listings.',
    detail: 'Mediterranean · UHNWI · Absolute Confidentiality',
  },
  {
    type: 'Emerging Eldorado Discovery',
    title: 'Silent Capital Entry — Indian Ocean',
    desc: 'Structuring a confidential entry strategy for a family office into a private island resort ecosystem 24 months before mainstream institutional attention arrived.',
    detail: 'Indian Ocean · Private Island · First-Mover Advantage',
  },
  {
    type: 'FDI Architecture',
    title: 'Cross-Border Mandate Execution',
    desc: 'Designing and executing a multi-jurisdiction FDI mandate connecting sovereign investors from the Gulf with strategic opportunities across North Africa and Southern Europe.',
    detail: 'Multi-Jurisdiction · Gulf Capital · Strategic Developer',
  },
  {
    type: 'Investor Protection Framework',
    title: 'Legacy Territory Identification',
    desc: 'Advising a private capital group on strategic territory selection for a hospitality corridor investment — securing pre-construction access at a fraction of expected future valuation.',
    detail: 'Asia Pacific · Private Capital Group · Long-Term Legacy',
  },
];

export default function QuietWins() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="section-padding section-mid texture-overlay"
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
          VIII — Strategic Outcomes
        </motion.p>

        <div className="grid-2col" style={{ gap: '4rem', marginBottom: '4rem', alignItems: 'end' }}>
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
            Quiet Wins.
            <br />
            <span className="gold-text">Permanent Outcomes.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1rem',
              fontWeight: 300,
              lineHeight: 1.6,
              color: 'rgba(245, 240, 232, 0.45)',
              letterSpacing: '0.02em',
            }}
          >
            Success in our world is rarely announced. It is structured, executed, and protected.
            The mandates below represent categories of achievement — anonymized by design,
            authentic by nature. Discretion is the first currency of power.
          </motion.p>
        </div>

        <div className="gold-line" style={{ marginBottom: '4rem' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i + 0.4 }}
              className="grid-category-row"
              style={{
                gap: '3rem',
                padding: '2.5rem 0',
                borderBottom: '1px solid rgba(42,42,42,0.6)',
                alignItems: 'start',
              }}
            >
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '0.3rem 0.7rem',
                    background: 'rgba(201,168,76,0.07)',
                    border: '1px solid rgba(201,168,76,0.15)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.55rem',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(201,168,76,0.7)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {cat.type}
                </span>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.6rem',
                    fontWeight: 400,
                    letterSpacing: '0.1em',
                    color: 'rgba(245, 240, 232, 0.25)',
                    textTransform: 'uppercase',
                    marginTop: '0.75rem',
                  }}
                >
                  {cat.detail}
                </p>
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.4rem',
                    fontWeight: 400,
                    color: '#F5F0E8',
                    marginBottom: '0.875rem',
                    lineHeight: 1.3,
                  }}
                >
                  {cat.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '0.95rem',
                    fontWeight: 300,
                    lineHeight: 1.65,
                    color: 'rgba(245, 240, 232, 0.45)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {cat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          style={{ marginTop: '4rem', textAlign: 'center' }}
        >
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1rem, 2.5vw, 1.6rem)',
              fontStyle: 'italic',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'rgba(201,168,76,0.6)',
              letterSpacing: '0.05em',
            }}
          >
            "Confidential review required prior to engagement."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
