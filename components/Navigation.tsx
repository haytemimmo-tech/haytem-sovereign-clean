'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Logo from './Logo';

const NAV_LINKS = [
  { label: 'Advisory', href: '/#advisory' },
  { label: 'Intelligence', href: '/blog' },
  { label: 'Eldorado', href: '/#eldorado' },
  { label: 'ABOUT', href: '/#about' },
  { label: 'Journal', href: '/blog' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const [isDesktop, setIsDesktop] = useState(true);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const checkWidth = () => setIsDesktop(window.innerWidth >= 768);
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu if screen grows to desktop
  useEffect(() => {
    if (isDesktop) setMenuOpen(false);
  }, [isDesktop]);

  return (
    <>
      {/* ── Fixed nav bar ── */}
      <nav
        style={{
          position: 'fixed',
          top: scrolled ? 0 : (isDesktop ? '36px' : 0),
          left: 0,
          right: 0,
          zIndex: 200,
          backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.97)' : 'rgba(10, 10, 10, 0)',
          borderBottom: scrolled ? '1px solid rgba(42, 42, 42, 0.8)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'top 0.4s ease, background-color 0.4s ease, border-color 0.4s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 2rem',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <a href="/" style={{ textDecoration: 'none', flexShrink: 0, lineHeight: 0 }}>
            <Logo size={42} />
          </a>

          {/* Desktop links */}
          {isDesktop && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '28px', flexShrink: 0 }}>
              {NAV_LINKS.map((link) => {
                const active = hovered === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHovered(link.href)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '10px',
                      fontWeight: 400,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      color: active ? '#C9A84C' : 'rgba(245, 240, 232, 0.6)',
                      borderBottom: active ? '1px solid rgba(201,168,76,0.55)' : '1px solid transparent',
                      paddingBottom: '2px',
                      transition: 'color 0.2s ease, border-color 0.2s ease',
                    }}
                  >
                    {link.label}
                  </a>
                );
              })}

              {/* Mandate CTA */}
              <a
                href="/#mandate"
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
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
                  padding: '7px 18px',
                  flexShrink: 0,
                  display: 'inline-block',
                  transition: 'opacity 0.2s ease',
                }}
              >
                Mandate
              </a>
            </div>
          )}

          {/* Mobile hamburger */}
          {!isDesktop && (
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '5px',
                flexShrink: 0,
              }}
            >
              <span style={{ display: 'block', width: '20px', height: '1px', backgroundColor: '#C9A84C', transition: 'transform 0.3s ease', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
              <span style={{ display: 'block', width: '20px', height: '1px', backgroundColor: '#C9A84C', transition: 'opacity 0.3s ease', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: '20px', height: '1px', backgroundColor: '#C9A84C', transition: 'transform 0.3s ease', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
            </button>
          )}
        </div>

      </nav>

      {/* ── Mobile full-screen menu ── */}
      {!isDesktop && menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 199,
            backgroundColor: 'rgba(10, 10, 10, 0.99)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          <Logo size={52} />

          <div
            style={{
              width: '60px',
              height: '1px',
              background:
                'linear-gradient(90deg, transparent, #C9A84C, transparent)',
            }}
          />

          {NAV_LINKS.map((link) => (
  <a
    key={link.href}
    href={link.href}
    onClick={() => {
      setMenuOpen(false);
      router.push(link.href);
    }}
    style={{
      fontFamily: 'Cormorant Garamond, serif',
      fontSize: '2rem',
      fontWeight: 300,
      letterSpacing: '0.12em',
      color: '#F5F0E8',
      textDecoration: 'none',
    }}
  >
    {link.label}
  </a>
))}

          <a
            href="/#mandate"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: '#0A0A0A',
              background:
                'linear-gradient(135deg, #8B6914 0%, #C9A84C 50%, #8B6914 100%)',
              padding: '14px 36px',
              marginTop: '0.5rem',
              display: 'inline-block',
            }}
          >
            Initialize Mandate
          </a>
        </div>
      )}
    </>
  );
}
