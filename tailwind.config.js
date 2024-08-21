/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      keyframes: {
        fontWeightAnimation2: {
          "0%": { 
            "opacity": 0,
            "font-variation-settings": '"wght" 500, "wdth" 80.5' },
          "100%": { 
            "opacity": 100,
            "font-variation-settings": '"wght" 800, "wdth" 80.5' },
        },
        fontWeightAnimation1: {
          "0%": { 
            "opacity": 0,
            "font-variation-settings": '"wght" 800, "wdth" 80.5' },
          "100%": { 
            "opacity": 100,
            "font-variation-settings": '"wght" 500, "wdth" 80.5' },
        },
      },
      animation: {
        "font-weight1": "fontWeightAnimation1 ease-out 3s",
        "font-weight2": "fontWeightAnimation2 ease-out 3s",
      },
    },
    fontFamily: {
      body: ["playfair", "serif"],
      display: ["inter", "sans-serif"]
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

