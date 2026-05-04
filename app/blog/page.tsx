import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Intelligence Journal | HAYTEM SOVEREIGN — Private Investment Intelligence',
  description:
    'Private investment intelligence for UHNWIs, family offices, sovereign investors, and strategic developers. Emerging Eldorado intelligence, geographic capital foresight, and sovereign wealth strategy.',
};

const articles = [
  {
    category: 'Private Wealth Strategy',
    title: 'Why Off-Market Assets Create True Wealth',
    date: 'Intelligence Brief · Private Capital Series',
    excerpt:
      'The public market is the last resort of the uninformed. True capital creation happens in the silence before the announcement — where relationships, intelligence, and timing converge. In this brief, we examine the architecture of off-market asset discovery and why it remains the defining edge of true private wealth creation.',
    keywords: ['off-market real estate', 'private wealth UHNWI', 'family office real estate strategy'],
    read: '8 min',
  },
  {
    category: 'Emerging Eldorado Intelligence',
    title: 'Albania, Montenegro & Batumi: The New Luxury Investment Corridor',
    date: 'Intelligence Brief · Geographic Intelligence Series',
    excerpt:
      'Three jurisdictions. One convergent thesis. The Adriatic-Black Sea corridor is forming as the most significant pre-institutional luxury investment opportunity in Europe this decade. We map the development pipelines, capital migration patterns, and sovereign policy signals driving this formation.',
    keywords: ['Albania real estate investment', 'Montenegro luxury property', 'Batumi investment corridor'],
    read: '12 min',
  },
  {
    category: 'Geographic Intelligence',
    title: 'Why Marrakech Is Becoming the New Private Capital Magnet',
    date: 'Intelligence Brief · North Africa Capital Series',
    excerpt:
      'Royal backing. Tourism infrastructure acceleration. A cultural brand that cannot be manufactured. Marrakech is not emerging — it has already arrived. But the smart capital window is closing. We analyze the forces driving Marrakech\'s transformation into North Africa\'s premier private wealth destination.',
    keywords: ['Marrakech real estate investment', 'Morocco luxury property', 'North Africa private capital'],
    read: '10 min',
  },
  {
    category: 'Capital Discipline',
    title: 'How Family Offices Protect Wealth Through Real Estate',
    date: 'Intelligence Brief · Family Office Series',
    excerpt:
      'In an era of currency exposure and political risk, hard assets in strategic jurisdictions are the new reserve currency of the private wealth world. This brief examines the real estate allocation frameworks used by the world\'s most sophisticated family offices.',
    keywords: ['family office real estate strategy', 'wealth preservation real estate', 'intergenerational wealth architecture'],
    read: '9 min',
  },
  {
    category: 'Sovereign Intelligence',
    title: 'The Geography of Future Wealth: Where Capital Moves Before the Market Knows',
    date: 'Intelligence Brief · Sovereign Intelligence Series',
    excerpt:
      'Geographic foresight is the most undervalued asset in private capital. The territories that will define the next decade of luxury real estate are not where you are currently looking. We identify the structural catalysts — government policy, tourism infrastructure, capital migration patterns — that signal the next wave.',
    keywords: ['future wealth zones', 'emerging real estate markets', 'pre-market investment strategy', 'geographic capital intelligence'],
    read: '14 min',
  },
  {
    category: 'Strategic Insight',
    title: 'Why Privacy Is the New Luxury Currency',
    date: 'Intelligence Brief · Private Capital Philosophy',
    excerpt:
      'In a world of total transparency, absolute discretion has become the most valuable service that any advisor can offer. We examine why the world\'s wealthiest families are increasingly prioritizing confidentiality over convenience, and how this shapes the future of private wealth advisory.',
    keywords: ['private wealth advisory', 'UHNWI privacy strategy', 'confidential wealth management'],
    read: '7 min',
  },
  {
    category: 'Emerging Eldorado Intelligence',
    title: 'Batumi vs Dubai: The Next High-Yield Luxury Investment Zone',
    date: 'Intelligence Brief · Comparative Market Analysis',
    excerpt:
      'Two markets. Two stages of development. One strategic question: where does asymmetrical capital advantage lie today? We conduct a comparative analysis of Batumi\'s emerging luxury corridor against Dubai\'s maturation cycle to identify where first-mover advantage still exists.',
    keywords: ['Batumi vs Dubai investment', 'luxury real estate comparison', 'high yield property investment'],
    read: '11 min',
  },
  {
    category: 'Private Wealth Migration',
    title: 'Private Wealth Migration and the Rise of New Sovereign Destinations',
    date: 'Intelligence Brief · Wealth Migration Series',
    excerpt:
      'The migration of private wealth across borders is accelerating. Golden visa programs, tax optimization pathways, and lifestyle infrastructure are reshaping where the world\'s elite choose to domicile their capital and families. We map the new sovereign destinations attracting this capital.',
    keywords: ['private wealth migration', 'golden visa investment', 'family office relocation strategy', 'wealth domicile optimization'],
    read: '13 min',
  },
  {
    category: 'First-Mover Intelligence',
    title: 'Why First-Mover Advantage Defines Private Capital',
    date: 'Intelligence Brief · Strategic Timing Series',
    excerpt:
      'The difference between institutional returns and private wealth returns is rarely sophistication — it is timing. We examine the principles of strategic early entry, pre-institutional positioning, and the intelligence frameworks that allow private capital to consistently outperform institutional markets.',
    keywords: ['first mover advantage real estate', 'pre-institutional investment', 'strategic capital timing'],
    read: '9 min',
  },
  {
    category: 'Asset Intelligence',
    title: 'Why Waterfront Scarcity Creates Strategic Alpha',
    date: 'Intelligence Brief · Asset Scarcity Series',
    excerpt:
      'Scarcity is the foundational principle of luxury real estate value. Waterfront assets — marina frontage, beachfront corridors, private island positions — represent the ultimate expression of irreproducible scarcity. We examine how waterfront positioning creates structural alpha in luxury markets.',
    keywords: ['waterfront real estate investment', 'marina property investment', 'beachfront luxury real estate', 'private island investment'],
    read: '8 min',
  },
  {
    category: 'Emerging Market Intelligence',
    title: 'Emerging Eldorados: Where Wealth Moves Before the Market Knows',
    date: 'Intelligence Brief · Eldorado Discovery Series',
    excerpt:
      'Every decade produces a small number of geographic moments where capital allocation creates generational wealth. Dubai in 2003. Batumi in 2018. Porto Montenegro in 2010. We examine the signals that precede these moments and identify the jurisdictions where the next wave is forming.',
    keywords: ['emerging luxury real estate markets', 'Eldorado investment intelligence', 'future wealth zones', 'pre-market real estate'],
    read: '15 min',
  },
  {
    category: 'Family Office Strategy',
    title: 'How Family Offices Identify Future Wealth Zones',
    date: 'Intelligence Brief · Family Office Intelligence Series',
    excerpt:
      'The most sophisticated family offices do not follow market consensus. They build proprietary intelligence frameworks to identify future wealth zones before the public narrative forms. We examine the analytical models, geographic indicators, and policy signals that guide elite family office real estate strategy.',
    keywords: ['family office investment strategy', 'future wealth zones', 'UHNWI real estate intelligence', 'private capital geographic strategy'],
    read: '12 min',
  },
];

