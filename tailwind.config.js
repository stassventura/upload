/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        main: "#0D1117",
        column: "#161C22",
      },
    },
  },
  plugins: [],
};
