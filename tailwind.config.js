/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Inter"]
      },
      colors:{
        "koyu":"#1F2937",
        "acik":"#6B7280",
        "koyu-mor":"#3730A3",
        "acik-mor":"#4338CA"
      }
    },
  },
  plugins: [],
}