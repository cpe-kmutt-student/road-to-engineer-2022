/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
        }
      }
    },
    // screens: {},
    
  },
  plugins: [],
}
