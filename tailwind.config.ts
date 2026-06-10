import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/sections/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0a0b",
          950: "#070708",
          900: "#0c0c0e",
          800: "#141417",
          700: "#1c1c20",
          600: "#26262b",
        },
        cream: {
          DEFAULT: "#f4f0e8",
          100: "#faf8f3",
          200: "#efe9dc",
          300: "#e2d9c5",
        },
        gold: {
          DEFAULT: "#d4a843",
          light: "#e8c878",
          dark: "#a37f29",
        },
        accent: {
          DEFAULT: "#c9f31d",
          soft: "#a8d514",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      letterSpacing: {
        tightest: "-0.06em",
        ultratight: "-0.04em",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(212,168,67,0.45)",
        "glow-accent": "0 0 90px -20px rgba(201,243,29,0.4)",
        card: "0 30px 60px -25px rgba(0,0,0,0.7)",
        "inner-glow": "inset 0 1px 0 0 rgba(255,255,255,0.06)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        marquee: "marquee var(--marquee-duration,40s) linear infinite",
        "marquee-reverse": "marquee-reverse var(--marquee-duration,40s) linear infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
