'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    category: 'Private Family Office — Gulf Region',
    quote: 'The intelligence provided was not available through any conventional channel. The territory identified has since appreciated significantly. Our entry was secured at pre-institutional pricing, precisely as advised.',
    outcome: 'Trophy Asset Acquisition — Emerging Mediterranean Corridor',
  },
  {
    category: 'Sovereign-Linked Investor — Europe',
    quote: 'The depth of jurisdictional analysis and the discretion maintained throughout the mandate were unlike anything we had previously encountered. This is a different level of advisory entirely.',
    outcome: 'FDI Mandate — North African Market Engineering',
  },
  {
    category: 'Strategic Developer — North Africa',
    quote: 'The market repositioning strategy delivered outcomes that exceeded our most optimistic projections. Capital attraction accelerated on a timeline we had not thought possible.',
    outcome: 'Sovereign Market Engineering — $2B+ Capital Attraction Program',
  },
  {
    category: 'Private Capital Group — Singapore',
    quote: 'We were introduced to an opportunity that no institutional platform had identified. Eighteen months later, the same corridor has attracted three major international developers. The first-mover advantage was real.',
    outcome: 'Emerging Eldorado Intelligence — Adriatic Corridor Entry',
  },
  {
    category: 'Luxury Hospitality Mandate — Indian Ocean',
    quote: 'Every detail of the acquisition was handled with absolute precision and total confidentiality. The network access provided was extraordinary and would not have been available through any other pathway.',
    outcome: 'Private Island Acquisition — Off-Market Confidential',
  },
  {
    category: 'Confidential Real Estate Mandate — Mediterranean',
    quote: 'Strategic timing is everything. The entry point identified and secured for our family was at a level of pre-market pricing that has already created significant unrealized value, and the position has only strengthened.',
    outcome: 'Pre-Institutional Entry — Trophy Branded Residence',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="section-padding section-dark texture-overlay"
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
          XII — Discreet Validation
        </motion.p>

        <div className="grid-2col" style={{ gap: '4rem', marginBottom: '5rem', alignItems: 'end' }}>
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
            Strategic Testimonials.
            <br />
            <span className="gold-text">Discreet Validation.</span>
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
              color: 'rgba(245, 240, 232, 0.4)',
              letterSpacing: '0.02em',
            }}
          >
            Client identities remain protected in perpetuity. The mandates below represent
            categories of real engagements, presented with absolute discretion. Names, entities,
            and specific details are withheld as a matter of non-negotiable professional principle.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2px', backgroundColor: 'rgba(42,42,42,0.2)' }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.category}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * i + 0.4 }}
              style={{
                background: '#0A0A0A',
                padding: '2.5rem',
                position: 'relative',
              }}
            >
              {/* Category */}
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.58rem',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(201,168,76,0.5)',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid rgba(42,42,42,0.8)',
                }}
              >
                {t.category}
              </p>

              {/* Quote mark */}
              <div
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '4rem',
                  lineHeight: 1,
                  color: 'rgba(201,168,76,0.12)',
                  marginBottom: '-1rem',
                }}
              >
                "
              </div>

              {/* Quote */}
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.05rem',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: 'rgba(245, 240, 232, 0.65)',
                  letterSpacing: '0.02em',
                  marginBottom: '1.5rem',
                }}
              >
                {t.quote}
              </p>

              {/* Outcome */}
              <div
                style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(42,42,42,0.6)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.6rem',
                    fontWeight: 400,
                    letterSpacing: '0.12em',
                    color: 'rgba(201,168,76,0.35)',
                    textTransform: 'uppercase',
                  }}
                >
                  Mandate Outcome:
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.68rem',
                    fontWeight: 400,
                    color: 'rgba(245, 240, 232, 0.35)',
                    marginTop: '0.3rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  {t.outcome}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Image tile 1 — fills first orphan slot */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 1.0 }}
            style={{
              position: 'relative',
              overflow: 'hidden',
              width: '100%',
              height: '100%',
              minHeight: '380px',
              padding: 0,
              margin: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/confidential-deal-room.png"
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

          {/* Image tile 2 — fills second orphan slot to the right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 1.1 }}
            style={{
              position: 'relative',
              overflow: 'hidden',
              width: '100%',
              height: '100%',
              minHeight: '380px',
              padding: 0,
              margin: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/sovereign-mandate-boardroom.png"
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
      </div>
    </section>
  );
}
