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
        quaternary: "var(--quaternary-color)",
        "primary-light": "var(--light-primary-background-color)",
        "out-of-stock": "var(--out-of-stock-color)",
        "hot-product": "var(--hot-product-color)",
        "light-text": "var(--light-text-color)",
        "rating-star": "var(--rating-star-color)",
      },
      fontSize: {
        80: "3.81rem",
        64: "3.048rem",
        51: "2.429rem",
        41: "1.952rem",
        33: "1.571rem",
        26: "1.238rem",
        21: "1rem",
        17: "0.81rem",
        13: "0.619rem",
      },
      borderRadius: {
        20: "20px",
        40: "20px",
      },
      padding: {
        80: "80px",
      },
      opacity: {
        "card-hover": "var(--card-hover-opacity)",
      },
      aspectRatio: {
        "4-5": 4 / 5,
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
