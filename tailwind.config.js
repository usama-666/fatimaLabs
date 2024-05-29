/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "san-serif"],
        dmSans: ["DM Sans", "san-serif"],
        mono: ["Fira Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
