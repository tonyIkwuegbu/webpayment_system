/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html', './src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        cant: "Cantarell",
        pop: "Poppins",
        spec: "Spectral",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
