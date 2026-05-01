import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        ink: {
          DEFAULT: "#f0f9ff",
          light:   "#bae6fd",
          muted:   "#7dd3fc",
        },
        ocean: {
          950:    "#031020",
          900:    "#051b33",
          800:    "#072544",
          700:    "#0a3358",
          600:    "#0e4a7a",
          border: "#0e3a5e",
        },
        accent: {
          DEFAULT: "#38bdf8",
          light:   "rgba(56,189,248,0.12)",
          dark:    "#0ea5e9",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
