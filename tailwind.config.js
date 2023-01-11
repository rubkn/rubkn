/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        tablet: '640px',
        // => @media (min-width: 640px) { ... }
        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }
        desktop: '1280px'
        // => @media (min-width: 1280px) { ... }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        black: {
          100: '#cfcfcf',
          200: '#9f9f9f',
          300: '#6e6e6e',
          400: '#3e3e3e',
          500: '#0e0e0e',
          600: '#0b0b0b',
          700: '#080808',
          800: '#060606',
          900: '#030303'
        }
      }
    }
  },
  variants: {
    typography: ['dark']
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ]
};
