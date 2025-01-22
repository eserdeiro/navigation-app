/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "nunito-black": ["Nunito-Black", "sans-serif"],
        "nunito-light": ["Nunito-Light", "sans-serif"],
        "nunito-medium": ["Nunito-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
