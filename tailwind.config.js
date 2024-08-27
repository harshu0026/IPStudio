/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'ip-gradient': 'linear-gradient(to right, rgba(34,193,195,1), rgba(253,187,45,1))',
        'ip-gradient1': 'linear-gradient(to bottom, rgba(255, 0, 0, 0.8), rgba(255, 0, 0, 0) 100%)',
        'ip-gradient2': 'linear-gradient(119.67deg,#f65677,#f83d59 5%,#fa233b 12%,#e22338 78%,#e3314d 92%,#e33f61 99%)',
        'ip-gradient3': 'linear-gradient(90deg, #d0061e 0%, #0790d8 100%)',
        'search-svg': "url('/src/assets/search.svg')"

      },
      colors: {
        'ip-main': '#1f1f1f',
        'ip-grey': '#191e29',
        'ip-blue': '#c2cad7',
        'ip-mid-blue': '#091d38',
        'ip-black': '#12151d',
        'ip-pink': 'rgb(250 88 106 / 60%)',
        'ip-pgrey': '#2c2c2c',
        'ip-mgrey': '#282e3d',
        'ip-lgrey': '#313d58',
        'ip-dgrey': '#1f2430f0',
        'ip-mbtn': '#434343',
        'ip-vbtn': '#4b4b4b',
        'ip-red': '#D60017',
        'ip-underline':'#292929',
        'ip-font': '#FFFFFFEB',
        'ip-font1': '#8b8b8b',
        'ip-font2': '#959595',
        'ip-cardbg': '#2d0c18',
        'ip-cardbg1': '#463529',
        'ip-cardbg2': '#b62835',
        'ip-cardbg3': '#968d84',
      }
    },
  },
  plugins: [],
}

