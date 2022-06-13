/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        elephant: "#73d9d5",
        bear: "#99e3e4",
        lion: "#3c3053",
        tiger: "#232027",
        cat: "#eef1f6",
        mouse: "#613f77",
        ant: "#4b3662",
      },
      fontFamily: {
        paytoneOne: ["Paytone One"],
      },
      backgroundImage: {
        formBackground: "url('/src/assests/images/form-pattern.svg')",
      },
    },
  },
  plugins: [],
};
