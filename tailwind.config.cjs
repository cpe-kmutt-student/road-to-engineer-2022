/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: false,
  },
  theme: {
    extend: {
      fontFamily: {
        sans:['db-heaventcond', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'road-bg-pc': "url('/image/road-bg-pc.svg')",
        'road-bg-ipad': "url('/image/road-bg-ipad.svg')",
        'road-bg-mobile': "url('/image/road-bg-mobile.svg')",
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
    
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('daisyui'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
