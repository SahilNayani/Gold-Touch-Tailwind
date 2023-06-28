/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      openSans      : ['Open Sans', 'sans-serif'],
      courgette     : ['Courgette', 'cursive'],
      dancingScript : ['Dancing Script', 'cursive'],
      play          : ['Play', 'sans-serif'],
    },
    extend: {
      colors: {
        'gold': '#dfb858',
        'light-green': '#EEF2EF',
        'light-grey': '#ECECEC',
      },
      fontSize: {
        '10xl': '8.94rem',
      },
    },
  },
  plugins: [],
}

