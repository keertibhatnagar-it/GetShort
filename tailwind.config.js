/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      color: {
        primary: "#1A3887",
        secondary: "#0B1736",
      },
      fontFamily: {
        "s-normal": ["Scandia Regular", "normal"],
        "s-medium": ["Scandia Medium", "medium"],
        "s-bold": ["Scandia Bold", "bold"],
      },
    },
  },
  plugins: [],
};
