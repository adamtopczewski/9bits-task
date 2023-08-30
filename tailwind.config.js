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
        "accent": "#b11c33",
        "tertiary": "#991300",
        "custom-grey": "#323232",
      },
    },
  },
  plugins: [],
}

