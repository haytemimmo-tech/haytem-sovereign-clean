'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const articles = [
  {
    category: 'Private Wealth Strategy',
    title: 'Why Off-Market Assets Create True Wealth',
    excerpt: 'The public market is the last resort of the uninformed. True capital creation happens in the silence before the announcement — where relationships, intelligence, and timing converge.',
    read: '8 min read',
    keywords: ['off-market real estate', 'private wealth', 'UHNWI investment strategy'],
  },
  {
    category: 'Emerging Eldorado Intelligence',
    title: 'Albania, Montenegro & Batumi: The New Luxury Investment Corridor',
    excerpt: 'Three jurisdictions. One convergent thesis. The Adriatic-Black Sea corridor is forming as the most significant pre-institutional luxury investment opportunity in Europe this decade.',
    read: '12 min read',
    keywords: ['Albania real estate', 'Montenegro luxury investment', 'Batumi property'],
  },
  {
    category: 'Geographic Intelligence',
    title: 'Why Marrakech Is Becoming the New Private Capital Magnet',
    excerpt: 'Royal backing. Tourism infrastructure acceleration. A cultural brand that cannot be manufactured. Marrakech is not emerging — it has already arrived. But the smart capital window is closing.',
    read: '10 min read',
    keywords: ['Marrakech investment', 'Morocco luxury real estate', 'North Africa capital'],
  },
  {
    category: 'Capital Discipline',
    title: 'How Family Offices Protect Wealth Through Real Estate',
    excerpt: 'In an era of currency exposure and political risk, hard assets in strategic jurisdictions are the new reserve currency of the private wealth world. Here is the architecture that works.',
    read: '9 min read',
    keywords: ['family office real estate', 'wealth preservation', 'intergenerational wealth'],
  },
  {
    category: 'Sovereign Intelligence',
    title: 'The Geography of Future Wealth: Where Capital Moves Before the Market Knows',
    excerpt: 'Geographic foresight is the most undervalued asset in private capital. The territories that will define the next decade of luxury real estate are not where you are currently looking.',
    read: '14 min read',
    keywords: ['future wealth zones', 'emerging real estate markets', 'pre-market investment'],
  },
  {
    category: 'Strategic Insight',
    title: 'Why Privacy Is the New Luxury Currency',
    excerpt: 'In a world of total transparency, absolute discretion has become the most valuable service that any advisor can offer. And the price of that discretion is precision in execution.',
    read: '7 min read',
    keywords: ['private wealth advisory', 'UHNWI privacy', 'confidential wealth management'],
  },
];

export default function BlogPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="journal"
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
          XIII — Private Investment Intelligence Journal
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
            Intelligence
            <br />
            <span className="gold-text">Journal.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1rem',
                fontWeight: 300,
                lineHeight: 1.6,
                color: 'rgba(245, 240, 232, 0.45)',
                letterSpacing: '0.02em',
                marginBottom: '1.5rem',
              }}
            >
              Private intelligence for UHNWIs, family offices, sovereign investors, and strategic
              developers. Financial intelligence. Geographic foresight. Capital allocation wisdom.
            </p>
            <a
              href="/blog"
              className="btn-secondary"
              style={{ display: 'inline-block', textDecoration: 'none' }}
            >
              Access Full Journal
            </a>
          </motion.div>
        </div>

        {/* Articles grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1px', backgroundColor: 'rgba(42,42,42,0.2)' }}>
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.09 * i + 0.4 }}
              className="blog-card"
              style={{ padding: '2.5rem', background: '#0E0E0E' }}
            >
              {/* Category + read time */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.58rem',
                    fontWeight: 500,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(201,168,76,0.6)',
                  }}
                >
                  {article.category}
                </span>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.58rem',
                    color: 'rgba(245, 240, 232, 0.25)',
                    letterSpacing: '0.08em',
                  }}
                >
                  {article.read}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.25rem',
                  fontWeight: 400,
                  color: '#F5F0E8',
                  lineHeight: 1.35,
                  marginBottom: '1rem',
                  letterSpacing: '0.01em',
                }}
              >
                {article.title}
              </h3>

              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '0.9rem',
                  fontWeight: 300,
                  lineHeight: 1.65,
                  color: 'rgba(245, 240, 232, 0.38)',
                  letterSpacing: '0.02em',
                  marginBottom: '1.5rem',
                }}
              >
                {article.excerpt}
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(42,42,42,0.8)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.6rem',
                    fontWeight: 400,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(201,168,76,0.5)',
                  }}
                >
                  Read Intelligence Brief
                </span>
                <svg width="20" height="8" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0" y1="4" x2="16" y2="4" stroke="#C9A84C" strokeOpacity="0.4" strokeWidth="1" />
                  <path d="M14 1L18 4L14 7" stroke="#C9A84C" strokeOpacity="0.4" strokeWidth="1" fill="none" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
