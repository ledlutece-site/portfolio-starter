import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif', 'system-ui', 'Inter', 'sans-serif'],
        body: ['ui-sans-serif', 'system-ui', 'Inter', 'sans-serif'],
      },
      colors: {
        base: {
          DEFAULT: "#0b0b0b",
          50: "#141414",
          100: "#1b1b1b",
          200: "#232323",
          300: "#2b2b2b",
          400: "#333333",
          500: "#3b3b3b",
        },
        accent: {
          DEFAULT: "#E5FF6B"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.15)"
      },
      borderRadius: {
        "2xl": "1.25rem"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        marquee: "marquee 20s linear infinite"
      }
    },
  },
  plugins: [],
};
export default config;
