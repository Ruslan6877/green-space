/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        green: 'rgba(70, 163, 88, 1)',
        bg_footer: 'rgba(70, 163, 88, 0.1)',
        green_soc: 'rgba(70, 163, 88, 0.6)'
      }
    },
  },
  plugins: [],
}

