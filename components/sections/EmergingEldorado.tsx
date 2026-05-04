'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const eldoradoExamples = [
  {
    before: 'The next Dubai',
    after: 'before it becomes Dubai',
    territory: 'Ras Al Khaimah · Lusail · Riyadh',
    desc: 'Sovereign-backed vision economies where government mandate meets international capital appetite.',
  },
  {
    before: 'The next Monaco',
    after: 'before global capital arrives',
    territory: 'Porto Montenegro · Luštica Bay · Budva',
    desc: 'Ultra-premium marina destinations emerging at the intersection of European appetite and Adriatic scarcity.',
  },
  {
    before: 'The next Batumi',
    after: 'before pricing explodes',
    territory: 'Vlora · Durrës · Ksamil',
    desc: 'Albanian Riviera: the last underpriced beachfront corridor in Mediterranean Europe with zero institutional saturation.',
  },
  {
    before: 'The next Bali',
    after: 'before family offices dominate',
    territory: 'Cape Verde · Aruba · São Tomé',
    desc: 'Island jurisdictions offering tropical scarcity, residency pathways, and pre-institutional hospitality asset pricing.',
  },
];

const territories = [
  { name: 'Marrakech', region: 'Morocco', type: 'Cultural Capital' },
  { name: 'Tangier', region: 'Morocco', type: 'Finance Gateway' },
  { name: 'Casablanca Marina', region: 'Morocco', type: 'Maritime Hub' },
  { name: 'Batumi', region: 'Georgia', type: 'Emerging Marina' },
  { name: 'Porto Montenegro', region: 'Montenegro', type: 'Ultra-Premium Marina' },
  { name: 'Luštica Bay', region: 'Montenegro', type: 'Sovereign Development' },
  { name: 'Vlora', region: 'Albania', type: 'Riviera Frontier' },
  { name: 'Durrës', region: 'Albania', type: 'Coastal Capital' },
  { name: 'Ksamil', region: 'Albania', type: 'Hidden Paradise' },
  { name: 'Athens Riviera', region: 'Greece', type: 'Mediterranean Premium' },
  { name: 'Bali', region: 'Indonesia', type: 'Hospitality Frontier' },
  { name: 'Mauritius', region: 'Indian Ocean', type: 'Private Island Zone' },
  { name: 'Cape Verde', region: 'Atlantic', type: 'Emerging Resort' },
  { name: 'Tulum', region: 'Mexico', type: 'Luxury Eco-Corridor' },
  { name: 'Buenos Aires', region: 'Argentina', type: 'Capital Undervaluation' },
  { name: 'Singapore', region: 'Asia Pacific', type: 'Wealth Hub' },
  { name: 'Abu Dhabi', region: 'UAE', type: 'Sovereign Architecture' },
  { name: 'Ras Al Khaimah', region: 'UAE', type: 'Next Luxury Frontier' },
  { name: 'Maldives', region: 'Indian Ocean', type: 'Island Scarcity' },
  { name: 'Cyprus', region: 'Mediterranean', type: 'Golden Visa Gateway' },
  { name: 'Estepona', region: 'Spain', type: 'Luxury Corridor' },
  { name: 'Marbella', region: 'Spain', type: 'Established Premium' },
];

