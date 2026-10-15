import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light canvas
        bg: {
          DEFAULT: "#ffffff",
          deep: "#f7f5ff",
          panel: "rgba(10,10,20,0.025)",
          elevated: "rgba(10,10,20,0.04)",
          hover: "rgba(10,10,20,0.06)",
        },
        // Text — dark on light
        ink: {
          primary: "#0a0a14",
          secondary: "#3a3a52",
          tertiary: "#5a5a72",
          quaternary: "#8a8aa0",
        },
        // Brand gradient stops: violet → indigo → blue
        brand: {
          DEFAULT: "#7c3aed",
          violet: "#7c3aed",
          indigo: "#6366f1",
          blue: "#3b82f6",
          hover: "#8b5cf6",
        },
        success: "#22c55e",
      },
      fontFamily: {
        sans: [
          "var(--font-jakarta)",
          "var(--font-inter)",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        display: [
          "var(--font-jakarta)",
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],
      },
      height: {
        "13": "3.25rem",
        "18": "4.5rem",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        tightish: "-0.02em",
      },
      borderColor: {
        subtle: "rgba(10,10,20,0.05)",
        DEFAULT: "rgba(10,10,20,0.08)",
        strong: "rgba(10,10,20,0.14)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #7c3aed 0%, #6366f1 50%, #3b82f6 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(99,102,241,0.08) 50%, rgba(59,130,246,0.10) 100%)",
      },
      boxShadow: {
        soft: "0 1px 3px rgba(10,10,20,0.05), 0 4px 14px rgba(10,10,20,0.06)",
        elevated:
          "0 2px 8px rgba(10,10,20,0.06), 0 16px 40px rgba(10,10,20,0.08), 0 1px 0 rgba(255,255,255,0.4) inset",
        glow: "0 0 0 1px rgba(124,58,237,0.35), 0 8px 40px rgba(124,58,237,0.25)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.85" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 5s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
