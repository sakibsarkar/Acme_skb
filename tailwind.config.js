/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_dark: "#171717",
        primary_darker: "#09090B",
        nav_link: "#09090b99",
        lightDark: "#4B5563",

        // border color
        primaryBorder: "#EBEBEB",
      },
    },
  },
  plugins: [],
};
