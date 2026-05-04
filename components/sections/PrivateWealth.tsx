'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  { title: 'Family Office Real Estate', desc: 'Bespoke strategies for multigenerational wealth preservation through curated real asset portfolios.' },
  { title: 'Off-Market Trophy Assets', desc: 'Access to guarded estates, branded residences, and sovereign-grade assets invisible to the public market.' },
  { title: 'Private Wealth Migration', desc: 'Jurisdiction selection, residency pathways, and strategic relocation architecture for UHNWI families.' },
  { title: 'Succession Planning', desc: 'Intergenerational wealth continuity structures combining real estate, legal architecture, and fiscal intelligence.' },
  { title: 'Confidential Wealth Structuring', desc: 'Private capital structures designed for discretion, protection, and strategic tax efficiency.' },
  { title: 'Strategic Asset Diversification', desc: 'Cross-border portfolio engineering balancing risk, yield, liquidity, and legacy objectives.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function PrivateWealth() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 900);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section
      id="advisory"
      ref={ref}
      className="section-padding section-graphite texture-overlay"
    >
      <div className="sovereign-container">
        {/* Header */}
        <div style={{ marginBottom: '5rem' }}>
          <motion.p
            className="section-label"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '1.5rem' }}
          >
            I — Private Wealth Architecture
          </motion.p>

          <motion.div
            className="gold-line-left"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, ease: 'easeOut' }}
            style={{ transformOrigin: 'left', marginBottom: '2rem' }}
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: '#F5F0E8',
              marginBottom: '2rem',
            }}
          >
            We do not simply source properties.
            <br />
            <span className="gold-text">We secure legacies.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.05rem',
              fontWeight: 300,
              lineHeight: 1.6,
              color: 'rgba(245, 240, 232, 0.6)',
              letterSpacing: '0.02em',
            }}
          >
            Through a 15-year record of fiduciary discretion, Hassaneine Haytem grants privileged
            access to guarded assets: private estates, trophy residences, strategic hospitality assets,
            branded residences, marina developments, private islands, and sovereign-grade opportunities
            hidden beyond the public market.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ marginTop: '1.5rem' }}
          >
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.1rem',
                fontStyle: 'italic',
                lineHeight: 1.7,
                color: 'rgba(201, 168, 76, 0.8)',
                letterSpacing: '0.05em',
              }}
            >
              This is not brokerage. This is private market intelligence.
            </p>
          </motion.div>
        </div>

        {/* Services grid + image panel */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isDesktop ? '2fr 1fr' : '1fr',
            gap: '1px',
            backgroundColor: '#2A2A2A',
          }}
        >
          {/* Left: 2-column card grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
              gap: '1px',
              backgroundColor: '#2A2A2A',
            }}
          >
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                style={{
                  background: '#141414',
                  padding: '2.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                }}
                whileHover={{
                  backgroundColor: '#1A1A1A',
                  transition: { duration: 0.3 },
                }}
              >
                {/* Gold corner accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '30px',
                    height: '1px',
                    background: 'linear-gradient(90deg, #C9A84C, transparent)',
                  }}
                />

                <div
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    letterSpacing: '0.25em',
                    color: '#C9A84C',
                    textTransform: 'uppercase',
                    marginBottom: '1.25rem',
                  }}
                >
                  ◆
                </div>

                <h3
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.35rem',
                    fontWeight: 400,
                    color: '#F5F0E8',
                    marginBottom: '1rem',
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '0.95rem',
                    fontWeight: 300,
                    lineHeight: 1.65,
                    color: 'rgba(245, 240, 232, 0.5)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right: cinematic office image */}
          <div style={{ position: 'relative', overflow: 'hidden', minHeight: isDesktop ? '480px' : '320px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/luxury-office.jpg"
                alt=""
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: '50% 30%',
                  display: 'block',
                  /* Cinematic color grade: darken, boost contrast, warm sepia tone */
                  filter: 'brightness(0.78) contrast(1.22) saturate(1.18) sepia(0.32)',
                }}
              />

              {/* Layer 1 — Warm golden-hour wash (sunset amber from top) */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(170deg, rgba(201,148,38,0.22) 0%, rgba(180,110,18,0.10) 45%, transparent 72%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Layer 2 — Deep radial vignette (sovereign darkness at edges) */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'radial-gradient(ellipse 85% 75% at 52% 35%, transparent 0%, rgba(4,3,1,0.38) 55%, rgba(2,1,0,0.88) 100%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Layer 3 — Bottom shadow: deep obsidian floor */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(0deg, rgba(3,2,1,0.90) 0%, rgba(3,2,1,0.55) 18%, transparent 42%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Layer 4 — Top cinema letterbox shadow */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(3,2,1,0.60) 0%, rgba(3,2,1,0.20) 15%, transparent 32%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Layer 5 — Left edge blend into card grid */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(90deg, rgba(20,20,20,0.50) 0%, transparent 28%)',
                  pointerEvents: 'none',
                }}
              />
            </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            marginTop: '4rem',
            textAlign: 'center',
            padding: '3rem',
            border: '1px solid rgba(201,168,76,0.1)',
          }}
        >
          <p className="micro-label" style={{ marginBottom: '1rem' }}>
            Mandate Protocol
          </p>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
              fontStyle: 'italic',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'rgba(232, 213, 163, 0.7)',
              letterSpacing: '0.05em',
            }}
          >
            "Access subject to strategic alignment. Mandates accepted on a selective basis only."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
