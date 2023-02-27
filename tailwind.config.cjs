/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
            {
              mytheme: {
              
                  "primary": "#efbc53",
                          
                  "secondary": "#084c3d",
                          
                  "accent": "#d05a68",
                          
                  "neutral": "#faecd4",
                          
                  "base-100": "#FFFFFF",
                          
                  "info": "#3ABFF8",
                          
                  "success": "#36D399",
                          
                  "warning": "#FBBD23",
                          
                  "error": "#F87272",
                },
            },
          ],
  },
}
