/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "donorojo-yellow": "#F1BE77",
        "donorojo-lightblue": "#03BFC0",
        "donorojo-darkgreen": "#02595A",
        "donorojo-lightgreen": "#A0A605",
        "donorojo-cream": "#F2E0C8",
      },
    },
  },
  plugins: [],
};
