const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#1e1e1e',
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.emerald,
      blue: colors.blue,
      cyan: colors.cyan,
      orange: colors.orange
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
