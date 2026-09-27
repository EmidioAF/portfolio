/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#000000",
        panel: "#111111",
        panel2: "#1a1a1a",
        line: "#9a9a9a",
        dim: "#7d7d7d",
      },
    },
  },
  plugins: [],
}
