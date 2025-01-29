/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        price: "var(--price-color)",
        tertiary: "var(--tertiary-color)",
        primary: "var(--primary-color)",
        "my-secondary": "var(--my-secondary-color)",
      },
      borderRadius: {
        20: "20px",
      },
      padding: {
        80: "80px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
