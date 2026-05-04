'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

export default function StatesmanPortrait() {
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
      id="portrait"
      className="section-padding section-graphite texture-overlay"
      ref={ref}
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div className="sovereign-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
            gap: isDesktop ? '6rem' : '3rem',
            alignItems: 'center',
          }}
        >
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ position: 'relative' }}
          >
            {/* Frame */}
            <div
              style={{
                position: 'absolute',
                top: '-15px',
                left: '-15px',
                right: '15px',
                bottom: '15px',
                border: '1px solid rgba(201,168,76,0.2)',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
                right: '-15px',
                bottom: '-15px',
                border: '1px solid rgba(201,168,76,0.1)',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />

            {/* Portrait container */}
            <div
              style={{
                position: 'relative',
                aspectRatio: '3/4',
                overflow: 'hidden',
                background: '#1A1A1A',
              }}
            >
              {/* Try to load portrait.jpg, fallback to placeholder */}
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <Image
                  src="/portrait.jpg"
                  alt="Hassaneine Haytem — Global Market Architect"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                {/* Gradient overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.6) 100%)',
                  }}
                />
              </div>

              {/* Portrait fallback (shown if image fails) */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #1A1A1A 0%, #0F0F0F 100%)',
                  zIndex: -1,
                }}
              >
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '1rem' }}>
                  <circle cx="40" cy="30" r="18" stroke="#C9A84C" strokeOpacity="0.3" strokeWidth="1" />
                  <path d="M8 70 C8 52 20 44 40 44 C60 44 72 52 72 70" stroke="#C9A84C" strokeOpacity="0.3" strokeWidth="1" fill="none" />
                </svg>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.65rem',
                    letterSpacing: '0.2em',
                    color: 'rgba(201,168,76,0.4)',
                    textAlign: 'center',
                  }}
                >
                  Place portrait.jpg in /public/
                </p>
              </div>
            </div>

            {/* Name plate */}
            <div
              style={{
                position: 'absolute',
                bottom: '-1px',
                left: 0,
                right: 0,
                padding: '1.5rem 2rem',
                background: 'linear-gradient(180deg, transparent 0%, rgba(10,10,10,0.95) 100%)',
                zIndex: 2,
              }}
            >
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.5rem',
                  fontWeight: 400,
                  color: '#F5F0E8',
                  letterSpacing: '0.05em',
                }}
              >
                Hassaneine Haytem
              </p>
              <p className="micro-label" style={{ color: 'rgba(201,168,76,0.6)' }}>
                Global Market Architect
              </p>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="section-label" style={{ marginBottom: '1.5rem' }}>
              X — The Statesman & Advisor
            </p>

            <div className="gold-line-left" style={{ marginBottom: '2rem' }} />

            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 300,
                lineHeight: 1.1,
                color: '#F5F0E8',
                marginBottom: '2rem',
              }}
            >
              The Silent Architect
              <br />
              <span className="gold-text">of Wealth.</span>
            </h2>

            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.05rem',
                fontWeight: 300,
                lineHeight: 1.6,
                color: 'rgba(245, 240, 232, 0.55)',
                letterSpacing: '0.02em',
                marginBottom: '2rem',
              }}
            >
              Hassaneine Haytem is the silent architect of wealth. Whether advising a sovereign
              investment mandate or guiding a private investor toward a trophy acquisition in Dubai,
              Marrakech, Monaco, Batumi, Montenegro, Albania, Singapore, or beyond — his mission
              remains unchanged.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginBottom: '2.5rem',
              }}
            >
              {[
                { title: 'Absolute Alpha', desc: 'First-mover positioning in every mandate.' },
                { title: 'Ironclad Secrecy', desc: 'Discretion is non-negotiable, always.' },
                { title: 'Strategic Permanence', desc: 'Built for legacy, not cycles.' },
                { title: 'Sovereign Authority', desc: 'Operating at the intersection of power.' },
              ].map((attr) => (
                <div
                  key={attr.title}
                  style={{
                    padding: '1.25rem',
                    borderLeft: '1px solid rgba(201,168,76,0.2)',
                  }}
                >
                  <h4
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1rem',
                      fontWeight: 400,
                      color: '#C9A84C',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {attr.title}
                  </h4>
                  <p
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '0.88rem',
                      fontWeight: 300,
                      color: 'rgba(245, 240, 232, 0.4)',
                      lineHeight: 1.8,
                      letterSpacing: '0.02em',
                    }}
                  >
                    {attr.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Advisory reaches */}
            <p className="micro-label" style={{ marginBottom: '1rem' }}>
              Advisory Footprint
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Dubai', 'Marrakech', 'Monaco', 'Batumi', 'Montenegro', 'Albania', 'Singapore', 'Mauritius', 'London', 'Geneva', 'Abu Dhabi', 'Athens'].map((city) => (
                <span
                  key={city}
                  style={{
                    padding: '0.3rem 0.8rem',
                    border: '1px solid rgba(42,42,42,0.9)',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.62rem',
                    fontWeight: 400,
                    letterSpacing: '0.1em',
                    color: 'rgba(245, 240, 232, 0.35)',
                    textTransform: 'uppercase',
                  }}
                >
                  {city}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
