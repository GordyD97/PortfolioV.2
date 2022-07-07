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
      colors:{
        brightred: "#FF1800",
        

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