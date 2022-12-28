/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:['db-heaventcond', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'bloodred': {
          100: '#C12121',
          200: '#8F0202',
          300: '#5E0505', 
        },
        'juicy': {
          100: '#E46E18',
          200: '#D7560D',
          300: '#8C2B0C',
        }
      }
    },

    // screens: {},

    
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
