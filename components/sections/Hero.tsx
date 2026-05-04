'use client';

import { useEffect, useRef } from 'react';


export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; opacity: number; size: number }[] = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        opacity: Math.random() * 0.4 + 0.1,
        size: Math.random() * 1.2 + 0.4,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 76, ${p.opacity})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse 100% 100% at 50% 50%, #0F0E00 0%, #0A0A0A 60%, #050505 100%)',
      }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />

      {/* Geometric border lines */}
      <div
        style={{
          position: 'absolute',
          inset: '2.5rem',
          border: '1px solid rgba(201, 168, 76, 0.06)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: '3.5rem',
          border: '1px solid rgba(201, 168, 76, 0.03)',
          pointerEvents: 'none',
        }}
      />

      {/* Corner accents */}
      {(['tl', 'tr', 'bl', 'br'] as const).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            ...(i === 0 && { top: '2.5rem', left: '2.5rem', borderTop: '1px solid rgba(201,168,76,0.35)', borderLeft: '1px solid rgba(201,168,76,0.35)' }),
            ...(i === 1 && { top: '2.5rem', right: '2.5rem', borderTop: '1px solid rgba(201,168,76,0.35)', borderRight: '1px solid rgba(201,168,76,0.35)' }),
            ...(i === 2 && { bottom: '2.5rem', left: '2.5rem', borderBottom: '1px solid rgba(201,168,76,0.35)', borderLeft: '1px solid rgba(201,168,76,0.35)' }),
            ...(i === 3 && { bottom: '2.5rem', right: '2.5rem', borderBottom: '1px solid rgba(201,168,76,0.35)', borderRight: '1px solid rgba(201,168,76,0.35)' }),
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Radial glow */}
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '2rem',
          maxWidth: '900px',
          width: '100%',
        }}
      >
        {/* Logo monogram */}
        <div
          className="hero-reveal hero-reveal-delay-1"
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="79" height="79" stroke="#C9A84C" strokeOpacity="0.4" strokeWidth="0.75" />
            <rect x="5.5" y="5.5" width="69" height="69" stroke="#C9A84C" strokeOpacity="0.15" strokeWidth="0.5" />
            <line x1="0" y1="0" x2="14" y2="0" stroke="#C9A84C" strokeOpacity="0.8" strokeWidth="1.5" />
            <line x1="0" y1="0" x2="0" y2="14" stroke="#C9A84C" strokeOpacity="0.8" strokeWidth="1.5" />
            <line x1="80" y1="0" x2="66" y2="0" stroke="#C9A84C" strokeOpacity="0.8" strokeWidth="1.5" />
            <line x1="80" y1="0" x2="80" y2="14" stroke="#C9A84C" strokeOpacity="0.8" strokeWidth="1.5" />
            <line x1="0" y1="80" x2="14" y2="80" stroke="#C9A84C" strokeOpacity="0.8" strokeWidth="1.5" />
            <line x1="0" y1="80" x2="0" y2="66" stroke="#C9A84C" strokeOpacity="0.8" strokeWidth="1.5" />
            <line x1="80" y1="80" x2="66" y2="80" stroke="#C9A84C" strokeOpacity="0.8" strokeWidth="1.5" />
            <line x1="80" y1="80" x2="80" y2="66" stroke="#C9A84C" strokeOpacity="0.8" strokeWidth="1.5" />
            <text x="40" y="51" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="32" fontWeight="400" fill="#C9A84C" letterSpacing="-1">HH</text>
          </svg>
        </div>

        {/* Brand name */}
        <div className="hero-reveal hero-reveal-delay-2" style={{ marginBottom: '0.5rem' }}>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 500,
              letterSpacing: '0.5em',
              color: '#C9A84C',
              textTransform: 'uppercase',
            }}
          >
            HAYTEM SOVEREIGN
          </p>
        </div>

        {/* Name */}
        <div className="hero-reveal hero-reveal-delay-2">
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              fontWeight: 300,
              letterSpacing: '0.35em',
              color: 'rgba(245, 240, 232, 0.6)',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            Hassaneine Haytem
          </h2>
        </div>

        {/* Gold line */}
        <div className="hero-reveal hero-reveal-delay-2" style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div className="gold-line" style={{ width: '120px', height: '1px' }} />
        </div>

        {/* Main headline */}
        <div className="hero-reveal hero-reveal-delay-3">
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
              fontWeight: 300,
              lineHeight: 1.0,
              color: '#F5F0E8',
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
            }}
          >
            Engineering Prosperity
            <br />
            <span className="gold-text">for States & Legacies</span>
          </h1>
        </div>

        {/* Subheadline */}
        <div className="hero-reveal hero-reveal-delay-4">
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)',
              fontWeight: 300,
              color: 'rgba(245, 240, 232, 0.55)',
              letterSpacing: '0.02em',
              lineHeight: 1.6,
              maxWidth: '640px',
              margin: '0 auto 2.5rem',
            }}
          >
            From architecting national market growth to safeguarding private acquisitions<br />
            for global icons and sovereign investors.
          </p>
        </div>

        {/* Credibility line */}
        <div className="hero-reveal hero-reveal-delay-4" style={{ marginBottom: '3rem' }}>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 400,
              color: 'rgba(201, 168, 76, 0.7)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            15+ Years · Off-Market Alpha · Sovereign Strategy · Institutional Confidentiality · Emerging Eldorado Intelligence
          </p>
        </div>

        {/* CTAs */}
        <div
          className="hero-reveal hero-reveal-delay-5"
          style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}
        >
          <a href="#mandate" className="btn-primary" style={{ textDecoration: 'none' }}>
            Initialize Strategic Protocol
          </a>
          <a href="#advisory" className="btn-secondary" style={{ textDecoration: 'none' }}>
            Private Investor Access
          </a>
        </div>

        {/* Tagline */}
        <div className="hero-reveal hero-reveal-delay-6">
          <p
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
              fontStyle: 'italic',
              fontWeight: 300,
              lineHeight: 1.7,
              color: 'rgba(232, 213, 163, 0.8)',
              letterSpacing: '0.05em',
            }}
          >
            Where Capital Becomes Legacy.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-reveal hero-reveal-delay-6"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <span
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.55rem',
            letterSpacing: '0.35em',
            color: 'rgba(201,168,76,0.4)',
            textTransform: 'uppercase',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '50px',
            background: 'linear-gradient(180deg, rgba(201,168,76,0.5) 0%, transparent 100%)',
            animation: 'goldPulse 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  );
}