const keywords = [
  'Future Wealth Zones',
  'Pre-Market Capital Deployment',
  'Strategic Early Entry',
  'Emerging Sovereign Destinations',
  'Next-Generation Luxury Investment Corridors',
  'Hidden Global Investment Eldorados',
  'Silent Capital Frontiers',
  'Pre-Institutional Asset Acquisition',
  'First-Mover Advantage Markets',
  'Strategic Legacy Territories',
  'Elite Geographic Intelligence',
  'Capital Allocation Intelligence',
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/š/g, 's')
    .replace(/ć/g, 'c')
    .replace(/đ/g, 'd')
    .replace(/ž/g, 'z')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export default function EmergingEldorado() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="eldorado"
      className="section-padding texture-overlay"
      ref={ref}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #0A0A0A 0%, #0D0B00 50%, #0A0A0A 100%)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-50px',
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '16rem',
          fontWeight: 700,
          color: 'rgba(201,168,76,0.02)',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
          whiteSpace: 'nowrap',
        }}
      >
        ELDORADO
      </div>

      <div className="sovereign-container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.p
            className="section-label"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '1.5rem' }}
          >
            V — Emerging Eldorado Intelligence
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 6vw, 6rem)',
              fontWeight: 300,
              lineHeight: 1.0,
              color: '#F5F0E8',
              marginBottom: '1.5rem',
            }}
          >
            We do not chase
            <br />
            <span className="gold-text">mature markets.</span>
            <br />
            We enter before
            <br />
            <span style={{ color: 'rgba(245,240,232,0.5)' }}>the market exists.</span>
          </motion.h2>

          <motion.div
            className="gold-line"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4 }}
            style={{ transformOrigin: 'left', marginBottom: '2.5rem' }}
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
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
            This is not traditional luxury real estate advisory. This is strategic early-entry capital
            deployment into future high-yield zones — where capital multiplies before institutional saturation.
            We identify, engineer, and secure elite real estate investment opportunities in emerging
            global Eldorados before mass market discovery.
          </motion.p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '5rem' }}>
          {eldoradoExamples.map((ex, i) => (
            <motion.div
              key={ex.before}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 * i + 0.6 }}
              style={{
                background: '#0E0E0E',
                border: '1px solid rgba(42,42,42,0.8)',
                padding: '2rem 2.5rem',
                borderLeft: '2px solid rgba(201,168,76,0.3)',
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.3rem, 3vw, 2rem)', color: '#C9A84C' }}>
                  {ex.before}
                </span>
                <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.3rem, 3vw, 2rem)', fontStyle: 'italic', color: 'rgba(245, 240, 232, 0.4)' }}>
                  {ex.after}
                </span>
              </div>

              <p className="micro-label" style={{ marginBottom: '0.75rem', color: 'rgba(201,168,76,0.5)' }}>
                {ex.territory}
              </p>

              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.92rem', lineHeight: 1.65, color: 'rgba(245, 240, 232, 0.4)' }}>
                {ex.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          style={{ marginBottom: '4rem' }}
        >
          <p className="micro-label" style={{ marginBottom: '1.5rem' }}>
            Strategic Positioning Language
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {keywords.map((kw) => (
              <span
                key={kw}
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  border: '1px solid rgba(201,168,76,0.2)',
                  background: 'rgba(201,168,76,0.03)',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.65rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(232, 213, 163, 0.6)',
                }}
              >
                {kw}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <p className="micro-label" style={{ marginBottom: '1.5rem' }}>
            Active Investment Territories — Global Coverage
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '1px',
              backgroundColor: 'rgba(42,42,42,0.3)',
            }}
          >
            {territories.map((t, i) => (
              <Link
                key={t.name}
                href={`/eldorado/${slugify(t.name)}`}
                style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.04 * i + 1.2 }}
                  style={{
                    background: '#0A0A0A',
                    padding: '1.25rem 1.5rem',
                    borderLeft: '1px solid rgba(201,168,76,0.06)',
                    cursor: 'pointer',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.05rem',
                      fontWeight: 400,
                      color: '#F5F0E8',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {t.name}
                  </p>

                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.6rem',
                      fontWeight: 400,
                      letterSpacing: '0.12em',
                      color: 'rgba(201, 168, 76, 0.6)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {t.region} · {t.type}
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          style={{
            marginTop: '4rem',
            padding: '3rem',
            border: '1px solid rgba(201,168,76,0.12)',
            textAlign: 'center',
          }}
        >
          <p className="micro-label" style={{ marginBottom: '1.5rem' }}>
            Final Perception
          </p>

          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.1rem, 2.5vw, 2rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'rgba(232, 213, 163, 0.8)',
              letterSpacing: '0.04em',
              lineHeight: 1.7,
            }}
          >
            “This is not luxury property consulting.
            <br />
            This is elite geographic intelligence for capital allocation.”
          </p>
        </motion.div>
      </div>
    </section>
  );}