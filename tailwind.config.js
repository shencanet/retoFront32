/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Lima-Green": "#8BC34A",
        "Red": "#F44336",
        "Bright-Red": "#E53935",
        "Facebook": "#3B5998",
        "Twitter": "#1DA1F2",
        "Youtube": "#FF0000",
        "Toggled-Gray": "#BDBDBD",
        "Very-Light-Gray": "#F5F5F5",
        "Very-Pale-Blue": "#E3F2FD",
        "Light-Gray": "#E0E0E0",
        "Gray": "#9E9E9E",
        "Dark-Gray": "#616161",
        "Very-Dark-Gray": "#212121",
        "black": "#000000",
        "White": "#FFFFFF",
        "Toggle": "hsl(230, 22%, 74%)", // Corrected color format
        "Light-Grayish-Blue": "#ECEFF1",
        "Dark-Blue": "#2C3E50",
        "Desaturated-Blue": "#9DAEC2",
        "Dark-Grayish-Blue": "#8798AD",
        "Very-Dark-Blue": "#1E2A47",
        "Dark-Desaturated-Blue": "#4D5E7E",
        
      },
      backgroundImage: {
        "Toggle-Gradient": "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
        "Instagram": "linear-gradient(hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
      },
      fontFamily: {
        'Inter': ['Inter'],
        'sans': ['Roboto', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
