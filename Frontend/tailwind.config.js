/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "font11":["Spectral", "serif"]
      },
      backgroundColor:{
        "B1":"#9cd3d3",        
      },
      colors:{
        "C1":"#785e4d",
        "C2":"#baaf92",
        "C3":"#f2eee3",

      }
    },
  },
  plugins: [],
}

  