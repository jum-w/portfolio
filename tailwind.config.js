/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx, ts, js, jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif']
      },
      colors: {
        'def1': '#2A0A74',
        'def2': '#380C45'
      }
    },
  },
  plugins: [],
}
