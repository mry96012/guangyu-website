import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: '#0C1D2F',
          mid: '#182F4A',
          light: '#2A4470',
          card: '#0F2340',
        },
        gold: {
          DEFAULT: '#C8A63A',
          light: '#D4AF37',
          pale: '#E8D08A',
          muted: '#8B7355',
        },
        cream: {
          DEFAULT: '#F5F1EA',
          dark: '#EDE7D8',
          muted: '#D4CAB5',
        },
      },
      fontFamily: {
        serif: ['"Noto Serif TC"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Noto Sans TC"', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', '"Noto Serif TC"', 'serif'],
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #0C1D2F 0%, #182F4A 50%, #0C1D2F 100%)',
        'gold-gradient': 'linear-gradient(135deg, #C8A63A 0%, #D4AF37 50%, #8B7355 100%)',
        'cream-gradient': 'linear-gradient(135deg, #F5F1EA 0%, #EDE7D8 100%)',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'spin-reverse': 'spinReverse 40s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
      },
      keyframes: {
        spinReverse: {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}
export default config
