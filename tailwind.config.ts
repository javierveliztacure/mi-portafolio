import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: "#faf9f6",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f4f3f0",
        "surface-container": "#efeeeb",
        "surface-container-high": "#e9e8e5",
        "surface-container-highest": "#e3e2df",
        "surface-dim": "#dbdad7",
        "on-surface": "#1a1c1a",
        "on-surface-variant": "#444748",
        outline: "#747878",
        "outline-variant": "#c4c7c7",
        primary: "#000000",
        "on-primary": "#ffffff",
        "accent-lime": "#ccff00",
        "accent-lime-dark": "#394d00",
        "secondary-container": "#ccff00",
        "on-secondary-container": "#151f00",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
