/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "0 8px 12px -2px rgba(185, 180, 199, 0.2), 0 4px 8px -2px rgba(185, 180, 199, 0.12)",
      },
      fontFamily: {
        josefin_sans: ['"Josefin Sans"'],
        quicksand: ['"Quicksand"'],
        Roboto: ['"Roboto"'],
        young_serif: ['"Young Serif"'],
      },
    },
  },
  variants: {
    extend: {
      translate: ["group-hover"],
    },
  },
  plugins: [],
};
