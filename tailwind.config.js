/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        redflix: "#db0000",
        blackflix: "#000000",
        whiteflix: "#ffffff",
        grayflix: "#564d4d",
        darkRedflix: "#831010"
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}

