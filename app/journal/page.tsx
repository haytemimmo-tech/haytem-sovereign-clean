'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';

type ArticleKey = 'montenegro' | 'lustica' | 'marrakech';

interface ArticleState {
  [key: string]: boolean;
}

export default function JournalPageContent() {
  const [expandedArticles, setExpandedArticles] = useState<ArticleState>({
    montenegro: false,
    lustica: false,
    marrakech: false,
  });

  const toggleArticle = (articleKey: ArticleKey) => {
    setExpandedArticles((prev) => ({
      ...prev,
      [articleKey]: !prev[articleKey],
    }));
  };

  const montenegroIntro =
    "It's becoming Europe's next luxury capital—and the smart capital window is closing fast.";

  const montenegroFull = `The numbers tell the story:

→ Property prices rose 20.8% in the past year
→ Coastal rental yields: 4.4% – 7.1%
→ Prime locations forecasted at 5-7% annual appreciation
→ EU accession potentially by 2028
→ €1B+ committed to Luštica Bay (Orascom)
→ One&Only, Four Seasons, Chedi all anchoring locations

THE THREE STRATEGIC ENTRY POINTS:

PORTO MONTENEGRO (Tivat)
The Adriatic's most prestigious marina. Branded residences from Kerzner-managed IVO to AERIS premium apartments. Entry: ~€10,000/m²
Best for: Liquidity, prestige, international buyer pool

LUŠTICA BAY (Tivat)
690 hectares. Gary Player golf course. 7 hotels including Four Seasons.
Centrale apartments from €433K. Marina Village from €564K. Entry: ~€7,000/m²
Best for: Long-term masterplan momentum, value entry

PORTONOVI (Herceg Novi)
One&Only Resort + luxury marina. Premium nightly rates, family-sized inventory, branded living. Entry: ~€9,000/m²
Best for: Resort lifestyle, branded prestige

THE STRATEGIC INSIGHT:

Montenegro sits at the convergence of three megatrends:
1. EU integration (capital flow acceleration)
2. Adriatic luxury corridor formation
3. Limited prime waterfront supply (geographic scarcity)

This is exactly the pattern that turned Mallorca, Saint-Tropez, and Sardinia into capital magnets—decades ago.

The question isn't whether Montenegro joins them.
It's how early you position before the institutional wave arrives.`;

  const lusticaIntro = 'A 690-hectare coastal city with €1 billion in committed development—entering Phase 2 of its masterplan.';

  const lusticaFull = `Imagine a 690-hectare coastal city.
Five times the size of London's Hyde Park.
Six kilometers of pristine Adriatic coastline.
Seven luxury hotels including The Chedi and Four Seasons.
A Gary Player championship golf course.
Two world-class marinas. 200+ yacht berths.
1,500+ luxury residences.

This isn't a fantasy.
This is LUŠTICA BAY—Montenegro.

And right now, in May 2026, smart capital is positioning into one of the last great Mediterranean opportunities of this generation.

THE NUMBERS THAT WILL MAKE YOU PAY ATTENTION:

✦ €1 BILLION DEVELOPMENT
Backed by Orascom Development (90%) + Government of Montenegro (10%). Sovereign-grade project security.

✦ 46+ NATIONALITIES already own homes here.
The world's wealth is converging.

✦ €3,500–€5,000/m² entry pricing in Centrale.
€7,000/m² average across Luštica Bay.
Compare: Monaco €50,000/m². Saint-Tropez €25,000/m².
French Riviera €15,000/m².

✦ 4%+ NET RENTAL YIELDS with 85% occupancy.
Most European prime markets deliver 2-3%.

✦ €1.2M – €2.5M for golf-view villas.
€433K starting price for Centrale apartments.
€564K for Marina Village apartments.

✦ 60% LTV mortgages available for EU citizens.

THE INFRASTRUCTURE TRANSFORMING THE GAME:

GARY PLAYER 18-HOLE GOLF COURSE
First 9 holes opening 2026. Full course by 2028.
This single asset historically drives 30-40% premium on adjacent properties.

CATEGORY 1 SUPERYACHT MARINA
200+ berths. The Adriatic's hidden yacht capital.
Direct connection to Mediterranean superyacht circuit.

FOUR SEASONS COMING
The Chedi already operating.
Four Seasons next. Hospitality brands signal market formation.

20 MINUTES FROM TIVAT INTERNATIONAL AIRPORT
Direct EU access. EasyJet, Ryanair, Wizz, Lufthansa.
The peninsula was once a Yugoslav military base.
Today—a private playground for global wealth.

EU ACCESSION BY 2028
Historical precedent: Croatia, Cyprus, Malta saw 30-50% property appreciation in pre-accession periods.
Montenegro is on identical trajectory.

WHY THE SMART MONEY IS ALREADY MOVING:

1. ASYMMETRIC PRICING
You're buying Mediterranean luxury at 1/8th the cost of Monaco. The same yacht, the same sunsets, the same prestige—at a fraction of the price.

2. NEW EU RESIDENCY PATHWAY
January 17, 2026: Montenegro formalized property-based residency. Minimum threshold: €150,000. Most Luštica Bay properties qualify. You're not just buying real estate—you're buying European optionality.

3. DEVELOPER GUARANTEED RENTAL POOLS
Branded hotels manage rentals. Predictable income. No tenant headaches. No management overhead.
Just capital working while you live.

THE EXCLUSIVE INSIGHT:

Luštica Bay is in PHASE 2 of a 4-phase masterplan.

Phase 1: Marina Village (built, 90% sold)
Phase 2: Centrale (active, smart entry NOW)
Phase 3: The Peaks (golf villas, premium tier)
Phase 4: Final infrastructure (post-2028)

The window between Phase 2 and Phase 3 is where generational wealth is built.

For reference: Investors who entered Porto Montenegro in 2010 saw 200-300% appreciation by 2022.
Luštica Bay is at the same inflection point Porto Montenegro was 12 years ago.

WHO IS BUYING RIGHT NOW:

UAE family offices diversifying European exposure
UK and German UHNWIs seeking Mediterranean trophy assets
Russian and Eastern European capital relocating
Middle Eastern royal families establishing summer compounds
Family offices targeting 5-10 year capital appreciation.

THE TRUTH NOBODY IS TELLING YOU:

Mediterranean coastal scarcity is permanent.
Geography doesn't manufacture more coastline.
Branded luxury developments are limited.
The Adriatic's last great masterplan is HERE.

In 2032, you will look back at May 2026 and either:
Celebrate having entered before the world saw what we see.
Regret watching from the sidelines as prices doubled.

We work with a select few investors annually on Luštica Bay mandates—family offices, UHNWIs, and institutional capital seeking Adriatic exposure with asymmetric upside.

Off-market opportunities currently available:
→ Centrale apartments
→ Marina Village residences
→ The Peaks golf villas
→ Pre-launch Phase 3 reservations

If you're serious about Mediterranean capital deployment before 2028, this is the conversation to have NOW.`;

  const marrakechIntro =
    'Morocco is deploying $41B in infrastructure transformation before 2030 World Cup. Marrakech sits at the convergence of institutional capital flows.';

  const marrakechFull = `THE MACRO REPOSITIONING:

Morocco is executing a $41B+ infrastructure transformation program leading into the 2030 FIFA World Cup. Marrakech sits at the convergence of every major capital flow.

Total Morocco infrastructure investment: $6+ billion
- High-speed rail extension: €4.8B
- Stadium infrastructure: $1.4B
- Airport expansions: significant
- Hotel capacity: +40,000 rooms by 2030.

CRITICAL INFRASTRUCTURE UPDATES (2026):

1. KENITRA-MARRAKECH HIGH-SPEED RAIL (TGV)
• 430 km of new electrified double-track railway
• Travel time Tangier→Marrakech: 2h40
• Travel time Casablanca→Marrakech: under 1h30
• 168 new trainsets ordered
• Top speed: 320 km/h
• Stations being modernized: Sidi Boutmane, Palmerale-Sidi Ghanem, Gueliz + 2 new stations
• Completion target: 2029
• Status May 2026: Civil engineering well underway

2. MENARA AIRPORT EXPANSION
• Capacity expansion: 9M → 16M passengers by 2028
• 114 destinations / 28 countries / 40 airlines
• EasyJet's first African base
• New 2026 routes: Hamburg, Lille, Strasbourg, Prague, Newcastle, Zurich
• Direct flights: Atlanta and planned New York
• Strong YoY flight and passenger growth

3. WORLD CUP 2030 INFRASTRUCTURE
• Marrakech Stadium expansion to 46,000 capacity
• Marrakech among Morocco's host cities
• 200+ new hotels nationally
• Hotel modernization program

4. ROAD CONNECTIVITY
• A7 Highway: Casablanca-Marrakech
• Urban transport networks in Marrakech metropolitan area.

REAL ESTATE MARKET DATA Q1 2026:

PRICING:
• Average city: 15,000 MAD/m²
• Hivernage premium: 40,000+ MAD/m²
• Palmeraie luxury villas: 12,700-35,000 MAD/m²
• Median property: 1,000,000 MAD
• Average property: 1,600,000 MAD

TRANSACTIONS:
• Annual volume: ~18,000 transactions
• YoY growth 2024-2026: +12%
• Foreign + MRE share: 35-40%
• Ultra-luxury bracket doubled in 2024
• Average purchase: MAD 2.8M-6.5M

YIELDS:
• Luxury short-term rental: 5.5% – 7%
• High-performing zones: 6.7% – 12%
• Forecast appreciation: 3-7% annually through 2028
• Renovated riads: 5-9% annual growth.

STRATEGIC POSITIONS BY MANDATE TYPE:

PRESERVATION + LIQUIDITY:
→ Hivernage premium apartments
→ Guéliz urban core
→ Strong exit optionality

GROWTH + APPRECIATION:
→ Palmeraie villas
→ Pre-World Cup positioning
→ Strategic 2026-2029 entry window

YIELD + INCOME:
→ Renovated Medina riads
→ Short-term luxury rental optimization
→ Tourism trajectory aligned

LEGACY + TROPHY:
→ Palmeraie estates
→ Heritage palaces
→ Ultra-luxury bracket

THE TIMING THESIS:

Major sporting events historically generate 30-50% real estate appreciation in host cities during the 5-year pre-event window.

Marrakech enters 2026 at a 4-year window before World Cup.

The smart capital positioning window: 12-30 months.

After mid-2027, institutional capital will have priced in most of the infrastructure narrative.

This is not real estate brokerage.
This is institutional-grade geographic intelligence applied to capital allocation.`;

  return (
    <>
      <Navigation />
      <main style={{ paddingTop: '100px', background: '#0A0A0A', minHeight: '100vh' }}>
        {/* Header */}
        <section
          style={{
            padding: '6rem 2rem 4rem',
            borderBottom: '1px solid rgba(42,42,42,0.6)',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 300,
              lineHeight: 1.2,
              color: '#F5F0E8',
              marginBottom: '2rem',
              textAlign: 'center',
            }}
          >
            Strategic Real Estate
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #9B8035 0%, #C9A84C 30%, #E8D5A3 50%, #C9A84C 70%, #9B8035 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Investment Intelligence.
            </span>
          </h1>

          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.1rem',
              fontWeight: 300,
              lineHeight: 1.8,
              color: 'rgba(245, 240, 232, 0.5)',
              letterSpacing: '0.02em',
              maxWidth: '700px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            Institutional-grade geographic intelligence applied to capital allocation. Strategic briefings on emerging
            luxury destinations, Mediterranean opportunities, and pre-institutional positioning before the market
            moves.
          </p>
        </section>

        {/* Articles */}
        <section style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
          {/* Article 1: Montenegro */}
          <article
            style={{
              marginBottom: '3rem',
              paddingBottom: '3rem',
              borderBottom: '1px solid rgba(201,168,76,0.2)',
            }}
          >
            {/* Image Placeholder */}
            <div
              style={{
                width: '100%',
                height: '320px',
                backgroundColor: 'rgba(42,42,42,0.4)',
                marginBottom: '2rem',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(201,168,76,0.15)',
                overflow: 'hidden',
              }}
            >
              <img
                src="/images/journal/montenegro.jpg"
                alt="Montenegro real estate investment"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>

            {/* Title */}
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
                fontWeight: 300,
                color: 'rgba(201,168,76,0.9)',
                marginBottom: '1rem',
                lineHeight: 1.2,
              }}
            >
              Montenegro Is No Longer a Hidden Gem
            </h2>

            {/* Intro */}
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.05rem',
                fontWeight: 300,
                lineHeight: 1.7,
                color: 'rgba(245, 240, 232, 0.8)',
                marginBottom: '1.5rem',
                letterSpacing: '0.01em',
              }}
            >
              {montenegroIntro}
            </p>

            {/* Learn More / Full Content */}
            {!expandedArticles.montenegro ? (
              <button
                onClick={() => toggleArticle('montenegro')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#C9A84C',
                  fontSize: '0.95rem',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  padding: '0.5rem 0',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease',
                }}
                onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.opacity = '0.7')}
                onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.opacity = '1')}
              >
                Learn More →
              </button>
            ) : (
              <>
                <div
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '0.95rem',
                    lineHeight: 1.8,
                    color: 'rgba(245, 240, 232, 0.75)',
                    whiteSpace: 'pre-wrap',
                    marginBottom: '1.5rem',
                    letterSpacing: '0.01em',
                  }}
                >
                  {montenegroFull}
                </div>
                <button
                  onClick={() => toggleArticle('montenegro')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#C9A84C',
                    fontSize: '0.95rem',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    padding: '0.5rem 0',
                    textDecoration: 'none',
                    transition: 'opacity 0.3s ease',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.opacity = '0.7')}
                  onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.opacity = '1')}
                >
                  Show Less ↑
                </button>
              </>
            )}
          </article>

          {/* Article 2: Luštica Bay */}
          <article
            style={{
              marginBottom: '3rem',
              paddingBottom: '3rem',
              borderBottom: '1px solid rgba(201,168,76,0.2)',
            }}
          >
            {/* Image Placeholder */}
            <div
              style={{
                width: '100%',
                height: '320px',
                backgroundColor: 'rgba(42,42,42,0.4)',
                marginBottom: '2rem',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(201,168,76,0.15)',
                overflow: 'hidden',
              }}
            >
              <img
                src="/images/journal/lustica-bay.jpg"
                alt="Luštica Bay investment opportunity"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>

            {/* Title */}
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
                fontWeight: 300,
                color: 'rgba(201,168,76,0.9)',
                marginBottom: '1rem',
                lineHeight: 1.2,
              }}
            >
              There Is a €1 Billion Secret on the Adriatic Coast
            </h2>

            {/* Intro */}
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.05rem',
                fontWeight: 300,
                lineHeight: 1.7,
                color: 'rgba(245, 240, 232, 0.8)',
                marginBottom: '1.5rem',
                letterSpacing: '0.01em',
              }}
            >
              {lusticaIntro}
            </p>

            {/* Learn More / Full Content */}
            {!expandedArticles.lustica ? (
              <button
                onClick={() => toggleArticle('lustica')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#C9A84C',
                  fontSize: '0.95rem',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  padding: '0.5rem 0',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease',
                }}
                onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.opacity = '0.7')}
                onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.opacity = '1')}
              >
                Learn More →
              </button>
            ) : (
              <>
                <div
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '0.95rem',
                    lineHeight: 1.8,
                    color: 'rgba(245, 240, 232, 0.75)',
                    whiteSpace: 'pre-wrap',
                    marginBottom: '1.5rem',
                    letterSpacing: '0.01em',
                  }}
                >
                  {lusticaFull}
                </div>
                <button
                  onClick={() => toggleArticle('lustica')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#C9A84C',
                    fontSize: '0.95rem',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    padding: '0.5rem 0',
                    textDecoration: 'none',
                    transition: 'opacity 0.3s ease',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.opacity = '0.7')}
                  onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.opacity = '1')}
                >
                  Show Less ↑
                </button>
              </>
            )}
          </article>

          {/* Article 3: Marrakech */}
          <article style={{ paddingBottom: '2rem' }}>
            {/* Image Placeholder */}
            <div
              style={{
                width: '100%',
                height: '320px',
                backgroundColor: 'rgba(42,42,42,0.4)',
                marginBottom: '2rem',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(201,168,76,0.15)',
                overflow: 'hidden',
              }}
            >
              <img
                src="/images/journal/marrakech.jpg"
                alt="Marrakech real estate intelligence"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>

            {/* Title */}
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
                fontWeight: 300,
                color: 'rgba(201,168,76,0.9)',
                marginBottom: '1rem',
                lineHeight: 1.2,
              }}
            >
              Marrakech Real Estate Intelligence Briefing
            </h2>

            {/* Intro */}
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.05rem',
                fontWeight: 300,
                lineHeight: 1.7,
                color: 'rgba(245, 240, 232, 0.8)',
                marginBottom: '1.5rem',
                letterSpacing: '0.01em',
              }}
            >
              {marrakechIntro}
            </p>

            {/* Learn More / Full Content */}
            {!expandedArticles.marrakech ? (
              <button
                onClick={() => toggleArticle('marrakech')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#C9A84C',
                  fontSize: '0.95rem',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  padding: '0.5rem 0',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s ease',
                }}
                onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.opacity = '0.7')}
                onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.opacity = '1')}
              >
                Learn More →
              </button>
            ) : (
              <>
                <div
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '0.95rem',
                    lineHeight: 1.8,
                    color: 'rgba(245, 240, 232, 0.75)',
                    whiteSpace: 'pre-wrap',
                    marginBottom: '1.5rem',
                    letterSpacing: '0.01em',
                  }}
                >
                  {marrakechFull}
                </div>
                <button
                  onClick={() => toggleArticle('marrakech')}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#C9A84C',
                    fontSize: '0.95rem',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    padding: '0.5rem 0',
                    textDecoration: 'none',
                    transition: 'opacity 0.3s ease',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.opacity = '0.7')}
                  onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.opacity = '1')}
                >
                  Show Less ↑
                </button>
              </>
            )}
          </article>
        </section>

        {/* CTA */}
        <section
          style={{
            padding: '5rem 2rem',
            borderTop: '1px solid rgba(42,42,42,0.5)',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.75rem',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.6)',
              marginBottom: '1.5rem',
            }}
          >
            Strategic Capital Deployment
          </p>
          <h3
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)',
              fontWeight: 300,
              color: '#F5F0E8',
              marginBottom: '2rem',
              lineHeight: 1.2,
            }}
          >
            For institutional mandates and serious capital deployment,
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #9B8035 0%, #C9A84C 50%, #9B8035 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              initialize your protocol.
            </span>
          </h3>
          <a href="/#mandate" style={{ textDecoration: 'none' }}>
            <button
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '9px',
                fontWeight: 600,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                color: '#0A0A0A',
                background: 'linear-gradient(135deg, #8B6914 0%, #C9A84C 50%, #8B6914 100%)',
                padding: '12px 32px',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-block',
                transition: 'opacity 0.2s ease',
              }}
              onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.opacity = '0.8')}
              onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.opacity = '1')}
            >
              Initialize Strategic Protocol
            </button>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
