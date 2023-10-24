/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        main: '#eaebec',
        placeholder: '#dfdfdf',
        column: '#161C22',
        border: '#dcdcdc',
        fileCard: '#ddd6d6',
        modalBg: '#f9f9f9',
        green: '#87d534',
        hover_green: '#68a329',
        font: '#49494A',
        blue: '#009EE2',
        hover_blue: '#1c8fc0',
      },
    },
  },
  plugins: [],
};
