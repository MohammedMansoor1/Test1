/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins':['Poppins', 'sans-serif'],
      },
      colors:{
        'lightGray':'#D9D9D9',
        'darkGreen':'#3A5B22',
        'darkBlue':'#0F3DDE',
      },
    },
  },
  plugins: [],
}

