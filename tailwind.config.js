/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Red: "hsl(0, 100%, 66%)",
        Violet: "hsl(249, 99%, 64%)",
        LightGrayViolet: "hsl(270, 3%, 87%)",
        DarkGrayViolet: "hsl(279, 6%, 55%)",
        DarkerViolet: " hsl(278, 68%, 11%)",
        White: "hsl(0, 0%, 100%)",
        attribution: "hsl(228, 45%, 44%)",
      },
      textColor: {
        DarkerViolet: " hsl(278, 68%, 11%)",
        Red: "hsl(0, 100%, 66%)",
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        SpaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
