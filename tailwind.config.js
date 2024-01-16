export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#454722",
        "light-primary": "#696935",
        "white-primary": "#eef2b3",
        // "white-primary": "#FFEED2",
        // "light-primary-ALT": "#9D9C63",
      },

      fontFamily: {
        lucida: ["Lucida", "sans-serif"],
        roxborough: ["Roxborough CF", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
