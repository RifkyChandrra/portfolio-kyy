/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef8ff",
          100: "#d9f1ff",
          500: "#0ea5e9",
          700: "#0369a1",
        },
      },
    },
  },
  plugins: [],
};
