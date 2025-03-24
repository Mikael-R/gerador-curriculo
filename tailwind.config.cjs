/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js,ts,vue}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        ...defaultColors
      },
    },
  },
  plugins: [],
};
