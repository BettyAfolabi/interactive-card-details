/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('./bg-main-desktop.png')",
        cardfront: "url('./bg-card-front.png')",
      },
    },
  },
  plugins: [],
};
