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
      fontFamily: {
        playfair: "Playfair Display",
        inter: "Inter",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
      addVariant("swiper-prev-button", "& > div.swiper-button-prev");
      addVariant(
        "swiper-prev-button-after",
        "& > div.swiper-button-prev::after"
      );
      addVariant("swiper-next-button", "& > div.swiper-button-next");
      addVariant(
        "swiper-next-button-after",
        "& > div.swiper-button-next::after"
      );
    },
  ],
};
