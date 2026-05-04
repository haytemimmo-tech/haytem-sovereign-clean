'use client';

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 40, className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 md:gap-3 ${className}`}>
      {/* HH Monogram */}
      <svg
        className="w-8 h-8 md:w-12 md:h-12"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer border */}
        <rect x="0.5" y="0.5" width="51" height="51" stroke="#C9A84C" strokeOpacity="0.6" strokeWidth="0.75" />
        {/* Inner border */}
        <rect x="3.5" y="3.5" width="45" height="45" stroke="#C9A84C" strokeOpacity="0.2" strokeWidth="0.5" />
        {/* Corner marks */}
        <line x1="0" y1="0" x2="8" y2="0" stroke="#C9A84C" strokeOpacity="0.8" strokeWidth="1.5" />
        <line x1="0" y1="0" x2="0" y2="8" stroke="#C9A84C" strokeOpacity="0.8" strokeWidth="1.5" />
        <line x1="52" y1="0" x2="44" y2="0" stroke="#C9A84C" strokeOpacity="0.8" strokeWidth="1.5" />
        <line x1="52" y1="0" x2="52" y2="8" stroke="#C9A84C" strokeOpacity="0.8" strokeWidth="1.5" />
        <line x1="0" y1="52" x2="8" y2="52" stroke="#C9A84C" strokeOpacity="0.8" strokeWidth="1.5" />
        <line x1="0" y1="52" x2="0" y2="44" stroke="#C9A84C" strokeOpacity="0.8" strokeWidth="1.5" />
        <line x1="52" y1="52" x2="44" y2="52" stroke="#C9A84C" strokeOpacity="0.8" strokeWidth="1.5" />
        <line x1="52" y1="52" x2="52" y2="44" stroke="#C9A84C" strokeOpacity="0.8" strokeWidth="1.5" />
        {/* HH Text */}
        <text
          x="26"
          y="33"
          textAnchor="middle"
          fontFamily="Cormorant Garamond, serif"
          fontSize="22"
          fontWeight="400"
          fill="#C9A84C"
          letterSpacing="-1"
        >
          HH
        </text>
      </svg>
      {/* Brand name */}
      <div className="hidden md:flex flex-col leading-tight">
        <span
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.95rem',
            fontWeight: 600,
            letterSpacing: '0.3em',
            color: '#C9A84C',
            textTransform: 'uppercase',
          }}
        >
          HAYTEM
        </span>
        <span
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '0.95rem',
            fontWeight: 400,
            letterSpacing: '0.25em',
            color: '#F5F0E8',
            textTransform: 'uppercase',
          }}
        >
          SOVEREIGN
        </span>
      </div>
    </div>
  );
}
