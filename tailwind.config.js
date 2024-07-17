/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily:{
        sans: ["Inter"]
      },
      colors:{
        "koyu":"#1F2937",
        "acik":"#6B7280",
        "koyu-mor":"#3730A3",
        "acik-mor":"#4338CA",
        "cizgi":"#BAB2E7",
        "git-yesil":"#00AB6B",
        "linkedin-mavi":"#0077B5",
        "email-kirmizi":"#AF0C48",
        "footer-bg":"#f9f9f9",
        "isim-bg":"#7B61FF",
        "isim-yuvarlak-bg":"#EEEBFF",
        "body-dark":"#252128",
        "isim-yuvarlak-bg-dark":"#4731D3",
        "isim-bg-dark":"#8F88FF",
        "koyu-dark":"#AEBCCF",
        "acik-dark":"#FFFFFF",
        "koyu-mor-dark":"#E1E1FF",
        "acik-mor-dark":"#B7AAFF",
        "git-yesil-dark":"#17D18B",
        "linkedin-mavi-dark":"#0BA6F6",
        "email-kirmizi-dark":"#BAB2E7",
        "footer-bg-dark":"#141414",
      }
    },
  },
  plugins: [],
}