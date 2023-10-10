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
        "lightBlue": "#E7F5FE",
        "pink": "rgba(242, 30, 132, 0.15)",
        "orange": "rgba(246, 145, 52, 0.15)",
        "green": "rgba(34, 193, 193, 0.15)",
      },
      textColor: {
        "blue": "#345FF6",
        "gunmetal": "#253347",
        "darkGrey": "#5E6E85",
      },
      colors: {
        'grey': '#D8E2E7',
        "blue": "#345FF6",
      },
      boxShadow: {
        'base': '16px 32px 56px 0px rgba(143, 174, 207, 0.25)',
        'card': '16px 32px 56px 0px rgba(143, 174, 207, 0.25)',
      },
      spacing: {
        '42': '168px',
        'form': '450px',
        'desc': '690px',
      },
      borderRadius: {
        'radius': '32px'
      },
      screens: {
        'xl': '1440px',
      },
      fontSize: {
      },
      maxWidth: {
      }
    },
  },
  plugins: [],
}