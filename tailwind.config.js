/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#0D141F",
        "primary-text-yellow": "#FFD60A",
        "primary-text-green": "#1FD8A4",
        "primary-text-blue": "#7CE2FE",
        "secondary-text": "#ECEEED",
      }
    },
  },
  plugins: [],
}