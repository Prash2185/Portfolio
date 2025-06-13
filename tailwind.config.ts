
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6366F1", // Vibrant Indigo
          dark: "#1E1B4B",
        },
        accent: "#F59E0B", // Bright Amber
        secondary: "#EC4899", // Hot Pink
        tertiary: "#10B981", // Emerald Green
        bgGlass: "rgba(255,255,255,0.15)",
        bgGlassDark: "rgba(30,27,75,0.6)",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #6366F1 0%, #EC4899 50%, #F59E0B 100%)",
        "section-gradient":
          "linear-gradient(135deg, #F8FAFC 0%, #E0E7FF 50%, #FEF3C7 100%)",
        "section-gradient-dark":
          "linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #581C87 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(99, 102, 241, 0.15)",
        "glass-dark": "0 8px 32px 0 rgba(30, 27, 75, 0.3)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-right": {
          "0%": { transform: "translateX(-80px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s cubic-bezier(.45,1.6,.5,1) forwards",
        "slide-right": "slide-right 1.2s cubic-bezier(.45,1.6,.5,1) forwards",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
