/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        "ea-gray": "hsl(0, 0%, 14%)",
        "ea-green": "hsl(108, 82%, 42%)",
        "ea-green-light": "hsl(108, 83%, 69%)",
        "ea-error": "hsl(338, 100%, 50%)",
        "ea-orange": "hsl(25, 100%, 50%)",
        "ea-purple": "hsl(256, 100%, 59%)",
        "ea-gradient-light-start": "hsl(0, 1%, 28%)",
        "ea-gradient-light-end": "hsl(0, 0%, 100%)",
        "ea-gradient-dark-start": "hsl(0, 0%, 7%)",
        "ea-gradient-dark-via": "hsl(0, 0%, 7%)",
        "ea-gradient-dark-end": "hsl(0, 0%, 12%)",
      },
      boxShadow: {
        btn: "rgb(20, 20, 20) -5px -5px 0 0, rgb(54,195,19) -5px -5px 0 1px;",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
        barlow: ["Barlow", "sans-serif"],
      },
      fontSize: {
        dynamic: "calc(1.4em + 3vw)",
      },
      keyframes: {
        fadein: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        fadein: "fadein 1s 1 ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