export default function BlogPage() {
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
          {/* Right image panel — desktop only */}
          <img
            src="/intelligence-journal-hero.png"
            alt=""
            className="hidden md:block"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '55%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              zIndex: 1,
              filter: 'brightness(0.7) contrast(1.1) saturate(0.9)',
            }}
          />
          {/* Cinematic blend — left fade (desktop) */}
          <div
            className="hidden md:block"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '55%',
              height: '100%',
              zIndex: 2,
              background: 'linear-gradient(90deg, #0A0A0A 0%, rgba(10,10,10,0.92) 15%, rgba(10,10,10,0.6) 38%, rgba(10,10,10,0.15) 68%, transparent 100%)',
              pointerEvents: 'none',
            }}
          />
          {/* Vignette — top/bottom edge darkening (desktop) */}
          <div
            className="hidden md:block"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '55%',
              height: '100%',
              zIndex: 2,
              background: 'linear-gradient(180deg, rgba(10,10,10,0.45) 0%, transparent 30%, transparent 70%, rgba(10,10,10,0.45) 100%)',
              pointerEvents: 'none',
            }}
          />

          <div className="sovereign-container" style={{ position: 'relative', zIndex: 3 }}>
            <p className="section-label" style={{ marginBottom: '1.5rem' }}>
              Private Investment Intelligence Journal
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
              Intelligence
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #9B8035 0%, #C9A84C 30%, #E8D5A3 50%, #C9A84C 70%, #9B8035 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Journal.
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
              Private intelligence for UHNWIs, family offices, sovereign investors, private equity investors,
              and strategic developers. Financial intelligence. Geographic foresight. Capital allocation wisdom.
            </p>
          </div>

          {/* Mobile image — shown below text on mobile only */}
          <div
            className="block md:hidden"
            style={{ position: 'relative', width: '100%', height: '240px', zIndex: 1 }}
          >
            <img
              src="/intelligence-journal-hero.png"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, #0A0A0A 0%, rgba(10,10,10,0.5) 20%, transparent 55%, rgba(10,10,10,0.5) 100%)',
                pointerEvents: 'none',
              }}
            />
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
                      Intelligence Brief — Available by Mandate
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
              Full Access Available to Mandate Clients
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
              Private intelligence is reserved
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #9B8035 0%, #C9A84C 50%, #9B8035 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                for private mandates.
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
