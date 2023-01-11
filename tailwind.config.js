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
          200: '#a0a0a0',
          300: '#707070',
          400: '#414141',
          500: '#111111',
          600: '#0e0e0e',
          700: '#0a0a0a',
          800: '#070707',
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
