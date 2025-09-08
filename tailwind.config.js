// tailwind.config.js - Configurazione Professionale Ottimizzata
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ===== PALETTE COLORI PROFESSIONALE =====
      colors: {
        // Brand Colors - Ispirato a Image Clinic
        brand: {
          // Navy Professional
          navy: {
            50: '#f8fafc',
            100: '#f1f5f9', 
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            950: '#020617'
          },
          // Amber/Gold Elegant
          amber: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b',
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
            950: '#451a03'
          },
          // Emerald Accent
          emerald: {
            50: '#ecfdf5',
            100: '#d1fae5',
            200: '#a7f3d0',
            300: '#6ee7b7',
            400: '#34d399',
            500: '#10b981',
            600: '#059669',
            700: '#047857',
            800: '#065f46',
            900: '#064e3b',
            950: '#022c22'
          }
        },
        // Semantic Colors
        text: {
          primary: '#0f172a',
          secondary: '#475569',
          tertiary: '#64748b',
          light: '#94a3b8',
          inverse: '#ffffff',
        },
        surface: {
          primary: '#ffffff',
          secondary: '#f8fafc',
          tertiary: '#f1f5f9',
          dark: '#0f172a',
        }
      },

      // ===== TIPOGRAFIA AVANZATA =====
      fontFamily: {
        // Primary Fonts
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'body': ['Crimson Text', 'Georgia', 'serif'],
        
        // Display Fonts
        'display': ['Playfair Display', 'serif'],
        'heading': ['Inter', 'sans-serif'],
      },

      fontSize: {
        // Display Sizes
        'display-xs': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.02em' }],
        'display-sm': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '3.5rem', letterSpacing: '-0.02em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-2xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        
        // Title Sizes
        'title-xs': ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
        'title-sm': ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.01em' }],
        'title-md': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.01em' }],
        'title-lg': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.01em' }],
        'title-xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.01em' }],
      },

      // ===== SPACING AVANZATO =====
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
      },

      // ===== ANIMAZIONI PROFESSIONALI =====
      animation: {
        // Entrance Animations
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-down': 'fadeDown 0.8s ease-out forwards',
        'fade-left': 'fadeLeft 0.8s ease-out forwards',
        'fade-right': 'fadeRight 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'scale-up': 'scaleUp 0.3s ease-out forwards',
        
        // Continuous Animations
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        
        // Interactive Animations
        'shimmer': 'shimmer 2s linear infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
        'gradient-y': 'gradient-y 3s ease infinite',
        'gradient-xy': 'gradient-xy 3s ease infinite',
        
        // Loading Animations
        'loading-dots': 'loadingDots 1.4s ease-in-out infinite',
        'loading-pulse': 'loadingPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'loading-spin': 'spin 1s linear infinite',
      },

      keyframes: {
        // Entrance Keyframes
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-100px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        scaleUp: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        
        // Continuous Keyframes
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        },
        'gradient-y': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'center top' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'center bottom' },
        },
        'gradient-xy': {
          '0%, 100%': { 'background-size': '400% 400%', 'background-position': 'left center' },
          '50%': { 'background-size': '400% 400%', 'background-position': 'right center' },
        },
        
        // Loading Keyframes
        loadingDots: {
          '0%, 80%, 100%': { transform: 'scale(0)', opacity: '0.5' },
          '40%': { transform: 'scale(1)', opacity: '1' },
        },
        loadingPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },

      // ===== SHADOWS PROFESSIONALI =====
      boxShadow: {
        // Soft Shadows
        'soft-xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'soft-sm': '0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        'soft': '0 4px 8px 0 rgba(0, 0, 0, 0.05)',
        'soft-md': '0 6px 12px 0 rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 20px 0 rgba(0, 0, 0, 0.05)',
        'soft-xl': '0 15px 30px 0 rgba(0, 0, 0, 0.05)',
        'soft-2xl': '0 25px 50px 0 rgba(0, 0, 0, 0.05)',
        
        // Premium Shadows
        'premium': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'premium-md': '0 8px 30px rgba(0, 0, 0, 0.10)',
        'premium-lg': '0 15px 40px rgba(0, 0, 0, 0.12)',
        'premium-xl': '0 25px 60px rgba(0, 0, 0, 0.15)',
        
        // Colored Shadows
        'amber': '0 10px 40px -10px rgba(217, 119, 6, 0.3)',
        'amber-lg': '0 20px 60px -10px rgba(217, 119, 6, 0.4)',
        'emerald': '0 10px 40px -10px rgba(16, 185, 129, 0.3)',
        'emerald-lg': '0 20px 60px -10px rgba(16, 185, 129, 0.4)',
        'navy': '0 10px 40px -10px rgba(15, 23, 42, 0.3)',
        'navy-lg': '0 20px 60px -10px rgba(15, 23, 42, 0.4)',
        
        // Glow Effects
        'glow-amber': '0 0 20px rgba(217, 119, 6, 0.4)',
        'glow-emerald': '0 0 20px rgba(16, 185, 129, 0.4)',
        'glow-white': '0 0 20px rgba(255, 255, 255, 0.4)',
      },

      // ===== GRADIENTS AVANZATI =====
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        
        // Brand Gradients
        'gradient-amber': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        'gradient-amber-soft': 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
        'gradient-navy': 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
        'gradient-navy-soft': 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
        'gradient-emerald': 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        'gradient-emerald-soft': 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
        
        // Complex Gradients
        'gradient-sunset': 'linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #dc2626 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #6366f1 100%)',
        'gradient-forest': 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
        'gradient-royal': 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 50%, #6d28d9 100%)',
        
        // Noise Textures
        'noise-light': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E\")",
        'noise-dark': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
      },

      // ===== BLUR & BACKDROP EFFECTS =====
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
      },

      // ===== BORDERS AVANZATI =====
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
        '8': '8px',
      },

      // ===== ASPECT RATIOS =====
      aspectRatio: {
        'auto': 'auto',
        'square': '1 / 1',
        'video': '16 / 9',
        'photo': '3 / 4',
        'portrait': '3 / 4',
        'landscape': '4 / 3',
        'wide': '16 / 10',
        'ultrawide': '21 / 9',
        'golden': '1.618 / 1',
      },

      // ===== Z-INDEX SYSTEM =====
      zIndex: {
        'dropdown': '1000',
        'sticky': '1020',
        'fixed': '1030',
        'modal-backdrop': '1040',
        'modal': '1050',
        'popover': '1060',
        'tooltip': '1070',
        'toast': '1080',
      },

      // ===== TRANSIZIONI AVANZATE =====
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
        '1200': '1200ms',
        '1500': '1500ms',
        '2000': '2000ms',
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
        '1500': '1500ms',
        '2000': '2000ms',
      },

      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bouncy': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'elastic': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'soft': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'sharp': 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
      },

      // ===== BREAKPOINTS CUSTOM =====
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        
        // Custom breakpoints
        'mobile': {'max': '639px'},
        'tablet': {'min': '640px', 'max': '1023px'},
        'desktop': {'min': '1024px'},
        'wide': {'min': '1920px'},
      },

      // ===== CONTENT UTILITIES =====
      content: {
        'none': 'none',
        'empty': "''",
        'space': "' '",
        'quote-left': '"\\201C"',
        'quote-right': '"\\201D"',
        'bullet': '"\\2022"',
        'check': '"\\2713"',
        'cross': '"\\2717"',
        'arrow-right': '"\\2192"',
        'arrow-left': '"\\2190"',
        'star': '"\\2605"',
        'heart': '"\\2665"',
      },
    },
  },
  plugins: [
    // ===== PLUGIN PERSONALIZZATI =====
    function({ addUtilities, addComponents, theme }) {
      // Utilities personalizzate
      const newUtilities = {
        // Text Balance
        '.text-balance': {
          'text-wrap': 'balance',
        },
        
        // Line Clamps
        '.line-clamp-1': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '1',
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
        '.line-clamp-4': {
          overflow: 'hidden',
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '4',
        },
        
        // Scrollbar Hide
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        },
        
        // Gradient Text
        '.gradient-text': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        
        // GPU Acceleration
        '.gpu-accelerated': {
          transform: 'translateZ(0)',
          'will-change': 'transform',
        },
        
        // Better Font Rendering
        '.font-smooth': {
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
        },
        
        // Glass Morphism
        '.glass': {
          'backdrop-filter': 'blur(16px) saturate(180%)',
          '-webkit-backdrop-filter': 'blur(16px) saturate(180%)',
          'background-color': 'rgba(255, 255, 255, 0.75)',
          'border': '1px solid rgba(255, 255, 255, 0.125)',
        },
        '.glass-dark': {
          'backdrop-filter': 'blur(16px) saturate(180%)',
          '-webkit-backdrop-filter': 'blur(16px) saturate(180%)',
          'background-color': 'rgba(15, 23, 42, 0.75)',
          'border': '1px solid rgba(255, 255, 255, 0.125)',
        },
        
        // Text Shadows
        '.text-shadow-sm': {
          'text-shadow': '0 1px 2px rgba(0, 0, 0, 0.1)',
        },
        '.text-shadow-md': {
          'text-shadow': '0 2px 4px rgba(0, 0, 0, 0.15)',
        },
        '.text-shadow-lg': {
          'text-shadow': '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
        '.text-shadow-xl': {
          'text-shadow': '0 6px 12px rgba(0, 0, 0, 0.25)',
        },
      }
      
      addUtilities(newUtilities)
      
      // Componenti personalizzati
      const newComponents = {
        // Button System
        '.btn': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '600',
          borderRadius: '9999px',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer',
          border: 'none',
          textDecoration: 'none',
          '&:focus': {
            outline: 'none',
            boxShadow: '0 0 0 3px rgba(217, 119, 6, 0.3)',
          },
        },
        
        '.btn-primary': {
          background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)',
          color: 'white',
          padding: '1rem 2rem',
          boxShadow: '0 4px 14px 0 rgba(217, 119, 6, 0.3)',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 10px 25px 0 rgba(217, 119, 6, 0.4)',
          },
          '&:active': {
            transform: 'scale(0.98)',
          },
        },
        
        '.btn-secondary': {
          backgroundColor: 'transparent',
          color: '#d97706',
          padding: '1rem 2rem',
          border: '2px solid #d97706',
          '&:hover': {
            backgroundColor: '#d97706',
            color: 'white',
            transform: 'scale(1.05)',
          },
        },
        
        '.btn-ghost': {
          backgroundColor: 'transparent',
          color: '#64748b',
          padding: '0.75rem 1.5rem',
          '&:hover': {
            backgroundColor: '#f1f5f9',
            color: '#334155',
          },
        },
        
        // Card System
        '.card': {
          backgroundColor: 'white',
          borderRadius: '1rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          transition: 'all 0.3s ease',
          overflow: 'hidden',
        },
        
        '.card-hover': {
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
          },
        },
        
        '.card-premium': {
          background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.8) 100%)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        },
        
        // Form System
        '.form-input': {
          width: '100%',
          padding: '1rem',
          border: '2px solid #e5e7eb',
          borderRadius: '0.75rem',
          backgroundColor: 'white',
          fontSize: '1rem',
          transition: 'all 0.3s ease',
          fontFamily: 'Inter, sans-serif',
          '&:focus': {
            outline: 'none',
            borderColor: '#d97706',
            boxShadow: '0 0 0 3px rgba(217, 119, 6, 0.1)',
            transform: 'scale(1.02)',
          },
          '&::placeholder': {
            color: '#9ca3af',
          },
        },
        
        '.form-label': {
          display: 'block',
          fontWeight: '600',
          color: '#374151',
          marginBottom: '0.5rem',
          fontSize: '0.875rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        },
        
        // Section System
        '.section': {
          paddingTop: '5rem',
          paddingBottom: '5rem',
        },
        
        '.section-lg': {
          paddingTop: '8rem',
          paddingBottom: '8rem',
        },
        
        '.section-xl': {
          paddingTop: '10rem',
          paddingBottom: '10rem',
        },
        
        // Container System
        '.container-fluid': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          '@screen sm': {
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',
          },
          '@screen lg': {
            paddingLeft: '2rem',
            paddingRight: '2rem',
          },
        },
      }
      
      addComponents(newComponents)
    },
    
    // Plugin per aspect ratio (se non incluso di default)
    function({ matchUtilities, theme }) {
      matchUtilities(
        {
          'aspect': (value) => ({
            aspectRatio: value,
          }),
        },
        { values: theme('aspectRatio') }
      )
    },
    
    // Plugin per animazioni personalizzate
    function({ addUtilities }) {
      addUtilities({
        '.animate-fade-in-up': {
          animation: 'fadeUp 0.8s ease-out forwards',
        },
        '.animate-fade-in-down': {
          animation: 'fadeDown 0.8s ease-out forwards',
        },
        '.animate-fade-in-left': {
          animation: 'fadeLeft 0.8s ease-out forwards',
        },
        '.animate-fade-in-right': {
          animation: 'fadeRight 0.8s ease-out forwards',
        },
        '.animate-scale-in': {
          animation: 'scaleIn 0.5s ease-out forwards',
        },
        '.animate-float': {
          animation: 'float 6s ease-in-out infinite',
        },
        '.animate-float-delayed': {
          animation: 'float 6s ease-in-out 3s infinite',
        },
      })
    },
  ],
  
  // ===== CONFIGURAZIONI AVANZATE =====
  corePlugins: {
    // Disabilita utilities non necessarie per ridurre bundle size
    // container: false, // se usi sistema container custom
  },
  
  // Prefisso per evitare conflitti CSS
  // prefix: 'tw-',
  
  // Importante per purging in produzione
  // purge: {
  //   enabled: process.env.NODE_ENV === 'production',
  //   content: [
  //     './index.html',
  //     './src/**/*.{js,ts,jsx,tsx}',
  //   ],
  //   options: {
  //     safelist: [
  //       // Classi da non rimuovere mai
  //       'animate-fade-in',
  //       'animate-float',
  //       /^delay-/,
  //       /^duration-/,
  //     ]
  //   }
  // },
}
