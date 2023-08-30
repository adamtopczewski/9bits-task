/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/**/*.{html,ts}",
  ],  
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "accent": "#991300",
      },
    },
  },
  plugins: [],
}

