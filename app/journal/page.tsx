import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Journal | HAYTEM SOVEREIGN — Insights & Commentary',
  description:
    'Editorial insights and strategic commentary on capital markets, wealth strategy, and emerging opportunities. In-depth analysis and thought leadership on private wealth architecture.',
};

const articles = [
  {
    category: 'Market Commentary',
    title: 'The Shift in Capital Flows: Where Private Wealth Is Moving',
    date: 'Journal Entry · Capital Migration',
    excerpt:
      'The global dynamics of private capital are undergoing a profound transformation. We examine the geopolitical and economic factors reshaping where the world\'s wealth is being positioned, and what this signals for investors and asset classes.',
    keywords: ['capital flows', 'wealth migration', 'market analysis', 'private capital'],
    read: '7 min',
  },
  {
    category: 'Strategy & Architecture',
    title: 'Building Generational Wealth: The Blueprint Beyond Returns',
    date: 'Journal Entry · Family Office Strategy',
    excerpt:
      'True wealth architecture extends far beyond annual returns. We explore the frameworks that guide the world\'s most enduring family offices—structures designed for intergenerational stability, tax efficiency, and legacy preservation.',
    keywords: ['family office', 'wealth architecture', 'generational planning', 'strategic asset allocation'],
    read: '10 min',
  },
  {
    category: 'Real Estate Dynamics',
    title: 'The Geography of Opportunity: Real Estate Beyond the Obvious',
    date: 'Journal Entry · Property Strategy',
    excerpt:
      'While institutional capital chases the known markets, discerning investors identify where true value lies—in jurisdictions with structural advantages, favorable demographics, and undercovered investment pipelines. A tactical guide.',
    keywords: ['real estate investment', 'emerging markets', 'property strategy', 'geographic positioning'],
    read: '9 min',
  },
  {
    category: 'Regulatory & Policy',
    title: 'Understanding the New Regulatory Landscape for Global Capital',
    date: 'Journal Entry · Policy Analysis',
    excerpt:
      'Tax reform, AML requirements, and changing compliance frameworks are reshaping how private wealth is structured and deployed. We break down the key regulatory shifts and what they mean for your capital deployment strategy.',
    keywords: ['regulatory landscape', 'tax strategy', 'compliance', 'capital deployment'],
    read: '8 min',
  },
  {
    category: 'Industry Insights',
    title: 'The Private Wealth Advisory Evolution: What\'s Changing and Why',
    date: 'Journal Entry · Industry Analysis',
    excerpt:
      'The advisory industry is being disrupted. Fee compression, transparency demands, and client sophistication are forcing a reckoning. We analyze how the best advisors are adapting and what the new standard of excellence looks like.',
    keywords: ['wealth advisory', 'industry trends', 'market evolution', 'advisory models'],
    read: '11 min',
  },
  {
    category: 'Thought Leadership',
    title: 'The Psychology of Capital: Decision-Making Under Uncertainty',
    date: 'Journal Entry · Investment Philosophy',
    excerpt:
      'The difference between institutional and private capital success is rarely analytical—it\'s psychological. We examine the decision-making frameworks that separate consistent outperformers from the rest.',
    keywords: ['investment psychology', 'decision making', 'behavioral finance', 'capital discipline'],
    read: '6 min',
  },
  {
    category: 'Emerging Trends',
    title: 'Digital Assets and the Future of Wealth Storage',
    date: 'Journal Entry · Innovation',
    excerpt:
      'The role of digital assets in private wealth architecture is no longer speculative. We explore how sophisticated investors are integrating these tools into broader capital strategies and what the macro implications are.',
    keywords: ['digital assets', 'blockchain', 'wealth innovation', 'asset storage'],
    read: '9 min',
  },
  {
    category: 'Global Markets',
    title: 'Post-Crisis Capital Redeployment: Identifying the Opportunities',
    date: 'Journal Entry · Market Outlook',
    excerpt:
      'Market dislocations create openings for prepared capital. We examine the current market conditions and identify where strategic investors are positioning for the next cycle.',
    keywords: ['market opportunity', 'capital redeployment', 'market timing', 'strategic positioning'],
    read: '10 min',
  },
];

