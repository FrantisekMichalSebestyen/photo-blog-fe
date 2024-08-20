/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      keyframes: {
        fontWeightAnimation: {
          "0%": { "font-variation-settings": '"wght" 400' },
          "100%": { "font-variation-settings": '"wght" 600' },
        },
      },
      animation: {
        "font-weight": "fontWeightAnimation 3s ease-in-out infinite alternate",
      },
    },
    fontFamily: {
      variable: ["playfair", "sans-serif"],
    },
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
};

