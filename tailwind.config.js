/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,html}'],
  theme: {
    fontFamily: {
      one: ['La Luxes serif', 'sans-serif'],
      two: ['La Luxes Script', 'sans-serif'],
      three: ['spathaserif', 'sans-serif'],
      four: ['Valenzka', 'sans-serif'],
      five: ['TheAugusta', 'sans-serif'],
      six: ['Bagife', 'sans-serif'],
      seven: ['RolieTwily', 'sans-serif'],
      eight: ['Nectarine', 'sans-serif'],
      nine: ['Last Dream', 'sans-serif']
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1192px',
    },
    extend: {
      colors: {
        primary: '#0E1112',
        grey: '#484B4B',
        accent: '#EEF7F9',
      },
    },
  },
  plugins: [],
};