/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        md: '1.75rem',
        lg: '3.5rem',
        xl: '5rem',
        '2xl': '3rem',
      },
    },
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