export default function JournalPage() {
  return (
    <>
      <Navigation />
      <main style={{ paddingTop: '100px', background: '#0A0A0A', minHeight: '100vh' }}>
        {/* Header */}
        <section
          style={{
            padding: '6rem 0 4rem',
            borderBottom: '1px solid rgba(42,42,42,0.6)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div className="sovereign-container" style={{ position: 'relative', zIndex: 3 }}>
            <p className="section-label" style={{ marginBottom: '1.5rem' }}>
              Editorial Commentary & Strategic Insights
            </p>
            <h1
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.5rem, 6vw, 6rem)',
                fontWeight: 300,
                lineHeight: 1.0,
                color: '#F5F0E8',
                marginBottom: '1.5rem',
              }}
            >
              Journal.
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #9B8035 0%, #C9A84C 30%, #E8D5A3 50%, #C9A84C 70%, #9B8035 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Thought Leadership.
              </span>
            </h1>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1rem',
                fontWeight: 300,
                lineHeight: 1.6,
                color: 'rgba(245, 240, 232, 0.4)',
                letterSpacing: '0.02em',
                maxWidth: '560px',
              }}
            >
              Strategic commentary on capital markets, wealth architecture, and the forces reshaping private investment.
              Analysis for the discerning investor.
            </p>
          </div>
        </section>

        {/* Articles */}
        <section style={{ padding: '5rem 0' }}>
          <div className="sovereign-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1px', backgroundColor: 'rgba(42,42,42,0.15)' }}>
              {articles.map((article) => (
                <article
                  key={article.title}
                  className="blog-card"
                  style={{ padding: '2.5rem', background: '#0E0E0E', cursor: 'default' }}
                >
                  {/* Meta */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
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
                        color: 'rgba(245,240,232,0.2)',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {article.read}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '1.3rem',
                      fontWeight: 400,
                      color: '#F5F0E8',
                      lineHeight: 1.08,
                      marginBottom: '1rem',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {article.title}
                  </h2>

                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.6rem',
                      fontWeight: 400,
                      color: 'rgba(245,240,232,0.2)',
                      letterSpacing: '0.1em',
                      marginBottom: '1rem',
                    }}
                  >
                    {article.date}
                  </p>

                  <p
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '0.9rem',
                      fontWeight: 300,
                      lineHeight: 1.65,
                      color: 'rgba(245, 240, 232, 0.35)',
                      letterSpacing: '0.02em',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {article.excerpt}
                  </p>

                  {/* Keywords */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    {article.keywords.map((kw) => (
                      <span
                        key={kw}
                        style={{
                          padding: '0.2rem 0.5rem',
                          border: '1px solid rgba(42,42,42,0.9)',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '0.55rem',
                          color: 'rgba(245,240,232,0.2)',
                          letterSpacing: '0.08em',
                        }}
                      >
                        {kw}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(42,42,42,0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '0.6rem',
                        fontWeight: 400,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'rgba(201,168,76,0.4)',
                      }}
                    >
                      Editorial Commentary
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            padding: '5rem 0',
            borderTop: '1px solid rgba(42,42,42,0.5)',
            textAlign: 'center',
          }}
        >
          <div className="sovereign-container">
            <p className="micro-label" style={{ marginBottom: '1.5rem' }}>
              Strategic Insights and Market Analysis
            </p>
            <h3
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(1.5rem, 3.5vw, 3rem)',
                fontWeight: 300,
                color: '#F5F0E8',
                marginBottom: '2rem',
                lineHeight: 1.2,
              }}
            >
              Stay informed on the forces
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #9B8035 0%, #C9A84C 50%, #9B8035 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                reshaping capital.
              </span>
            </h3>
            <a href="/#mandate" className="btn-primary" style={{ textDecoration: 'none' }}>
              Initialize Strategic Protocol
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
