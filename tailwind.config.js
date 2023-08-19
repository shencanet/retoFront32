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
        "Black": "#000000",
        "White": "#FFFFFF",

    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
      'serif': ['Merriweather', 'serif'],
      'Inter': ['Inter', 'sans-serif'],

  },
  plugins: [],
}

