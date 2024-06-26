/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        homeBackground: "url('./src/assets/images/summer.jpg')",
      }
    },
  },
  plugins: [],
}