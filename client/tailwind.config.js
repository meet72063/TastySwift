/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F15700",
        secondary: "#02060C",
        heading: "#161A1F",

        gray: {
          50: "F0F0F5",
          100: "#F0F0F5",
        },
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
