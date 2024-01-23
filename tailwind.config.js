/** @type {import(tailwindcss).Config} */
export const content = ["**/*.{html,js}"];
export const theme = {
  extend: {
    screens: {
      xl: { min: "1024px" },
      // => @media and (min-width: 1024px) and (max-width: 1279px)
      lg: { min: "768px", max: "1023px" },
      // => @media and (min-width: 768px) and (max-width: 1023px)
      md: { min: "426px", max: "767px" },
      // => @media and (min-width: 426px) and (max-width: 767px)
      sm: { min: "301px", max: "425px" },
      // => @media and (min-width: 300px) and (max-width: 425px)
      xs: { max: "300px" }
      // => @media and (max-width: 300px)
    },
    colors: {
      //Para destaque
      "color-primary": "#22D4FD",
      // Para background
      "color-secondary": "#000000",
      // Para texto
      "color-tertiary": "#F6F6F6"
    },
    spacing: {
      'square': '250px',
      'square-larger': '350px',
      'link-icon-typography': '1.5rem'
    },
    backgroundImage: {
      'background-binary': "url('../images/background-binary.png')",
      'background-binary-mobile': "url('../images/background-binary-mobile.png')",
    }
  }
};
export const plugins = [];
