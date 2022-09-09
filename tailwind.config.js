/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        darkPrimary: 'rgb(40, 41, 48)',
        darkSecondary:'rgb(51, 53, 61);'
      },
    },
  },
  plugins: [],
}
