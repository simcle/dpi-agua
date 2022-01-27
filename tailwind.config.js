const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.emerald,
      blue: colors.blue,
      cyan: colors.cyan
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
