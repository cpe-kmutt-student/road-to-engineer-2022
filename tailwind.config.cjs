/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
