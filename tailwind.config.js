/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      borderRadius: {
        '20': '20px',
      }
    },
  },
  plugins: [  require('flowbite/plugin') ],
}