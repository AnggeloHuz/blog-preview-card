/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Yellow": "hsl(47, 88%, 63%)",
        "White": "hsl(0, 0%, 100%)",
        "Gray-500": "hsl(0, 0%, 42%)",
        "Gray-950": "hsl(0, 0%, 7%)",
      },
      fontFamily: {
        "Figtree": ["Figtree", "sans-serif"]
      }
    },
  },
  plugins: [],
};

