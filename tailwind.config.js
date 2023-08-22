/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.{html,js,md}", "!./node_modules"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        icon: "url('/images/site-icon.svg')",
        "icon-dark": "url('/images/site-icon-dark.svg')",
        local: "url('/images/site-local.svg')",
        "local-dark": "url('/images/site-local-dark.svg')",
        hero: "url('/images/hero.jpg')",
        "hero-dark": "url('/images/hero-dark.jpg')",
      },
      colors: {
        transparent: "transparent",
        grey: {
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
        },
        "poly-blue": {
          1: "#ebf5ff",
          2: "#d7ebfe",
          3: "#c3e1fe",
          4: "#afd8fe",
          5: "#9bcefd",
          6: "#86cfd",
          7: "#72bafd",
          8: "#5eb0fd",
          9: "#4aa6fc",
          10: "#369cfc",
          11: "#2292fc",
          12: "#0e89fb",
          13: "#047ef1",
          14: "#0374dd",
          15: "#0369c9",
          16: "#035fb5",
          17: "#0254a1",
          18: "#024b8f",
          19: "#023f79",
          20: "#023564",
          21: "#012a50",
          22: "#01203c",
          23: "#011528",
          24: "#000b14",
        },
        "colu-blue": {
          4: "#bdd4e7",
        },
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        "primary-light": "var(--color-primary-light)",

        secondary: "var(--color-secondary)",
        "secondary-dark": "var(--color-secondary-dark)",
        "secondary-light": "var(--color-secondary-light)",

        accent: "var(--color-accent)",
        "accent-dark": "var(--color-accent-dark)",
        "accent-light": "var(--color-accent-light)",
      },
      fontFamily: {
        handwriting: ["Caveat"],
        serif: ["Zilla Slab", defaultTheme.fontFamily.serif],
        highlight: ["Zilla Slab Highlight", defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
      display: ["dark"],
    },
  },
  plugins: [require("tailwindcss-hamburgers")],
};
