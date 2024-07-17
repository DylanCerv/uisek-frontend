/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#04376f',
        secondary:'#a5c838',
        tertiary:'#0c6c12'
      }
    },
  },
  plugins: [],
}

