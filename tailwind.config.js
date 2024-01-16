export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // !
        // "dark-primary": "#454722",
        // "light-primary": "#696935",
        // "white-primary": "#eef2b3",
        // !
        // "white-primary": "#FFEED2",
        // "light-primary-ALT": "#9D9C63",
        
        "peepal-900": "#454722",
        "peepal-800": "#718355",
        "peepal-700": "#87986A",
        "peepal-600": "#97A97C",
        "peepal-500": "#B5C99A",
        "peepal-400": "#CFE1B9",
        "peepal-300": "#E9F5DB",
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
