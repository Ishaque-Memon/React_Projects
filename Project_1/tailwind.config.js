//  @type {import('tailwindcss').Config}
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // boxShadow: {
      //   glow: '0 0 15px rgba(255, 255, 255, 0.8), 0 0 25px rgba(255, 255, 255, 0.6)',
      // },      
      colors: {
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: "#101010",
      },
    },
  },
  plugins: [],
};