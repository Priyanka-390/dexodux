
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: "'Syne', sans-serif",
      },
      colors: {
        darkPink: '#D0215D',
        lightPink:'#18070D',
        darkBlack: '#040404',
        lightBlack:'#111111',
        darkRed:'#FF0000',
        greyBorder: '#FFFFFF1A',
        lightPurple: '#A020F0',
        darkGrey: '#FFFFFF0A',
        lightGreyBorder: '#FFFFFF1F',
        inputColor:'#FFFFFF14'
      },
     
      lineHeight: {
        xxs:'120%',
        xs: '125%',
        sm:'138%',
        md:'140%'
      },
      boxShadow: {
        pinkShadow: '0px_8px_40px_0px_#D0215D66'

      },
      backgroundImage: {
        greygradient: "linear-gradient(135.66deg, rgba(255, 255, 255, 0.1) 0%, rgba(153, 153, 153, 0) 112.35%)",
        pinkGradient:'linear-gradient(180deg, #7B1F67 -15.63%, #D0215D 100%)',

      }
    },
  },
  plugins: [],
}