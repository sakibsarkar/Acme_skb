/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
   "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark_bg: "#171717",
        darker_bg: "#09090B",
      },
    },
  },
  plugins: [],
};
