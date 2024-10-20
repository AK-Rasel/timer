const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#0E1B1DCF",
      },
      maxWidth: {
        "8xl": "1720px",
      },
    },
  },
  plugins: [],
});
