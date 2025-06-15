/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./app/index.tsx", "./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        app_orange_color:"#C67C4E",
      },
    },
  },
  plugins: [],
}

