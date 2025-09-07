// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors - Palette medicale premium
        'brand': {
          'navy': '#1a365d',        // Blu navy professionale
          'navy-light': '#2c5282',  // Blu navy chiaro
          'gold': '#d4af37',        // Oro elegante
          'gold-light': '#f4e4c1',  // Oro chiaro
          'pearl': '#f8f5f0',       // Bianco perlato
          'charcoal': '#2d3748',    // Grigio scuro
          'sage': '#718096',        // Grigio salvia
          'cream': '#faf8f3',       // Crema
        },
        // Semantic Colors
        'text': {
          'primary': '#1a365d',
          'secondary': '#4a5568',
          'light': '#718096',
          'inverse': '#ffffff',
        },
        'surface': {
          'primary': '#ffffff',
          'secondary': '#f7fafc',
          'tertiary': '#edf2f7',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'serif': ['Crimson Text', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'title-xl': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'title-lg': ['1.875rem', { lineHeight: '1.3' }],
        'title': ['1.5rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.6s ease-out forwards',
        'slide-left': 'slideLeft 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'scroll': 'scroll 1.5s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.5s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        slideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(100px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        slideDown: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-100px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        slideLeft: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(100px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        slideRight: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-100px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        scaleIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.9)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        scroll: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(5px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #d4af37 0%, #f4e4c1 100%)',
        'gradient-navy': 'linear-gradient(135deg, #1a365d 0%, #2c5282 100%)',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 20px -2px rgba(0, 0, 0, 0.1), 0 12px 25px -5px rgba(0, 0, 0, 0.05)',
        'hard': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 20px 40px -5px rgba(0, 0, 0, 0.08)',
        'gold': '0 10px 40px -10px rgba(212, 175, 55, 0.3)',
        'navy': '0 10px 40px -10px rgba(26, 54, 93, 0.3)',
      },
      transitionDelay: {
        '100': '100ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '900': '900ms',
        '1000': '1000ms',
      },
      backdropBlur: {
        xs: '2px',
      },
      aspectRatio: {
        '3/4': '3 / 4',
        '4/3': '4 / 3',
        '5/6': '5 / 6',
        '6/5': '6 / 5',
      },
    },
  },
  plugins: [
    // Plugin per utilities personalizzate
    function({ addUtilities }) {
      const newUtilities = {
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.transition-smooth': {
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '.line-clamp-2': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '2',
        },
        '.line-clamp-3': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '3',
        },
        '.scrollbar-hide': {
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        '.animate-float': {
          animation: 'float 6s ease-in-out infinite',
        },
        '.animate-float-delayed': {
          animation: 'float 6s ease-in-out 3s infinite',
        },
      }
      addUtilities(newUtilities)
    },
    // Plugin per componenti
    function({ addComponents }) {
      const components = {
        '.btn-primary': {
          '@apply bg-gradient-to-r from-brand-navy to-brand-navy-light text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl': {},
        },
        '.btn-secondary': {
          '@apply border-2 border-brand-navy text-brand-navy font-medium py-4 px-8 rounded-full transition-all duration-300 hover:bg-brand-navy hover:text-white transform hover:scale-105': {},
        },
        '.btn-gold': {
          '@apply bg-gradient-to-r from-brand-gold to-brand-gold-light text-brand-navy font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-gold': {},
        },
        '.card-premium': {
          '@apply bg-white rounded-2xl shadow-soft hover:shadow-hard transition-shadow duration-300': {},
        },
        '.gradient-text': {
          '@apply bg-gradient-to-r from-brand-gold to-brand-gold-light bg-clip-text text-transparent': {},
        },
      }
      addComponents(components)
    },
  ],
}
