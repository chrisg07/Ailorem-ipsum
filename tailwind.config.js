/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#795548",
          "secondary": "8D6E63",
          "accent": "#BCAAA4",
          "neutral": "#E0E0E0",
          "base-100": "#e5e7eb",
          "info": "#4E342E",
          "success": "#33691E",
          "warning": "#FF6F00",
          "error": "#B71C1C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}