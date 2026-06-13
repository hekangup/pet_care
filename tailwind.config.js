/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17201d",
        muted: "#66716c",
        paper: "#fbfaf6",
        mint: "#d9efe5",
        teal: "#1d7b73",
        coral: "#ef735d",
        gold: "#f4bd55",
        line: "#d9ded8",
      },
      boxShadow: {
        soft: "0 22px 60px rgba(26, 46, 41, .14)",
        card: "0 10px 34px rgba(27, 44, 39, .07)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "\"Segoe UI\"",
          "\"PingFang SC\"",
          "\"Microsoft YaHei\"",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
