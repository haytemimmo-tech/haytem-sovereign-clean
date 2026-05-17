'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';

export default function BRICSPropertyMigrationArticle() {
  return (
    <>
      <Navigation />
      <main style={{ paddingTop: '100px', background: '#0A0A0A', minHeight: '100vh' }}>
        {/* Hero Image */}
        <section
          style={{
            width: '100%',
            height: '420px',
            position: 'relative',
            marginBottom: '3rem',
          }}
        >
          <Image
            src="/brics/brics-migration-cover.jpg"
            alt="The Silent BRICS Property Migration 2026 — HAYTEM SOVEREIGN Intelligence Brief"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.6) 100%)',
              pointerEvents: 'none',
            }}
          />
        </section>

        {/* Article Content */}
        <article style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem 4rem' }}>
          {/* Meta */}
          <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(201,168,76,0.8)',
                marginBottom: '0.5rem',
              }}
            >
              Emerging Eldorado Intelligence
            </p>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                color: 'rgba(245,240,232,0.4)',
              }}
            >
              2026-05-16 · 18 min read
            </p>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              fontWeight: 300,
              lineHeight: 1.2,
              color: '#F5F0E8',
              marginBottom: '1.5rem',
              textAlign: 'center',
            }}
          >
            The Silent BRICS Property Migration
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #9B8035 0%, #C9A84C 30%, #E8D5A3 50%, #C9A84C 70%, #9B8035 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Three Unexpected Jurisdictions for 2026
            </span>
          </h1>

          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.15rem',
              fontWeight: 300,
              lineHeight: 1.8,
              color: 'rgba(245, 240, 232, 0.6)',
              marginBottom: '2rem',
              textAlign: 'center',
              fontStyle: 'italic',
            }}
          >
            Why $40B+ of Russian, Indian, and Chinese UHNW Capital Is Quietly Repositioning into Oman, Serbia, and Mauritius
          </p>

          {/* Subtitle */}
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.6)',
              marginBottom: '3rem',
              textAlign: 'center',
            }}
          >
            A HAYTEM SOVEREIGN Intelligence Brief · Private Capital Desk · Singapore
          </div>

          {/* Executive Summary */}
          <section style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.8rem',
                fontWeight: 300,
                color: 'rgba(201,168,76,0.9)',
                marginBottom: '1.5rem',
              }}
            >
              Executive Summary
            </h2>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
                fontStyle: 'italic',
              }}
            >
              &ldquo;The story being told in Mansion Global and the Financial Times is Dubai. The story being executed in Geneva law firms and Singapore family offices is something else entirely.&rdquo;
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              A historic redistribution of private wealth is underway. Henley &amp; Partners projects 165,000 millionaire relocations in 2026 — the largest single-year migration of private capital ever recorded, up from 142,000 in 2025. The public narrative concentrates on the visible flows: Indians to Dubai, British non-doms to Milan, Americans to Lisbon, Chinese to Singapore.
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              The visible flows are not the consequential flows.
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              Beneath the headlines, three categories of capital — Russian wealth fleeing both Kremlin appropriation risk and Western sanctions exposure, Indian family office capital diversifying out of regulatory and tax tightening, and Chinese private capital exiting the property correction at home — are converging on a small number of jurisdictions that almost no Western institutional analyst has yet placed on a single map.
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              These are not the obvious destinations. They are not Dubai, not Singapore, not Lisbon, not Monaco. They share three characteristics: political neutrality through the 2022–2025 sanctions regime; zero or minimal taxation on capital gains, inheritance, and rental income; and pre-institutional pricing repricing fast enough to matter to deployment timing, slowly enough that pre-institutional entry remains open.
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
              }}
            >
              HAYTEM SOVEREIGN&apos;s Private Capital Desk has identified three such jurisdictions where the convergence is most pronounced — Oman, Serbia, and Mauritius — where the window for pre-institutional capital deployment remains open through 2026, narrowing materially by 2027.
            </p>
          </section>

          {/* Section I — Convergence */}
          <section style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.8rem',
                fontWeight: 300,
                color: 'rgba(201,168,76,0.9)',
                marginBottom: '1.5rem',
              }}
            >
              I. The Convergence — Four Forces, One Outcome
            </h2>

            <div
              style={{
                width: '100%',
                height: '300px',
                position: 'relative',
                marginBottom: '2rem',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid rgba(201,168,76,0.15)',
              }}
            >
              <Image
                src="/brics/convergence-forces.jpg"
                alt="Three modern skyscraper clusters representing Muscat, Belgrade, and Port Louis converging toward a central BRICS tower"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              Four largely independent forces have converged in late 2024 through early 2026 to produce the present migration.
            </p>

            <h3
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.3rem',
                fontWeight: 300,
                color: '#F5F0E8',
                marginBottom: '1rem',
                marginTop: '1.5rem',
              }}
            >
              The Geopolitical Force
            </h3>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              Sanctions imposed after February 2022 left an estimated $58 billion of Russian private capital frozen in REPO jurisdictions and conditioned a generation of Russian UHNW principals toward jurisdictions outside the Western financial perimeter. The Russian Central Bank acknowledged net private capital outflows exceeding $160 billion in 2024 alone — approximately 8% of GDP — with much of that capital seeking exit through non-aligned banking corridors.
            </p>

            <h3
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.3rem',
                fontWeight: 300,
                color: '#F5F0E8',
                marginBottom: '1rem',
                marginTop: '1.5rem',
              }}
            >
              The Regulatory Force
            </h3>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              India&apos;s evolving capital controls, the United Kingdom&apos;s abolition of the non-domicile regime, China&apos;s Common Prosperity campaign, and the increasing application of CRS and FATCA across previously discreet jurisdictions have collectively eliminated most of the legacy private wealth structures that existed before 2020. According to Veritas Legal&apos;s Private Client Adviser Outlook 2026, Indian UHNW migration now shows Dubai as primary destination — but with secondary diversification into jurisdictions offering different governance and tax characteristics. The era of single-jurisdiction wealth architecture is ending.
            </p>

            <h3
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.3rem',
                fontWeight: 300,
                color: '#F5F0E8',
                marginBottom: '1rem',
                marginTop: '1.5rem',
              }}
            >
              The Currency and Store-of-Value Force
            </h3>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              Domestic property markets in three of the four largest BRICS economies are simultaneously challenged. China&apos;s primary home sales are forecast to decline 10–14% in 2026 per S&amp;P Global Ratings, with secondary prices falling for 44 consecutive months and gross rental yields in Shanghai compressed to approximately 2.2%. The mathematics of capital preservation now requires foreign property exposure.
            </p>

            <h3
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.3rem',
                fontWeight: 300,
                color: '#F5F0E8',
                marginBottom: '1rem',
                marginTop: '1.5rem',
              }}
            >
              The Generational Force
            </h3>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              Knight Frank&apos;s Wealth Report projects that Asia-Pacific will host 42% of the world&apos;s UHNW population by 2026. India&apos;s family office count has expanded from approximately 45 in 2018 to nearly 300 in 2025 with combined assets under management estimated at $30 billion. The next-generation principals making allocation decisions in 2026 are systematically more global, more institutional in their structuring, and more skeptical of single-jurisdiction concentration than the founders who preceded them.
            </p>
          </section>

          {/* Section II — Migration Numbers */}
          <section style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.8rem',
                fontWeight: 300,
                color: 'rgba(201,168,76,0.9)',
                marginBottom: '1.5rem',
              }}
            >
              II. The Migration Numbers — What the Data Reveals
            </h2>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              The institutional bias is to focus on the destination jurisdictions absorbing the largest absolute flow: the UAE, which dominates millionaire net inflows and is projected to attract approximately 7,000 millionaires and $7 billion in new capital in 2026 alone. This is the visible story.
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              The strategic bias should be to focus on the jurisdictions absorbing the largest proportional flow relative to existing institutional capital. By that measure — flow-to-base ratio rather than absolute flow — three jurisdictions stand out: Oman, Serbia, and Mauritius. Each is absorbing capital at a pace that is materially repricing the local market while remaining below the threshold at which institutional acquirers typically intervene.
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
                fontStyle: 'italic',
              }}
            >
              This is what HAYTEM SOVEREIGN refers to as the pre-institutional window: the period during which sophisticated private capital can deploy at pricing that is no longer truly cheap but has not yet been arbitraged by the systematic capital that follows.
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
              }}
            >
              The same structural insight that drove our{' '}
              <Link href="/journal/albania-riviera-2026-investment-thesis" style={{ color: '#C9A84C', textDecoration: 'underline' }}>
                Albania Riviera 2026 thesis
              </Link>
              {' '}— pre-institutional entry before the market is named — applies here at a wider geographic and capital scale.
            </p>
          </section>

          {/* Section III — Oman */}
          <section style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.8rem',
                fontWeight: 300,
                color: 'rgba(201,168,76,0.9)',
                marginBottom: '1.5rem',
              }}
            >
              III. Jurisdiction One — Oman: The Switzerland of the Gulf
            </h2>

            <div
              style={{
                width: '100%',
                height: '300px',
                position: 'relative',
                marginBottom: '2rem',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid rgba(201,168,76,0.15)',
              }}
            >
              <Image
                src="/brics/oman-muscat-al-mouj.jpg"
                alt="Al Mouj Muscat marina district — Gulf luxury real estate corridor in Oman"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              The most underwritten Gulf jurisdiction is no longer underwritten. Oman&apos;s Real Estate Price Index rose more than 17% year-on-year through late 2025, with prime residential pricing in Muscat advancing approximately 19% over the same period. These are not coincidental numbers. They reflect three simultaneous catalysts.
            </p>

            <h3
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.3rem',
                fontWeight: 300,
                color: '#F5F0E8',
                marginBottom: '1rem',
                marginTop: '1.5rem',
              }}
            >
              The August 2025 Regulatory Inflection
            </h3>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              On 31 August 2025, the Sultanate of Oman launched its Golden Residency programme, administered through the Integrated National Investor Centre (INIC). The framework offers a ten-year renewable residency permit for property acquisitions of OMR 500,000 (~USD 1.3 million) and a five-year permit for acquisitions of OMR 250,000 (~USD 650,000). A lower threshold of OMR 200,000 (~USD 520,000) qualifies for a renewable ten-year permit through specific Integrated Tourism Complex (ITC) pathways — approximately 65% below the Dubai Golden Visa threshold for comparable lifestyle profile.
            </p>

            <h3
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.3rem',
                fontWeight: 300,
                color: '#F5F0E8',
                marginBottom: '1rem',
                marginTop: '1.5rem',
              }}
            >
              The Tax Architecture
            </h3>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              Oman currently imposes no annual property tax, no capital gains tax on residential resale, and no rental income tax on individual owners. Personal income tax is zero. The combination of zero capital gains, zero rental tax, and freehold ownership in ITC zones creates a net-yield profile that materially exceeds Dubai once Dubai&apos;s service charges, agency fees, and registration costs are normalised.
            </p>

            <h3
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.3rem',
                fontWeight: 300,
                color: '#F5F0E8',
                marginBottom: '1rem',
                marginTop: '1.5rem',
              }}
            >
              The Yield Profile
            </h3>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              Gross rental yields in Oman span 5.6% to 8.3% per Mordor Intelligence&apos;s 2026 analysis, with specific neighbourhoods such as Al Khuwair achieving 6.5–8.5%, Al Ghubrah 6–8%, and Salalah tourist-zone properties reaching 7–10% gross during peak seasonal cycles. Compare this against Dubai&apos;s compressed yields in the 4–6% range after 200% cumulative price appreciation over five years.
            </p>

            <h3
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.3rem',
                fontWeight: 300,
                color: '#F5F0E8',
                marginBottom: '1rem',
                marginTop: '1.5rem',
              }}
            >
              Salalah — The Hidden Dhofar Catalyst
            </h3>

            <div
              style={{
                width: '100%',
                height: '300px',
                position: 'relative',
                marginBottom: '2rem',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid rgba(201,168,76,0.15)',
              }}
            >
              <Image
                src="/brics/salalah-coastline.jpg"
                alt="Salalah coastline during Khareef monsoon season — Dhofar emerging luxury corridor"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              Three sub-jurisdictions warrant specific attention. Muscat (Al Mouj, Muscat Hills, Saraya Bandar Jissah, Jebel Sifah) represents the institutional ITCs with established secondary markets. Salalah — the Dhofar capital, beneficiary of the Khareef monsoon tourism cycle and a $176.8 million government commitment signed in February 2025 — offers pricing at roughly half Muscat&apos;s with sharply upward trajectory. Jebel Sifah, the specialised coastal resort, offers 7–10% gross yields for investors comfortable with tourism cash-flow patterns.
            </p>

            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              Mordor Intelligence projects 6.74% CAGR through 2031 for the national residential market, with Dhofar leading at 7.82%. The pre-institutional window in Muscat is narrower than it was twelve months ago but remains open in Salalah, Jebel Sifah, and selected secondary corridors.
            </p>
          </section>

          {/* Section IV — Serbia */}
          <section style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.8rem',
                fontWeight: 300,
                color: 'rgba(201,168,76,0.9)',
                marginBottom: '1.5rem',
              }}
            >
              IV. Jurisdiction Two — Serbia: The Belgrade Pivot
            </h2>

            <div
              style={{
                width: '100%',
                height: '300px',
                position: 'relative',
                marginBottom: '2rem',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid rgba(201,168,76,0.15)',
              }}
            >
              <Image
                src="/brics/belgrade-skyline.jpg"
                alt="Belgrade skyline at the confluence of Danube and Sava rivers — Belgrade Waterfront luxury corridor"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              Serbia is the only European country whose passport grants visa-free access to both Russia and China while simultaneously providing visa-free access to the Schengen Area. For internationally mobile capital from BRICS nationalities, this single characteristic is structurally unmatched in Europe.
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              Russian nationals currently lead foreign property purchases in Serbia, with concentration in Belgrade, Novi Sad, and Subotica. This is not policy preference: it is the consequence of Serbia having remained, through the 2022–2025 sanctions regime, the largest European country to refuse alignment with EU sanctions on Russia. For wealth migration purposes, the resulting in-between status is a feature, not a deficiency.
            </p>

            <h3
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.3rem',
                fontWeight: 300,
                color: '#F5F0E8',
                marginBottom: '1rem',
                marginTop: '1.5rem',
              }}
            >
              The Investment Thresholds
            </h3>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              Serbia operates two parallel pathways. The investor visa requires a minimum investment of EUR 50,000. The real estate residency route imposes no minimum property threshold at all — purchasing any property qualifies for the investor residency framework, with a one-year residence permit renewable upon continued ownership. After five years of continuous residency, citizenship application becomes possible. This is among the most permissive structures in Europe.
            </p>

            <h3
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.3rem',
                fontWeight: 300,
                color: '#F5F0E8',
                marginBottom: '1rem',
                marginTop: '1.5rem',
              }}
            >
              The Yield and Pricing Profile
            </h3>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              Gross rental yields in Serbia average 5.5% to 7%, with Belgrade demonstrating stronger performance at approximately 6.35%. The IMF projects Serbian GDP growth of 3.6% in 2026 and 4.6% in 2027. Fitch Ratings affirmed Serbia&apos;s BB+ sovereign rating with positive outlook in 2025. Property prices rose 5.5% in 2024, with transaction value reaching nearly EUR 3.8 billion in H1 2025 alone.
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              A three-bedroom apartment in central Belgrade ranges from approximately EUR 250,000 to EUR 450,000 depending on building quality and exact location; outskirts pricing begins at approximately EUR 150,000. Belgrade&apos;s average per-square-metre pricing in the city centre is approximately EUR 2,600. By comparison, Vienna&apos;s average per-square-metre pricing is approximately five times higher; Milan, six to eight times. Belgrade is emerging as a regional family office hub, with multiple multi-family offices having established operations through 2024–2025.
            </p>
          </section>

          {/* Section V — Mauritius */}
          <section style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.8rem',
                fontWeight: 300,
                color: 'rgba(201,168,76,0.9)',
                marginBottom: '1.5rem',
              }}
            >
              V. Jurisdiction Three — Mauritius: The Indian Ocean Tax Architecture
            </h2>

            <div
              style={{
                width: '100%',
                height: '300px',
                position: 'relative',
                marginBottom: '2rem',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid rgba(201,168,76,0.15)',
              }}
            >
              <Image
                src="/brics/mauritius-pds-villa.jpg"
                alt="Luxury PDS-scheme villa in Mauritius with infinity pool overlooking turquoise Indian Ocean lagoon"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              If Oman is the Switzerland of the Gulf and Serbia is the Belgrade pivot, Mauritius is the architecture itself — a jurisdiction designed, with explicit deliberation, to attract internationally mobile capital seeking both lifestyle and structural tax efficiency.
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              The architecture is unusual in its completeness. Mauritius imposes no capital gains tax on resale. No inheritance tax. No wealth tax. No annual property tax. The corporate tax rate is 15%; the top personal income tax rate is 20%. For UHNW investors with Indian or African connections in particular, the structural alignment is rare.
            </p>

            <h3
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.3rem',
                fontWeight: 300,
                color: '#F5F0E8',
                marginBottom: '1rem',
                marginTop: '1.5rem',
              }}
            >
              The Approved Schemes
            </h3>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              Foreign property acquisition in Mauritius is permitted exclusively through EDB-approved schemes: the Property Development Scheme (PDS), the predecessor Integrated Resort Scheme (IRS), the Real Estate Scheme (RES), the Smart City Scheme, the Integrated Hotel Scheme (IHS), and the Ground+2 framework for apartments in qualifying buildings. USD 375,000 is the minimum acquisition threshold across most schemes for residency-linked purchases.
            </p>

            <h3
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.3rem',
                fontWeight: 300,
                color: '#F5F0E8',
                marginBottom: '1rem',
                marginTop: '1.5rem',
              }}
            >
              The July 2026 Inflection — The Closing Window
            </h3>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              Under the Finance Act 2025–2026, registration duty and land transfer tax on non-citizen acquisitions through EDB-approved schemes rises from 5% to 10% effective 1 July 2026. The increase applies to PDS, IRS, RES, Smart City, IHS, and qualifying G+2 acquisitions. The implication for sophisticated buyers is direct: completing acquisition before 1 July 2026 saves 5% on registration duty alone — meaningful capital at the USD 1M+ acquisition level. The land transfer tax on resale will similarly rise from 5% to 10% for properties acquired after July 2026.
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              Foreign Direct Investment into Mauritian real estate rose 13% in 2024 to MUR 24 billion (approximately USD 530 million), representing 73% of total FDI into the country. The trajectory is unambiguous. Sophisticated buyers active in Mauritius in late 2025 and Q1 2026 are explicitly racing the 1 July 2026 deadline.
            </p>
          </section>

          {/* Section VI — Cross-Validation */}
          <section style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.8rem',
                fontWeight: 300,
                color: 'rgba(201,168,76,0.9)',
                marginBottom: '1.5rem',
              }}
            >
              VI. Why These Three — The Cross-Validation
            </h2>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              The selection of Oman, Serbia, and Mauritius is not arbitrary. Each shares five structural characteristics that, collectively, make them the principal destinations for the present BRICS migration:
            </p>

            <ul
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
                marginLeft: '1.5rem',
                listStyleType: 'disc',
              }}
            >
              <li style={{ marginBottom: '0.8rem' }}>
                <strong>Neutrality through 2022–2025.</strong> None imposed Western-style sanctions on Russia. None aligned with Chinese-export restrictions. For BRICS-origin capital, this neutrality is non-negotiable.
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <strong>Tax architecture materially differing from OECD.</strong> All three offer either zero or substantially reduced capital gains, inheritance, and rental income taxation relative to the UK, France, Germany, or the US.
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <strong>Accessible residency-by-investment thresholds.</strong> Oman at USD 520,000–1.3M. Serbia at EUR 50,000. Mauritius at USD 375,000. Comparable European Golden Visa programs typically begin at EUR 350,000–500,000.
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <strong>Pre-institutional pricing.</strong> None has yet been systematically arbitraged by large institutional acquirers. REIT activity is minimal. Sovereign wealth fund participation is largely absent.
              </li>
              <li>
                <strong>Distinct catalysts repricing each market.</strong> Oman&apos;s Golden Residency framework and Vision 2040 spending. Serbia&apos;s EU accession progress and family office establishment. Mauritius&apos;s July 2026 tax inflection.
              </li>
            </ul>
          </section>

          {/* Section VII — Timing */}
          <section style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.8rem',
                fontWeight: 300,
                color: 'rgba(201,168,76,0.9)',
                marginBottom: '1.5rem',
              }}
            >
              VII. The Window Closing — Timing Considerations
            </h2>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              Timing is the single most underestimated variable in pre-institutional capital deployment. Three calendar inflections warrant explicit attention.
            </p>

            <ul
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
                marginLeft: '1.5rem',
                listStyleType: 'disc',
              }}
            >
              <li style={{ marginBottom: '0.8rem' }}>
                <strong>1 July 2026 — Mauritius registration duty doubles.</strong> The cleanest, most quantifiable closing window. Completing acquisition before this date saves approximately 5% of purchase price. For investors planning eventual resale, the pre-July 2026 window is structurally consequential.
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <strong>Q3 2026 — Oman institutional inflection.</strong> Muscat ITC pricing is now above the prior 2014–2015 cycle peak in selected segments. The pre-institutional window in Muscat narrows through 2026; in Salalah, Jebel Sifah, and selected secondary corridors, the window extends into 2027.
              </li>
              <li>
                <strong>2026–2027 — Serbia EU accession progress.</strong> Serbia&apos;s path remains structurally uncertain. The strategic positioning value of Serbia&apos;s dual visa-free access erodes if EU accession accelerates. Belgrade family office establishment is accelerating regardless, suggesting the pre-institutional window narrows through 2027.
              </li>
            </ul>

            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
                fontStyle: 'italic',
              }}
            >
              The strategic implication: deployment in 2026, with completion before Q3 in Mauritius specifically, captures the maximum residual pre-institutional advantage.
            </p>
          </section>

          {/* Section VIII — Capital Deployment */}
          <section style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.8rem',
                fontWeight: 300,
                color: 'rgba(201,168,76,0.9)',
                marginBottom: '1.5rem',
              }}
            >
              VIII. Capital Deployment Framework
            </h2>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              HAYTEM SOVEREIGN&apos;s Private Capital Desk approaches BRICS-migration deployment through four structuring decisions.
            </p>

            <ul
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
                marginLeft: '1.5rem',
                listStyleType: 'disc',
              }}
            >
              <li style={{ marginBottom: '0.8rem' }}>
                <strong>The jurisdiction mix.</strong> A balanced three-jurisdiction allocation — typically 35–45% Oman / 25–35% Mauritius / 20–30% Serbia — creates structural diversification across the Gulf, the Indian Ocean, and Europe while maintaining the BRICS-aligned thesis.
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <strong>The property type within each jurisdiction.</strong> In Oman: branded residences in Muscat ITCs for institutional title and liquidity; Salalah and Jebel Sifah for higher yields. In Mauritius: PDS villas for freehold; IHS hotel-branded residences for passive income. In Serbia: central Belgrade apartments for liquidity; secondary cities for higher yield.
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <strong>The legal vehicle.</strong> Direct personal ownership simplifies residency qualification. Family-trust ownership creates succession resilience. For acquisitions above USD 5 million, structured ownership through a recognised foundation or trust is the standard recommendation.
              </li>
              <li>
                <strong>The currency and financing structure.</strong> Mauritian banks offer up to 70% LTV financing for foreign-income principals. Omani banks offer OMIBOR-linked rates from approximately 5% to 7.5%. Serbian financing is available but typically less attractive than equity-funded acquisition.
              </li>
            </ul>
          </section>

          {/* Section IX — Investor Advice */}
          <section style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.8rem',
                fontWeight: 300,
                color: 'rgba(201,168,76,0.9)',
                marginBottom: '1.5rem',
              }}
            >
              IX. Investor Advice — How to Position
            </h2>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              For UHNW principals and family offices evaluating BRICS-migration positioning in 2026, five practical considerations should govern decision-making.
            </p>

            <ul
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
                marginLeft: '1.5rem',
                listStyleType: 'disc',
              }}
            >
              <li style={{ marginBottom: '0.8rem' }}>
                <strong>Begin with the residency question, not the property question.</strong> The single most consequential decision is which residency framework best aligns with the family&apos;s long-term mobility strategy. The property acquisition flows from the residency decision, not the reverse.
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <strong>Underwrite the regulatory trajectory, not just the current framework.</strong> Mauritius&apos;s July 2026 tax change is the most explicit example. The investment thesis must incorporate regulatory direction, not just current rules.
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <strong>Do not optimise solely for yield.</strong> Gross yields of 7–9% in secondary markets often carry operational, currency, and exit-liquidity risks that materially compress net yields. Prime-location selection beats higher gross yields in secondary corridors.
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <strong>Plan the exit before completing the entry.</strong> Resale liquidity in pre-institutional markets is structurally lower than in institutional markets. The exit horizon should be at least 5–7 years.
              </li>
              <li>
                <strong>Engage advisory architecture commensurate with the deployment scale.</strong> Acquisitions above USD 5 million — and certainly any structured multi-jurisdiction deployment — require integrated advisory across legal structuring, tax positioning, residency architecture, and operational management.
              </li>
            </ul>
          </section>

          {/* Section X — HAYTEM SOVEREIGN Position */}
          <section style={{ marginBottom: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(201,168,76,0.2)' }}>
            <h2
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.8rem',
                fontWeight: 300,
                color: 'rgba(201,168,76,0.9)',
                marginBottom: '1.5rem',
              }}
            >
              X. The HAYTEM SOVEREIGN Position
            </h2>

            <div
              style={{
                width: '100%',
                height: '300px',
                position: 'relative',
                marginBottom: '2rem',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid rgba(201,168,76,0.15)',
              }}
            >
              <Image
                src="/brics/private-capital-architecture.jpg"
                alt="HAYTEM SOVEREIGN Private Capital Desk — Singapore family office advisory"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              HAYTEM SOVEREIGN does not list inventory. We do not represent developers. We do not earn agency commissions on transactions. HAYTEM SOVEREIGN operates as a Private Capital Desk for UHNW principals, family offices, and sovereign-aligned investors evaluating cross-border property strategy at the USD 25M to USD 1B+ commitment level.
            </p>

            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              For principals evaluating BRICS-migration deployment, our Private Capital Desk offers a structured four-phase engagement:
            </p>

            <ul
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
                marginLeft: '1.5rem',
                listStyleType: 'disc',
              }}
            >
              <li style={{ marginBottom: '0.8rem' }}>
                <strong>Phase One — Strategic positioning audit.</strong> Mapping current jurisdictional exposure against the three-jurisdiction BRICS-migration framework.
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <strong>Phase Two — Targeted opportunity identification.</strong> Off-market, pre-institutional acquisitions aligned with the principal&apos;s mandate.
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <strong>Phase Three — Transaction architecture and execution.</strong> Legal structuring, tax positioning, financing arrangement, and residency application coordination.
              </li>
              <li>
                <strong>Phase Four — Ongoing strategic oversight.</strong> Pre-institutional markets reprice. Family circumstances change. Our engagement maintains continuity.
              </li>
            </ul>

            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                marginBottom: '1.2rem',
              }}
            >
              The principals who benefit most align with three characteristics: deployment scale above USD 5 million per jurisdiction, multi-generational time horizon of 10+ years, and strategic preference for pre-institutional positioning over institutional-grade allocation.
            </p>

            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.75)',
                fontStyle: 'italic',
              }}
            >
              The migration described in this brief is not a forecast. It is observation. Capital is moving. Pricing is repricing. The pre-institutional window is closing on a timeline measured in quarters, not years.
            </p>
          </section>

          {/* CTA */}
          <section
            style={{
              paddingTop: '2rem',
              borderTop: '1px solid rgba(42,42,42,0.5)',
              marginTop: '3rem',
              textAlign: 'center',
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
                fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
                fontWeight: 300,
                color: '#F5F0E8',
                marginBottom: '2rem',
                lineHeight: 1.2,
              }}
            >
              For institutional mandates across Oman, Serbia, and Mauritius,
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
            <Link href="/#mandate" style={{ textDecoration: 'none' }}>
              <button
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '9px',
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#0A0A0A',
                  background: 'linear-gradient(135deg, #8B6914 0%, #C9A84C 50%, #8B6914 100%)',
                  padding: '12px 32px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-block',
                  transition: 'opacity 0.2s ease',
                }}
              >
                Initialize Strategic Protocol
              </button>
            </Link>

            <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.75rem',
                  letterSpacing: '0.08em',
                  color: 'rgba(245,240,232,0.3)',
                  marginBottom: '1rem',
                }}
              >
                For related intelligence on parallel emerging corridors:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                <Link href="/journal/albania-riviera-2026-investment-thesis" style={{ color: '#C9A84C', textDecoration: 'underline' }}>
                  Albania Riviera 2026 Investment Thesis →
                </Link>
                <Link href="/eldorado/porto-montenegro" style={{ color: '#C9A84C', textDecoration: 'underline' }}>
                  Porto Montenegro Investment Intelligence →
                </Link>
                <Link href="/eldorado/lustica-bay" style={{ color: '#C9A84C', textDecoration: 'underline' }}>
                  Luštica Bay Strategic Profile →
                </Link>
                <Link href="/eldorado/vlora" style={{ color: '#C9A84C', textDecoration: 'underline' }}>
                  Vlora Eldorado Brief →
                </Link>
                <Link href="/eldorado/ksamil" style={{ color: '#C9A84C', textDecoration: 'underline' }}>
                  Ksamil Hidden Paradise Profile →
                </Link>
              </div>
            </div>
          </section>

          {/* Author */}
          <section style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid rgba(201,168,76,0.2)' }}>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(201,168,76,0.6)',
                marginBottom: '1rem',
              }}
            >
              About the Author
            </p>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.98rem',
                lineHeight: 1.8,
                color: 'rgba(245, 240, 232, 0.6)',
              }}
            >
              <strong>Hassaneine Haytem</strong> is a sovereign-level strategic advisor operating at the intersection of institutional advisory, private wealth architecture, and emerging Eldorado real estate intelligence. With fifteen years of advisory across 40+ active investment territories and 6 continental investment corridors, Hassaneine leads HAYTEM SOVEREIGN&apos;s private capital desk from Singapore, serving family offices, sovereign-linked investors, and UHNWI families globally.
            </p>
            <p style={{ marginTop: '1rem' }}>
              <Link href="/#about" style={{ color: '#C9A84C', textDecoration: 'underline', fontFamily: 'Inter, sans-serif', fontSize: '0.9rem' }}>
                Read the Full Statesman Profile →
              </Link>
            </p>
          </section>

          {/* Classification Footer */}
          <div
            style={{
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(201,168,76,0.2)',
              textAlign: 'center',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              color: 'rgba(201,168,76,0.4)',
              textTransform: 'uppercase',
            }}
          >
            <p>Intelligence Classification: Strategic · Distribution: Selective</p>
            <p>HAYTEM SOVEREIGN · Private Capital Desk · Singapore</p>
            <p>© 2026 — All rights reserved · Strictly Private</p>
          </div>
        </article>

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Article',
                  '@id': 'https://www.haytemsovereign.com/journal/silent-brics-property-migration-2026#article',
                  headline: 'The Silent BRICS Property Migration: Why $40B+ of Russian, Indian, and Chinese UHNW Capital Is Quietly Repositioning into Three Unexpected Jurisdictions in 2026',
                  description:
                    'A HAYTEM SOVEREIGN intelligence brief on the silent migration of Russian, Indian, and Chinese ultra-high-net-worth capital into Oman, Serbia, and Mauritius in 2026.',
                  image: 'https://www.haytemsovereign.com/brics/brics-migration-cover.jpg',
                  author: {
                    '@type': 'Person',
                    name: 'Hassaneine Haytem',
                    url: 'https://www.haytemsovereign.com/#about',
                  },
                  publisher: {
                    '@type': 'Organization',
                    name: 'HAYTEM SOVEREIGN',
                    logo: {
                      '@type': 'ImageObject',
                      url: 'https://www.haytemsovereign.com/logo.png',
                    },
                  },
                  datePublished: '2026-05-16',
                  articleBody: 'A historic redistribution of private wealth is underway. Three categories of capital — Russian, Indian, and Chinese UHNW — are converging on three jurisdictions: Oman, Serbia, and Mauritius. This intelligence brief examines the regulatory inflections, pricing dynamics, residency frameworks, and capital deployment architecture for family offices and sovereign-aligned investors positioning before the institutional repricing.',
                },
                {
                  '@type': 'BreadcrumbList',
                  itemListElement: [
                    {
                      '@type': 'ListItem',
                      position: 1,
                      name: 'Home',
                      item: 'https://www.haytemsovereign.com/',
                    },
                    {
                      '@type': 'ListItem',
                      position: 2,
                      name: 'Journal',
                      item: 'https://www.haytemsovereign.com/journal',
                    },
                    {
                      '@type': 'ListItem',
                      position: 3,
                      name: 'The Silent BRICS Property Migration 2026',
                      item: 'https://www.haytemsovereign.com/journal/silent-brics-property-migration-2026',
                    },
                  ],
                },
                {
                  '@type': 'FAQPage',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'Why are Russian, Indian, and Chinese UHNW investors choosing Oman, Serbia, and Mauritius over Dubai or Singapore in 2026?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Three structural factors converge: political neutrality through the 2022–2025 sanctions regime, materially lower tax burden than OECD jurisdictions (zero capital gains in all three, zero inheritance and wealth tax in Mauritius and Oman), and pre-institutional pricing that remains 30–60% below comparable Dubai or Singapore inventory for equivalent lifestyle profile.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What is the minimum investment required for residency in Oman, Serbia, and Mauritius in 2026?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Oman: OMR 200,000 (~USD 520,000) for 10-year residency through ITC pathways; OMR 250,000 (~USD 650,000) for 5-year route; OMR 500,000 (~USD 1.3M) for standard 10-year route. Serbia: EUR 50,000 minimum for investor visa, or no minimum for real estate residency route. Mauritius: USD 375,000 minimum through EDB-approved schemes (PDS, IRS, RES, Smart City, IHS, G+2).',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What rental yields can UHNW investors expect in Oman, Serbia, and Mauritius?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Oman: 5.6%–8.3% gross yields, with Al Khuwair Muscat at 6.5–8.5% and Salalah tourist properties reaching 7–10%. Serbia: 5.5%–7% gross yields, with Belgrade at 6.35%. Mauritius: 4%–7% gross yields, with PDS villa rentals typically 5–6% gross.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What is the closing window for pre-institutional entry into Mauritian real estate?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Under the Finance Act 2025–2026, registration duty and land transfer tax on non-citizen acquisitions through EDB-approved schemes doubles from 5% to 10% effective 1 July 2026. Acquisitions completed before this date capture the lower 5% rate.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Why does Serbia uniquely benefit BRICS-origin capital among European jurisdictions?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Serbia is the only European country whose passport grants visa-free access to both Russia and China while simultaneously providing visa-free access to the Schengen Area. The country refused to align with EU sanctions on Russia from 2022 through 2025, maintaining open commercial and migration corridors with Russian capital.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How does HAYTEM SOVEREIGN structure UHNW deployment across the three jurisdictions?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'HAYTEM SOVEREIGN typically recommends a balanced three-jurisdiction allocation of 35–45% Oman, 25–35% Mauritius, and 20–30% Serbia. Engagement is structured in four phases: strategic positioning audit, targeted opportunity identification, transaction architecture and execution, and ongoing strategic oversight. Deployment scale typically begins at USD 5 million per jurisdiction with multi-generational time horizons of 10+ years.',
                      },
                    },
                  ],
                },
                {
                  '@type': 'Person',
                  '@id': 'https://www.haytemsovereign.com/#about',
                  name: 'Hassaneine Haytem',
                  jobTitle: 'Global Market Architect & Sovereign-Level Strategic Advisor',
                  affiliation: {
                    '@type': 'Organization',
                    name: 'HAYTEM SOVEREIGN',
                  },
                },
                {
                  '@type': 'Organization',
                  '@id': 'https://www.haytemsovereign.com/',
                  name: 'HAYTEM SOVEREIGN',
                  description: 'Sovereign-level strategic advisory. Private wealth architecture. Emerging Eldorado investment intelligence.',
                  sameAs: ['https://www.haytemsovereign.com/'],
                },
              ],
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
