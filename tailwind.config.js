module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#4571FC',
      header: '#EDEDED',
    }),
    borderColor: (theme) => ({
      primary: '#4571FC',
    }),
    extend: {
      backgroundImage: (theme) => ({
        'footer-texture': "url('/imgs/bg.png')",
      }),
      borderWidth: ['hover', 'focus'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
