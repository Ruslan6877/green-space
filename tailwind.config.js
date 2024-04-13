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
        green_soc: 'rgba(70, 163, 88, 0.6)',
        text_bg: 'rgba(61, 61, 61, 1)',
        welcome: 'rgba(245, 245, 245, 0.5)',
        categoriyes: 'rgba(251, 251, 251, 1)'
      }
    },
    screens: {
      'ml': '200px',
      'sm': '414px',
      'md': '640px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1280px',
    }
  },
  plugins: [],
}

