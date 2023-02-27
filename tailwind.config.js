/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
    fontFamily: {
      ubuntu: "ubuntu-mono, Ubuntu, sans-serif",
      mynerve: "Mynerve, cursive",
      biryani: "Biryani, sans-serif",
      sunrise: "Waiting for the Sunrise, cursive",
      // calligraffitti: "Waiting for the Sunrise, cursive",
    },
  },
  plugins: [],
};

// @import url('https://fonts.googleapis.com/css2?family=Mynerve&display=swap');
