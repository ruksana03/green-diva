/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
      },
      colors:{
        // light 
       "forestGreen" : "#537451",
       "mintGreen" : "#D8EFD3",
       "skyBlue" : "#95D2B3",
       "mint": "#55AD9B",
       "offWhite": "#F1F8E8",


      //  dark 
     "darkGreen": "#243D25",
     "lightGreen": "#5F7464",
     "softPink": "#E4AEC5",
     "babyPink": "#FAD9E6",
      
      }
    },
  },
  plugins: [require("daisyui")],
 
}

