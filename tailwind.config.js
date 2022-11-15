/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['SF_Pro', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      boxShadow: {
        'shadow': '0px 4px 11px -4px rgba(0, 0, 0, 0.17)',
      },
    },
    colors: {
      'orange': {
        100: '#FFA132',
        200: '#FF8A00',
      },
      'grey': {
        100: '#F4F7FA',
        200: '#767680',
        500: '#868686',
      },
      'blue': {
        100: '#C0F4FF',
        200: '#007AFF',
      },
      'green': {
        100: '#C0FFD9',
        200: '#34C759',
      },
      'red': {
        100: '#EFC0FF',
        200: '#FF3B30',
      },
    },
  },
  plugins: [],
}