/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xl: { min: "1024px" },
        lg: { min: "768px", max: "1023px" },
        md: { min: "426px", max: "767px" },
        sm: { min: "301px", max: "425px" },
        xs: { max: "300px" },
      },
      colors: {
        "color-primary": "#22D4FD",
        "color-secondary": "#000000",
        "color-tertiary": "#F6F6F6",
      },
      spacing: {
        square: "250px",
        "square-larger": "350px",
        "link-icon-typography": "1.5rem",
      },
      // backgroundImage: {
      //   "background-binary":
      //     "url('/src/tailwind-images/background-binary.png')",
      //   "background-binary-mobile":
      //     "url('/src/tailwind-images/background-binary-mobile.png')",
      // },
    },
  },
  plugins: [],
};
