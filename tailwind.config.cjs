/** @type {import('tailwindcss').Config} */

import theme from "./output/theme";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...theme.colors,
      },
    },
  },
  plugins: [],
};
