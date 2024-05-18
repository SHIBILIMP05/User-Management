/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "font11": ["Spectral", "serif"]
      },
      backgroundColor: {
        "B1": "#9cd3d3",
      },
      colors: {
        "C1": "#EDF4F2",
        "C2": "#2A3132",
        "C3": "#31473A",
      }
    },
  },
  plugins: [],
}

