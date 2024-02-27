/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FFFFFF",
        "secondary": "#393939",
        "terniaryBlue": "#A4B6C2",
        "cuaternaryOrange": "#F37A1F",
        "fifthGrey": "#D0D0C4",
        "FrostBG": "#FCFBFC",
        "arena": "#E8D8C4"
      },
      boxShadow: {
        '3xl': '0px 10px 50px 0px rgba(0, 0, 0, 0.15)'
      },listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
      }
    },
  },
  plugins: [],
}