/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0d3d56', // Blu Ottanio
        'brand-gold': '#c0a062', // Oro Pallido
        'brand-gray': '#f5f5f5', // Grigio Chiaro
        'text-dark': '#333333',
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
