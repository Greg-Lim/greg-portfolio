/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        // Adding 'xs' at 480px or 375px (depending on your preference)
        xs: "320px",
      },
    },
  },
  plugins: [],
};
