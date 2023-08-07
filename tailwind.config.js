/** @type {import('tailwindcss').Config} */

module.exports = {

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],

  theme: {

    extend: {

      fontFamily: {
        Metamorphous: ["Metamorphous","cursive"],
        Jost: ["Jost", "sans-serif"],
      },


    },
  },


  plugins: [],
};

