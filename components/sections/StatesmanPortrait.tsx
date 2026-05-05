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
    <>
      {/* JSON-LD Person Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Person',
            name: 'Hassaneine Haytem',
            jobTitle: 'Global Market Architect',
            url: 'https://www.haytemsovereign.com',
            image: 'https://www.haytemsovereign.com/Haytem-about.jpg',
            description:
              'Hassaneine Haytem leads HAYTEM SOVEREIGN, a private strategic advisory platform focused on strategic real estate investment, foreign direct investment advisory, emerging investment markets, private mandates, industrial platforms, resorts, and data infrastructure.',
          }),
        }}
      />

      <section
        id="about"
        className="section-padding section-graphite texture-overlay"
        ref={ref}
        style={{ position: 'relative', overflow: 'hidden' }}
      >
        <div className="sovereign-container">
          <motion.p
    className="section-label"
    initial={{ opacity: 0, x: -20 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.6 }}
    style={{ marginBottom: "1.5rem" }}
  >
    X — GLOBAL ADVISOR
  </motion.p>

          {/* About Header with Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              display: 'flex',
              flexDirection: isDesktop ? 'row' : 'column',
              alignItems: isDesktop ? 'center' : 'center',
              gap: isDesktop ? '3rem' : '2rem',
              marginBottom: '3.5rem',
              justifyContent: isDesktop ? 'flex-start' : 'center',
            }}
          >
            {/* Portrait - Subtle Signature */}
            <div
              style={{
                position: 'relative',
                width: isDesktop ? '140px' : '100px',
                height: isDesktop ? '140px' : '100px',
                flexShrink: 0,
              }}
            >
              <Image
                src="/haytem-about.jpg"
                alt="Hassaneine Haytem, Global Market Architect"
                fill
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  borderRadius: '50%',
                }}
                priority
              />
            </div>

            {/* Title & Subtitle */}
            <div>
              <h2
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: isDesktop ? 'clamp(2.2rem, 3.5vw, 3rem)' : 'clamp(1.8rem, 4vw, 2.4rem)',
                  fontWeight: 300,
                  lineHeight: 1.15,
                  color: '#F5F0E8',
                  marginBottom: '0.8rem',
                  letterSpacing: '-0.01em',
                }}
              >
                Hassaneine Haytem
                <br />
                <span className="gold-text">Global Market Architect</span>
              </h2>

              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.05rem',
                  fontWeight: 300,
                  lineHeight: 1.6,
                  color: 'rgba(245, 240, 232, 0.65)',
                  letterSpacing: '0.01em',
                }}
              >
                Private strategic advisory across real estate, resorts, industrial platforms, data infrastructure, and emerging investment markets.
              </p>
            </div>
          </motion.div>

          {/* Core Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              maxWidth: '900px',
            }}
          >
            <div className="gold-line" style={{ marginBottom: '2.5rem' }} />

            {/* Primary Content */}
            <div
              style={{
                display: isDesktop ? 'grid' : 'block',
                gridTemplateColumns: isDesktop ? '1.2fr 1fr' : '1fr',
                gap: isDesktop ? '3rem' : '2rem',
                marginBottom: '3rem',
              }}
            >
              {/* Left: About Text */}
              <div>
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.1rem',
                    fontWeight: 300,
                    lineHeight: 1.7,
                    color: 'rgba(245, 240, 232, 0.6)',
                    letterSpacing: '0.01em',
                    marginBottom: '1.5rem',
                  }}
                >
                  Hassaneine Haytem leads HAYTEM SOVEREIGN as a private strategic advisory platform positioned around global market architecture, strategic real estate investment, foreign direct investment intelligence, and emerging investment markets.
                </p>

                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.1rem',
                    fontWeight: 300,
                    lineHeight: 1.7,
                    color: 'rgba(245, 240, 232, 0.55)',
                    letterSpacing: '0.01em',
                    marginBottom: '1.5rem',
                  }}
                >
                  The advisory focuses on identifying, structuring, and securing investment opportunities across both established destinations and future growth corridors before they reach institutional saturation. Its core areas include premium real estate, integrated resort developments, industrial platforms, logistics corridors, data centers, and digital infrastructure.
                </p>

                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.1rem',
                    fontWeight: 300,
                    lineHeight: 1.7,
                    color: 'rgba(245, 240, 232, 0.55)',
                    letterSpacing: '0.01em',
                  }}
                >
                  Through a discreet network of strategic analysts, legal partners, market specialists, and cross-border advisors, HAYTEM SOVEREIGN approaches each mandate with confidentiality, precision, and long-term capital vision.
                </p>
              </div>

              {/* Right: Core Expertise */}
              <div>
                <h3
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.1rem',
                    fontWeight: 400,
                    color: '#C9A84C',
                    marginBottom: '1.5rem',
                    letterSpacing: '0.02em',
                  }}
                >
                  Core Expertise
                </h3>

                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  {[
                    'Strategic real estate investment and asset positioning',
                    'Integrated resort and hospitality development advisory',
                    'Industrial and logistics investment structuring',
                    'Data center and digital infrastructure positioning',
                    'Foreign direct investment (FDI) and cross-border capital strategy',
                    'Private mandates for qualified investors, family offices, and strategic capital partners',
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '0.95rem',
                        fontWeight: 300,
                        lineHeight: 1.6,
                        color: 'rgba(245, 240, 232, 0.5)',
                        paddingLeft: '1.5rem',
                        position: 'relative',
                        letterSpacing: '0.01em',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: '0.35rem',
                          width: '4px',
                          height: '4px',
                          backgroundColor: '#C9A84C',
                          borderRadius: '50%',
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Closing Advisory Statement */}
            <div
              style={{
                borderTop: '1px solid rgba(201, 168, 76, 0.15)',
                borderBottom: '1px solid rgba(201, 168, 76, 0.15)',
                padding: '2rem 0',
                marginBottom: '2rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1rem',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  color: 'rgba(245, 240, 232, 0.65)',
                  letterSpacing: '0.01em',
                  fontStyle: 'italic',
                }}
              >
                Engagements are reserved for serious capital, institutional profiles, and high-level investment mandates requiring discretion, market intelligence, and strategic execution.
              </p>
            </div>

            {/* Contact Line */}
            <div
              style={{
                display: 'flex',
                flexDirection: isDesktop ? 'row' : 'column',
                alignItems: isDesktop ? 'center' : 'flex-start',
                gap: isDesktop ? '1rem' : '0.8rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1rem',
                  fontWeight: 300,
                  color: 'rgba(245, 240, 232, 0.6)',
                  letterSpacing: '0.01em',
                }}
              >
                For confidential advisory enquiries:
              </p>
              <a
                href="mailto:advisory@haytemsovereign.com"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '1rem',
                  fontWeight: 400,
                  color: '#C9A84C',
                  textDecoration: 'none',
                  borderBottom: '1px solid #C9A84C',
                  paddingBottom: '2px',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.8';
                  e.currentTarget.style.borderBottomColor = '#E8D5A3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.borderBottomColor = '#C9A84C';
                }}
              >
                advisory@haytemsovereign.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
