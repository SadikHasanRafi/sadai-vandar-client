/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        sadaiVandar: {
          "primary": "#00BA88",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],

}

