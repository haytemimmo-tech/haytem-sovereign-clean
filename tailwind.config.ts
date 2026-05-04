import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0A0A0A',
        graphite: {
          dark: '#0E0E0E',
          DEFAULT: '#141414',
          mid: '#1A1A1A',
          light: '#252525',
          border: '#2A2A2A',
        },
        gold: {
          deep: '#6B4E0A',
          muted: '#8B6914',
          dark: '#A07D2C',
          DEFAULT: '#C9A84C',
          light: '#D4AF37',
          bright: '#E8C84A',
          pale: '#E8D5A3',
          cream: '#F0E5C5',
        },
        sovereign: {
          cream: '#F5F0E8',
          parchment: '#EDE5D5',
          silver: '#9A9A9A',
          slate: '#6A6A6A',
          charcoal: '#3A3A3A',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['Montserrat', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      fontSize: {
        '10xl': ['9rem', { lineHeight: '1' }],
        '11xl': ['10rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        sovereign: '0.25em',
        wide2: '0.15em',
        wide3: '0.2em',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #8B6914 0%, #C9A84C 40%, #E8C84A 60%, #C9A84C 80%, #8B6914 100%)',
        'gold-gradient-v': 'linear-gradient(180deg, #8B6914 0%, #C9A84C 50%, #8B6914 100%)',
        'obsidian-gradient': 'radial-gradient(ellipse at center, #1A1A1A 0%, #0A0A0A 70%)',
        'section-gradient': 'linear-gradient(180deg, #0A0A0A 0%, #111111 50%, #0A0A0A 100%)',
        'card-gradient': 'linear-gradient(135deg, #141414 0%, #1A1A1A 100%)',
        'hero-radial': 'radial-gradient(ellipse 80% 80% at 50% 50%, #1A1500 0%, #0A0A0A 70%)',
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-out forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
        'gold-pulse': 'goldPulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'line-grow': 'lineGrow 1.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        goldPulse: {
          '0%, 100%': { opacity: '0.7', filter: 'brightness(0.9)' },
          '50%': { opacity: '1', filter: 'brightness(1.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        lineGrow: {
          '0%': { width: '0%', opacity: '0' },
          '100%': { width: '100%', opacity: '1' },
        },
      },
      boxShadow: {
        gold: '0 0 40px rgba(201, 168, 76, 0.15)',
        'gold-sm': '0 0 20px rgba(201, 168, 76, 0.1)',
        'gold-lg': '0 0 80px rgba(201, 168, 76, 0.2)',
        sovereign: '0 25px 50px rgba(0, 0, 0, 0.8)',
        inset: 'inset 0 0 60px rgba(0, 0, 0, 0.5)',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [],
};

export default config;
