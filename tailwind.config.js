/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0f172a', // Slate 900 più leggibile
        'brand-gold': '#d4a574', // Oro più caldo
        'brand-gray': '#f8fafc', // Più neutro
        'text-dark': '#1e293b',
        'text-light': '#64748b',
      },
      fontFamily: {
        'serif': ['"Crimson Text"', 'serif'], // Font più leggibile
        'sans': ['"Inter"', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
}
