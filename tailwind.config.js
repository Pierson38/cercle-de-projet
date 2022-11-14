/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
    },
    fontFamily: {
      'sans': ['SF_Pro', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
}
