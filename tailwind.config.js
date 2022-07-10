/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      ms: '720px',
      lg: '1080px',
      xl: '1440px'
    },


    extend: {
      colors: {
        oldmauv: '#5B2333',
        cultured: '#F7F4F3',
        darkliver: '#564D4A',
        cinnabar: '#F24333',
        carbelian: '#BA1B1D',
        aero: '#79BEEE'

      },
      lineHeight: {
        "extra-loose": "2.5rem"
      },
      padding: {

      }
    }




  },
  plugins: [],
}
// create a custom color pallet 