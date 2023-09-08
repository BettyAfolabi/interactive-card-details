/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        main: "url('src/assets/images/bg-main-desktop.png')",
        cardfront: "url('src/assets/images/bg-card-front.png')",
      },
    },
  },
  plugins: [],
};
