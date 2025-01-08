/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '128': '32rem',  // 512px
        '144': '36rem',  // 576px
        '160': '40rem',  // 640px
        '164': '44rem'
      },
      height: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '164': '44rem'
      }
    },
  },
  plugins: [],
}

