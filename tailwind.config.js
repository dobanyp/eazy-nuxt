/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        'ea-gray': 'hsl(0, 0%, 14%)',
        'ea-green': 'hsl(108, 82%, 42%)',
        'ea-green-light': 'hsl(108, 83%, 69%',
        'ea-error': 'hsl(338, 100%, 50%)',
        'ea-orange': 'hsl(25, 100%, 50%)',
        'ea-purple': 'hsl(256, 100%, 59%)',
        'ea-gradient-light-start': 'hsl(0, 1%, 28%)',
        'ea-gradient-light-end': 'hsl(0, 0%, 100%)',
        'ea-gradient-dark-start': 'hsl(0, 0%, 7%)',
        'ea-gradient-dark-via': 'hsl(0, 0%, 7%)',
        'ea-gradient-dark-end': 'hsl(0, 0%, 12%)'
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    }
  },
  plugins: [],
}