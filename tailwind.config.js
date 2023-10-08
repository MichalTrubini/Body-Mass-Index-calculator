/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "blue": "#345FF6",
        "gunmetal": "#253347",
        "darkGrey": "#5E6E85",
        "medium-grey": "#7C8798",
      },
      textColor: {
      },
      screens: {
      },
      fontSize: {
      },
      maxWidth: {
      }
    },
  },
  plugins: [],
}