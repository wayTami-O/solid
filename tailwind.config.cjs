/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens:{
      'max':'1921px',
      'arr':'1580px',
      'def':'1440px',
      'bad':'901px',
      'desk': '900px',
      'low':'421px',
      'mobile':'761px',
      'small':'321px'
    },
    extend: {},
    fontFamily: {
      roboto: ['Roboto'],
      robotoMono: ['Roboto Mono']
    },
    colors:{
      'black': '#000000',
      'graphite': '#1C1C1C',
      'greyBrown':'#393939',
      'asphalt': '#555555',
      'dullGrey': '#717171',
      'telegraph':'#8E8E8E',
      'whiteAlum':'#AAAAAA',
      'silver':'#C6C6C6',
      'gainsborough':'#E3E3E3',
      'white':'#ffffff'
    }
  },
  plugins: []
};
