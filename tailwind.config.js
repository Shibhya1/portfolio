/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        cinzel: ["var(--font-cinzel)", "serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        bg: "#0b0b0b",
        surface: "#111111",
        border: "#1f1f1f",
        accent: "#e8d5a3",
        accent2: "#7eb8a4",
        text: "#e8e5df",
        muted: "#6b6860",
      },
    },
  },
  plugins: [],
};