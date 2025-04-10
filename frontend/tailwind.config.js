const defaultTheme = require("tailwindcss/defaultTheme");

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
    extend: {
      fontFamily: {
        sans: [
          "system-ui",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: ["light", "dark"],
    darkTheme: "dark",
  },
}

