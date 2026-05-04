'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const pillars = [
  { code: '01', title: 'FDI Facilitation', desc: 'Engineering foreign direct investment flows into strategically positioned jurisdictions through targeted capital attraction programs.' },
  { code: '02', title: 'Market Engineering', desc: 'Transforming under-positioned markets into global investment magnets through strategic liquidity design and investor confidence architecture.' },
  { code: '03', title: 'Sovereign Asset Optimization', desc: 'Repositioning national and institutional assets to maximize capital efficiency, international appeal, and long-term yield potential.' },
  { code: '04', title: 'Jurisdiction Branding', desc: 'Crafting the strategic narrative that attracts sovereign capital, family offices, and institutional investors to target destinations.' },
  { code: '05', title: 'High-Yield Capital Events', desc: 'Orchestrating landmark investment forums, private roadshows, and capital deployment events that reposition market perception.' },
  { code: '06', title: 'Strategic Liquidity Design', desc: 'Building the market conditions, investor ecosystems, and capital pipelines that sustain long-term sovereign investment momentum.' },
];

export default function SovereignEngineering() {
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
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background geometric */}
      <div
        style={{
          position: 'absolute',
          right: '-200px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '600px',
          height: '600px',
          border: '1px solid rgba(201,168,76,0.04)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: '-100px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '400px',
          height: '400px',
          border: '1px solid rgba(201,168,76,0.06)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="sovereign-container">
        {/* Centered header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.p
            className="section-label"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '1.5rem' }}
          >
            II — Sovereign Market Engineering
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
              fontWeight: 300,
              lineHeight: 1.08,
              color: '#F5F0E8',
              marginBottom: '2rem',
            }}
          >
            Architecting the future
            <br />
            <span className="gold-text">of jurisdictions.</span>
          </motion.h2>

          <motion.div
            className="gold-line"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            style={{ transformOrigin: 'left', marginBottom: '2rem' }}
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
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
            We transform under-positioned markets into global investment magnets by engineering
            strategic liquidity, investor confidence, high-value capital events, and international
            market credibility. Every mandate is designed for one objective: strategic prosperity.
          </motion.p>
        </div>

        {/* Pillars grid + cinematic image panel */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isDesktop ? '2fr 1fr' : '1fr',
          gap: '2px',
          backgroundColor: 'rgba(42,42,42,0.3)',
        }}>

          {/* Left: 2-column pillar cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
            gap: '2px',
            backgroundColor: 'rgba(42,42,42,0.3)',
          }}>
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.code}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 * i + 0.4 }}
                style={{
                  background: '#0A0A0A',
                  padding: '2.5rem',
                  borderLeft: '1px solid rgba(201,168,76,0.08)',
                  borderTop: '1px solid rgba(42,42,42,0.5)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '3.5rem',
                    fontWeight: 300,
                    color: 'rgba(201,168,76,0.08)',
                    lineHeight: 1,
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                  }}
                >
                  {pillar.code}
                </div>

                <div
                  style={{
                    width: '24px',
                    height: '1px',
                    background: '#C9A84C',
                    marginBottom: '1.5rem',
                  }}
                />

                <h3
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.3rem',
                    fontWeight: 400,
                    color: '#F5F0E8',
                    marginBottom: '1rem',
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
                    color: 'rgba(245, 240, 232, 0.45)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right: sovereign boardroom image */}
          {isDesktop && (
            <div style={{ position: 'relative', overflow: 'hidden', minHeight: '480px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/elite-boardroom-strategy.png"
                alt=""
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                }}
              />
            </div>
          )}
        </div>

        {/* Mission statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          style={{ marginTop: '5rem', textAlign: 'center' }}
        >
          <div className="gold-line" style={{ marginBottom: '2.5rem' }} />
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.2rem, 3vw, 2rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.7,
              color: 'rgba(232, 213, 163, 0.7)',
              letterSpacing: '0.04em',
            }}
          >
            Every mandate is designed for one objective: strategic prosperity.
          </p>
          <div className="gold-line" style={{ marginTop: '2.5rem' }} />
        </motion.div>
      </div>
    </section>
  );
}
