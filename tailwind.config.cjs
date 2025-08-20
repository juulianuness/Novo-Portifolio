/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'paper': '#F5F3E7',
        'leaf': '#9BA97C',
        'leaf-dark': '#6D7D53'
      },
      boxShadow: {
        'soft': '0 10px 25px rgba(0,0,0,0.08)'
      },
      borderRadius: {
        '2xl': '1rem'
      }
    },
  },
  plugins: [],
}
