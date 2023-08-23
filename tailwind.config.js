/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "Lima-Green": "#8BC34A",
        "Bright-Red": "#E53935",
        "Facebook-Blue": "#3B5998",
        "Twitter-Blue": "#1DA1F2",
        "Youtube-Red": "#FF0000",
        "Toggled-Gray": "#BDBDBD",
        "Very-Light-Gray": "#F5F5F5",
        "Light-Gray": "#E0E0E0",
        "Gray": "#9E9E9E",
        "Dark-Gray": "#616161",
        "Very-Dark-Gray": "#212121",
        "black": "#000000",
        "White": "#FFFFFF",
        "Toggle": "nsl(230, 22%, 74%)",
        "Light-Grayish-Blue": "#ECEFF1",

    },
    backgroundImage:{
      "Toggle": "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",

    },
   
      fontFamily: {
      
      'Inter':['Inter'],
      'sans': ['Roboto', 'sans-serif'],
      'serif': ['Merriweather', 'serif'],
      

  },
  plugins: [],
}
  }}
