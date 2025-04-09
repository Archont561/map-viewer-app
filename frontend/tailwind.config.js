/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.html",
    "./src/**/*.{ts,css}",
    "./src/**/**/*.{ts,css}",
    "./src/**/**/**/*.{ts,css}",
    "*.html"
  ],
  theme: {    
    extend: {},
  },
  plugins: [],
}

